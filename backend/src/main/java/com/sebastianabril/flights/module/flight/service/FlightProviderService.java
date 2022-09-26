package com.sebastianabril.flights.module.flight.service;


import com.sebastianabril.flights.module.flight.model.FlightDTO;
import com.sebastianabril.flights.module.flight.repository.FlightProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class FlightProviderService {

    @Autowired
    private FlightProviderRepository flightProviderRepository;

    public List<FlightDTO> getFlights(Long originCityId, Long destinationCityId, Date date) {
        return flightProviderRepository.findBy(originCityId, destinationCityId, date);
    }

    public Optional<FlightDTO> findById(Long flightId) {
        return flightProviderRepository.findById(flightId);
    }
}


