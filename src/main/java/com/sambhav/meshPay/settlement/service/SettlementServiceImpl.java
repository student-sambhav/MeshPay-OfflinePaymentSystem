package com.sambhav.meshPay.settlement.service;

import com.sambhav.meshPay.common.exception.ResourceAlreadyExistsException;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import com.sambhav.meshPay.settlement.entity.Settlement;
import com.sambhav.meshPay.settlement.repository.SettlementRepository;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional
public class SettlementServiceImpl implements SettlementService {

    private final SettlementRepository settlementRepository;
    private final PaymentPacketRepository paymentPacketRepository;
    private final UserRepository userRepository;

    @Override
    public void settle(PaymentPacket packet) {

        if (settlementRepository.findByPaymentPacket(packet).isPresent()) {
            throw new ResourceAlreadyExistsException("Packet already settled");
        }

        User sender = packet.getSender().getOwner();
        User receiver = packet.getReceiver().getOwner();

        sender.setBalance(
                sender.getBalance().subtract(packet.getAmount()));

        receiver.setBalance(
                receiver.getBalance().add(packet.getAmount()));

        userRepository.save(sender);
        userRepository.save(receiver);

        packet.setStatus(PacketStatus.SETTLED);
        paymentPacketRepository.save(packet);

        Settlement settlement = Settlement.builder()
                .paymentPacket(packet)
                .successful(true)
                .settledAt(LocalDateTime.now())
                .build();

        settlementRepository.save(settlement);
    }
}