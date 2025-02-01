/**
 * @description Given a number n, we need to print its table.
 * @param {number} n
 */
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

/**
 * @description Create the multiplication table of a given number N and return the table as an array.
 * @param {number} N
 * @returns {Array}
 */
function getTable(N) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table[i - 1] = N * i;
    }
    return table;
}

// Big-O Time - O(1)
// Big-O Space - O(1)

printTable(5);
console.log(getTable(9));
