// Array Hard Level from https://edabit.com/

//--------------------------------------------------------
//Seven Boom!

// const sevenBoom = (arr) => {
//   return arr.some((e) => e.toString().includes(7));
// };

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 87]));
//--------------------------------------------------------

//Number of Boomerangs

// const countBoomerangs = (arr) => {
//   let count = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i - 1] === arr[i + 1] && arr[i] !== arr[i - 1]) {
//       console.log([arr[i - 1], arr[i], arr[i + 1]]);
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

//--------------------------------------------------------

//Length of a Nested Array

// const getLength = (arr = []) => {
//   return arr.reduce((newArr, element) => {
//     if (Array.isArray(element)) {
//       return [...newArr, ...getLength(element)];
//     } else {
//       return [...newArr, element];
//     }
//   }, []);
// };

// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]).length);
//--------------------------------------------------------

//Numbers in Strings

// const numInStr = (arr) =>
//   arr.filter((e) => {
//     var hasNumber = /\d/;
//     return hasNumber.test(e);
//   });

// console.log(numInStr(["this is a test", "test1"]));
//--------------------------------------------------------

//Basic Arithmetic Operations on a String Number

// const arithmeticOperation = (str) => {
//   let [first, operator, second] = str.split(" ");

//   switch (operator) {
//     case "+":
//       return parseInt(first) + parseInt(second);
//     case "-":
//       return parseInt(first) - parseInt(second);
//     case "*":
//       return parseInt(first) * parseInt(second);
//     case "/":
//       return second == 0 ? -1 : parseInt(first) / parseInt(second);
//     default:
//       break;
//   }
// };

// console.log(arithmeticOperation("12 / 2"));

//--------------------------------------------------------
// 6 Positive Dominant

// const isPositiveDominant = (arr) => {
//   let unique = [...new Set(arr)];

//   let pCount = 0;
//   let nCount = 0;

//   unique.forEach((e) => {
//     if (e >= 0) {
//       pCount++;
//     } else {
//       nCount++;
//     }
//   });
//   return pCount > nCount;
// };

// console.log(isPositiveDominant([0, -4, -1]));

//--------------------------------------------------------

// 7 Calculate the Total Price of

// const getTotalPrice = (arr) => {
//   return arr.reduce((sum, e) => {
//     sum += e.price * e.quantity;
//     return sum;
//   }, 0);
// };

// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Eggs", quantity: 12, price: 0.1 },
//     { product: "Bread", quantity: 2, price: 1.6 },
//     { product: "Cheese", quantity: 1, price: 4.5 },
//   ])
// );

//--------------------------------------------------------

// 8 Convert "Zero" and "One" to "1" and "0"

// const textToNumberBinary = (str) => {
//   let arr = str
//     .split(" ")
//     .map((e) =>
//       e.toLowerCase() === "one" ? 1 : e.toLowerCase() === "zero" ? 0 : ""
//     )
//     .filter((e) => e === 1 || e === 0);

//   if (arr.length % 8 === 0) {
//     return arr.join("");
//   }

//   if (arr.length > 8) {
//     return arr.slice(0, 8).join("");
//   }

//   return "";
// };

// console.log(textToNumberBinary("zero one zero one zero one zero three"));
//--------------------------------------------------------

// 9 Switching Between Pencils

// const colorPatternTimes = (arr) => {
//   return arr.reduce((sum, col, i) => {
//     //Checking if user have switched colors
//     if (i !== 0 && col !== arr[i - 1]) {
//       sum += 1;
//     }
//     // Adding Values in colors
//     sum += 2;
//     return sum;
//   }, 0);
// };

// console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]));
//--------------------------------------------------------

// 10 Word to Bitstring to Boolean Array

// const toBoolArray = (str) => {
//   return str.split("").map((e) => e.charCodeAt(0) % 2 !== 0);
// };

// console.log(toBoolArray("tesh"));

//--------------------------------------------------------

// 11 Burglary Series (15): Number of Occurrences

// const countNumberOfOccurrences = (obj) => {
//   return Object.values(obj).reduce((newObj, val) => {
//     if (val in newObj) {
//       newObj[val] = newObj[val] + 1;
//     } else {
//       newObj[val] = 1;
//     }
//     return newObj;
//   }, {});
// };

// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "scumbag",
//     c: "moron",
//     d: "idiot",
//     e: "idiot",
//   })
// );

//--------------------------------------------------------
//12 Broken Keyboard

// const findBrokenKeys = (str1, str2) => {
//   let record = [...str1].filter((e, i) => str2.charAt(i) != e);
//   return [...new Set(record)];
// };

