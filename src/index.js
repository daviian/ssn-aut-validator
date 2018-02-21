// Fixed multiplicators for each digit of ssn
const multiplicators = [3, 7, 9, 0, 5, 8, 4, 2, 1, 6];

// Calculate checkdigit => sum of products modulo 11
function calculateCheckdigit(ssn) {
  return ssn.split('').reduce((prev, curr, index) => prev + parseInt(curr, 10) * multiplicators[index], 0) % 11;
}

export default function isValid(ssn) {
  if (ssn.length !== 10) {
    return false;
  }

  let sequenceNum = parseInt(ssn.substring(0, 3), 10);
  const checkdigit = parseInt(ssn.substring(3, 4), 10);

  let calcCheckdigit = calculateCheckdigit(ssn);

  // By rule if digit is 10 increment sequence number and recalculate checkdigit
  while (calcCheckdigit === 10) {
    sequenceNum += 1;
    calcCheckdigit = calculateCheckdigit(sequenceNum + ssn.substring(3));
  }

  // If given checkdigit equals calculated one ssn is valid
  return checkdigit === calcCheckdigit;
}
