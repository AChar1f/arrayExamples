// How to create an Array

//  Array Literal
let numbers = [9, 3, 8,11]

// Array constructor
// let data = new Array('Mustafa', 'Jason', 15, 80)

// Array.of()
let myArr1 = Array.of(9, 2, 4)

//  Array.from() : use an existing array
let myArr2 = Array.from(numbers)

// Array.fill()
let emoji = new Array(4).fill('👾')

//  Array Literal
let numberz = [10, 7, 8, 2]
numberz.push(16, 'Cerberus')
console.log(numberz)
numberz.pop()       //removes last element
console.log(numberz)
console.log(numberz.pop()) // displays the removed element
console.log(numberz)

// Find an element
console.log(numberz.find( value => value == 2)) // returns the value we look for if it is in the dataset

// Find an indexx
console.log(numberz.findIndex( value => value == 8)) //returns the index

// Joel's Solution
let data = new Array(1, 6, 5, 9, 11)
// function middleElement(arr) {
//     let index = Math.trunc((arr.length -1) / 2) // 4-1 = 3 / 2 = Math.trunc(1.5) = 1
//     if (index % 2 ==0) {
//         console.log(arr[index])
//     } else {
//         console.log(arr[index], arr[index + 1])
//     }
// }

// middleElement(numberz)


let oddNumbers =  [5, 7, 9]
// How to combime arrays
let combArr = numbers.concat(oddNumbers)
console.log(combArr)

// Spread Operator
let combArr2 = [... numberz, ...oddNumbers]
console.log(combArr2)

// Sorting an Array : 
//.sort() allows you to sort array in ascending order and mutates the original array
// numberz.sort((a, b) => a - b)
// console.log(numberz)

// sort( (curr, next) => curr - next)
//  10, 7, 8, 2 : using this array and the formula above will generate the following way
// 7(10-7= positive. swap them around), 8(10-8=positive.swap), 10(10-2=negative.Maintain this position). Since we want to sort for ascending order and 2 is not in its proper position we repeat the formula with the 2 and it will end up looking like this:
// 2, 7, 8, 10

// .toSorted() allows you to sort array in ascending or decending without mutating the original array
// let sortedNumbers = numberz.toSorted((c, n) => c - n)
// console.log(sortedNumbers)

// .filter() allows you to find an element in an array
console.log(numberz.filter( value => value == 2)) 
console.log(numberz.filter(value => value%2 >= 1)) // searches for odd numbers in an array

//Map(): allows you to modify each element/multiple in an array via a set condition

// console.log('=')
// console.log(numberz)
// numberz[0] = 3
// console.log(numberz)

// console.log('Original Array')
// console.log(numberz)
// console.log('map()')
// console.log(numberz.map(double))

// function double(c) {
//     return c * 2
// }
