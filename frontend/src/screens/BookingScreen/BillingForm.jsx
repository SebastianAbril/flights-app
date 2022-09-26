import { useState, useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { calculateBilling } from '../../service/BillingService';
import { BookingContext } from './BookingContext';
import { BillItem } from '../../components/BillItem';

export default function BillingForm() {
  const [bill, setBill] = useState({});

  const { departedFlight, returningFlight, passengers } = useContext(BookingContext);

  useEffect(() => {
    calculateBilling(departedFlight, returningFlight, passengers).then((bill) => setBill(bill));
  }, []);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Bill summary
      </Typography>
      <List>
        {bill.items && bill.items.map((item) => <BillItem key={item.id} item={item}></BillItem>)}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="SubTotal" />
          <Typography variant="subtitle1" sx={{ fontWeight: 200 }}>
            ${bill.subTotal}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Discount" />
          <Typography variant="subtitle1" sx={{ fontWeight: 200 }}>
            ${bill.totalDiscount}
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
