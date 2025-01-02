function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length > 0; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

console.log("cartesian product", cartesianProduct([1, 2], [3, 4, 5]));

// Big-O = O(mn)
