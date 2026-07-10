package com.sambhav.meshPay.settlement.repository;

import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.settlement.entity.Settlement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SettlementRepository
        extends JpaRepository<Settlement, Long> {

    Optional<Settlement> findByPaymentPacket(PaymentPacket paymentPacket);

}