export const getOriginCities = () => {
  return fetch('/api/cities/origin-cities').then((response) => response.json());
};

export const getDestinationCitiesByOriginCityId = (originCityId) => {
  return fetch(`/api/cities/destination-cities/${originCityId}`).then((response) =>
    response.json()
  );
};

export const getDocumentTypes = () => {
  return fetch('/api/document-type').then((response) => response.json());
};
