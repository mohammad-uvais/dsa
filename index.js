function isPrimeNumber(num) {
  let is_prime;

  if (num > 1) {
    is_prime = true;

    if (num % 2 === 0) {
      is_prime = false;
    } else {
      for (let i = 3; i < num / 2; i++) {
        if (num % i === 0) {
          is_prime = false;
          break;
        }
      }
    }
  }

  return is_prime;
}

console.log(isPrimeNumber(0));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(8));
console.log(isPrimeNumber(9));
