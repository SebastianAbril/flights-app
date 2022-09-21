import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { calculateBilling } from '../../service/BillingService';

export default function BillingForm() {
  const [bill, setBill] = useState({});
  useEffect(() => {
    calculateBilling().then((bill) => setBill(bill));
  }, []);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Bill summary
      </Typography>
      <List>
        {bill.items &&
          bill.items.map((item) => (
            <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={`${item.passengerName} ${item.passangerLastname}`}
                secondary={item.origin}
              />
              <Typography variant="body2">{item.tarifa}</Typography>
            </ListItem>
          ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Tax" />
          <Typography variant="subtitle1" sx={{ fontWeight: 200 }}>
            ${bill.tax}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${bill.total}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
