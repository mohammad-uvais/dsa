/**
 * @description Function for getting Fibonacci Sequence upto 'n' number of terms.
 * @param {number} n Number of terms upto which the series is required.
 * @returns {string[]} sequence
 * @summary Big-O time complexity is O(n)
 */
function getFibonacciSequence(n) {
  const sequence = [];

  if (n > 0) {
    sequence[0] = 0;

    if (n > 1) {
      sequence[1] = 1;

      for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
    }
  }

  return sequence;
}

console.log(getFibonacciSequence(0));
console.log(getFibonacciSequence(1));
console.log(getFibonacciSequence(2));
console.log(getFibonacciSequence(3));
console.log(getFibonacciSequence(4));
console.log(getFibonacciSequence(5));
console.log(getFibonacciSequence(6));
console.log(getFibonacciSequence(7));
console.log(getFibonacciSequence(8));
console.log(getFibonacciSequence(9));
console.log(getFibonacciSequence(10));

/**
 * @description Function for getting the nth term from Fibonacci sequence.
 * @param {number} n nth term to be calculated.
 * @returns {number}
 * @summary Big-O time complexity is O(n)
 */
function getFibonacciTerm(n) {
  let nth_term;

  if (n > 0) {
    const sequence = getFibonacciSequence(n);
    nth_term = sequence[n - 1];
  }

  return nth_term;
}

console.log(getFibonacciTerm(0));
console.log(getFibonacciTerm(1));
console.log(getFibonacciTerm(2));
console.log(getFibonacciTerm(3));
console.log(getFibonacciTerm(4));
console.log(getFibonacciTerm(5));
console.log(getFibonacciTerm(6));
console.log(getFibonacciTerm(7));
console.log(getFibonacciTerm(8));
console.log(getFibonacciTerm(9));
console.log(getFibonacciTerm(10));
