package com.myapp.spring.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.myapp.spring.domain.Flight;

@Repository
public interface FlightRepository extends MongoRepository<Flight, String> {

	List<Flight> findBySourceCityAndDestinationCity(String sourceCity,String destinationCity);
	List<Flight> findByFlightType(String flightType);
}
