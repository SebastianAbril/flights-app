package com.sebastianabril.flights.module.flight.repository;

import com.sebastianabril.flights.module.flight.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
}
