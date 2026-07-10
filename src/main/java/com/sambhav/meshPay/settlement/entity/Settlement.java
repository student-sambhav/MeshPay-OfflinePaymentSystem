package com.sambhav.meshPay.settlement.entity;

import com.sambhav.meshPay.payment.entity.PaymentPacket;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "settlements")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Settlement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private PaymentPacket paymentPacket;

    private boolean successful;

    private LocalDateTime settledAt;

}