// console.log(findBrokenKeys("beethoven", "affthoif5"));

//--------------------------------------------------------
//13 Finding Common Elements

// const commonElements = (arr1, arr2) => {
//   return arr2.filter((e) => arr1.includes(e));
// };

// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));

//--------------------------------------------------------
//14 Moving Partition

// const movingPartition = (arr) => {
//   return arr.reduce((newArr, e, i) => {
//     let leftValues = arr.slice(0, i + 1);
//     let rightValues = arr.slice(i + 1);

//     if (i < arr.length - 1) {
//       newArr = [...newArr, [leftValues, rightValues]];
//     }
//     return newArr;
//   }, []);
// };
// console.log(movingPartition([-1, -1, -1, -1]));

//--------------------------------------------------------

//15 The Frugal Gentleman

// const chosenWine = (arr) => {
//   if (!arr.length) return null;
//   if (arr.length === 1) return arr[0].name;

//   //-------

//   return arr.sort((a, b) => (a.price > b.price ? 1 : -1))[1].name;
// };

// console.log(
//   chosenWine([
//     { name: "Wine A", price: 8.99 },
//     { name: "Wine 32", price: 13.99 },
//     { name: "Wine 9", price: 10.99 },
//   ])
// );

//--------------------------------------------------------

//16 Two Distinct Elements

// const returnUnique = (arr) => {
//   //fist way

//   // return arr.filter((e) => {
//   //   return arr.filter((n) => n === e).length === 1;
//   // });

//   let obj = arr.reduce((newObj, e) => {
//     if (e in newObj) {
//       newObj[e] = newObj[e] + 1;
//     } else {
//       newObj[e] = 1;
//     }
//     return newObj;
//   }, {});

//   return Object.keys(obj).filter((e) => obj[e] === 1);

//   //
// };

// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

//--------------------------------------------------------

//17 Multiplication Table
// const multiplicationTable = (n) => {
//   function getTable(n, s) {
//     let arr = [];

//     for (let i = 1; i <= s; i++) {
//       arr.push(n * i);
//     }
//     return arr;
//   }

//   return Array(n)
//     .fill()
//     .map((_, i) => getTable(i + 1, n));
// };

// console.log(multiplicationTable(5));

//--------------------------------------------------------

//18 The Antipodes Average

// const antipodesAverage = (arr) => {
//   let left = [];
//   let right = [];
//   let mid = arr.length / 2;

//   if (arr.length % 2 === 0) {
//     left = arr.slice(0, mid);
//     right = arr.slice(mid);
//   } else {
//     left = arr.slice(0, mid);
//     right = arr.slice(mid + 1);
//   }

//   right = right.reverse();

//   return left.map((e, i) => (left[i] + right[i]) / 2);
// };

// console.log(antipodesAverage([1, 2, 3, 4]));

//--------------------------------------------------------

//19 Divide Array into Chunks

// const chunkify = (arr, n) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i = i + n) {
//     newArr.push(arr.slice(i, i + n));
//   }

//   // while (arr.length) {
//   //   temp = arr.splice(0, n);
//   //   newArr.push(temp);
//   // }

//   return newArr;
// };
// console.log(chunkify([2, 3, 4, 5, 6], 2));

//--------------------------------------------------------

//###################################################################### NOT COMPLETED #############################################################

// 20 Burglary Series (22): Sign All

// const signAll = (obj, sign) => {
//   return Object.keys(obj).reduce((newObj, key) => {
//     // console.log(key, obj[key], obj);

//     if (typeof obj[key] === "object") {
//       let temp = obj[key];

//       console.log(temp);

//       if ("signature" in temp) {
//         temp["signature"] = sign;
//       }

//       newObj = { ...obj, ...temp };
//     } else if (key === "signature") {
//       newObj[key] = sign;
//     }
//     return newObj;
//   }, {});
// };

// const obj = {
//   kitchen: {
//     painting: 100,
//     piano: 1000,
//     signature: "",
//   },
//   bathroom: {
//     stereo: 220,
//     signature: "",
//   },
//   signature: "",
// };

// console.log(signAll(obj, "Rocky"));

//--------------------------------------------------------

// 21 Concatenate to Form Target Array

// const flatArray = (arr = []) => {
//   return arr.reduce((newArr, el) => {
//     if (Array.isArray(el)) {
//       newArr = [...newArr, ...flatArray(el)];
//     } else {
//       newArr = [...newArr, el];
//     }
//     return newArr;
//   }, []);
// };

// const canConcatenate = (arr1, arr2) => {
//   return arr2.every((e) => flatArray(arr1).includes(e));
// };

// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7, 6],
//     ],
//     [7, 6, 5, 4, 3, 2, 1]
//   )
// );

//--------------------------------------------------------

// 22 Combined Consecutive Sequence

// const consecutiveCombo = (arr1, arr2) => {
//   let sortedArr = [...arr1, ...arr2].sort((a, b) => (a > b ? 1 : -1));

//   return sortedArr.every((e, i) => {
//     if (i < sortedArr.length - 1) {
//       return e === sortedArr[i + 1] - 1;
//     }
//     return true;
//   });
// };

// console.log(consecutiveCombo([44, 46], [45]));
//--------------------------------------------------------

//23 How Many Unique Styles?

// const uniqueStyles = (arr) => {
//   let allArr = arr.reduce((newArr, el) => {
//     newArr = [...newArr, ...el.split(",")];
//     return newArr;
//   }, []);

//   return [...new Set(allArr)].length;
// };

// console.log(
//   uniqueStyles([
//     "Dub,Dancehall",
//     "Industrial,Heavy Metal",
//     "Techno,Dubstep",
//     "Synth-pop,Euro-Disco",
//     "Industrial,Techno,Minimal",
//   ])
// );

//--------------------------------------------------------

//24 Burglary Series (16): Nested objects

// const determineWhoCursedTheMost = (obj) => {
//   let myScore = 0;
//   let spouseScore = 0;
//   Object.keys(obj).forEach((e) => {
//     myScore += obj[e]["me"];
//     spouseScore += obj[e]["spouse"];
//   });

//   return myScore > spouseScore
//     ? "ME!"
//     : myScore < spouseScore
//     ? "SPOUSE !"
//     : "DRAW";
// };

// console.log(
//   determineWhoCursedTheMost({
//     round1: {
//       me: 10,
//       spouse: 5,
//     },
//     round2: {
//       me: 9,
//       spouse: 44,
//     },
//     round3: {
//       me: 10,
//       spouse: 55,
//     },
//   })
// );
//--------------------------------------------------------

//25 Is It a Probability Matrix?

// const isProbMatrix = (arr) => {
//   return arr.every((e) => {
//     let checkIfSquare = e.length === arr.length;
//     let sumOfAll = e.reduce((sum, el) => (sum += el), 0);
//     return checkIfSquare && sumOfAll === 1 && e.every((e) => e <= 1 && e >= 0);
//   });
// };

// console.log(
//   isProbMatrix([
//     [0.5, 0.4],
//     [0.5, 0.6],
//   ])
// );

//--------------------------------------------------------

//26 Enter the Matrix

// const transposeMatrix = (arr) => {
//   return arr.reduce((str, el = []) => {
//     str += el.slice(",").join(" ") + " ";
//     return str;
//   }, "");
// };

// console.log(
//   transposeMatrix([
//     ["You", "the"],
//     ["must", "table"],
//     ["transpose", "order."],
//   ])
// );

//--------------------------------------------------------

//27 Triple Letter Groupings

// const threeLetterCollection = (str) => {
//   if (str.length < 3) return [];

//   let arr = [];
//   for (let i = 0; i < str.length - 2; i++) {
//     arr.push(str.slice(i, i + 3));
//   }
//   return arr;
// };

// console.log(threeLetterCollection("slap"));

//--------------------------------------------------------

//28 Who Left the Array?

// const missing = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return arr1[i];
//     }
//   }
// };

// console.log(
//   missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])
// );

//--------------------------------------------------------

// 29 Array Chunking
// const chunk = (arr, n) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i += n) {
//     result.push(arr.slice(i, i + n));
//   }
//   return result;
// };

// console.log(chunk([1, 2, 3, 4], 2));

//--------------------------------------------------------

//30 Gold Distribution

// const goldDistribution = (arr = []) => {
//   let mubashirTurn = true;
//   let mubashirScore = 0;
//   let mattScore = 0;

//   function assignData(arr) {
//     let firstVal = arr[0];
//     let lastVal = arr[arr.length - 1];

//     if (firstVal >= lastVal) {
//       return arr.shift();
//     } else {
//       return arr.pop();
//     }
//   }

//   while (arr.length) {
//     if (mubashirTurn) {
//       mubashirScore += assignData(arr);
//       mubashirTurn = false;
//     } else {
//       mattScore += assignData(arr);
//       mubashirTurn = true;
//     }
//   }

//   return [mubashirScore, mattScore];
// };

// console.log(goldDistribution([10, 9, 1, 2, 8, 4]));
//--------------------------------------------------------

//###################################################################### NOT COMPLETED #############################################################

