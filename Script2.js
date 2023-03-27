// var a = 10;

// function aprintValue() {
//   console.log(a);
// }

// a = 20;

// aprintValue();

//-------------------------------------
//Execution Context

// var a = 2;

// function aSquare(num) {
//   var ans = num * num;
//   return ans;
// }

// var square2 = aSquare(a);
// a = 10;
// var square4 = aSquare(4);

//-------------------------------------
//Hoisting

// getName();
// console.log(a);

// var a = 2;

// function getName() {
//   console.log("HEllo World");
// }

//--------------------------

// var a = 1;
// var b1 = 2;
// function b() {
//   a = 10;
//   b1 = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a, b1);

//--------------------------

// function foo() {
//   function bar() {
//     return 3;
//   }
//   return bar();
//   function bar() {
//     return 8;
//   }
// }
// console.log(foo());

//--------------------------

// function parent() {
//   var hoisted = "I'm a variable";
//   function hoisted() {
//     return "I'm a function";
//   }
//   return hoisted();
// }
// console.log(parent());

//--------------------------
// console.log(foo());
// function foo() {
//   var bar = function () {
//     return 3;
//   };
//   return bar();
//   var bar = function () {
//     return 8;
//   };
// }
//--------------------------
// var myVar = "foo";
// (function () {
//   console.log("Original value was: " + myVar);
//   var myVar = "bar";
//   console.log("New value is: " + myVar);
// })();

//--------------------------
// function test() {
//   foo();
//   bar();
//   function foo() {}

//   // Function defined
//   // using function declaration
//   function foo() {
//     console.log("foo");
//   }

//   // Function defined
//   // using function expression
//   function bar() {
//     console.log("bar");
//   }

//   var bar;
// }

// test();
//--------------------------
//Undefined Vs Not defined

// let a = 10;

// function change() {
//   var a = 1;
//   this.a = 20;
//   console.log(a);
// }
// change();
// console.log(a);
//--------------------------

// var x = 1;

// function a() {
//   var y = 2;
//   function b() {
//     var z = 3;
//     x = 3;
//     console.log(x, y, z);
//   }

//   b();
// }
// a();
// console.log(x);

//--------------------------
//Use State working in JS

// function useState(value) {
//   function setState(newValue) {
//     value = newValue;
//   }
//   return [value, setState];
// }

// var [myName, setMyName] = useState("Nitish");

// console.log(myName); // Nitish

// setMyName("Nk");

// console.log(myName); // Nitish

//--------------------------
// const sortWord = (text) => [...text].sort().join("");
// console.log(sortWord("ZXYGDAC"));
//--------------------------
// const countVowel = (text) => {
//   return text.split("").reduce((count, char) => {
//     if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
//       count++;
//     }
//     return count;
//   }, 0);
// };

// console.log(countVowel("VAISHALI"));
//--------------------------

// const getCoins = (amt, coinSize, arr) => {
//   let count = amt / coinSize;
//   amt = amt % coinSize;

//   for (let i = 1; i <= count; i++) {
//     arr.push(coinSize);
//   }

//   return amt;
// };

// const getNumberOfCoins = (amt) => {
//   let arr = [];

//   while (amt !== 0) {
//     if (amt >= 20) {
//       amt = getCoins(amt, 20, arr);
//     } else if (amt >= 10) {
//       amt = getCoins(amt, 10, arr);
//     } else if (amt >= 5) {
//       amt = getCoins(amt, 5, arr);
//     } else if (amt >= 2) {
//       amt = getCoins(amt, 2, arr);
//     } else if (amt === 1) {
//       amt = getCoins(amt, 1, arr);
//     }
//   }

//   return arr;
// };

// console.log(getNumberOfCoins(157));

//--------------------------

//Optimisied

// const getCoins = (amt, coinSize, arr) => {
//   if (!amt) return;
//   let count = amt / coinSize;
//   amt = amt % coinSize;
//   for (let i = 1; i <= count; i++) {
//     arr.push(coinSize);
//   }
//   return amt;
// };

// const getNumberOfCoins = (amt, coinArr = []) => {
//   let arr = [];

//   coinArr.forEach((coin) => {
//     amt = getCoins(amt, coin, arr);
//   });

//   return arr;
// };

// console.log(getNumberOfCoins(58, [20, 10, 5, 2, 1]));

//--------------------------

//Get In Object

// const getCoins = (amt, coinSize, obj) => {
//   if (!amt) return;
//   let count = parseInt(amt / coinSize);
//   amt = amt % coinSize;
//   obj[coinSize] = count;
//   return amt;
// };

// const getNumberOfCoins = (amt, coinArr = []) => {
//   let obj = { amt };

