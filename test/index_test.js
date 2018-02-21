/**
 * Module dependencies.
 */
import SSNValidator from '../src';

/**
 * `Social Security Number` samples.
 */
const numbers = {
  invalid: ['1234010158', '1485040585', '8912121296', '12345678', '1234567898754', '', null],
  valid: ['6421310776', '4256080399', '9875210802', '3968280689']
};

/**
 * Test `ssn-validator`.
 */
describe('SsnAUTValidator', () => {
  describe('isValid()', () => {
    it('should return `false` if number is invalid', () => {
      numbers.invalid.forEach(number => SSNValidator.validate(number).should.be.false());
    });

    it('should return `true` if number is valid', () => {
      numbers.valid.forEach(number => SSNValidator.validate(number).should.be.true());
    });
  });
});
