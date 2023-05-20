// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.  

// need to check the length of the integer

const swapAdjacantDigits = (number) =>{
    let result = 0, x = 1
    if (number.toString().length % 2 == 0) {
        // its for to check weather its even or not
        
        while (number!=0) {
            let digit1 = number % 10
            let digit2 = ((number - digit1) / 10) % 10
            result += x * (10 * digit1 + digit2)
            number = Math.floor(number / 100)
            x *= 100
        }
    }else{
        return number
    }
    return result
}

console.log(swapAdjacantDigits(12345))