//   coinArr.forEach((coin) => {
//     amt = getCoins(amt, coin, obj);
//   });

//   return obj;
// };

// console.log(getNumberOfCoins(55, [20, 10, 5, 2, 1]));

//--------------------------

//get sum vertically

// const getSum = (arr) => {
//   let result = [];
//   arr.forEach((element = []) => {
//     element.forEach((childElement, i) => {
//       if (result[i]) {
//         result[i] += childElement;
//       } else {
//         result[i] = childElement;
//       }
//     });
//   });

//   return result;
// };
// let arr = [
//   [1, 2, 3],
//   [3, 4, 9],
//   [5, 6],
//   [7, 8],
// ];

// console.log(getSum(arr));
//--------------------------

//get sum Herogentally

// const getSum = (arr) => {
//   let result = [];
//   arr.forEach((element = [], i) => {
//     result[i] = element.reduce((sum, num) => (sum += num), 0);
//   });

//   return result;
// };
// let arr = [
//   [1, 2, 3],
//   [3, 4, 9],
//   [5, 6],
//   [7, 8],
// ];

// console.log(getSum(arr));

//--------------------------

//Flatten an 2D array 1 level

// const flatArray = (arr = []) => {
//   // return [].concat(...arr);
//   return arr.flat();
// };

// let arr = [
//   [1, 2, 3],
//   [3, 4, 9],
//   [5, 6],
//   [7, 8],
// ];

// console.log(flatArray(arr));

//--------------------------
// const changeCase = (letter = "") => {
//   return letter === letter.toLowerCase()
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
// };

// const replaceChar = (word) => {
//   return word
//     .split("")
//     .map((e) => changeCase(e))
//     .join("");
// };

// const captialiseString = (text = "", fun) => {
//   return text.split(" ").map((word) => fun(word));
// };
// console.log(replaceChar("HelloWorld"));
//--------------------------

// const repeatWord = (text = "", times) => {
//   return Array(times).fill(text).join("");
// };
// console.log(repeatWord("Hello", 2));
//--------------------------
// const chopWord = (text = "", count) => {
//   let textArr = [...text];

//   let arr = [];
//   // while (textArr.length) {
//   //   arr.push(textArr.splice(0, count).join(""));
//   // }

//   for (let i = 0; i < text.length; i = i + count) {
//     arr.push(text.slice(i, i + count));
//   }

//   return arr;
// };
// console.log(chopWord("Nitish1", 2));
//--------------------------
// const reverseString = (text) => {
//   let newText = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     newText += text[i];
//   }
//   return newText;
// };

// console.log(reverseString("Hello"));
//--------------------------
// const middleThree = (text) => {
//   let middle = parseInt(text.length / 2);
//   console.log(middle);

//   return [...text]
//     .filter((e, i) => i <= middle + 1 && i >= middle - 1)
//     .join("");
// };
// console.log(middleThree("AA123AAA"));
//--------------------------
// const addInString = (text = "", position = 0, newText = "") => {
//   console.log(position);
//   return text.slice(0, position) + newText + text.slice(position);
// };

// console.log(addInString("My is Nitish"));
//--------------------------
// const generateOTP = (digit = 4) => {
//   let otp = "";

//   Array(digit)
//     .fill()
//     .forEach((e) => {
//       otp += Math.floor(Math.random() * 10);
//     });
//   return otp;
// };
// console.log(generateOTP(6));

//--------------------------

// let truncate = (text = "", times = 0) => {
//   return text.split(" ").slice(0, times).join(" ");
// };

// console.log(truncate("My Name is Nitish", 2));
//--------------------------
// const factorial = (number) => {
//   if (number === 1) {
//     return number;
//   }
//   return number * factorial(number - 1);
// };

// console.log(factorial(5));
//--------------------------

// const slasher = (arr = [], n) => {
//   return arr.slice(n);

//   // return arr.filter((_, i) => i >= n);
// };
// console.log(slasher(["a", "b", "c", "d"], 2));

//--------------------------

// const mutation = (arr = []) => {
//   let a = [...arr[0]];
//   let b = [...arr[1]];

//   return b.every((e) => a.includes(e));
// };
// console.log(mutation(["Hello", "Hel"]));
//--------------------------
// const removeFalsy = (arr = []) => arr.filter((e) => e);
// console.log(removeFalsy([1.2, 3, 4, null, false, 8, undefined, "", 0]));
//--------------------------
// const destroyer = (arr = [], ...nums) => {
//   return arr.filter((e) => !nums.includes(e));
// };
// console.log(destroyer([1, 2, 3, 4], 1, 2, 3, 4, 5));
//---------------------------------



//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

