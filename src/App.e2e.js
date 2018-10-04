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
    let elements = browser.elements('.hotel');
    expect(elements.value).to.have.length(3);
  });
});
