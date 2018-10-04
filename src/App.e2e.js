/* global it, describe, browser */

const { expect } = require('chai');

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Hotels Kata');
  });

  it('Should have 3 hotels (because of test data - will break once live data)', () => {
    browser.url('http://localhost:3000/');
    const elements = browser.elements('.hotel');
    expect(elements.value).to.have.length(3);
  });

  it('should have hotel search component', () => {
    browser.url('http://localhost:3000/');
    let ele = browser.element('.hotel-search');
    expect(ele.type).to.not.equal('NoSuchElement');
  });
});
