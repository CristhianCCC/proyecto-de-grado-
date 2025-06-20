package com.dc.vehiculo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class VehiculoApplication {

	public static void main(String[] args) {
		SpringApplication.run(VehiculoApplication.class, args);
	}

}
