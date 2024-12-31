function getFactorial(num) {
  let factorial;

  if (num >= 0) {
    factorial = 1;

    for (let i = 2; i <= num; i++) {
      factorial = factorial * i;
    }
  }

  return factorial;
}

console.log(getFactorial(-1));
console.log(getFactorial(0));
console.log(getFactorial(1));
console.log(getFactorial(2));
console.log(getFactorial(3));
console.log(getFactorial(4));
console.log(getFactorial(5));
