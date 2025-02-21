//Create a function that takes an array and a callback function specifying the operation to be 
// performed on each element of the array. The function should return a new modified array.
//  (Don’t use map)


function modifyArr(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNum = modifyArr(numbers, num => num * num);

console.log(squaredNum);