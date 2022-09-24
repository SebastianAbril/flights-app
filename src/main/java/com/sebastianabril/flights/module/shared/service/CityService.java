package com.sebastianabril.flights.module.shared.service;

import com.sebastianabril.flights.module.shared.model.City;
import com.sebastianabril.flights.module.shared.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public List<City> getOriginCities(){
        return cityRepository.findAll();
    }

    public List<City> getDestinationCityByOriginCity(Long cityId) {
        Optional<City> cityOptional = cityRepository.findById(cityId);

        if (cityOptional.isEmpty()) {
            return new ArrayList<>();
        }

        return cityOptional.get().getDestinationCities();
     }
}
