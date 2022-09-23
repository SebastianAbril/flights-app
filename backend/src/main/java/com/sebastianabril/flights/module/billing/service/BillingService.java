package com.sebastianabril.flights.module.billing.service;

import com.sebastianabril.flights.module.billing.dto.BillingDTO;
import com.sebastianabril.flights.module.billing.dto.PassengerDTO;
import com.sebastianabril.flights.module.booking.model.DocumentType;
import com.sebastianabril.flights.module.booking.model.Passenger;
import com.sebastianabril.flights.module.booking.repository.DocumentTypeRepository;
import com.sebastianabril.flights.module.booking.repository.PassengerRepository;
import com.sebastianabril.flights.module.booking.service.PassengerService;
import com.sebastianabril.flights.module.flight.model.FlightDTO;
import com.sebastianabril.flights.module.flight.service.FlightProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillingService {

    @Autowired
    private FlightProviderService flightProviderService;
    @Autowired
    private PassengerRepository passengerRepository;
    @Autowired
    private DocumentTypeRepository documentTypeRepository;

    public BillingDTO calculate(Long departedFlightId, Long returningFlight, List<PassengerDTO> passengers) {
        BillingDTO billingDTO = new BillingDTO();


        Optional<FlightDTO> departedFlightOptional = flightProviderService.findById(departedFlightId);
        if (departedFlightOptional.isEmpty()) {
            throw new RuntimeException("Departed Flight does not exits");
        }

        Optional<FlightDTO> returningFlightOptional = flightProviderService.findById(returningFlight);
        if (returningFlightOptional.isEmpty()) {
            throw new RuntimeException("Returning Flight does not exits");
        }

        for (PassengerDTO passengerDTO: passengers) {
            Optional<DocumentType> documentTypeOptional = documentTypeRepository.findById(passengerDTO.getDocumentTypeId());
            if (documentTypeOptional.isEmpty()) {
                throw new RuntimeException("Invalid Document Type");
            }
            Optional<Passenger> passengerOptional = passengerRepository.findByDocumentTypeAndDocument(
                    documentTypeOptional.get(), passengerDTO.getDocument()
            );

            if(passengerOptional.isPresent()) {
                passengerDTO.setMiles(
                        passengerOptional.get().getMiles() +
                                departedFlightOptional.get().getMiles()
                );

            }

        }

    }


}
