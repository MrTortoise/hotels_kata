import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'

export const Hotel = hotel => (
  <li key={hotel.name} className="hotel">
    <div className="hotel-name">{hotel.name}</div>
    <div className="hotel-starRating">{hotel.starRating}</div>
    <div className="hotel-facilities">{JSON.stringify(hotel.facilities)}</div>
  </li>
);

const options = [
  { value: 'asc', label: 'ascending' },
  { value: 'desc', label: 'descending' },
];

class Hotels extends React.Component{
  constructor(props){
    super(props)
    this.state = {sortOrder:  { value: 'asc', label: 'ascending' }}
  }

  onHotelSortOrderChanged = (value) => {
    this.setState({sortOrder: value})
  }

  render(){
    return (
      <div className="hotel-search">
        <form onSubmit={(event) => {
          if (event) {
            event.preventDefault();
          }
  
          this.props.getHotels(this.state.sortOrder.value);
        }}
        >
          <Select
            className="hotel-search-sort-order"
            value={this.state.sortOrder}
            options={options}
            onChange={this.onHotelSortOrderChanged}
          />
  
          <button type="submit" className="hotel-search-submit">Search</button>
        </form>
  
        <ul className="hotel-search-results">
          {this.props.hotels.map(Hotel)}
        </ul>
      </div>
    )
  }
}

export {Hotels}

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired,
  getHotels: PropTypes.func.isRequired,
};
