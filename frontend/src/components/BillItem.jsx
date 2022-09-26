import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export const BillItem = ({ item }) => {
  return (
    <ListItem fullWidth>
      <Stack sx={{ width: '100%' }} divider={<Divider orientation="horizontal" flexItem />}>
        <ListItemText primary={`Full Name: ${item.name} ${item.lastName}`} />
        <Stack
          sx={{ width: '100%' }}
          direction={'row'}
          divider={<Divider orientation="vertical" flexItem />}>
          <Stack sx={{ width: '100%' }}>
            <p>{`Miles: ${item.miles}`}</p>
            <p>{`New Miles:${item.newMiles}`}</p>
            <p>{`${item.flight.originCityName} -- ${item.flight.destinationCityName} `}</p>
            <p>{`${item.flight.departureTime} -- ${item.flight.arrivalTime} `}</p>
          </Stack>
          <Stack sx={{ width: '100%' }}>
            <p>{`${item.flight.airlines}`}</p>
            <p>{`${item.flight.name}`}</p>
            <p>{`$ ${item.flight.date}`}</p>
          </Stack>
        </Stack>
        <Stack sx={{ width: '100%' }} alignItems="flex-end" justifyContent="flex-end">
          <span>{`subTotal: $ ${item.subTotal}`}</span>
          <span>{`totalDiscount: $ ${item.totalDiscount}`}</span>
          <span>{`total: $ ${item.total}`}</span>
        </Stack>
      </Stack>
    </ListItem>
  );
};
