/* global it, describe, browser */

const { expect } = require('chai');

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Hotels Kata');
  });

  it('Should have 0 hotels (because get loaded on submit)', () => {
    browser.url('http://localhost:3000/');
    const elements = browser.elements('.hotel');
    expect(elements.value).to.have.length(0);
  });

  it('should have hotel search component', () => {
    browser.url('http://localhost:3000/');
    let ele = browser.element('.hotel-search');
    expect(ele.type).to.not.equal('NoSuchElement');
  });

  it('should allow me to search for hotels', ()=>{
    browser.url('http://localhost:3000/');
    browser.click('.hotel-search-submit');
    const elements = browser.elements('.hotel');
    expect(elements.value).to.have.length(3);
  });
});
