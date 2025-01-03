// A map is an unordered collection of key-value pairs.
// Maps are iterables. They can be used with a for of loop

// Object vs Map
// Objects are unordered whereas maps are ordered
// Keys in objects can only be string or symbol type whereas in maps, they can be of any type
// Objects are not iterables whereas maps are iterables
// The number of items in an object must be determined manually where as it is readily available with the size property in a map
// Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);
map.delete("c");
console.log(map.has("a"));
console.log(map.size);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
