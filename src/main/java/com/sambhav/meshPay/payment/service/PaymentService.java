package com.sambhav.meshPay.payment.service;

import com.sambhav.meshPay.payment.dto.CreatePaymentRequest;
import com.sambhav.meshPay.payment.entity.PaymentPacket;

public interface PaymentService {

    PaymentPacket createPayment(CreatePaymentRequest request);

}