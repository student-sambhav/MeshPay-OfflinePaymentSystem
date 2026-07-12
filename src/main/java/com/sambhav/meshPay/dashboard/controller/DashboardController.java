package com.sambhav.meshPay.dashboard.controller;

import com.sambhav.meshPay.common.response.ApiResponse;
import com.sambhav.meshPay.dashboard.dto.DashboardResponse;
import com.sambhav.meshPay.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public ApiResponse<DashboardResponse> getDashboard() {

        DashboardResponse response = dashboardService.getDashboard();

        return ApiResponse.success(
                "Dashboard fetched successfully",
                response
        );
    }
}