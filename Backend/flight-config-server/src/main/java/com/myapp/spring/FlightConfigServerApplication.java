package com.myapp.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class FlightConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightConfigServerApplication.class, args);
	}
}
