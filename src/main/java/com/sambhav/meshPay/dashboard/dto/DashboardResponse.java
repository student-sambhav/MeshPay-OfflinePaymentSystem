package com.sambhav.meshPay.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponse {

    private BigDecimal walletBalance;

    private Long totalDevices;

    private Long onlineDevices;

    private Long offlineDevices;

    private Long bridgeNodes;

    private Long deliveredPackets;

    private Long queuedPackets;

    private Double packetSuccessRate;

    private Double averageLatency;

    private List<RecentTransactionDTO> recentTransactions;

    private List<ActivityDTO> activities;

    private List<WeeklyPaymentDTO> weeklyPayments;
}