package com.sambhav.meshPay.dashboard.service;

import com.sambhav.meshPay.dashboard.dto.DashboardResponse;

public interface DashboardService {

    DashboardResponse getDashboard(String phoneNumber);

}