package com.sambhav.meshPay.payment.forwarding;

import com.sambhav.meshPay.payment.entity.PaymentPacket;

public interface PacketForwardingService {

    void forwardPacket(PaymentPacket packet);

}