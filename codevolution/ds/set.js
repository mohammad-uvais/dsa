// A set is a DS that can hold a collection of UNIQUE values
// Sets are dynmically sized. You don't have to declare the size of a set before creating it
// Sets do not maintain an insertion order
// Sets are iterables. They can be used with a for of loop

// Set vs Array
// Array can contain duplicate values whereas Sets cannot
// Insertion order is maintained in arrays but its not the case with sets
// Searching and deleting an element in the set is faster as compared to arrays

const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));
set.delete(3);
console.log(set.size);
set.clear();
for (const item of set) {
  console.log(item);
}
