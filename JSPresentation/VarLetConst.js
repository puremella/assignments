// Var
// var x = 1;
// if (x === 1) {
//   var x = 2;
//   console.log(x);
//   // expected output: 2
// }
// console.log(x);
// // expected output: 2

// let
// let y = 1;
// if (y === 1) {
//   let y = 2;
//   console.log(y);
//   // expected output: 2
// }
// console.log(y);
// // expected output: 1

//const
const number = 42;
try {
  number = 99; //cannot reassign a constant
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
}
console.log(number);
// // expected output: 42
