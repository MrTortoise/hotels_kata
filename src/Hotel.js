import React from 'react';
import PropTypes from 'prop-types';

export const Hotel = hotel => (
  <li key={hotel.name} className="hotel">
    <div className="hotel-name">{hotel.name}</div>
    <div className="hotel-starRating">{hotel.starRating}</div>
    <div className="hotel-facilities">{JSON.stringify(hotel.facilities)}</div>
  </li>
);

export const Hotels = ({ hotels, searchForHotel }) => (
  <div className="hotel-search">
    <form onSubmit={(event) => {
      if (event) {
        event.preventDefault();
      }

      searchForHotel();
    }}
    >
      <button type="submit" className="hotel-search-submit">Search</button>
    </form>

    <ul className="hotel-search-results">
      {hotels.map(Hotel)}
    </ul>
  </div>
);


Hotels.propTypes = {
  hotels: PropTypes.array.isRequired,
  searchForHotel: PropTypes.func.isRequired,
};
