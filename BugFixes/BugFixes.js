// Bug fixes  all questions from https://edabit.com/

//--------------------------------------------------------
//1 Fix the Error: Value vs. Reference Types

// const checkEquals = (arr1, arr2) => {
//   return arr1.toString() == arr2.toString();
// };

// console.log(checkEquals([4, 7, 6], [4, 5, 6]));

//--------------------------------------------------------

// 2 Fix the Error: Flattening an Array

// function flatten(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2 = arr2.concat(arr[i]);
//   }
//   return arr2;
// }

// console.log(
//   flatten([
//     [true, false],
//     [false, false],
//   ])
// );

//--------------------------------------------------------
//3 Clone an Array

// function clone(arr) {
//   return [...arr, arr];
// }

// console.log(clone([1, 1]));
//--------------------------------------------------------

//4 Sum of Digits of a Positive Integer

// const sumDigit = (num) => {
//   if (num <= 0) {
//     return num;
//   }
//   return (num % 10) + sumDigit(parseInt(num / 10));
// };

// console.log(sumDigit(1234556));

//--------------------------------------------------------
// 5 ES6: Destructuring Objects VI

// function shirtSize(obj = { size: "big" }) {
//   let { size } = obj;
//   return size;
// }

// console.log(shirtSize());

//--------------------------------------------------------
// 6 Fix The Error: Array Reduce

// const calculateSum = (str) => {
//   return [...str].reduce((sum, e) => (sum += e.charCodeAt(0)), 0);
// };

// console.log(calculateSum("a"));

// const reverseString = (str) => {
//   return [...str].reduce((result, e, i) => {
//     result += str.charAt(str.length - 1 - i);
//     return result;
//   }, "");
// };

// console.log(reverseString("hello"));

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
