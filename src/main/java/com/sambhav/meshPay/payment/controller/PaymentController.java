package com.sambhav.meshPay.payment.controller;

import com.sambhav.meshPay.payment.dto.CreatePaymentRequest;
import com.sambhav.meshPay.payment.dto.PaymentResponse;
import com.sambhav.meshPay.payment.dto.TransactionResponse;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/history/{deviceId}")
    public ResponseEntity<List<TransactionResponse>> history(
            @PathVariable String deviceId) {

        return ResponseEntity.ok(
                paymentService.getTransactionHistory(deviceId)
        );
    }
}