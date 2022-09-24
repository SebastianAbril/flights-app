export const getFlights = (originCityId, destinationCityId, date) => {
  return fetch(
    '/api/flights?' +
      new URLSearchParams({
        originCityId,
        destinationCityId,
        date
      })
  ).then((response) => response.json());
};
