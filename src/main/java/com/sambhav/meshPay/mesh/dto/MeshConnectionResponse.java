package com.sambhav.meshPay.mesh.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MeshConnectionResponse {

    private Long id;
    private String sourceDeviceId;
    private String targetDeviceId;
    private Integer signalStrength;
    private boolean active;
}