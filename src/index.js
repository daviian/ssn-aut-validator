/** Fixed multiplicators to calculate check digit */
const multiplicators = [3, 7, 9, 0, 5, 8, 4, 2, 1, 6];

/**
 * Calculates the check digit of the SSN
 * Builds the sum of the digit's products with its multiplicator and takes the rest of the division by 11.
 *
 * @param {string} ssn
 */
function calculateCheckdigit(ssn) {
  return ssn.split('').reduce((prev, curr, index) => prev + parseInt(curr, 10) * multiplicators[index], 0) % 11;
}

export default class SSNValidator {
  /**
   * Validates given ssn according to the rules of austrian social security numbers
   * @param {string} ssn - The SSN which should be validated.
   * @return {boolean} The validity of the given SSN.
   */
  static validate(ssn) {
    if (!ssn || ssn.length !== 10) {
      return false;
    }

    let sequenceNum = parseInt(ssn.substring(0, 3), 10);
    const checkdigit = parseInt(ssn.substring(3, 4), 10);

    let calcCheckdigit = calculateCheckdigit(ssn);

    /**
     * By rule:
     * If check digit is 10, increment sequence number and calculate digit again
     */
    while (calcCheckdigit === 10) {
      sequenceNum += 1;
      calcCheckdigit = calculateCheckdigit(sequenceNum + ssn.substring(3));
    }

    return checkdigit === calcCheckdigit;
  }
}
