import { useContext, useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { BookingContext } from './BookingContext';
import PassengerForm from '../../components/PassengerForm';
import { getDocumentTypes } from '../../service/SharedServices';

export default function PassengersForm() {
  const { passengers, setPassengers } = useContext(BookingContext);
  const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    getDocumentTypes().then((documentTypes) => setDocumentTypes(documentTypes));
  }, []);

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
        .filter((passenger) => passenger.isAdult === true)
        .map((passenger) => (
          <PassengerForm
            key={passenger.id}
            passenger={passenger}
            updatePassengerData={updatePassengerData}
            documentTypes={documentTypes}
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
            documentTypes={documentTypes}
          />
        ))}
    </Container>
  );
}
