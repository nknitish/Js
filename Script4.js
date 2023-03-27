// EDABIT
// ARRAY EASY && MEDIUM

// console.log(splitNumber(-9));

// function sortByLength(arr) {
//   return arr.sort((a, b) => (a.length > b.length ? 1 : -1));
// }

// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

//--------------------------------------------------------

// const splitNumber = (num) => {
//   let firstNum = parseInt(num / 2);
//   let secondNum = num - firstNum;

//   if (secondNum > firstNum) return [firstNum, secondNum];

//   return [secondNum, firstNum];
// };

//--------------------------------------------------------

// const calculateDifference = (obj, number) => {
//   let sum = Object.entries(obj).reduce(
//     (sum, [key, value]) => (sum += value),
//     0
//   );

//   return sum - number;
// };

// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//--------------------------------------------------------

// const isAvgWhole = (arr) => {
//   let sum = arr.reduce((sum, value) => (sum += value), 0);

//   if (sum % arr.length === 0) return true;

//   return false;
// };

// console.log(isAvgWhole([9, 2, 2, 5]));

//--------------------------------------------------------

// const getAbsSum = (arr) =>
//   arr.reduce((sum, value) => (sum += Math.abs(value)), 0);
// let arr = [-3, -4, -10, -2, -3];
// console.log(getAbsSum(arr));

//--------------------------------------------------------

// const sortNumsAscending = (arr) => {
//   return arr.filter((e) => e).sort((a, b) => (a > b ? 1 : -1));
// };
// let arr = [null];
// console.log(sortNumsAscending(arr));

//--------------------------------------------------------

// const findLargestNums = (arr) => {
//   function getMax(arr = []) {
//     let max = arr[0];
//     arr.forEach((e) => {
//       if (e < max) {
//         max = e;
//       }
//     });
//   }

//   let result = [];

//   arr.forEach((element, index) => {
//     result[index] = getMax(element);
//   });
//   return result;
// };

// let arr = [
//   [0.4321, 0.7634, 0.652],
//   [1.324, 9.32, 2.5423, 6.4314],
//   [9, 3, 6, 3],
// ];

// console.log(findLargestNums(arr));

//--------------------------------------------------------
// function set(arr) {
//   //   return [...new Set(arr)];

//   let obj = {};
//   arr.forEach((element) => {
//     obj[element] = 0;
//   });
//   return Object.keys(obj);
// }
// let arr = [5, 7, 8, 9, 10, 15];

// console.log(set(arr));

//--------------------------------------------------------
// function formatPhoneNumber(arr) {
//   let str = "";
//   arr.forEach((e, i) => {
//     if (i === 0) {
//       str += "(";
//     }
//     if (i === 3) {
//       str += ") ";
//     }
//     if (i === 6) {
//       str += "-";
//     }
//     str += e;
//   });

//   return str;
// }
// let arr = [5, 1, 9, 5, 5, 5, 4, 4, 6, 8];
// console.log(formatPhoneNumber(arr));

//--------------------------------------------------------
// function societyName(arr) {
//   return arr
//     .map((name) => name[0])
//     .sort()
//     .join("");
// }

// let arr = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];
// console.log(societyName(arr));

//--------------------------------------------------------
// function arrayOperation(x, y, n) {
//   let arr = [];
//   for (let i = x; i <= y; i++) {
//     if (i % n === 0) arr.push(i);
//   }
//   return arr;
// }

// console.log(arrayOperation(15, 20, 7));

//--------------------------------------------------------

// function maxTotal(arr) {
//   return arr
//     .sort((a, b) => (a > b ? -1 : 1))
//     .filter((_, i) => i < 5)
//     .reduce((sum, value) => (sum += value), 0);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(maxTotal(arr));
//--------------------------------------------------------

// function isOmnipresent(arr, number) {
//   return arr.every((e) => e.includes(number));
// }

// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6));
//--------------------------------------------------------

// function toArray(num) {
//   return [...num.toString()].map((e) => {
//     if (typeof num === "number") return parseInt(e);
//     return e;
//   });
// }

// function toNumber(arr = []) {
//   return arr.join("");
// }

// console.log(toNumber([0]));
// console.log(toArray(0));

//--------------------------------------------------------

// function isSubset(a, b) {
//   return a.every((e) => b.includes(e));
// }

// console.log(isSubset([1, 2], [3, 5, 9, 1]));

//--------------------------------------------------------

// function sliceSum(arr, n) {
//   return arr.slice(0, n).reduce((sum, value) => (sum += value), 0);
// }
// console.log(sliceSum([3, 6, 2], 0));
//--------------------------------------------------------

