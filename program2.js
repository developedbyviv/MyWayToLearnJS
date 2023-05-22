// Write a JavaScript program to change the capitalization of all letters in a given string.

let capitalization = (str) =>{
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result = result.concat(str[i].toUpperCase())
        }else{
            result = result.concat(str[i])
        }
    }
    return result
}

console.log(capitalization("Hi5hi"))