import { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { useSearchParams } from 'react-router-dom';
import { getFlights } from '../../service/FlightService';

export default function DepartingFlightForm({ onDepartedFlightSelected }) {
  const [searchParams] = useSearchParams();
  const [flights, setFlights] = useState([]);

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
          <ListItem key={flight.id} onClick={() => onDepartedFlightSelected(flight)}>
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