// function countOnes(arr) {
//   const getCountOfOne = (arr) => {
//     return arr.reduce((sum, c) => {
//       if (c === 1) {
//         sum += 1;
//       }
//       return sum;
//     }, 0);
//   };

//   return arr.reduce((sum, value) => {
//     sum += getCountOfOne(value);
//     return sum;
//   }, 0);
// }

// let arr = [
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33],
// ];
// console.log(countOnes(arr));
//--------------------------------------------------------

// function dropRight(arr, n = 1) {
//   if (n > arr.length) return [];
//   return arr.slice(0, arr.length - n);
// }

// console.log(dropRight([1, 2, 3], 5));
//--------------------------------------------------------

// function chatroomStatus(arr) {
//   if (arr.length === 0) {
//     return "No one is online";
//   } else if (arr.length === 1) {
//     return `${arr[0]} online`;
//   } else if (arr.length === 2) {
//     return `${arr[0]} and ${arr[1]} are online`;
//   } else {
//     return `${arr[0]} ,${arr[1]} and ${arr.length - 2} more online`;
//   }
// }
// console.log(chatroomStatus(["Nk", "dfs", "d"]));

//--------------------------------------------------------

// function spelling(word) {
//   return [...word].map((e, i) => word.slice(0, i + 1));
// }
// console.log(spelling("eagerly"));

//--------------------------------------------------------

// function charIndex(word = "", char) {
//   let firstIndex = word.indexOf(char);

//   if (firstIndex != -1) {
//     let lastIndex = word.lastIndexOf(char);
//     return [firstIndex, lastIndex];
//   }
//   return undefined;
// }
// console.log(charIndex("happy", "e"));

//--------------------------------------------------------
// function mauriceWins(a = [], b = []) {
//   let mauriceScore = 0;
//   let steveScore = 0;

//   let [s, m, f] = a;
//   let [s1, m1, f1] = b;

//   //Round 1
//   if (s < f1) steveScore += 1;
//   else mauriceScore += 1;

//   //Round 2
//   if (m < s1) steveScore += 1;
//   else mauriceScore += 1;

//   //Round 3
//   if (f < m1) steveScore += 1;
//   else mauriceScore += 1;

//   console.log(steveScore, mauriceScore);
//   return mauriceScore > steveScore;
// }
// console.log(mauriceWins([1, 8, 20], [2, 9, 100]));

//--------------------------------------------------------

// const countTrue = (arr) => arr.filter((e) => e).length;
// console.log(countTrue([]));

//--------------------------------------------------------

// const compact = (arr) => arr.filter((e) => e);
// console.log(compact([0, 1, false, 2, "", 3]));
//--------------------------------------------------------

// const toArray = (obj) => Object.entries(obj);
// console.log(toArray({}));
//--------------------------------------------------------

// const concat = (...el) => {
//   let arr = [];
//   el.forEach((e) => arr.push(...e));
//   return arr;
// };
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));
//--------------------------------------------------------

// const arrayOfMultiples = (num, mul) => {
//   let arr = [];
//   for (let i = 1; i <= mul; i++) {
//     arr.push(num * i);
//   }
//   return arr;
// };
// console.log(arrayOfMultiples(12, 10));
//--------------------------------------------------------

// const sortIt = (arr = []) => {
//   return arr.sort((a, b) => {
//     return a > b ? 1 : -1;
//   });
// };

// console.log(sortIt([[3], 4, [2], [5], 1, 6]));
//--------------------------------------------------------

// const secondLargest = (arr) => arr.sort((a, b) => (a < b ? 1 : -1))[1];
// console.log(secondLargest([25, 143, 89, 13, 105]));
//--------------------------------------------------------

// const clone = (arr) => {
//   return [...arr, arr];
// };
// console.log(clone([1, 2, 3]));

//--------------------------------------------------------
// const mirror = (arr) => {
//   let originalArray = [...arr];
//   originalArray.pop();

//   let reversedArray = [...arr].reverse();
//   return originalArray.concat(reversedArray);
// };
// console.log(mirror([0, 2, 4, 6]));

//--------------------------------------------------------

// const testJackpot = (arr = []) => arr.every((e) => e == arr[0]);
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));
//--------------------------------------------------------

// const marathonDistance = (arr) => {
//   let sum = arr.reduce((sum, value) => (sum += Math.abs(value)), 0);
//   return sum;
// };
// console.log(marathonDistance([1, 2, 3, 4]));
//--------------------------------------------------------

// function findNemo(str) {
//   let index = str.split(" ").findIndex((e) => e === "Nemo");

//   if (index != -1) {
//     return `I have found Nemo at ${index + 1}`;
//   }

