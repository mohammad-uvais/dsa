// Array is an ordered collection of values

const arr = [1, 2, 3, "Uvais"];
arr.push(4); // Big - O = O(1)
arr.unshift(0); // Big - O = O(n)
arr.pop(); // Big - O = O(1)
arr.shift(); // Big - O = O(n)

for (const item of arr) {
  console.log(item);
}

// map, filter, reduce, concat, slice, and splice

// Insert / remove from end - O(1)
// Insert / remove from beginning - O(n)
// Access - O(1)
// Search - O(n)
// push / pop - O(1)
// shift / unshift / concat / slice / splice - O(n)
// forEach /  map / filter / reduce / - O(n)
