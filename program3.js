// Write a JavaScript program to compute the sum of all the digits that occur in a given string.

let sumOfAll = (number) =>{
    let str = number.toString()
    let sum = 0
    for (let i = 0; i < str.toString().length; i++) {
        sum += parseInt(str[i]);
    }
    return sum
}

console.log(sumOfAll(1234))