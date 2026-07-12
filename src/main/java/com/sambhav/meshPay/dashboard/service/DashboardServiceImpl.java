package com.sambhav.meshPay.dashboard.service;

import com.sambhav.meshPay.dashboard.dto.DashboardResponse;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;
    private final DeviceRepository deviceRepository;
    private final PaymentPacketRepository paymentPacketRepository;

    @Override
    public DashboardResponse getDashboard(String phoneNumber) {

        User user = userRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new RuntimeException("User not found"));

        long totalDevices = deviceRepository.count();

        long onlineDevices = deviceRepository.countByOnlineTrue();

        long offlineDevices = deviceRepository.countByOnlineFalse();

        long bridgeNodes = deviceRepository.countByBridgeNodeTrue();

        long delivered =
                paymentPacketRepository.countByStatus(PacketStatus.DELIVERED);

        long queued =
                paymentPacketRepository.countByStatus(PacketStatus.QUEUED);

        long totalPackets =
                paymentPacketRepository.count();

        double successRate =
                totalPackets == 0
                        ? 0
                        : (delivered * 100.0) / totalPackets;

        return DashboardResponse.builder()
                .walletBalance(user.getBalance())
                .totalDevices(totalDevices)
                .onlineDevices(onlineDevices)
                .offlineDevices(offlineDevices)
                .bridgeNodes(bridgeNodes)
                .deliveredPackets(delivered)
                .queuedPackets(queued)
                .packetSuccessRate(successRate)
                .averageLatency(0.0)
                .recentTransactions(List.of())
                .activities(List.of())
                .weeklyPayments(List.of())
                .build();
    }
}