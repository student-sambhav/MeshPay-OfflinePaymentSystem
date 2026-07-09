package com.sambhav.meshPay.mesh.algorithm;

import com.sambhav.meshPay.device.entity.Device;

import java.util.List;

public interface RoutingEngine {

    List<Device> findShortestPath(Device source, Device destination);

}