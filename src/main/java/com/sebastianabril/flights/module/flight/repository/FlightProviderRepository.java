package com.sebastianabril.flights.module.flight.repository;

import com.sebastianabril.flights.module.flight.model.FlightDTO;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface FlightProviderRepository {
    public List<FlightDTO> findBy(Long originCityId, Long destinationCityId, Date date);
    public Optional<FlightDTO> findById(Long flightId);
}
