package com.sambhav.meshPay.payment.service;

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

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final DeviceRepository deviceRepository;
    private final PaymentPacketRepository paymentRepository;
    private final RoutingEngine routingEngine;
    private final PacketForwardingService packetForwardingService;

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

        List<String> route = new java.util.ArrayList<>(
                path.stream()
                        .map(Device::getDeviceId)
                        .toList()
        );

        // Create packet
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
                .build();

        // Save packet
        PaymentPacket savedPacket = paymentRepository.save(packet);

        // Start forwarding
        packetForwardingService.forwardPacket(savedPacket);

        // Return response
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