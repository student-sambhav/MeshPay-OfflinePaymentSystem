package com.sambhav.meshPay.payment.service;

import com.sambhav.meshPay.payment.dto.CreatePaymentRequest;
import com.sambhav.meshPay.payment.dto.PaymentResponse;
import com.sambhav.meshPay.payment.dto.TransactionResponse;
import com.sambhav.meshPay.payment.entity.PaymentPacket;

import java.util.List;

public interface PaymentService {

    PaymentResponse createPayment(CreatePaymentRequest request);
    List<TransactionResponse> getTransactionHistory(String deviceId);

}