package com.sambhav.meshPay.payment.repository;

import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PaymentPacketRepository
        extends JpaRepository<PaymentPacket, Long> {

    Optional<PaymentPacket> findByPacketId(String packetId);

    List<PaymentPacket> findByStatus(PacketStatus status);
    Optional<PaymentPacket> findByIdempotencyKey(String key);
    List<PaymentPacket> findBySender_DeviceIdOrReceiver_DeviceId(
            String senderDeviceId,
            String receiverDeviceId
    );
    long countByStatus(PacketStatus status);

    List<PaymentPacket> findTop5ByOrderByCreatedAtDesc();

}