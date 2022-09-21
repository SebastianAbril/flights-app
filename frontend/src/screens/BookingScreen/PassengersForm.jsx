//import { useEffect, useState } from 'react';
import { useContext } from 'react';
//import Stack from '@mui/material/Stack';
//import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { BookingContext } from './BookingContext';
//import { getFlights } from '../../service/FlightService';
import PassengerForm from '../../components/PassengerForm';

export default function PassengersForm() {
  const { passengers, setPassengers } = useContext(BookingContext);

  const updatePassengerData = (id, name, value) => {
    setPassengers((passengers) => {
      return passengers.map((passenger) => {
        if (passenger.id === id) {
          return { ...passenger, [name]: value };
        } else {
          return passenger;
        }
      });
    });
  };

  return (
    <Container>
      <h1>Adults</h1>
      {passengers
        .filter((passenger) => passenger.isAdult)
        .map((passenger) => (
          <PassengerForm
            key={passenger.id}
            passenger={passenger}
            updatePassengerData={updatePassengerData}
          />
        ))}

      <h1>Children</h1>
      {passengers
        .filter((passenger) => passenger.isAdult === false)
        .map((passenger) => (
          <PassengerForm
            key={passenger.id}
            passenger={passenger}
            updatePassengerData={updatePassengerData}
          />
        ))}
    </Container>
  );
}
