
describe('hotel search component will')
it('have right class', () => {
  expect(app.find('.hotel-search').length).toBeGreaterThan(0);
});

it('have hotels', () => {
  expect(app.find('.hotel').length).toBe(2);
});