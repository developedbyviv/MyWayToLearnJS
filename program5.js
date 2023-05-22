// Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.

let sumOfCubes = (number) =>{
    let result = 0
    for (let i = 1; i <= number; i++) {
        result += i*i*i
    }
    return result
}

console.log(sumOfCubes(4))