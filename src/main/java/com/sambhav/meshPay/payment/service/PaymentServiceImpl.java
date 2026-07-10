package com.sambhav.meshPay.payment.service;

import com.sambhav.meshPay.crypto.aes.AESUtil;
import com.sambhav.meshPay.crypto.rsa.RSAKeyStore;
import com.sambhav.meshPay.crypto.rsa.RSAUtil;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.mesh.algorithm.RoutingEngine;
import com.sambhav.meshPay.payment.dto.CreatePaymentRequest;
import com.sambhav.meshPay.payment.dto.PaymentResponse;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.forwarding.PacketForwardingService;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.KeyPair;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final DeviceRepository deviceRepository;
    private final PaymentPacketRepository paymentRepository;
    private final RoutingEngine routingEngine;
    private final PacketForwardingService packetForwardingService;

    private final KeyPair keyPair = RSAKeyStore.getKeyPair();

    @Override
    public PaymentResponse createPayment(CreatePaymentRequest request) {

        // Find sender
        Device sender = deviceRepository.findByDeviceId(request.getSenderDeviceId())
                .orElseThrow(() -> new RuntimeException("Sender device not found"));

        // Find receiver
        Device receiver = deviceRepository.findByDeviceId(request.getReceiverDeviceId())
                .orElseThrow(() -> new RuntimeException("Receiver device not found"));

        // Find shortest path using BFS
        List<Device> path = routingEngine.findShortestPath(sender, receiver);

        if (path.isEmpty()) {
            throw new RuntimeException("No route found between devices");
        }

        // Convert route to deviceIds
        List<String> route = new ArrayList<>(
                path.stream()
                        .map(Device::getDeviceId)
                        .toList()
        );

        // ==========================
        // CREATE PAYLOAD
        // ==========================

        String payload = """
                {
                    "sender":"%s",
                    "receiver":"%s",
                    "amount":%s
                }
                """.formatted(
                sender.getDeviceId(),
                receiver.getDeviceId(),
                request.getAmount()
        );

        // AES ENCRYPTION

        SecretKey aesKey = AESUtil.generateKey();

        String encryptedPayload = AESUtil.encrypt(payload, aesKey);
        String encodedKey = AESUtil.encodeKey(aesKey);

        // RSA SIGNATURE

        String digitalSignature = RSAUtil.sign(
                encryptedPayload,
                keyPair.getPrivate()
        );

        // ==========================
        // DEBUG
        // ==========================

        System.out.println("Original Payload:");
        System.out.println(payload);

        System.out.println("\nEncrypted Payload:");
        System.out.println(encryptedPayload);

        System.out.println("\nDigital Signature:");
        System.out.println(digitalSignature);

        // ==========================

        PaymentPacket packet = PaymentPacket.builder()
                .packetId(UUID.randomUUID().toString())
                .sender(sender)
                .receiver(receiver)
                .amount(request.getAmount())
                .ttl(10)
                .status(PacketStatus.CREATED)
                .createdAt(LocalDateTime.now())
                .currentHop(0)
                .route(route)
                .encryptedPayload(encryptedPayload)
                .aesKey(encodedKey)
                .digitalSignature(digitalSignature)
                .build();

        PaymentPacket savedPacket = paymentRepository.save(packet);

        packetForwardingService.forwardPacket(savedPacket);

        return PaymentResponse.builder()
                .packetId(savedPacket.getPacketId())
                .senderDeviceId(savedPacket.getSender().getDeviceId())
                .receiverDeviceId(savedPacket.getReceiver().getDeviceId())
                .amount(savedPacket.getAmount())
                .status(savedPacket.getStatus())
                .route(savedPacket.getRoute())
                .build();
    }
}