package com.sambhav.meshPay.payment.forwarding;

import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.mesh.algorithm.RoutingEngine;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PacketForwardingServiceImpl
        implements PacketForwardingService {

    private final RoutingEngine routingEngine;
    private final PaymentPacketRepository paymentRepository;

    @Override
    public void forwardPacket(PaymentPacket packet) {

        List<Device> path =
                routingEngine.findShortestPath(
                        packet.getSender(),
                        packet.getReceiver());

        if (path.isEmpty()) {
            packet.setStatus(PacketStatus.FAILED);
            paymentRepository.save(packet);
            return;
        }

        packet.setStatus(PacketStatus.IN_TRANSIT);

        paymentRepository.save(packet);

        for (Device device : path) {

            System.out.println(
                    "Packet "
                            + packet.getPacketId()
                            + " reached "
                            + device.getDeviceName());

            packet.setTtl(packet.getTtl() - 1);

            if (packet.getTtl() <= 0) {

                packet.setStatus(PacketStatus.EXPIRED);

                paymentRepository.save(packet);

                return;
            }

        }

        packet.setStatus(PacketStatus.DELIVERED);

        paymentRepository.save(packet);

    }

}