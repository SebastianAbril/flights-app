import { useEffect, useState, useContext } from 'react';
import List from '@mui/material/List';
import { useSearchParams } from 'react-router-dom';
import { getFlights } from '../../service/FlightService';
import { BookingContext } from './BookingContext';
import FlightCard from '../../components/FlightCard';

export default function ReturningFlightForm() {
  const [searchParams] = useSearchParams();
  const [flights, setFlights] = useState([]);
  const { returningFlight, setReturningFlight } = useContext(BookingContext);
  useEffect(() => {
    const originCityId = searchParams.get('destinationCityId');
    const destinationCityId = searchParams.get('originCityId');
    const date = searchParams.get('returnDate');

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
            onClick={setReturningFlight}
            selectedFlight={returningFlight}></FlightCard>
        );
      })}
    </List>
  );
}
