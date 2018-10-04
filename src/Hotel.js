import React from 'react';
import PropTypes from 'prop-types';

export const Hotel = hotel => (
  <li key={hotel.name} className="hotel">
    <div className="hotel-name">{hotel.name}</div>
    <div className="hotel-starRating">{hotel.starRating}</div>
    <div className="hotel-facilities">{JSON.stringify(hotel.facilities)}</div>
  </li>
);

export const Hotels = ({ hotels }) => (
  <ul className="hotel-search">
    {hotels.map(Hotel)}
  </ul>
);


Hotels.propTypes = {
  hotels: PropTypes.array.isRequired,
};
