package com.sambhav.meshPay.settlement.service;

import com.sambhav.meshPay.payment.entity.PaymentPacket;

public interface SettlementService {

    void settle(PaymentPacket packet);

}
