package com.sebastianabril.flights.module.booking.repository;

import com.sebastianabril.flights.module.booking.model.DocumentType;
import com.sebastianabril.flights.module.booking.model.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {
    public Optional<Passenger> findByDocumentTypeAndDocument(DocumentType documentType, String document);
}
