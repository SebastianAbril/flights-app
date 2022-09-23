package com.sebastianabril.flights.module.flight.repository;

import com.sebastianabril.flights.module.flight.model.FlightDTO;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class LocalFlightProvider implements FlightProviderRepository {

    private List<FlightDTO> data;

    public LocalFlightProvider() throws ParseException {
        SimpleDateFormat sdformat = new SimpleDateFormat("dd/MM/yyyy");
        data = new ArrayList<>();

        FlightDTO flightDTO = new FlightDTO();
        flightDTO.setId(1L);
        flightDTO.setAirlines("LATAM");
        flightDTO.setName("LA-001");
        flightDTO.setOriginCityId(1L);
        flightDTO.setOriginCityName("Pereira");
        flightDTO.setDestinationCityId(3L);
        flightDTO.setDestinationCityName("Bogota");
        flightDTO.setDepartureTime("08:00");
        flightDTO.setArrivalTime("10:00");
        flightDTO.setDate(sdformat.parse("23/09/2022"));
        flightDTO.setValue(1000d);
        flightDTO.setMiles(100d);

        data.add(flightDTO);

        flightDTO = new FlightDTO();
        flightDTO.setId(2L);
        flightDTO.setAirlines("AVIANCA");
        flightDTO.setName("AV-001");
        flightDTO.setOriginCityId(1L);
        flightDTO.setOriginCityName("Pereira");
        flightDTO.setDestinationCityId(3L);
        flightDTO.setDestinationCityName("Bogota");
        flightDTO.setDepartureTime("09:00");
        flightDTO.setArrivalTime("11:00");
        flightDTO.setDate(sdformat.parse("23/09/2022"));
        flightDTO.setValue(1100d);
        flightDTO.setMiles(100d);
        data.add(flightDTO);


        flightDTO = new FlightDTO();
        flightDTO.setId(3L);
        flightDTO.setAirlines("VIVAAIR");
        flightDTO.setName("VA-001");
        flightDTO.setOriginCityId(1L);
        flightDTO.setOriginCityName("Pereira");
        flightDTO.setDestinationCityId(3L);
        flightDTO.setDestinationCityName("Bogota");
        flightDTO.setDepartureTime("12:00");
        flightDTO.setArrivalTime("14:00");
        flightDTO.setDate(sdformat.parse("23/09/2022"));
        flightDTO.setValue(1200d);
        flightDTO.setMiles(100d);
        data.add(flightDTO);


        flightDTO = new FlightDTO();
        flightDTO.setId(4L);
        flightDTO.setAirlines("VIVAAIR");
        flightDTO.setName("VA-001");
        flightDTO.setOriginCityId(3L);
        flightDTO.setOriginCityName("Bogota");
        flightDTO.setDestinationCityId(1L);
        flightDTO.setDestinationCityName("Pereira");
        flightDTO.setDepartureTime("20:00");
        flightDTO.setArrivalTime("21:00");
        flightDTO.setDate(sdformat.parse("23/09/2022"));
        flightDTO.setValue(1000d);
        flightDTO.setMiles(100d);
        data.add(flightDTO);

        flightDTO = new FlightDTO();
        flightDTO.setId(5L);
        flightDTO.setAirlines("AVIANCA");
        flightDTO.setName("AV-002");
        flightDTO.setOriginCityId(3L);
        flightDTO.setOriginCityName("Bogota");
        flightDTO.setDestinationCityId(1L);
        flightDTO.setDestinationCityName("Pereira");
        flightDTO.setDepartureTime("21:00");
        flightDTO.setArrivalTime("23:00");
        flightDTO.setDate(sdformat.parse("23/09/2022"));
        flightDTO.setValue(1300d);
        flightDTO.setMiles(100d);
        data.add(flightDTO);
    }

    public List<FlightDTO> findBy(Long originCityId, Long destinationCityId, Date date){
        return data.stream()
                .filter(flight -> flight.getOriginCityId() == originCityId &&
                        flight.getDestinationCityId() == destinationCityId &&
                        flight.getDate().compareTo(date) == 0
                ).collect(Collectors.toList());
    }
    public Optional<FlightDTO> findById(Long flightId){
        return data.stream().filter(flight -> flight.getId() == flightId).findFirst();

    }
}