//   return "I can't find Nemo :(";
// }
// console.log(findNemo("I am finding Nemo !"));

//--------------------------------------------------------

// const numbersSum = (arr) =>
//   arr.reduce((sum, value) => (sum += typeof value === "number" ? value : 0), 0);

// console.log(numbersSum([1, 2, 3, 4, 5, true]));

//--------------------------------------------------------
// const totalVolume = (...arr) => {
//   const getMultiply = (arr) => {
//     return arr.reduce((mul, value) => (mul *= value), 1);
//   };

//   return arr.reduce((sum, ar) => (sum += getMultiply(ar)), 0);
// };
// console.log(totalVolume([1, 1, 1]));

//--------------------------------------------------------

// const indexMultiplier = (arr) =>
//   arr.reduce((sum, value, index) => (sum += value * index), 0);
// console.log(indexMultiplier([-3, 0, 8, -6]));
//--------------------------------------------------------

// const isSpecialArray = (arr = []) => {
//   return arr.every((e, i) => {
//     if (e % 2 === 0) return i % 2 === 0;
//     return i % 2 === 1;
//   });
// };

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));
//--------------------------------------------------------

// const jazzify = (arr) =>
//   arr.map((e) => (e.at(e.length - 1) == 7 ? e : e + "7"));
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm", "C7"]));

//--------------------------------------------------------

// const multiply = (arr) => {
//   return function (num) {
//     return arr.map((e) => e * num);
//   };
// };

// console.log(multiply([1, 2, 3])(2));

//--------------------------------------------------------

// const ascDesNone = (arr, type) => {
//   switch (type) {
//     case "Asc":
//       return arr.sort((a, b) => (a > b ? 1 : -1));

//     case "Des":
//       return arr.sort((a, b) => (a < b ? 1 : -1));

//     default:
//       return arr;
//   }
// };
// console.log(ascDesNone([7, 8, 11, 66], "None"));
//--------------------------------------------------------

// function matchLastItem(arr) {
//   let joinedWord = arr.reduce((word, value, index) => {
//     if (index < arr.length - 1) {
//       word += value;
//     }
//     return word;
//   }, "");

//   console.log(joinedWord);
//   return joinedWord === arr[arr.length - 1];
// }

// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
//--------------------------------------------------------

// const stolenItems = (obj) => {
//   let sum = Object.entries(obj).reduce(
//     (sum, [key, value], index) => (sum += value),
//     0
//   );

//   return sum > 0 ? sum : "Lucky You";
// };

// console.log(
//   stolenItems({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
//   })
// );
//--------------------------------------------------------

// function trace(arr) {
//   return arr.reduce((sum, el, i) => (sum += el[i]), 0);
// }

// console.log(
//   trace([
//     [1, 0, 1, 0],
//     [0, 2, 0, 2],
//     [3, 0, 3, 0],
//     [0, 4, 0, 4],
//   ])
// );
//--------------------------------------------------------
// const factorChain = (arr) => {
//   return arr.slice(0, arr.length - 1).every((e, i) => arr[i + 1] % e === 0);
// };

// console.log(factorChain([1, 1, 1, 5, 1, 1, 1, 1, 1]));
//--------------------------------------------------------

// const uniqueSort = (arr) => {
//   return [...new Set(arr)].sort((a, b) => (a > b ? 1 : -1));
// };

// console.log(uniqueSort([6, 7, 3, 2, 1]));
//--------------------------------------------------------

// const findNaN = (arr) => arr.findIndex((e) => isNaN(e));
// console.log(findNaN([0, 1, 2, 3, 4]));
//--------------------------------------------------------

// const reverseArr = (num) => {
//   return [...num.toString()].map((e) => Number(e)).reverse();
// };
// console.log(reverseArr(623478));
//--------------------------------------------------------
// const hackerSpeak = (text) => {
//   return [...text]
//     .map((e) => {
//       switch (e) {
//         case "a":
//           return 4;
//         case "e":
//           return 3;
//         case "i":
//           return 1;
//         case "o":
//           return 0;
//         case "s":
//           return 5;

//         default:
//           return e;
//       }
//     })
//     .join("");
// };

// console.log(hackerSpeak("become a coder"));

//--------------------------------------------------------

// const capMe = (arr) => {
//   return arr.map((e) => {
//     return e.charAt(0).toUpperCase() + e.slice(1);
//   });
// };

// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));
//--------------------------------------------------------

// const sumTwoSmallestNums = (arr) => {
//   return arr
//     .filter((e) => e >= 0)
//     .sort((a, b) => (a > b ? 1 : -1))
//     .slice(0, 2)
//     .reduce((sum, value) => (sum += value), 0);
// };

