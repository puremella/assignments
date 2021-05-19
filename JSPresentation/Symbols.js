// In a JavaScript runtime environment,
// a symbol value is created by invoking the
// function Symbol, which dynamically produces
// an anonymous, unique value.

const sym1 = Symbol("ABCD");
const sym2 = Symbol("ABCD");
if (sym1 == sym2) {
  console.log(sym1);
}
console.log(sym1);
console.log(sym2);
