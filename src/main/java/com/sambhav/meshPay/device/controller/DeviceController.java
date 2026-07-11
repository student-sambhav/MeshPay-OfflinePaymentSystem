package com.sambhav.meshPay.device.controller;

import com.sambhav.meshPay.device.dto.DeviceRegistrationRequest;
import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.device.service.DeviceService;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/devices")
@RequiredArgsConstructor
public class DeviceController {

    private final DeviceService deviceService;
    private final UserRepository userRepository;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public Device registerDevice(
            @Valid @RequestBody DeviceRegistrationRequest request,
            Authentication authentication
    ) {

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String phoneNumber = userDetails.getUsername();

        User owner = userRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return deviceService.registerDevice(request, owner);
    }

    @GetMapping
    public List<Device> getAllDevices() {
        return deviceService.getAllDevices();
    }
}