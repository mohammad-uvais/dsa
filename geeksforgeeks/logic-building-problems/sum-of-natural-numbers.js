/**
 * @description Given a number n, find the sum of the first natural numbers.
 * @param {number} n
 * @returns {number}
 */
function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

// Big-O Time - O(n);
// Big-O Space - O(1);

console.log(findSum(3));
console.log(findSum(5));

/**
 * @description Given an integer n, your task is to compute the sum of all natural numbers from 1 to n (inclusive). If n is 0, the sum should be 0.
 * @param {number} n
 * @returns {number}
 */
function seriesSum(n) {
    return (n * (n + 1)) / 2;
}

console.log(seriesSum(1));
console.log(seriesSum(5));
