package com.sambhav.meshPay.payment.dto;

import com.sambhav.meshPay.payment.enums.PacketStatus;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
public class PaymentResponse {

    private String packetId;
    private String senderDeviceId;
    private String receiverDeviceId;
    private BigDecimal amount;
    private PacketStatus status;
    private List<String> route;
}