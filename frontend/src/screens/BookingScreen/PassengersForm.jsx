//import { useEffect, useState } from 'react';
import React from 'react';
//import Stack from '@mui/material/Stack';
//import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useSearchParams } from 'react-router-dom';
//import { getFlights } from '../../service/FlightService';
import PassengerForm from '../../components/PassengerForm';
const createRange = (number) => {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(i);
  }

  return array;
};

export default function PassengersForm() {
  const [searchParams] = useSearchParams();
  const [passengers, setPassengers] = useSatate([]);

  const numberOfAdults = searchParams.get('adults') || 0;
  const numberOfChildrens = searchParams.get('children') || 0;
  const adultsRange = createRange(numberOfAdults);
  const childrenRange = createRange(numberOfChildrens);

  const handleChange(passengerNumber, name, value) =>{

  }

  return (
    <Container>
      <h1>Adults</h1>
      {adultsRange.map((number) => (
        <PassengerForm key={number} passengerNumber={number} />
      ))}

      <h1>Children</h1>
      {childrenRange.map((number) => (
        <PassengerForm key={number} passengerNumber={number} />
      ))}
    </Container>
  );
}
