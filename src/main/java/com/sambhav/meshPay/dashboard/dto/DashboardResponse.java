package com.sambhav.meshPay.dashboard.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class DashboardResponse {

    private BigDecimal walletBalance;

    private Long deviceCount;

    private Long deliveredPackets;

    private Long queuedPackets;
}