package com.sambhav.meshPay.payment.dto;

import com.sambhav.meshPay.payment.enums.PacketStatus;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class TransactionResponse {

    private String packetId;

    private String senderDeviceId;

    private String receiverDeviceId;

    private BigDecimal amount;

    private PacketStatus status;

    private LocalDateTime createdAt;
}