function binarySearch(arr, target) {
  if (arr.length > 0) {
    let start_index = 0;
    let end_index = arr.length - 1;

    while (start_index <= end_index) {
      let middle_index = Math.floor((start_index + end_index) / 2);

      if (arr[middle_index] === target) {
        return middle_index;
      }

      if (arr[middle_index] < target) {
        start_index = middle_index + 1;
      } else if (arr[middle_index] > target) {
        end_index = middle_index - 1;
      }
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
