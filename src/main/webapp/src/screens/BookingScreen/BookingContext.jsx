import { createContext } from 'react';

export const BookingContext = createContext({
  departedFlight: {},
  returningFlight: {},
  passengers: [],
  setDepartedFlight: () => {},
  setReturningFlight: () => {},
  setPassengers: () => {}
});
