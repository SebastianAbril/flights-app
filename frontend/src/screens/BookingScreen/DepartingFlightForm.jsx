import { useEffect, useState, useContext } from 'react';
import List from '@mui/material/List';
import { useSearchParams } from 'react-router-dom';
import { getFlights } from '../../service/FlightService';
import { BookingContext } from './BookingContext';
import FlightCard from '../../components/FlightCard';

export default function DepartingFlightForm() {
  const [searchParams] = useSearchParams();
  const [flights, setFlights] = useState([]);
  const { departedFlight, setDepartedFlight } = useContext(BookingContext);

  useEffect(() => {
    const originCityId = searchParams.get('originCityId');
    const destinationCityId = searchParams.get('destinationCityId');
    const date = searchParams.get('departureDate');

    getFlights(originCityId, destinationCityId, date).then((flights) => {
      setFlights(flights);
    });
  }, []);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {flights.map((flight) => {
        return (
          <FlightCard
            key={flight.id}
            flight={flight}
            onClick={setDepartedFlight}
            selectedFlight={departedFlight}></FlightCard>
        );
      })}
    </List>
  );
}