// console.log(
//   sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
// );

//--------------------------------------------------------

// const zipIt = (a, b) => {
//   if (a.length !== b.length) return "sizes don't match";

//   let result = [];

//   a.forEach((e, i) => {
//     result.push([e, b[i]]);
//   });

//   return result;
// };

// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
//--------------------------------------------------------

// const numOfSubbarrays = (arr = []) => {
//   return arr.filter((e) => Array.isArray(e)).length;
// };

// console.log(
//   numOfSubbarrays([
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//   ])
// );
//--------------------------------------------------------
// const evenOddTransform = (arr, times) => {
//   for (let i = 0; i < times; i++) {
//     arr = arr.map((e) => {
//       if (e % 2 === 0) {
//         return e - 2;
//       }
//       return e + 2;
//     });
//   }

//   return arr;
// };

// console.log(evenOddTransform([1, 2, 3], 1));
//--------------------------------------------------------

// const warOfNumbers = (arr) => {
//   let sumOfEven = 0;
//   let sumOfOdd = 0;

//   arr.forEach((element) => {
//     if (element % 2 === 0) {
//       sumOfEven += element;
//     } else {
//       sumOfOdd += element;
//     }
//   });

//   return sumOfEven > sumOfOdd ? sumOfEven - sumOfOdd : sumOfOdd - sumOfEven;
// };

// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));
//--------------------------------------------------------

// const mapping = (arr) => {
//   return arr.reduce((obj, v) => {
//     return { ...obj, [v]: v.toUpperCase() };
//   }, {});
// };
// console.log(mapping(["a", "v", "y", "z"]));

//--------------------------------------------------------
// let transformUpvotes = (str) => {
//   return str
//     .split(" ")
//     .map((e) => (e.endsWith("k") ? parseFloat(e) * 1000 : parseFloat(e)));
// };

// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));
//--------------------------------------------------------

// const uniqueArr = (arr) => {
//   return [...new Set(arr.filter((e) => e >= 0))];
// };
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));
//--------------------------------------------------------

// const removeSpecialCharacters = (word) => word.replace(/[^a-zA-Z ]/g, "");
// console.log(removeSpecialCharacters("The quick brown fox!"));
//--------------------------------------------------------

// const factory = (num) => {
//   return function (arr) {
//     return arr.map((e) => e / num);
//   };
// };

// const first = factory(2);
// const arr = [2, 4, 6];
// console.log(first(arr));

//--------------------------------------------------------

// const measureDepth = (arr = []) => {
//   let count = 1;

//   while (arr.length) {
//     arr = arr[0];
//     count++;
//   }
//   return count;
// };

// console.log(measureDepth([]));
//--------------------------------------------------------

// const recordTemps = (a = [], b = []) => {
//   return a.map((e, i) => {
//     let low = Math.min(e[0], b[i][0]);
//     let high = Math.max(e[1], b[i][1]);

//     return [low, high];
//   });
// };
// let result = recordTemps(
//   [
//     [34, 82],
//     [24, 82],
//     [20, 89],
//     [5, 88],
//     [9, 88],
//     [26, 89],
//     [27, 83],
//   ],
//   [
//     [44, 72],
//     [19, 70],
//     [40, 69],
//     [39, 68],
//     [33, 64],
//     [36, 70],
//     [38, 69],
//   ]
// );
// console.log(result);

//--------------------------------------------------------
// const flatAnArray = (arr) => {
//   return arr.reduce((newArr, element) => {
//     if (Array.isArray(element)) {
//       return [...newArr, ...flatAnArray(element)];
//     } else {
//       return [...newArr, element];
//     }
//   }, []);
// };
// const sumArray = (arr) =>
//   flatAnArray(arr).reduce((sum, value) => (sum += value), 0);

// console.log(sumArray([1, [2, [1]], 3]));

//--------------------------------------------------------
// const reverseImage = (arr = [], i) => {
//   return arr.map((e = []) => {
//     return e.map((e) => (e === 0 ? 1 : 0));
//   });
// };

// console.log(
//   reverseImage([
//     [1, 0, 0],
//     [1, 0, 0],
//   ])
// );

//--------------------------------------------------------

// const identicalFilter = (arr) => {
//   return arr.filter((e) => {
//     return [...e].every((letter) => letter === e[0]);
//   });
// };

// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
//--------------------------------------------------------

// const sumFoundIndexes = (arr, num) => {
//   return arr.reduce((sum, value, i) => {
//     if (value === num) {
//       sum += i;
//     }
//     return sum;
//   }, 0);
// };

// console.log(sumFoundIndexes([5, 10, 2, 15, 20], 2));
//--------------------------------------------------------

console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));
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
