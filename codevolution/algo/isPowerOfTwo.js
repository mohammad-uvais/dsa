function isPowerOfTwo(num) {
  if (num < 1) {
    return false;
  }

  let quotient = num;

  while (quotient > 1) {
    if (quotient % 2 !== 0) {
      return false;
    }

    quotient = quotient / 2;
  }

  return true;
}

// Big-O => O(logn)
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(9));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(16));
