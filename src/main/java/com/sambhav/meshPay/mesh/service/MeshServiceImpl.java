package com.sambhav.meshPay.mesh.service;

import com.sambhav.meshPay.common.exception.ResourceAlreadyExistsException;
import com.sambhav.meshPay.common.exception.ResourceNotFoundException;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.mesh.dto.ConnectDeviceRequest;
import com.sambhav.meshPay.mesh.entity.MeshConnection;
import com.sambhav.meshPay.mesh.repository.MeshConnectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MeshServiceImpl implements MeshService {

    private final DeviceRepository deviceRepository;
    private final MeshConnectionRepository meshConnectionRepository;

    @Override
    public MeshConnection connectDevices(ConnectDeviceRequest request) {

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

        return meshConnectionRepository.save(connection);
    }
}
