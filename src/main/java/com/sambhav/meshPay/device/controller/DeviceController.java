package com.sambhav.meshPay.device.controller;

import com.sambhav.meshPay.device.dto.DeviceRegistrationRequest;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.repository.DeviceRepository;
import com.sambhav.meshPay.device.service.DeviceService;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
@RequestMapping("/api/devices")
@RestController
@RequiredArgsConstructor
public class DeviceController {
    private final DeviceService deviceService;
    private final UserRepository userRepository;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    private Device registerRequest(@Valid @RequestBody DeviceRegistrationRequest request){
        User owner = userRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return deviceService.registerDevice(request, owner);
    }
}
