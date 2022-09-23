export const calculateBilling = (departedFlight, returningFlight, passengers) => {
  const body = {
    departedFlightId: departedFlight.id,
    returningFlightId: returningFlight.id,
    passengers: passengers.map((passenger) => ({
      documentTypeId: passenger.documentTypeId,
      document: passenger.document,
      age: passenger.age,
      name: passenger.name,
      lastName: passenger.lastName
    }))
  };

  return fetch('/api/billing/calculate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => response.json());
};
