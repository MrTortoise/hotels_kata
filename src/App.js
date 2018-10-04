import React from 'react';
import './App.css';

const Hotel = ( hotel ) => (
  <li key={hotel.name} className="hotel">
a hotel
  </li>
);

export default ({ hotels }) => (
  <ul className="hotel-search">
    {hotels.map(Hotel)}
  </ul>
);


