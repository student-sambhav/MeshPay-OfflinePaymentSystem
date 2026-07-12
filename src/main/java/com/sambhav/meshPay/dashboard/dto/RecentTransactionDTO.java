package com.sambhav.meshPay.dashboard.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class RecentTransactionDTO {

    private String packetId;

    private String senderDevice;

    private String receiverDevice;

    private BigDecimal amount;

    private String status;

    private LocalDateTime createdAt;
}