//rest parameters are Array instances, 
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// function sortRestArgs(...theArgs) {
//   let sortedArgs = theArgs.sort();
//   return sortedArgs;
// }

// console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7
