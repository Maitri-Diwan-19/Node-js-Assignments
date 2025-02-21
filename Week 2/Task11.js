// Create function that in which you have to pass number in diff function call and when you want result at the end you have to call function with no argument.
// Ex. magicFunction(2)(3)(4)(5)()
// output: 14

function magicFunction(num) {
  let sum = num;

  function inner(nextNum) {
    if (nextNum === undefined) return sum;
    sum += nextNum;
    return inner;
  }

  return inner;
}

console.log(magicFunction(2)(3)(4)(5)());
console.log(magicFunction(3)(4)(5)(6)());
