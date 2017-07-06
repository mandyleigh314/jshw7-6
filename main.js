// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
  if (num1 > num2) {
    return num1
  } else (num1 < num2)
    return num2
}
console.log(max(4, 5))


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num3, num4, num5){
  if (num3 > num4 && num3 > num5) {
    return num3
  } if (num4 > num3 && num4 > num5) {
    return num4
  } else (num5 > num3 && num5 > num4)
  return num5
}
console.log(maxOfThree(6, 3, 8))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return "vowel"
    }
    else return "false"
}
console.log(isVowel('i'))


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num6, num7){
  return (num6 + num7)
}
console.log(sum(6, 7));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num8, num9, num10){
  return ((num8 + num9 + num10) / 3)
}
console.log(avg(10, 8, 6))

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(stringA){
  return stringA.length
}
console.log(getLength("wxyz"))

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num11, num12){
  if (num11 < num12) {
    return "true"
  } else return "false"
}
console.log(greaterThan(4, 5))
console.log(greaterThan(5, 5))
console.log(greaterThan(4, 2))

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
  return "Hello, " + (name)
}
console.log(greet("Mandy!"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1, word2, word3, word4){
  return "Learning to code is very " + (word1) + "and I really " + (word2) +
  "learning. " + (word3) + "it can be difficult at " + (word4)
}
console.log(madlib("fun", "like", "However", "times."))
