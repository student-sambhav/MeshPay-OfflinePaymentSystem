package com.sambhav.meshPay.mesh.service;

import com.sambhav.meshPay.mesh.dto.ConnectDeviceRequest;
import com.sambhav.meshPay.mesh.dto.MeshConnectionResponse;
import com.sambhav.meshPay.mesh.dto.RouteRequest;
import com.sambhav.meshPay.mesh.entity.MeshConnection;

import java.util.List;

public interface MeshService {

    MeshConnectionResponse connectDevices(ConnectDeviceRequest request);
    List<String> findRoute(RouteRequest request);
    List<MeshConnectionResponse> getConnections();

}