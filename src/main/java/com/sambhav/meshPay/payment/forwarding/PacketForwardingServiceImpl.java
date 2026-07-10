package com.sambhav.meshPay.payment.forwarding;

import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PacketForwardingServiceImpl
        implements PacketForwardingService {

    private final PaymentPacketRepository paymentRepository;

    @Override
    public void forwardPacket(PaymentPacket packet) {

        packet.setStatus(PacketStatus.IN_TRANSIT);
        paymentRepository.save(packet);

        while (packet.getCurrentHop() < packet.getRoute().size()) {

            String currentDevice = packet.getRoute().get(packet.getCurrentHop());

            System.out.println(
                    "Packet "
                            + packet.getPacketId()
                            + " reached "
                            + currentDevice
            );

            packet.setTtl(packet.getTtl() - 1);

            if (packet.getTtl() <= 0) {

                packet.setStatus(PacketStatus.EXPIRED);
                paymentRepository.save(packet);

                return;
            }

            packet.setCurrentHop(packet.getCurrentHop() + 1);

            paymentRepository.save(packet);
        }

        packet.setStatus(PacketStatus.DELIVERED);

        paymentRepository.save(packet);
    }
}