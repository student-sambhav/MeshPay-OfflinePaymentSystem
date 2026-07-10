package com.sambhav.meshPay.mesh.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class RouteRequest {

    private String sourceDeviceId;
    private String destinationDeviceId;
}