import getHotels from './getHotelsAdapter';

describe('get hotels adapter will', () => {
  it('will return a promise that resolves to hotels', (done) => {
    getHotels().then((result) => {
      expect(result).toHaveLength(3);
      done()
    })
      .catch((reason) => {
        throw reason;
      });
  });
});
