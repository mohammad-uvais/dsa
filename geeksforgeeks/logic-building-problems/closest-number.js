/**
 * Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one having maximum absolute value.
 */

function closestNumber(n, m) {
    // find the quotient
    let closest = 0;
    let minDifference = Infinity;

    // Check numbers around n
    for (let i = n - Math.abs(m); i <= n + Math.abs(m); i++) {
        if (i % m === 0) {
            let difference = Math.abs(n - i);

            if (
                difference < minDifference ||
                (difference === minDifference &&
                    Math.abs(i) > Math.abs(closest))
            ) {
                closest = i;
                minDifference = difference;
            }
        }
    }
    return closest;
}

function closestNumber(n, m) {
    // find the quotient
    let q = parseInt(n / m);

    // 1st possible closest number
    let n1 = m * q;

    // 2nd possible closest number
    let n2 = n * m > 0 ? m * (q + 1) : m * (q - 1);

    // if true, then n1 is the
    // required closest number
    if (Math.abs(n - n1) < Math.abs(n - n2)) return n1;

    // else n2 is the required
    // closest number
    return n2;
}

console.log(closestNumber(13, 4));
console.log(closestNumber(-15, 6));
