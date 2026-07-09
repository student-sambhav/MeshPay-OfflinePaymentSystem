package com.sambhav.meshPay.mesh.controller;

import com.sambhav.meshPay.mesh.dto.ConnectDeviceRequest;
import com.sambhav.meshPay.mesh.entity.MeshConnection;
import com.sambhav.meshPay.mesh.service.MeshService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mesh")
@RequiredArgsConstructor
public class MeshController {

    private final MeshService meshService;

    @PostMapping("/connect")
    @ResponseStatus(HttpStatus.CREATED)
    public MeshConnection connectDevices(
            @Valid @RequestBody ConnectDeviceRequest request
    ) {
        return meshService.connectDevices(request);
    }
}