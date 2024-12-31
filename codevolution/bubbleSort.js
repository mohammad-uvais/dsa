function bubbleSort(arr) {
    let swapped = false;

    do {
        swapped = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);

// Big-O => O(n^2)