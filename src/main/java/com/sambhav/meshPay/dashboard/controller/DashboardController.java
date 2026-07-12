package com.sambhav.meshPay.dashboard.controller;

import com.sambhav.meshPay.common.response.ApiResponse;
import com.sambhav.meshPay.dashboard.dto.DashboardResponse;
import com.sambhav.meshPay.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public ApiResponse<DashboardResponse> getDashboard(
            Authentication authentication) {

        UserDetails userDetails =
                (UserDetails) authentication.getPrincipal();

        DashboardResponse response =
                dashboardService.getDashboard(userDetails.getUsername());

        return ApiResponse.<DashboardResponse>builder()
                .success(true)
                .message("Dashboard fetched successfully")
                .data(response)
                .build();
    }
}