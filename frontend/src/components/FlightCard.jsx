import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function FlightCard({ flight, selectedFlight, onClick }) {
  return (
    <ListItem
      key={flight.id}
      onClick={() => onClick(flight)}
      sx={{
        bgcolor: selectedFlight && flight.id === selectedFlight.id ? 'primary.main' : null
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
      <Stack>
        <p>{`${flight.departureTime} -- ${flight.arrivalTime} `}</p>
        <p>{`${flight.airlines}`}</p>
        <p>{`$ ${flight.value}`}</p>
      </Stack>
    </ListItem>
  );
}
