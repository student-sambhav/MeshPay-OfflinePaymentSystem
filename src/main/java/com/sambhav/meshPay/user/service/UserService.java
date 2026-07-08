package com.sambhav.meshPay.user.service;

import com.sambhav.meshPay.user.dto.RegisterRequest;
import com.sambhav.meshPay.user.entity.User;
import com.sambhav.meshPay.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public String register(RegisterRequest request){
        if(userRepository.existsByPhoneNumber(request.getPhoneNumber())){
            throw new RuntimeException("Phone number Already Exists");
        }
        User user=User.builder()
                .name(request.getName())
                .phoneNumber((request.getPhoneNumber()))
                .password(passwordEncoder.encode(request.getPassword()))
                .balance(new BigDecimal("10000"))
                .publicKey("")
                .build();
        userRepository.save(user);
        return "User Registered Successfully";

    }
}
