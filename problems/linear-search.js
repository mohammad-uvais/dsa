/**
 * @description Searches a target element in the given array.
 * @param {number[]} arr Array of numbers.
 * @param {number} target Target element to be searched.
 * @returns index of the target element if present in the array.
 * @summary Big-O time complexity is O(n)
 */
function linearSearch(arr, target) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
    }
  }

  return index;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1
