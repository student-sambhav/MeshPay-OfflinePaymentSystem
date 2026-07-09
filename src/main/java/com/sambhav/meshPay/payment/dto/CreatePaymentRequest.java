package com.sambhav.meshPay.payment.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CreatePaymentRequest {

    @NotBlank
    private String senderDeviceId;

    @NotBlank
    private String receiverDeviceId;

    @NotNull
    @DecimalMin("1.0")
    private BigDecimal amount;
}