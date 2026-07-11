package com.sambhav.meshPay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MeshPayApplication {

	public static void main(String[] args) {
		SpringApplication.run(MeshPayApplication.class, args);
	}

}
