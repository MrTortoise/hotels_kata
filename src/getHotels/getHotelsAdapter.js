const hotels = [
  {
    name: 'hotelone',
    starRating: 5,
    facilities: ['car park', 'pool'],
  },
  {
    name: 'hoteltwo',
    starRating: 3,
    facilities: ['car park', 'gym'],
  },
  {
    name: 'hotelthree',
    starRating: 3,
    facilities: [],
  },
];

const getHotels = (cb) => {
  cb(hotels);
};

export default getHotels;
export { hotels };
