package com.sebastianabril.flights.module.flight.service;

import com.sebastianabril.flights.module.flight.model.City;
import com.sebastianabril.flights.module.flight.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public List<City> getOriginCities(){
        return cityRepository.findAll();
    }

}
