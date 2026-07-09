package com.sambhav.meshPay.device.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class DeviceRegistrationRequest {

    @NotBlank(message = "Device name is required")
    private String deviceName;

    private boolean bridgeNode;

}