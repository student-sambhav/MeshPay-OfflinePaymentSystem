package com.sambhav.meshPay.mesh.service;

import com.sambhav.meshPay.mesh.dto.ConnectDeviceRequest;
import com.sambhav.meshPay.mesh.entity.MeshConnection;

public interface MeshService {

    MeshConnection connectDevices(ConnectDeviceRequest request);

}