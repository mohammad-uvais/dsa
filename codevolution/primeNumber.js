function isPrime(num) {
    if (num % 2 === 0) {
        return false;
    } else {
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
}

// Big-O => O(n)

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(9));