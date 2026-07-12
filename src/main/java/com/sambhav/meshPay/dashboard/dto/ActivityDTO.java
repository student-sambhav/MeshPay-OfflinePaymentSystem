package com.sambhav.meshPay.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDTO {

    private String title;

    private String description;

    private String type;

    private LocalDateTime timestamp;
}