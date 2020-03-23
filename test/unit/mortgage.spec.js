const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage', () => {
  let mortgageCalculator = null;

  beforeEach(() => {
    // beforeEach will run before each test. Alternatively, values can be placed specifically here and applied to each test as well.
    mortgageCalculator = new Mortgage();
  });

  it("should have monthly payment function", () => {
    expect(mortgageCalculator.monthlyPayment).to.exist;
  });

  it('should have a monthly payment of 321.75', () => {
    mortgageCalculator = new Mortgage(50000, 2, 15, 12);
    expect(mortgageCalculator.monthlyPayment()).to.equal('321.75');
  });
  it('should have a monthly payment of 276.23', () => {
    mortgageCalculator = new Mortgage(40000, 3, 15, 12);

    expect(mortgageCalculator.monthlyPayment()).to.equal('276.23');
  });
  it('should have a monthly payment of 665.72', () => {
    mortgageCalculator = new Mortgage(90000, 4, 15, 12);
    expect(mortgageCalculator.monthlyPayment()).to.equal('665.72');
  });
  it('should have a monthly payment of 113.22', () => {
    mortgageCalculator = new Mortgage(15000, 4.30, 15, 12);
    expect(mortgageCalculator.monthlyPayment()).to.equal('113.22');
  });



});
