/**
 * @description Given two numbers a and b, the task is to swap them.
 * @param {number} a
 * @param {number} b
 * @returns {Array}
 */
function swapWithTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;

    return [a, b];
}

// Big-O Time - O(1)
// Big-O Space - O(1)

console.log(swapWithTemp(2, 3));
console.log(swapWithTemp(20, 0));
console.log(swapWithTemp(10, 10));

/**
 * @description Given two variables a and y, swap two variables without using a third variable.
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
function swapWithoutTemp(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return `a = ${a}, b = ${b}`;
}

console.log(swapWithoutTemp(2, 3));
console.log(swapWithoutTemp(20, 0));
console.log(swapWithoutTemp(10, 10));
