package com.sebastianabril.flights.module.billing.service;

import com.sebastianabril.flights.module.billing.dto.Bill;
import com.sebastianabril.flights.module.billing.dto.PassengerRequest;
import com.sebastianabril.flights.module.billing.dto.BillingItem;
import com.sebastianabril.flights.module.shared.model.DocumentType;
import com.sebastianabril.flights.module.booking.model.Passenger;
import com.sebastianabril.flights.module.shared.repository.DocumentTypeRepository;
import com.sebastianabril.flights.module.booking.repository.PassengerRepository;
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

    public Bill calculate(Long departedFlightId, Long returningFlight, List<PassengerRequest> passengers) {
        Bill bill = new Bill();

        Optional<FlightDTO> departedFlightOptional = flightProviderService.findById(departedFlightId);
        if (departedFlightOptional.isEmpty()) {
            throw new RuntimeException("Departed Flight does not exits");
        }

        for (PassengerRequest passengerRequest: passengers) {
            BillingItem billingItem = createBillingItemByFlight(
                    departedFlightOptional.get(), passengerRequest
            );

            bill.addItem(billingItem);
        }

        if (returningFlight == null) {
            return bill;
        }

        Optional<FlightDTO> returningFlightOptional = flightProviderService.findById(returningFlight);
        if (returningFlightOptional.isEmpty()) {
            throw new RuntimeException("Returning Flight does not exits");
        }

        for (PassengerRequest passengerRequest: passengers) {
            BillingItem billingItem = createBillingItemByFlight(
                    returningFlightOptional.get(), passengerRequest
            );

            bill.addItem(billingItem);
        }

        return bill;
    }

    private BillingItem createBillingItemByFlight(FlightDTO flightDTO, PassengerRequest passengerRequest){
        BillingItem billingItem = new BillingItem();
        billingItem.setName(passengerRequest.getName());
        billingItem.setLastName(passengerRequest.getLastName());
        billingItem.setNewMiles(flightDTO.getMiles());

        billingItem.setFlight(flightDTO);
        billingItem.setSubTotal(flightDTO.getValue());
        billingItem.setTotal(flightDTO.getValue());

        Optional<DocumentType> documentTypeOptional = documentTypeRepository.findById(passengerRequest.getDocumentTypeId());
        if (documentTypeOptional.isEmpty()) {
            throw new RuntimeException("Invalid Document Type");
        }
        Optional<Passenger> passengerOptional = passengerRepository.findByDocumentTypeAndDocument(
                documentTypeOptional.get(), passengerRequest.getDocument()
        );

        if(passengerOptional.isPresent()) {
            billingItem.setMiles(passengerOptional.get().getMiles());
        } else {
            billingItem.setMiles(0d);
        }

        if(passengerRequest.getAge() > 65) {
            billingItem.addDiscount(3f);
        }

        return billingItem;
    }
}
