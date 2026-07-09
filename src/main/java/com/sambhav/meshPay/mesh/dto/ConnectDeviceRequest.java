package com.sambhav.meshPay.mesh.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ConnectDeviceRequest {

    @NotBlank
    private String sourceDeviceId;

    @NotBlank
    private String targetDeviceId;

    @Min(1)
    @Max(100)
    private Integer signalStrength;

}