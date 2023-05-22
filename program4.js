// Write a JavaScript program to swap two halves of a given array of integers of even length

let swapTwoHalfs = (number) =>{
    // return number.toString().length
    if (number.toString().length % 2 === 0) {
        // return "Its Even"
        let str = number.toString()
        let firstHalf = str.slice(0,number.toString().length/2)
        let secondHalf = str.slice(number.toString().length/2,number.toString().length)
        let result = secondHalf + firstHalf
        return result
    } else {
        return "Can't Proceed! The Length of the give array are Odd"
    }
    // return str.slice(0,2)
}

console.log(swapTwoHalfs(123456789))