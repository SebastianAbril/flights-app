package com.sebastianabril.flights.module.shared.repository;

import com.sebastianabril.flights.module.shared.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
}
