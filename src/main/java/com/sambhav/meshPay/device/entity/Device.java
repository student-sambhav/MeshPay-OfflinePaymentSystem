package com.sambhav.meshPay.device.entity;

import com.sambhav.meshPay.user.entity.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "devices")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Device {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String deviceId;

    @Column(nullable = false)
    private String deviceName;

    @Column(nullable = false)
    private boolean online;

    @Column(nullable = false)
    private boolean bridgeNode;

    @Column(nullable = false)
    private Integer batteryLevel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User owner;
}