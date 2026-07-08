package com.sambhav.meshPay.auth;

import com.sambhav.meshPay.auth.dto.LoginRequest;
import com.sambhav.meshPay.auth.dto.LoginResponse;
import com.sambhav.meshPay.auth.dto.RegisterRequest;
import com.sambhav.meshPay.auth.service.AuthService;
import com.sambhav.meshPay.common.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ApiResponse<Void> register(
            @Valid @RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(
            @Valid @RequestBody LoginRequest request) {

        return authService.login(request);
    }
}