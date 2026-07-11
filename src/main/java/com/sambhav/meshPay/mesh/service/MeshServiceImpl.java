package com.sambhav.meshPay.mesh.service;

import com.sambhav.meshPay.common.exception.ResourceAlreadyExistsException;
import com.sambhav.meshPay.common.exception.ResourceNotFoundException;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.mesh.algorithm.RoutingEngine;
import com.sambhav.meshPay.mesh.dto.ConnectDeviceRequest;
import com.sambhav.meshPay.mesh.dto.MeshConnectionResponse;
import com.sambhav.meshPay.mesh.dto.RouteRequest;
import com.sambhav.meshPay.mesh.entity.MeshConnection;
import com.sambhav.meshPay.mesh.dto.MeshConnectionResponse;
import com.sambhav.meshPay.mesh.repository.MeshConnectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MeshServiceImpl implements MeshService {

    private final DeviceRepository deviceRepository;
    private final RoutingEngine routingEngine;
    private final MeshConnectionRepository meshConnectionRepository;

    @Override
    public MeshConnectionResponse connectDevices(ConnectDeviceRequest request) {

        Device source = deviceRepository.findByDeviceId(request.getSourceDeviceId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Source Device Not Found"));

        Device target = deviceRepository.findByDeviceId(request.getTargetDeviceId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Target Device Not Found"));

        if (source.getId().equals(target.getId())) {
            throw new IllegalArgumentException("Device cannot connect to itself");
        }

        boolean alreadyConnected =
                meshConnectionRepository
                        .findBySourceDeviceOrTargetDevice(source, source)
                        .stream()
                        .anyMatch(connection ->
                                (connection.getSourceDevice().equals(source)
                                        && connection.getTargetDevice().equals(target))
                                        ||
                                        (connection.getSourceDevice().equals(target)
                                                && connection.getTargetDevice().equals(source)));

        if (alreadyConnected) {
            throw new ResourceAlreadyExistsException("Devices are already connected");
        }

        MeshConnection connection = MeshConnection.builder()
                .sourceDevice(source)
                .targetDevice(target)
                .signalStrength(request.getSignalStrength())
                .active(true)
                .build();

        MeshConnection saved = meshConnectionRepository.save(connection);

        return MeshConnectionResponse.builder()
                .id(saved.getId())
                .sourceDeviceId(saved.getSourceDevice().getDeviceId())
                .targetDeviceId(saved.getTargetDevice().getDeviceId())
                .signalStrength(saved.getSignalStrength())
                .active(saved.isActive())
                .build();
    }
    @Override
    public List<String> findRoute(RouteRequest request) {

        Device source = deviceRepository.findByDeviceId(request.getSourceDeviceId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Source device not found"));

        Device destination = deviceRepository.findByDeviceId(request.getDestinationDeviceId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Destination device not found"));

        List<Device> path = routingEngine.findShortestPath(source, destination);

        if (path.isEmpty()) {
            throw new RuntimeException("No route found between devices");
        }

        return path.stream()
                .map(Device::getDeviceId)
                .toList();
    }

    @Override
    public List<MeshConnectionResponse> getConnections() {

        return meshConnectionRepository.findAll()
                .stream()
                .map(connection -> MeshConnectionResponse.builder()
                        .id(connection.getId())
                        .sourceDeviceId(connection.getSourceDevice().getDeviceId())
                        .targetDeviceId(connection.getTargetDevice().getDeviceId())
                        .signalStrength(connection.getSignalStrength())
                        .active(connection.isActive())
                        .build())
                .toList();
    }
}
