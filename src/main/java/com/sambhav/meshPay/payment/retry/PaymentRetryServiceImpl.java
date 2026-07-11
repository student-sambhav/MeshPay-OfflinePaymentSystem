package com.sambhav.meshPay.payment.retry;

import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.forwarding.PacketForwardingService;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentRetryServiceImpl
        implements PaymentRetryService {

    private final PaymentPacketRepository paymentRepository;
    private final PacketForwardingService forwardingService;
    private final DeviceRepository deviceRepository;

    @Override
    @Scheduled(fixedDelay = 5000)
    public void retryQueuedPayments() {

        List<PaymentPacket> queuedPackets =
                paymentRepository.findByStatus(PacketStatus.QUEUED);

        System.out.println("\n==============================");
        System.out.println("Queued Packets : " + queuedPackets.size());
        System.out.println("==============================");

        for (PaymentPacket packet : queuedPackets) {

            Device receiver = deviceRepository
                    .findByDeviceId(packet.getReceiver().getDeviceId())
                    .orElseThrow(() ->
                            new RuntimeException("Receiver device not found"));

            System.out.println(
                    "Receiver : "
                            + receiver.getDeviceName()
                            + " | Online : "
                            + receiver.isOnline()
            );

            if (receiver.isOnline()) {

                System.out.println(
                        "Retrying Packet : "
                                + packet.getPacketId()
                );

                forwardingService.forwardPacket(packet);
            }
            else {

                System.out.println(
                        "Receiver still offline. Waiting..."
                );
            }
        }
    }
}