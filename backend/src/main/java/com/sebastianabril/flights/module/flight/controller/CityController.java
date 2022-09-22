package com.sebastianabril.flights.module.flight.controller;

import com.sebastianabril.flights.module.flight.model.City;
import com.sebastianabril.flights.module.flight.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping("/api/cities/origin-cities")
    public List<City> getOriginCities(){
        return cityService.getOriginCities();
    }

}
