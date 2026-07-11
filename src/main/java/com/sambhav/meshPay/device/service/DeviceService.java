package com.sambhav.meshPay.device.service;

import com.sambhav.meshPay.device.dto.DeviceRegistrationRequest;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.user.entity.User;

import java.util.List;

public interface DeviceService {

    Device registerDevice(DeviceRegistrationRequest request, User owner);
    List<Device> getAllDevices();

}