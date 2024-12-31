function recursiveFactorial(num) {
    if (num === 0) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// Big-O => O(n)