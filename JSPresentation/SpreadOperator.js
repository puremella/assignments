//Spread: used to split up array elements
// OR object properties
const numbers = [1, 2, 3];
function sum(x, y, z) {
   return x + y + z;
}


// expected output: 6

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [newNumber,...numberStore, newNumber];
console.log(numberStore);
