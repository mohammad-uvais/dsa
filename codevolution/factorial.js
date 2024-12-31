function factorial(num) {
    if (num === 0) {
        return 1;
    } else if (num > 0) {
        let result = 1;

        for (let i = 2; i <= num; i++) {
            result = result * i;
        }

        return result;
    }
}

// Big-O => O(n)

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));