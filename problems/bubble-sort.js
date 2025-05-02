function bubbleSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// const arr = [8, 20, -2, 4, -6];
const arr = [64, 34, 25, 12, 22, 11, 90, 5];
bubbleSort(arr);
console.log(arr);
