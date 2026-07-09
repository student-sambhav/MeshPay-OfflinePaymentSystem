package com.sambhav.meshPay.mesh.entity;

import com.sambhav.meshPay.device.entity.Device;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "mesh_connections")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MeshConnection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "source_device_id")
    private Device sourceDevice;

    @ManyToOne
    @JoinColumn(name = "target_device_id")
    private Device targetDevice;

    private Integer signalStrength;

    private boolean active;
}
