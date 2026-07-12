package com.sambhav.meshPay.device.repository;

import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DeviceRepository extends JpaRepository<Device,Long> {

    Optional<Device> findByDeviceId(String deviceId);

    List<Device> findByOwner(User owner);

    List<Device> findByOnlineTrue();

    long countByOnlineTrue();

    long countByOnlineFalse();

    long countByBridgeNodeTrue();

    boolean existsByDeviceId(String deviceId);
}
