package com.sambhav.meshPay.auth.service;

import com.sambhav.meshPay.auth.dto.LoginRequest;
import com.sambhav.meshPay.auth.dto.LoginResponse;
import com.sambhav.meshPay.auth.dto.RegisterRequest;
import com.sambhav.meshPay.auth.service.jwt.JwtService;
import com.sambhav.meshPay.common.exception.InvalidCredentialsException;
import com.sambhav.meshPay.common.exception.ResourceAlreadyExistsException;
import com.sambhav.meshPay.common.exception.ResourceNotFoundException;
import com.sambhav.meshPay.common.response.ApiResponse;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    /**
     * Register a new user
     */
    public ApiResponse<Void> register(RegisterRequest request) {

        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new ResourceAlreadyExistsException(
                    "Phone number already registered");
        }

        User user = User.builder()
                .name(request.getName())
                .phoneNumber(request.getPhoneNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .balance(new BigDecimal("10000"))
                .publicKey("")
                .build();

        userRepository.save(user);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("User Registered Successfully")
                .data(null)
                .build();
    }

    /**
     * Login user and generate JWT
     */
    public ApiResponse<LoginResponse> login(LoginRequest request) {

        User user = userRepository
                .findByPhoneNumber(request.getPhoneNumber())
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new InvalidCredentialsException(
                    "Invalid Credentials");
        }

        // Generate JWT
        String token = jwtService.generateToken(user);

        LoginResponse response = LoginResponse.builder()
                .token(token)
                .message("Login Successful")
                .build();

        return ApiResponse.<LoginResponse>builder()
                .success(true)
                .message("Login Successful")
                .data(response)
                .build();
    }
}