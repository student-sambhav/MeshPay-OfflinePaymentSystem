package com.sambhav.meshPay.mesh.repository;

import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.mesh.entity.MeshConnection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MeshConnectionRepository extends JpaRepository<MeshConnection, Long> {

    List<MeshConnection> findBySourceDevice(Device sourceDevice);

    List<MeshConnection> findByTargetDevice(Device targetDevice);

    List<MeshConnection> findBySourceDeviceOrTargetDevice(Device source, Device target);
}
