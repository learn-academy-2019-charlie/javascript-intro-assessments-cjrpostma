// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";



// 1. Write the code that returns 'B' from mantra.

returnsStringCharB = (str) => {
    return str.charAt(0)
}

// Test question 1
console.log(returnsStringCharB(mantra))



// 2. Write the code that determines if there is a 'x' in mantra.

checksStringForCharX = (str) => {
    return str.includes("x")
}

// Test question 2
console.log(checksStringForCharX(mantra))



// 3. Write the code that determines if there is a 'v' in mantra.

checksStringForCharV = (str) => {
    return str.includes("v")
}

// Test question 3
console.log(checksStringForCharV(mantra))



// Stretch: Write the code that returns the position of 'v' in mantra.

returnsStringIndexV = (str) => {
    return str.indexOf("v")
}

// Test question stretch
console.log(returnsStringIndexV(mantra))



// Consider the following statement:

var codingIsEasy = codingIsEasy
var imBored = imBored

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"



// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"



// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

returnsEachStringChar = (str) => {
    for(let i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}

returnsEachStringChar(mantra)



// Stretch: Using a while loop.

returnsEachStringCharWhile = (str) => {
    let i = 0
    while(i < str.length) {
        console.log(str[i])
        i++
    }
}

returnsEachStringCharWhile(mantra)



// Super Stretch: Using forEach().

returnsEachStringCharForEach = (...str) => {
    str.forEach(x => console.log(x))
}

returnsEachStringCharForEach(mantra)



// Consider the following variable:

var message = "adsasfksjbjkfasbdfloiuae"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

function checksIfString(x) {
  if (typeof x !== "string") {
    throw "Argument is not a string";
  }
}

removesVowels = (str) => {
    let newStr = ""
    checksIfString(str)
    // if(typeof str !== "string") {
    //     return "Please enter a string"
    // } else {
        for(let i = 0; i < str.length; i++) {
            if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
                newStr += str[i]
            }
        }        
    // }
    return newStr
}

console.log(removesVowels(message))



// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.



// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

checksForCats = (arr) => {
    let catArr = arr.filter(function(obj){
            return obj.animal === "cat"
    })
    return catArr
}

console.log(checksForCats(toonimals))