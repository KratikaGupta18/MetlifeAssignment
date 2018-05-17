package com.myapp.spring.api;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.domain.Flight;
import com.myapp.spring.repository.FlightRepository;

@RestController
public class FlightAPI {
	
	@Autowired
	private FlightRepository flightRepository;
	
	
	@GetMapping("/flights")
	public ResponseEntity<List<Flight>> viewAll(){
		return new ResponseEntity<List<Flight>>(flightRepository.findAll(),	HttpStatus.OK);
	}

	@PostMapping("/flights")
	public ResponseEntity<String> addFlight(@RequestBody Flight flight){
		flightRepository.save(flight);
		return new ResponseEntity<String>("added", HttpStatus.CREATED);
	}
	
	@PutMapping("/flights/{flightNo}")
	public ResponseEntity<String> updateFlight(@RequestBody Flight flight, @PathVariable("flightNo") String flightNo){
		Flight existingFlight= flightRepository.findById(flightNo).get();
		BeanUtils.copyProperties(flight, existingFlight);
		flightRepository.save(existingFlight);
		return new ResponseEntity<String>("updated", HttpStatus.CREATED);
		
	}
	
	@GetMapping("/flights/{sourceCity}/{destinationCity}")
	public ResponseEntity<List<Flight>> findFlightByCity(@PathVariable("sourceCity") String sourceCity,@PathVariable("destinationCity") String destinationCity){
		return new ResponseEntity<List<Flight>>(flightRepository.findBySourceCityAndDestinationCity(sourceCity, destinationCity), HttpStatus.OK);
	}
	
	@GetMapping("/flights/{flightNo}")
	public ResponseEntity<Flight> findByFlightNo(@PathVariable("flightNo") String flightNo){
		return new ResponseEntity<Flight>(flightRepository.findById(flightNo).get(), HttpStatus.OK);
	}
	
	@GetMapping("flights/type/{flightType}")
	public  ResponseEntity<List<Flight>> findFlightByType(@PathVariable("flightType") String flightType){
		
		return new ResponseEntity<List<Flight>>(flightRepository.findByFlightType(flightType), HttpStatus.OK);
	}
}
