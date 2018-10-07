/* global it, expect, describe, */

import { hotels } from './getHotelsAdapter';
import sortHotelByStarRating from './sortHotelsByStarRating';

describe('sort hotel by star rating will', () => {
  it('will order the hotels in descending order', () => {
    const results = sortHotelByStarRating('asc', hotels);
    const { length } = results;
    for (let i = 0; i < length - 1; i++) {
      expect(results[i].starRating).toBeLessThanOrEqual(results[i + 1].starRating);
    }
  });

  it('will order the hotels in descending order', () => {
    const results = sortHotelByStarRating('desc', hotels);
    const { length } = results;
    for (let i = 0; i < length - 1; i++) {
      expect(results[i].starRating).toBeGreaterThanOrEqual(results[i + 1].starRating);
    }
  });
});
