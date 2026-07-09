package com.sambhav.meshPay.device.service;

import com.sambhav.meshPay.device.dto.DeviceRegistrationRequest;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DeviceServiceImpl implements DeviceService{
    private final DeviceRepository deviceRepository;
    @Override
    public Device registerDevice(DeviceRegistrationRequest request, User owner) {
        Device device=Device.builder()
                .deviceId(UUID.randomUUID().toString())
                .deviceName(request.getDeviceName())
                .online(true)
                .bridgeNode(request.isBridgeNode())
                .batteryLevel(100)
                .owner(owner)
                .build();
        return deviceRepository.save(device);
    }
}
