package com.sambhav.meshPay.payment.controller;

import com.sambhav.meshPay.payment.dto.CreatePaymentRequest;
import com.sambhav.meshPay.payment.dto.PaymentResponse;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public PaymentResponse createPayment(
            @RequestBody CreatePaymentRequest request) {

        return paymentService.createPayment(request);
    }
}