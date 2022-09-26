package com.sebastianabril.flights.module.booking.service;

import com.sebastianabril.flights.module.shared.model.DocumentType;
import com.sebastianabril.flights.module.booking.model.Passenger;
import com.sebastianabril.flights.module.booking.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PassengerService {

    @Autowired
    private PassengerRepository passengerRepository;

    public Optional<Passenger> findByDocumentTypeAndDocument(DocumentType documentType, String document) {
        return passengerRepository.findByDocumentTypeAndDocument(documentType, document);
    }
}
