import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchCountryDetails = async (id) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  if (!response.ok) {
    throw new Error(`Error al realizar la solicitud: ${response.status}`);
  }
  const countryDetails = await response.json();
  return countryDetails;
};

const CountryDetails = () => {
  const { id } = useParams();

  const { data: countryDetails, isLoading, isError } = useQuery(['country', id], () => fetchCountryDetails(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error getting country data.</p>;
  }

  const { name, flags, population } = countryDetails[0];

  return (
    <div>
      <h2>{name.common}</h2>
      <img src={flags[0]?.png || ''} alt={`${name.common} Flag`} />
      <p>Population: {population}</p>
    </div>
  );
};

export default CountryDetails;