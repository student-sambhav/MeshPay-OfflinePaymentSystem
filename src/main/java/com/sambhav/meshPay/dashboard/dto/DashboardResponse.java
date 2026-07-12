package com.sambhav.meshPay.dashboard.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class DashboardResponse {

    @Data
    @Builder
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
}