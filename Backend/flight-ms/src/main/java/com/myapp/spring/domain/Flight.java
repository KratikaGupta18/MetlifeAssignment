package com.myapp.spring.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Flight {

	@Id
	private String flightNo;
	
	private String flightType;
	private String sourceCity;
	private String destinationCity;
	private long fare;
	private String arrivalTime;
	private String departureTime;
	
	
	
	
	public Flight() {
		// TODO Auto-generated constructor stub
	}




	public Flight(String flightNo, String flightType, String sourceCity, String destinationCity, long fare,
			String arrivalTime, String departureTime) {
	
		this.flightNo = flightNo;
		this.flightType = flightType;
		this.sourceCity = sourceCity;
		this.destinationCity = destinationCity;
		this.fare = fare;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
	}




	public String getFlightNo() {
		return flightNo;
	}




	public void setFlightNo(String flightNo) {
		this.flightNo = flightNo;
	}




	public String getFlightType() {
		return flightType;
	}




	public void setFlightType(String flightType) {
		this.flightType = flightType;
	}




	public String getSourceCity() {
		return sourceCity;
	}




	public void setSourceCity(String sourceCity) {
		this.sourceCity = sourceCity;
	}




	public String getDestinationCity() {
		return destinationCity;
	}




	public void setDestinationCity(String destinationCity) {
		this.destinationCity = destinationCity;
	}




	public long getFare() {
		return fare;
	}




	public void setFare(long fare) {
		this.fare = fare;
	}




	public String getArrivalTime() {
		return arrivalTime;
	}




	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}




	public String getDepartureTime() {
		return departureTime;
	}




	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}


}
