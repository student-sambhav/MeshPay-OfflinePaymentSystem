package com.sambhav.meshPay.payment.forwarding;

import com.sambhav.meshPay.crypto.aes.AESUtil;
import com.sambhav.meshPay.crypto.rsa.RSAKeyStore;
import com.sambhav.meshPay.crypto.rsa.RSAUtil;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.payment.entity.PaymentPacket;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import com.sambhav.meshPay.payment.repository.PaymentPacketRepository;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;

@Service
@RequiredArgsConstructor
public class PacketForwardingServiceImpl
        implements PacketForwardingService {

    private final PaymentPacketRepository paymentRepository;
    private final UserRepository userRepository;
    private final DeviceRepository deviceRepository;
    @Transactional
    @Override
    public void forwardPacket(PaymentPacket packet) {

        try {

            packet.setStatus(PacketStatus.IN_TRANSIT);
            paymentRepository.save(packet);

            while (packet.getCurrentHop() < packet.getRoute().size()) {

                String currentDevice = packet.getRoute().get(packet.getCurrentHop());

                Device device = deviceRepository
                        .findByDeviceId(currentDevice)
                        .orElseThrow(() ->
                                new RuntimeException("Device not found"));

                // ==========================
                // OFFLINE QUEUE
                // ==========================

                if (!device.isOnline()) {

                    System.out.println(
                            "Device "
                                    + device.getDeviceName()
                                    + " is OFFLINE. Packet queued."
                    );

                    packet.setStatus(PacketStatus.QUEUED);
                    paymentRepository.save(packet);

                    return;
                }

                // ==========================

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

            // ==========================
            // VERIFY SIGNATURE
            // ==========================

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

            // ==========================
            // AES DECRYPTION
            // ==========================

            SecretKey aesKey =
                    AESUtil.decodeKey(packet.getAesKey());

            String originalPayload =
                    AESUtil.decrypt(
                            packet.getEncryptedPayload(),
                            aesKey
                    );

            System.out.println("\nDecrypted Payload:");
            System.out.println(originalPayload);

            // ==========================
// SETTLEMENT
// ==========================

// Reload sender and receiver devices inside the current transaction
            Device senderDevice = deviceRepository
                    .findByDeviceId(packet.getSender().getDeviceId())
                    .orElseThrow(() -> new RuntimeException("Sender device not found"));

            Device receiverDevice = deviceRepository
                    .findByDeviceId(packet.getReceiver().getDeviceId())
                    .orElseThrow(() -> new RuntimeException("Receiver device not found"));

// Get owners
            User sender = senderDevice.getOwner();
            User receiver = receiverDevice.getOwner();

// Update balances
            sender.setBalance(
                    sender.getBalance().subtract(packet.getAmount())
            );

            receiver.setBalance(
                    receiver.getBalance().add(packet.getAmount())
            );

// Save updated users
            userRepository.save(sender);
            userRepository.save(receiver);

            System.out.println("\nSettlement Completed");
            System.out.println(sender.getName()
                    + " Balance : "
                    + sender.getBalance());

            System.out.println(receiver.getName()
                    + " Balance : "
                    + receiver.getBalance());

            System.out.println("\nSettlement Completed");
            System.out.println(sender.getName()
                    + " Balance : "
                    + sender.getBalance());

            System.out.println(receiver.getName()
                    + " Balance : "
                    + receiver.getBalance());

            packet.setStatus(PacketStatus.DELIVERED);

            paymentRepository.save(packet);

        } catch (Exception e) {

            e.printStackTrace();

            packet.setStatus(PacketStatus.FAILED);
            paymentRepository.save(packet);
        }
    }
}