// Basic approach
function isPrime(n) {
    if (n > 1) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) return false;
        }
        return true;
    } else {
        return false;
    }
}

// Optimized Solutions
function isPrime(n) {
    if (n > 1) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    } else {
        return false;
    }
}

console.log("0", isPrime(0));
console.log("1", isPrime(1));
console.log("2", isPrime(2));
console.log("3", isPrime(3));
console.log("4", isPrime(4));
console.log("5", isPrime(5));
console.log("6", isPrime(6));
console.log("7", isPrime(7));
console.log("8", isPrime(8));
console.log("9", isPrime(9));
