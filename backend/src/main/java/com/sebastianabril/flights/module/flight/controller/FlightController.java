package com.sebastianabril.flights.module.flight.controller;

import com.sebastianabril.flights.module.flight.model.FlightDTO;
import com.sebastianabril.flights.module.flight.service.FlightProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class FlightController {

    @Autowired
    private FlightProviderService flightService;

    @GetMapping("/api/flights")
    public List<FlightDTO> getFlights(
            @RequestParam Long originCityId,
            @RequestParam Long destinationCityId,
            @RequestParam("date") @DateTimeFormat(pattern = "dd/MM/yyyy") Date date){
        return flightService.getFlights(originCityId, destinationCityId, date);
    }

}
