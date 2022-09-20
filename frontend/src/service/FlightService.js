const originCities = [
  { id: 1, name: 'Pereira' },
  { id: 2, name: 'Medellin' },
  { id: 3, name: 'Bogota' }
];

export const getOriginCities = () => {
  return Promise.resolve(originCities);
};

const destinationsCities = [
  { id: 3, originCityId: 1, name: 'Bogota' },
  { id: 2, originCityId: 1, name: 'Medellin' }
];

export const getDestinationCitiesByOriginCityId = (originCityId) => {
  return Promise.resolve(destinationsCities.filter((city) => city.originCityId == originCityId));
};

const flights = [
  {
    id: 1,
    airlines: 'Avianca',
    name: 'AV001',
    originCityId: 1,
    originCityName: 'Pereira',
    destinationCityId: 2,
    destinationCityName: 'Medellin',
    departureTime: '08:00',
    arrivalTime: '10:00',
    date: '20/09/2022'
  },
  {
    id: 2,
    airlines: 'VivaAIR',
    name: 'VA001',
    originCityId: 1,
    originCityName: 'Pereira',
    destinationCityId: 2,
    destinationCityName: 'Medellin',
    departureTime: '09:00',
    arrivalTime: '10:00',
    date: '20/09/2022'
  },
  {
    id: 3,
    airlines: 'Latam',
    name: 'LT001',
    departureTime: '10:00',
    arrivalTime: '10:00',

    originCityId: 1,
    originCityName: 'Pereira',
    destinationCityId: 3,
    destinationCityName: 'Bogota',

    date: '20/09/2022'
  },
  {
    id: 4,
    airlines: 'Avianca',
    name: 'AV002',
    originCityId: 1,
    originCityName: 'Pereira',
    destinationCityId: 3,
    destinationCityName: 'Bogota',
    departureTime: '15:00',
    arrivalTime: '10:00',
    date: '20/09/2022'
  },
  {
    id: 5,
    airlines: 'Avianca',
    name: 'AV002',
    originCityId: 2,
    originCityName: 'Medellin',
    destinationCityId: 1,
    destinationCityName: 'Pereira',
    departureTime: '18:00',
    arrivalTime: '24:00',
    date: '20/09/2022'
  },
  {
    id: 6,
    airlines: 'Avianca',
    name: 'AV003',
    originCityId: 3,
    originCityName: 'Bogota',
    destinationCityId: 1,
    destinationCityName: 'Pereira',
    departureTime: '18:00',
    arrivalTime: '24:00',
    date: '20/09/2022'
  }
];

export const getFlights = (originCityId, destinationCityId, date) => {
  return Promise.resolve(
    flights.filter(
      (flight) =>
        flight.originCityId == originCityId &&
        flight.destinationCityId == destinationCityId &&
        flight.date == date
    )
  );
};
