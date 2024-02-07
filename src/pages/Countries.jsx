import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
    throw new Error(`Error al realizar la solicitud: ${response.status}`);
  }
  const countries = await response.json();
  return countries;
};

const Countries = () => {
  const { data: countries, isLoading, isError } = useQuery('countries', fetchCountries);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error getting data.</p>;
  }

  return (
    <div>
      <h2>All Countries</h2>
      <div className="countries">
        {countries.map((country) => (
          <div key={country.cca3} className="card">
            <Link to={`/country/${country.cca3}`}>
              <img
                id="flag-image"
                src={country.flags[0]?.png}
                alt={`${country.name.common} Flag`}
              />
              <h3 className="center">{country.name.common}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;