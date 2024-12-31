function fibonacci(num) {
    const first_term = 0;
    const second_term = 1;

    if (num === 1) {
        return [first_term];
    } else if (num === 2) {
        return [first_term, second_term];
    } else if (num > 2) {
        const fibonacci_series = [first_term, second_term];

        for (let i = 2; i < num; i++) {
            const next_term = fibonacci_series[i - 1] + fibonacci_series[i - 2];

            fibonacci_series.push(next_term);
            // fibonacci_series[i] = next_term;
        }

        return fibonacci_series;
    }
}

// Big-O => O(n)

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(7));
