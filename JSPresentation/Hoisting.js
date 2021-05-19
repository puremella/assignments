//Hoisting
function catName(name) {
  console.log("My cat's name is " + name);
}
catName("Tiger");

catName("Chloe");
function catName(name) {
  console.log("My cat's name is " + name);
}

// console.log(num);
// var num; // only Declaration are hoisted not
// num = 6; // Initialization
