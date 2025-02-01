/**
 * @description Given a number n, check whether it is even or odd. Return true for even and false for odd.
 * @param {number} n Number to be checked
 * @returns {boolean}
 */
function isEven(n) {
    return n % 2 == 0;
}

// Big-O Time - O(1)
// Big-O Space - O(1)

console.log(isEven(101));
console.log(isEven(2));
console.log(isEven(5));
