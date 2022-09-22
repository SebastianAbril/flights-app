package com.sebastianabril.flights.module.flight.repository;

import com.sebastianabril.flights.module.flight.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long> {

    public List<Flight> findByOrderByIdAsc();
}
