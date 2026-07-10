package com.sambhav.meshPay.payment.forwarding;

import com.sambhav.meshPay.crypto.rsa.RSAKeyStore;
import com.sambhav.meshPay.crypto.rsa.RSAUtil;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import lombok.RequiredArgsConstructor;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import com.sambhav.meshPay.crypto.aes.AESUtil;

import javax.crypto.SecretKey;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PacketForwardingServiceImpl
        implements PacketForwardingService {

    private final PaymentPacketRepository paymentRepository;
    private final UserRepository userRepository;


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
        boolean valid = RSAUtil.verify(
                packet.getEncryptedPayload(),
                packet.getDigitalSignature(),
                RSAKeyStore.getKeyPair().getPublic()
        );

        if (!valid) {
            packet.setStatus(PacketStatus.FAILED);
            paymentRepository.save(packet);
            return;
        }
        System.out.println("RSA Signature Verified Successfully.");
        SecretKey aesKey = AESUtil.decodeKey(packet.getAesKey());

        String originalPayload = AESUtil.decrypt(
                packet.getEncryptedPayload(),
                aesKey
        );

        System.out.println("\nDecrypted Payload:");
        System.out.println(originalPayload);
        User sender = packet.getSender().getOwner();
        User receiver = packet.getReceiver().getOwner();
        sender.setBalance(
                sender.getBalance().subtract(packet.getAmount())
        );

        receiver.setBalance(
                receiver.getBalance().add(packet.getAmount())
        );

        userRepository.save(sender);
        userRepository.save(receiver);

        System.out.println("\nSettlement Completed");
        System.out.println(sender.getName() + " Balance : " + sender.getBalance());
        System.out.println(receiver.getName() + " Balance : " + receiver.getBalance());
        packet.setStatus(PacketStatus.DELIVERED);

        paymentRepository.save(packet);
    }
}