// 31 All Rotations of a String

// leftRotations("abc") ➞ ["abc", "bca", "cab"]

// rightRotations("abc") ➞ ["abc", "cab", "bca"]

// leftRotations("abcdef")
// ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

// rightRotations("abcdef")
// ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

// const leftRotations = (str) => {
//   return str.substring(1, -3);
// };

// console.log(leftRotations("abc"));

//--------------------------------------------------------

//32 Reorder Digits

// const reorderDigits = (arr, order) => {
//   return arr
//     .map((e) =>
//       [...e.toString()]
//         .sort((a, b) => {
//           if (order === "asc") {
//             return a - b;
//           }
//           return b - a;
//         })
//         .join("")
//     )
//     .map((e) => parseInt(e));
// };

// console.log(reorderDigits([515, 341, 98, 44, 211], "des"));

//--------------------------------------------------------

//33 Case and Index Inverter

// const invert = (str) => {
//   return [...str]
//     .reverse()
//     .map((e) => (e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase()))
//     .join("");
// };

// console.log(invert("step on NO PETS"));

//--------------------------------------------------------

//34 Pluralize!
// const pluralize = (arr) => {
//   return [
//     ...new Set(
//       arr.map((word) =>
//         arr.filter((e) => e === word).length > 1 ? word + "s" : word
//       )
//     ),
//   ];
// };

// console.log(pluralize(["chair", "pencil", "arm"]));
//--------------------------------------------------------

//35 You Sunk My Battleship!

// const fire = (arr, pos) => {
//   let f = pos.charCodeAt(0) - 65;
//   let s = parseInt(pos.charAt(1)) - 1;
//   return arr[f][s] === "*" ? "Boom" : "Splash";
// };
// let arr = [
//   [".", ".", ".", "*", "*"],
//   [".", "*", ".", ".", "."],
//   [".", "*", ".", ".", "."],
//   [".", "*", ".", ".", "."],
//   [".", ".", "*", "*", "."],
// ];
// console.log(fire(arr, "D2"));

//--------------------------------------------------------

//36 Weekly Salary

// const weeklySalary = (arr) => {
//   function calPerdaySal(hrs, day) {
//     let sum = 0;

//     if (hrs <= 8) {
//       sum += hrs * 10;
//     }

//     if (hrs > 8) {
//       let diff = hrs - 8;
//       sum += hrs * 10 + diff * 5;
//     }

//     if (day > 5) {
//       return sum * 2;
//     }
//     return sum;
//   }

//   return arr.reduce((sum, hrs, index) => {
//     sum += calPerdaySal(hrs, index + 1);
//     return sum;
//   }, 0);
// };

// console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
//--------------------------------------------------------

//37 //Get Students with Names and Top Notes

// const getStudentsWithNamesAndTopNotes = (arr) => {
//   return arr.map((e) => {
//     e["topNotes"] = Math.max(...e.notes);
//     delete e.notes;
//     return e;
//   });
// };

// console.log(
//   getStudentsWithNamesAndTopNotes([
//     { name: "John", notes: [3, 5, 4] },
//     { name: "Max", notes: [1, 4, 6] },
//     { name: "Zygmund", notes: [1, 2, 3] },
//   ])
// );

//--------------------------------------------------------

//38 Scoring a Field Goal

// const isGoalScored = (arr) => {
//   let goalArea = arr.filter((e, i) => i < 3).map((e) => e.join("").trim());

//   let found = false;
//   goalArea.forEach((e) => {
//     let startIndex = e.indexOf("#");
//     let endIndex = e.lastIndexOf("#");
//     let indexOfBall = e.indexOf("0");

//     if (
//       indexOfBall != -1 &&
//       indexOfBall < endIndex &&
//       indexOfBall > startIndex
//     ) {
//       found = true;
//     }
//   });

//   return found;
// };

// console.log(
//   isGoalScored([
//     ["  #     #  "],
//     ["  #     #  "],
//     ["  #  0  #  "],
//     ["  #######  "],
//     ["     #     "],
//     ["     #     "],
//     ["     #     "],
//   ])
// );

//--------------------------------------------------------

//39 Expand a Number I

// const expandedForm = (num) => {
//   num = num.toString();
//   let arr = [];
//   [...num].forEach((e, i) => {
//     if (e !== "0") {
//       arr.push(e + "0".repeat(num.length - (i + 1)));
//     }
//   });

//   return arr.join(" + ");
// };

// console.log(expandedForm(1037903));

//--------------------------------------------------------

//40 Diamond Shaped Array

