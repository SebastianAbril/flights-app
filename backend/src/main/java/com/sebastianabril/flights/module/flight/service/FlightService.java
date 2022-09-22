package com.sebastianabril.flights.module.flight.service;

import com.sebastianabril.flights.module.flight.model.City;
import com.sebastianabril.flights.module.flight.model.Flight;
import com.sebastianabril.flights.module.flight.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public void createFlight(String name, City departureCity, City arrivalCity, String departureDate, String arrivalDate, String airline, Double miles, Boolean isDirect ){
         Flight flight = new Flight();
         flight.setName(name);
         flight.setDepartureCity(departureCity);
         flight.setArrivalCity(arrivalCity);
         flight.setDepartureDate(departureDate);
         flight.setArrivalDate(arrivalDate);
         flight.setAirline(airline);
         flight.setMiles(miles);
         flight.setDirect(isDirect);

         flightRepository.save(flight);
    }

    public List<Flight> getFlights(){
        return flightRepository.findByOrderByIdAsc();
    }

    public Flight getFlightById(Long id){
        Optional<Flight> optionalFlight = flightRepository.findById(id);
        if(optionalFlight.isEmpty()){
            throw new RuntimeException("There is not a flight with the current id");
        }
        return optionalFlight.get();
    }


}
