package com.sebastianabril.flights.module.shared.controller;

import com.sebastianabril.flights.module.shared.model.City;
import com.sebastianabril.flights.module.shared.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/api/cities/destination-cities/{cityId}")
    public List<City> getDestinationCityByOriginCity(@PathVariable Long cityId){
        return cityService.getDestinationCityByOriginCity(cityId);
    }
}