// const diamondArrays = (n) => {
//   function createArr(n) {
//     return Array(n)
//       .fill()
//       .map((_) => n);
//   }

//   let ascOrder = Array(n)
//     .fill()
//     .map((_, i) => createArr(i + 1));

//   let descOrder = [...ascOrder].reverse().slice(1);
//   return ascOrder.concat(descOrder);
// };

// console.log(diamondArrays(5));
//--------------------------------------------------------

//41 Balanced Array

// const balanced = (arr) => {
//   let firstHalf = arr.slice(0, arr.length / 2);
//   let secondHalf = arr.slice(arr.length / 2);

//   let firsHalfSum = firstHalf.reduce((sum, a) => (sum += a), 0);
//   let secondHalfSum = secondHalf.reduce((sum, a) => (sum += a), 0);

//   if (firsHalfSum === secondHalfSum) {
//     return arr;
//   }
//   if (firsHalfSum > secondHalfSum) {
//     return firstHalf.concat(firstHalf);
//   }
//   return secondHalf.concat(secondHalf);
// };

// console.log(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]));

//--------------------------------------------------------

//42 Building a Staircase

// const buildStaircase = (n, char) => {
//   function createStair(n, index, char) {
//     return Array(n)
//       .fill()
//       .map((e, i) => (i <= index ? char : "_"));
//   }
//   return Array(n)
//     .fill()
//     .map((e, i) => createStair(n, i, char));
// };

// console.log(buildStaircase(4, "A"));

//--------------------------------------------------------

//43 Matrix Transpose

// const makeTranspose = (arr) => {
//   return arr.reduce((newArr, ar, i) => {
//     newArr[i] = arr.map((e) => e[i]);
//     return newArr;
//   }, []);
// };

// console.log(
//   makeTranspose([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

//--------------------------------------------------------

//44 Modify Words

// Array.prototype.reverse = function () {
//   return this.map((e, i) => this[this.length - 1 - i]);
// };

// const modify = (str) => {
//   return [...str].reverse().join("");
// };

// const editWords = (arr) => {
//   return arr.map((e) => modify(e.toUpperCase()));
// };

// console.log(editWords(["null", "undefined"]));

//--------------------------------------------------------
//45 Burglary Series (05): Third Most Expensive

// const thirdMostExpensive = (obj) => {
//   let arr = Object.keys(obj);

//   if (arr.length < 3) {
//     return false;
//   }

//   return arr.sort((a, b) => (obj[a] > obj[b] ? 1 : -1));
// };

// console.log(
//   thirdMostExpensive({ piano: 1000, tv: 500, ball: 10, mirror: 200 })
// );

//--------------------------------------------------------

//46 Beginning and End Pairs

// const pairs = (arr = []) => {
//   let result = [];

//   while (arr.length) {
//     if (arr.length !== 1) {
//       let first = arr.shift();
//       let last = arr.pop();
//       result.push([first, last]);
//     } else {
//       let first = arr.shift();
//       result.push([first, first]);
//     }
//   }

//   return result;
// };

// console.log(pairs([1, 2, 3, 5, 6, 7]));

//--------------------------------------------------------

//47 Letter Occurrences Per Word

// const findOccurrences = (str, char) => {
//   return str.split(" ").reduce((obj, word) => {
//     obj[word.toLowerCase()] = [...word].filter(
//       (e) => e.toLowerCase() === char.toLowerCase()
//     ).length;
//     return obj;
//   }, {});
// };

// console.log(
//   findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A")
// );

//--------------------------------------------------------

//48 Round to Closest N

// function roundNumber(num, n) {
//   let quotient = Math.floor(num / n);
//   let lowerNum = n * quotient;
//   let upperNum = n * (quotient + 1);
//   if (Math.abs(num - lowerNum) < Math.abs(num - upperNum)) {
//     return lowerNum;
//   } else if (Math.abs(num - upperNum) < Math.abs(num - lowerNum)) {
//     return upperNum;
//   } else {
//     return Math.max(lowerNum, upperNum);
//   }
// }

// console.log(roundNumber(46, 7));

//--------------------------------------------------------

//49 Spaces Apart

// const spaceApart = (arr = []) => {
//   let firsIndex = arr.indexOf("1");
//   let lastIndex = arr.lastIndexOf("1");

//   if (firsIndex == lastIndex) {
//     return "Invalid";
//   }

//   let sum = 0;
//   for (let i = firsIndex + 1; i < lastIndex; i++) {
//     const element = arr[i];
//     if (element > 0) {
//       sum += element;
//     } else {
//       return "Invalid";
//     }
//   }

//   return sum;
// };

// console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]));

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
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
