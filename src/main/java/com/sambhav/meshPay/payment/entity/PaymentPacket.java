package com.sambhav.meshPay.payment.entity;

import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.payment.enums.PacketStatus;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "payment_packets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentPacket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String packetId;

    @ManyToOne
    @JoinColumn(name = "sender_device_id")
    private Device sender;

    @ManyToOne
    @JoinColumn(name = "receiver_device_id")
    private Device receiver;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    private Integer ttl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PacketStatus status;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Lob
    private String digitalSignature;

    @Lob
    private String encryptedPayload;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "packet_route",
            joinColumns = @JoinColumn(name = "packet_id")
    )
    @Column(name = "device_id")
    private List<String> route;
    @Column(nullable = false)
    private Integer currentHop;
}