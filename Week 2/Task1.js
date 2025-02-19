//Create example of function currying using closure and bind Ex. multiply by 2 from multiplication function

//using Closure
function multiplication(a){
    return function(b){
        return a*b;
    }
}
const multiplicationBy2= multiplication(2);
console.log(multiplicationBy2(6));

//using Bind
function multiply(a,b)
{
    return a*b;
}

const multiplyBy2= multiply.bind(null,2);//we can also use bind(undefined,2)
console.log(multiplyBy2(10));