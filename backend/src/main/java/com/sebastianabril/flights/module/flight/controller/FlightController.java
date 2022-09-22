package com.sebastianabril.flights.module.flight.controller;

import com.sebastianabril.flights.module.flight.model.City;
import com.sebastianabril.flights.module.flight.model.Flight;
import com.sebastianabril.flights.module.flight.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FlightController {

    @Autowired
    private FlightService flightService;

    @PostMapping("/flight")
    public void createFlight(@RequestBody Flight flight){
        String name = flight.getName();
        City departureCity = flight.getDepartureCity();
        City arrivalCity = flight.getArrivalCity();
        String departureDate = flight.getDepartureDate();
        String arrivalDate = flight.getArrivalDate();
        String airline = flight.getAirline();
        Double miles = flight.getMiles();
        Boolean isDirect = flight.getDirect();

        flightService.createFlight(name, departureCity, arrivalCity, departureDate , arrivalDate, airline, miles, isDirect );
    }
    @GetMapping("/flight")
    public List<Flight> getFlights(){
        return flightService.getFlights();
    }

    @GetMapping("/flight/{id}")
    public Flight getFlightById(@PathVariable Long id){
        return flightService.getFlightById(id);
    }

}
