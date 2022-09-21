import { useEffect, useState, useContext } from 'react';

import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { useSearchParams } from 'react-router-dom';
import { getFlights } from '../../service/FlightService';
import { BookingContext } from './BookingContext';

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
          <ListItem
            key={flight.id}
            onClick={() => setDepartedFlight(flight)}
            sx={{
              bgcolor: departedFlight && flight.id === departedFlight.id ? 'primary.main' : null
            }}>
            <ListItemAvatar>
              <Stack direction={'row'}>
                <Avatar>
                  <FlightTakeoffIcon />
                </Avatar>
              </Stack>
            </ListItemAvatar>

            <ListItemText
              primary={flight.name}
              secondary={`${flight.originCityName} - ${flight.destinationCityName}`}
            />
            <p>{`${flight.departureTime} --${flight.arrivalTime} `}</p>
            <p>{`${flight.airlines}`}</p>
          </ListItem>
        );
      })}
    </List>
  );
}
