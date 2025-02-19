//Create program of which required map, filter chaining, and after that replace that with reduce
/* Ex. 
const students = [
{ name: 'jeel', age: 21 },
{ name: 'franklin', age: 25 },
{ name: 'vivek', age: 26 },
{ name: 'hardik', age: 23 },
]

create array of name of student  whose age is greater than 18 */

//using map filter chaining
const students = [
    { name: 'jeel', age: 21 },
    { name: 'franklin', age: 25 },
    { name: 'vivek', age: 26 },
    { name: 'hardik', age: 23 },
]

const studNames = students
                         .filter(student=>student.age>18)
                         .map(student =>student.name);

console.log(studNames);

//using reduce

const studnamesUsingReduce = students.reduce((accumulator,student)=>{
    if(student.age>18) accumulator.push(student.name);
    return accumulator;
},[]);

console.log(studnamesUsingReduce);