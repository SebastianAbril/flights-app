const response = {
  total: 1000000,
  tax: 1000,
  items: [
    {
      id: 1,
      passengerName: 'Juan',
      passangerLastname: 'Abril',
      tarifa: '1000',
      origin: 'pereira',
      destino: 'medellin'
    },
    {
      id: 2,
      passengerName: 'Sebastian',
      passangerLastname: 'Abril',
      tarifa: '1000',
      origin: 'pereira',
      destino: 'medellin'
    }
  ]
};

//departedFlight, returningFlight, passengers
export const calculateBilling = () => {
  return Promise.resolve(response);
};
