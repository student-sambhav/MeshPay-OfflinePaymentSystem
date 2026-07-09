package com.sambhav.meshPay.payment.service;

import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.mesh.algorithm.RoutingEngine;
import com.sambhav.meshPay.payment.dto.CreatePaymentRequest;
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
    public PaymentPacket createPayment(CreatePaymentRequest request) {

        Device sender = deviceRepository.findByDeviceId(request.getSenderDeviceId())
                .orElseThrow(() -> new RuntimeException("Sender device not found"));

        Device receiver = deviceRepository.findByDeviceId(request.getReceiverDeviceId())
                .orElseThrow(() -> new RuntimeException("Receiver device not found"));

        List<Device> path = routingEngine.findShortestPath(sender, receiver);

        if (path.isEmpty()) {
            throw new RuntimeException("No route found between devices");
        }

        PaymentPacket packet = PaymentPacket.builder()
                .packetId(UUID.randomUUID().toString())
                .sender(sender)
                .receiver(receiver)
                .amount(request.getAmount())
                .ttl(10)
                .status(PacketStatus.CREATED)
                .createdAt(LocalDateTime.now())
                .build();

        PaymentPacket savedPacket = paymentRepository.save(packet);

        packetForwardingService.forwardPacket(savedPacket);

        return savedPacket;

    }
}
