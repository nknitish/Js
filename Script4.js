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

// const isUnique = (word) => {
//   let filtered = [...new Set([...word])].join("");
//   return word === filtered;
// };

// const filterUnique = (arr) => arr.filter((e) => isUnique(e));

// console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]));
//--------------------------------------------------------

// const evenLast = (arr) => {
//   if (arr.length === 0) return 0;
//   let lastValue = arr[arr.length - 1];
//   return arr.reduce((sum, value, index) => {
//     if (index % 2 === 0) {
//       sum += value * lastValue;
//     }
//     return sum;
//   }, 0);
// };

// console.log(evenLast([0, 1, 2]));
//--------------------------------------------------------

// const countPosSumNeg = (arr) => {
//   if (!arr.length) return [];
//   let countPos = 0;
//   let sumNeg = 0;

//   arr.forEach((el) => {
//     if (el > 0) {
//       countPos++;
//     } else {
//       sumNeg += el;
//     }
//   });
//   return [countPos, sumNeg];
// };

// let arr = [91, -4, 80, -73, -28];

// console.log(countPosSumNeg(arr));

//--------------------------------------------------------

// const sumOfEvens = (arr) => {
//   return arr.reduce((sum, value) => {
//     sum += value.reduce((s, e) => {
//       if (e % 2 === 0) {
//         s += e;
//       }
//       return s;
//     }, 0);

//     return sum;
//   }, 0);
// };

// console.log(
//   sumOfEvens([
//     [42, 9],
//     [16, 8],
//   ])
// );
//--------------------------------------------------------

// Chocolate Dilemma

// const testFairness = (a = [], b = []) => {
//   function findArea(arr) {
//     return arr.reduce((sum, value) => {
//       sum += value.reduce((mul, el) => (mul *= el), 1);
//       return sum;
//     }, 0);
//   }

//   console.log(findArea(a), findArea(b));
//   return findArea(a) === findArea(b);
// };
// console.log(
//   testFairness(
//     [
//       [1, 5],
//       [6, 3],
//       [1, 1],
//     ],
//     [
//       [7, 1],
//       [2, 2],
//       [1, 1],
//     ]
//   )
// );

//--------------------------------------------------------

// No Hidden Fees

// const hasHiddenFee = (arr, total) => {
//   function convetToNum(str) {
//     return parseInt(str.slice(1));
//   }

//   let totalSum = arr.reduce((sum, e) => (sum += convetToNum(e)), 0);
//   return totalSum !== convetToNum(total);
// };

// console.log(hasHiddenFee(["$1"], "$4"));
//--------------------------------------------------------

// Mini Peaks

// function miniPeaks(arr) {
//   return arr.filter((e, i) => {
//     if (i > 0 && i < arr.length - 1) {
//       if (e > arr[i + 1] && e > arr[i - 1]) {
//         return true;
//       }
//       return false;
//     }
//     return false;
//   });
// }

// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]));
//--------------------------------------------------------

// Fruit Salad 🍇🍓🍎

// const cutStr = (word) => {
//   const half = parseInt(word.length / 2);

//   return [word.slice(0, half), word.slice(half)];
// };
// const fruitSalad = (arr) => {
//   return arr
//     .reduce((newArr, word) => {
//       return [...newArr, ...cutStr(word)];
//     }, [])
//     .sort()
//     .join("");
// };

// console.log(fruitSalad(["apple", "pear", "grapes"]));
//--------------------------------------------------------

//Sum of Two Numbers in Array Equal to Given Number

// const checkSum = (arr, num) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// console.log(checkSum([2, 8, 9, 12, 45, 78], 1));
//--------------------------------------------------------

//Increment to Top

// const incrementToTop = (arr) => {
//   let max = Math.max(...arr);
//   return arr.reduce((step, v) => (step += max - v), 0);
// };

// console.log(incrementToTop([3, 10, 3]));
//--------------------------------------------------------
// Lonely Integer

// const lonelyInteger = (arr) => {
//   return arr.find((e) => {
//     return !arr.includes(-e);
//   });
// };

// console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));

//--------------------------------------------------------
//Spin Around, Touch The Ground

// const spinAround = (arr) => {};

// console.log(spinAround(["left", "right", "left", "right"]));
//--------------------------------------------------------
// Switcharoo

// const flipEndChars = (str) => {
//   if (typeof str !== "string" || str.length <= 2) {
//     return "Incompatible";
//   }

//   let firstChar = str.charAt(0);
//   let lastChar = str.charAt(str.length - 1);

//   if (firstChar === lastChar) {
//     return "Two's a pair.";
//   }

//   str = str.split("");
//   str[0] = lastChar;
//   str[str.length - 1] = firstChar;
//   str = str.join("");

//   return str;
// };

// console.log(flipEndChars("Cat, dog, and mouse."));
//--------------------------------------------------------

//Moving to the End
// const moveToEnd = (arr, num) => {
//   let newArr = arr.filter((e) => e != num);

//   let gap = arr.length - newArr.length;

//   Array(gap)
//     .fill(num)
//     .map((e) => newArr.push(e));

//   return newArr;
// };

// console.log(moveToEnd(["a", "a", "a", "b"], "a"));

//--------------------------------------------------------

// Simple Encoder

// const simpleEncoder = (str) => {
//   function countRepeat(searchV) {
//     return [...str].filter((e) => e === searchV).length;
//   }
//   return [...str].map((e) => (countRepeat(e) > 1 ? "]" : "[")).join("");
// };

// console.log(simpleEncoder("eD  aBiT"));

//--------------------------------------------------------

// Removing Enemies

// const removeEnemies = (arr, enemies) => {
//   return arr.filter((e) => !enemies.includes(e));
// };

// console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]));
//--------------------------------------------------------

//The Museum of Incredibly DULL Things

// const removeSmallest = (arr) => {
//   let min = Math.min(...arr);
//   let findIndexofMin = arr.indexOf(min);
//   return arr.filter((e, i) => i != findIndexofMin);
// };

// console.log(removeSmallest([2, 2, 1, 2, 1]));
//--------------------------------------------------------

//Scalable Mountain?

// const isScalable = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let current = arr[i];
//     let next = arr[i + 1];
//     let gap = Math.abs(next - current);

//     if (gap > 5) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isScalable([2, 9, 11, 10, 18, 21]));
//--------------------------------------------------------

// const upwardTrend = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let current = arr[i];
//     let next = arr[i + 1];

//     if (typeof next === "string") {
//       return "Strings not permitted!";
//     }
//     if (current > next) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(upwardTrend([1, 2, 3, 6, 7]));

//--------------------------------------------------------

// Numbers to Objects

// const numObj = (arr) => {
//   return arr.map((value) => {
//     return { [value]: String.fromCharCode(value) };
//   });
// };

// console.log(numObj([118, 103, 110]));
//--------------------------------------------------------

// Numbered Cards

// const winRound = (arr, arr2) => {
//   function getHighNumber(arr) {
//     return arr
//       .sort((a, b) => (a < b ? 1 : -1))
//       .filter((e, i) => i < 2)
//       .join("");
//   }

//   let myHighNum = parseInt(getHighNumber(arr));
//   let otherHighNum = parseInt(getHighNumber(arr2));
//   return myHighNum > otherHighNum;
// };
// console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]));

//--------------------------------------------------------
//Puzzle Pieces

// const puzzlePieces = (a, b) => {
//   let result = [];
//   b.forEach((el, i) => {
//     result[i] = el + a[i] || 0;
//   });

//   console.log(result);
//   return result.every((e) => e == result[0]);
// };

// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]));
//--------------------------------------------------------

//An Introduction to the Map-Reduce Pattern
// const magnitude = (arr) => {
//   let res = arr.map((e) => e * e).reduce((sum, v) => (sum += v), 0);
//   return Math.sqrt(res);
// };

// console.log(magnitude([2, 3, 6, 1, 8]));

//--------------------------------------------------------

//Changing Mixed Types

// const changeTypes = (arr) => {
//   return arr.map((e) => {
//     switch (typeof e) {
//       case "string":
//         return e.charAt(0).toUpperCase() + e.slice(1) + "!";
//       case "number":
//         return e % 2 === 0 ? e + 1 : e;
//       case "boolean":
//         return !e;
//       default:
//         break;
//     }
//   });
// };

// console.log(changeTypes([false, "false", "true"]));

//--------------------------------------------------------
//Find Unique Number in Array

// const findSingleNumber = (arr) => {
//   function checkRepeat(find) {
//     return arr.filter((e) => e === find).length === 1;
//   }
//   return arr.filter((e) => checkRepeat(e));
// };

// console.log(
//   findSingleNumber([
//     1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101,
//     4, 3, 1, 5, 6, 2,
//   ])
// );
//--------------------------------------------------------

// Perfect Square Patch

// const squarePatch = (n) => {
//   return Array(n)
//     .fill()
//     .reduce((arr, c, i) => {
//       arr[i] = Array(n).fill(n);
//       return arr;
//     }, []);
// };

// console.log(squarePatch(0));
//--------------------------------------------------------

//Count the Towers

// const count_towers = (arr) => {
//   if (!arr.length) return 0;
//   return arr[arr.length - 1][0].split("   ").length;
// };

// console.log(count_towers([]));
//--------------------------------------------------------
//Secret Function 4.0

// const secret = (str) => {
//   str = str.split(".");
//   return `\`<${str[0]} class="${str.slice(1).join(" ")}"></${str[0]}>\``;
// };

// console.log(secret("p.one"));
//--------------------------------------------------------

//Balancing Scales

// const scaleTip = (arr) => {
//   let index = arr.indexOf("I");

//   let left = 0;
//   let right = 0;

//   arr.forEach((el, i) => {
//     if (i < index) {
//       left += el;
//     } else if (i > index) {
//       right += el;
//     }
//   });

//   if (right === left) {
//     return "Balanced";
//   }
//   return left > right ? "left" : "right";
// };

// console.log(scaleTip([]));

//--------------------------------------------------------

//Burglary Series (02): Most Valuable Item

// const mostExpensiveItem = (obj) => {
//   return Object.keys(obj).sort((a, b) => (obj[a] < obj[b] ? 1 : -1))[0];
// };

// console.log(
//   mostExpensiveItem({
//     tv: 30,
//     skate: 20,
//   })
// );
//--------------------------------------------------------

//Identical Subarrays

// const countIdentical = (arr) => {
//   return arr.filter((ar = []) => ar.every((e) => e === ar[0])).length;
// };

// console.log(
//   countIdentical([[33, 33], [5], ["a", "a"], [2, 2, 2], [1, 2, 2], [3, 1], []])
// );

//--------------------------------------------------------

// const isPotentialFriend = (arr, arr2) => {
//   return arr.filter((e) => arr2.includes(e)).length >= 2;
// };

// console.log(
//   isPotentialFriend(
//     ["cycling", "technology", "drawing"],
//     ["dancing", "drawing"]
//   )
// );
//--------------------------------------------------------

//Sum of Array Elements Except Itself

// const arrEleSum = (arr) => {
//   return arr.map((_, index) => {
//     return arr.reduce((sum, v, i) => {
//       if (index != i) {
//         sum += v;
//       }
//       return sum;
//     }, 0);
//   });
// };

// console.log(arrEleSum([10, 20, 30, 40, 50, 60]));

//--------------------------------------------------------
// Tidy Title and Author Strings

// const transform = (arr) =>
//   arr.map((e) => e.replace("-", ",")).map((e) => e.trim());
// console.log(
//   transform([
//     "     The Catcher in the Rye - J. D. Salinger    ",
//     "    Brave New World - Aldous Huxley   ",
//     "    Of Mice and Men - John Steinbeck    ",
//   ])
// );
//--------------------------------------------------------

// Array Multiplier

// function createArr(el, num) {
//   return Array(num).fill(el);
// }

// const multiply = (arr) => arr.map((e) => createArr(e, arr.length));

// console.log(multiply(["A", "B", "C", "D", "E"]));
//--------------------------------------------------------

//Total Count of Numbers in a MultiDimensional Array

// function flatArr(arr) {
//   return arr.reduce((newArr, el) => {
//     if (Array.isArray(el)) {
//       return [...newArr, ...flatArr(el)];
//     } else {
//       return [...newArr, el];
//     }
//   }, []);
// }

// const countNumber = (arr) =>
//   flatArr(arr).filter((e) => typeof e === "number").length;

// console.log(countNumber([["", 17.2, 5, "edabit"]]));

//--------------------------------------------------------

//Edabit Experience Points

// function getCoin(key, value) {
//   switch (key) {
//     case "Very Easy":
//       return value * 5;
//     case "Easy":
//       return value * 10;
//     case "Medium":
//       return value * 20;
//     case "Hard":
//       return value * 40;
//     case "Very Hard":
//       return value * 80;

//     default:
//       return 0;
//       break;
//   }
// }

// const getXP = (obj) => {
//   return (
//     Object.entries(obj).reduce((sum, [key, value]) => {
//       return (sum += getCoin(key, value));
//     }, 0) + "XP"
//   );
// };

// console.log(
//   getXP({
//     "Very Easy": 11,
//     Easy: 0,
//     Medium: 2,
//     Hard: 0,
//     "Very Hard": 27,
//   })
// );
//--------------------------------------------------------

//Cumulative Array Sum

// const getSum = (arr, index) =>
//   arr.reduce((sum, v, i) => {
//     if (i <= index) {
//       sum += v;
//     }
//     return sum;
//   });

// const cumulativeSum = (arr) => {
//   return arr.map((e, i) => getSum(arr, i));
// };

// console.log(cumulativeSum([3, 3, -2, 408, 3, 3]));

//--------------------------------------------------------

//Determine If Two Numbers Add up to a Target Value
// const sumOfTwo = (a, b, v) => {
//   return a.some((e) => {
//     return b.some((el) => el + e === v);
//   });
// };

// console.log(sumOfTwo([1, 2], [4, 5, 6], 9));

//--------------------------------------------------------

// const getIndices = (arr, v) =>
//   arr.reduce((newArr, el, i) => {
//     if (el === v) {
//       newArr.push(i);
//     }
//     return newArr;
//   }, []);

// console.log(getIndices([1, 5, 5, 2, 7], 8));

//--------------------------------------------------------

//Burglary Series (06): Convert to Numbers

// function convertToNumber(obj) {
//   return Object.entries(obj).reduce((newObj, [key, value]) => {
//     return { ...newObj, [key]: parseInt(value) };
//   }, {});
// }

// console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" }));
//--------------------------------------------------------

//Are the Sum of Digits in the Numbers Equal?

// function sumOfNum(num) {
//   let sum = 0;

//   while (num > 0) {
//     let rem = num % 10;
//     sum += rem;
//     num = parseInt(num / 10);
//   }
//   return sum;
// }

// const isEqual = (arr) => {
//   return arr.map((e) => sumOfNum(e)).every((e, _, arr) => e === arr[0]);
// };

// console.log(isEqual([0, 0]));

//--------------------------------------------------------
//Back and Forth

// const calculateArrowhead = (arr) => {
//   let left = 0;
//   let right = 0;

//   arr
//     .join("")
//     .split("")
//     .forEach((e) => {
//       if (e === "<") {
//         left++;
//       } else {
//         right++;
//       }
//     });

//   if (left > right) {
//     return "<".repeat(left - right);
//   }
//   if (right > left) {
//     return ">".repeat(right - left);
//   }

//   return "";
// };

// console.log(calculateArrowhead([">>>", "<<<"]));

//--------------------------------------------------------

//Intersecting Intervals

// const checkOverLap = (s, e, n) => {
//   return n === s || n === e || (n > s && n < e);
// };

// const countOverlapping = (arr, n) => {
//   return arr.filter((e) => checkOverLap(e[0], e[1], n)).length;
// };

// console.log(
//   countOverlapping(
//     [
//       [1, 2],
//       [5, 8],
//       [6, 9],
//     ],
//     7
//   )
// );
//--------------------------------------------------------

//Count the Number of Duplicate Characters

// const countRepeat = (arr, n) => {
//   let result = arr.filter((e) => e === n);
//   return result.length - 1;
// };

// const duplicates = (str) => {
//   let obj = [...str].reduce((obj, v, i, arr) => {
//     if (countRepeat(arr, v) >= 1) {
//       obj[v] = countRepeat(arr, v);
//     }
//     return obj;
//   }, {});

//   return Object.values(obj).reduce((sum, e) => (sum += e), 0);
// };

// console.log(duplicates("Hello World!"));

//--------------------------------------------------------
// Pyramid Arrays

// const pyramidArrays = (num) => {
//   return Array(num)
//     .fill()
//     .map((e, i) => Array(i + 1).fill(i + 1));
// };

// console.log(pyramidArrays(0));
//--------------------------------------------------------
// Letters Shared between Two Words

// const sharedLetters = (a, b) => {
//   return [...a].filter((e) => b.includes(e)).length;
// };

// console.log(sharedLetters("spout", "shout"));

//--------------------------------------------------------

//Digit Distance

// const digitDistance = (a, b) => {
//   a = a.toString();
//   b = b.toString();

//   if (a.length !== b.length) return false;

//   return [...a]
//     .map((e, i) => Math.abs(e - b.charAt(i)))
//     .reduce((sum, v) => (sum += parseInt(v)), 0);
// };

// console.log(digitDistance(12, 12));

//--------------------------------------------------------

//Height of the Tallest Building

// const cuntBlock = (str) => {
//   return [...str.trim()].filter((e) => e === "#").length;
// };

// const tallestBuildingHeight = (arr) => {
//   let data = arr
//     .filter((e) => e.trim() !== "")
//     .map((e, i) => {
//       return { [i + 1]: cuntBlock(e) };
//     });

//   let sorted = data.sort((a, b) => (data[a] < data[b] ? 1 : -1));

//   console.log(sorted);

//   return parseInt(Object.keys(sorted[0])[0]) * 20;
// };

// console.log(
//   tallestBuildingHeight([
//     "                              ",
//     "                         ###  ",
//     "                         ###  ",
//     "###                    #####  ",
//     "###      #             #####  ",
//     "###     ###            #####  ",
//     "######  ###            #######",
//     "######  ######  ###    #######",
//     "###################    #######",
//     "###############################",
//     "###############################",
//   ])
// );
//--------------------------------------------------------

//Good Match?

// const isGoodMatch = (arr) => {
//   if (arr.length % 2 !== 0) return "Bad Match";

//   let newArr = [];

//   for (let index = 0; index < arr.length; index += 2) {
//     const element = arr[index];
//     const nextElement = arr[index + 1];
//     newArr.push(element + nextElement);
//   }

//   return newArr;
// };

// console.log(isGoodMatch([5, 7, 9, -1, 4, 2]));
//--------------------------------------------------------

//Largest Gap

// const largestGap = (arr) => {
//   let max = 0;
//   let sortedArr = arr.sort((a, b) => (a > b ? 1 : -1));

//   for (let i = 1; i < sortedArr.length; i++) {
//     const previousElement = sortedArr[i - 1];
//     const element = sortedArr[i];

//     let gap = element - previousElement;
//     if (gap > max) {
//       max = gap;
//     }
//   }
//   return max;
// };

// console.log(largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]));
//--------------------------------------------------------

//Left, Right Shift

// const leftShift = (arr = [], n) => {
//   Array(n)
//     .fill("")
//     .forEach((e) => {
//       arr.push(arr.shift());
//     });

//   return arr;
// };
// const rightShift = (arr = [], n) => {
//   Array(n)
//     .fill("")
//     .forEach((e) => {
//       arr.unshift(arr.pop());
//     });

//   return arr;
// };

// console.log(leftShift([1, 2, 3, 4, 5], 6));
// console.log(rightShift([1, 2, 3, 4], 1));

//--------------------------------------------------------
//Product of All Other Numbers

// const calProduct = (arr, index) => {
//   return arr.reduce((mul, val, i) => (mul *= index != i ? val : 1), 1);
// };
// const getProducts = (arr) => {
//   return arr.map((e, i) => calProduct(arr, i));
// };

// console.log(getProducts([1, 2, 3, 0, 5]));

//--------------------------------------------------------
//Longest Daily Streak

// const dailyStreak = (arr) => {
//   let max = 0;
//   let record = [];
//   arr.forEach((el) => {
//     if (el) {
//       max += 1;
//     } else {
//       record.push(max);
//       max = 0;
//     }
//   });

//   record.push(max);

//   return Math.max(...record);
// };

// console.log(dailyStreak([true, true, true, false, true, true, true, true]));

//--------------------------------------------------------

// ################################################################################ NOT COMPLETED #######################################################################
// Likes vs. Dislikes

// YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

// There are two other interesting rules to be noted about the interface:

// Pressing a button, which is already active, will undo your press.
// If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
// Create a function that takes an array of button inputs and returns the final state.

// Examples
// likeOrDislike(["Dislike"]) ➞ "Dislike"

// likeOrDislike(["Like", "Like"]) ➞ "Nothing"

// likeOrDislike(["Dislike", "Like"]) ➞ "Like"

// likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"

//--------------------------------------------------------

//Merge Two Arrays

// const mergeArrays = (ar1, ar2) => {
//   let result = [];
//   let len = Math.max(ar1.length, ar2.length);

//   for (let i = 0; i < len; i++) {
//     if (ar1[i]) {
//       result.push(ar1[i]);
//     }
//     if (ar2[i]) {
//       result.push(ar2[i]);
//     }
//   }

//   return result;
// };

// console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));

//--------------------------------------------------------
//The Bottom of the Matrix

// const replace = (arr, index) => arr.map((e, i) => (i <= index ? e : 0));

// function lowerTriang(arr) {
//   return arr.map((ar, i) => replace(ar, i));
// }

// console.log(
//   lowerTriang([
//     [1, 8, 8, 1],
//     [2, 7, 7, 2],
//     [3, 6, 6, 3],
//     [4, 5, 5, 4],
//   ])
// );

//--------------------------------------------------------

// const remix = (str, arr) => {
//   let result = [];
//   arr.forEach((element, i) => {
//     result[element] = str[i];
//   });

//   return result.join("");
// };

// console.log(remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]));
//--------------------------------------------------------

//Mini Sudoku

// const flat = (arr = []) => {
//   return arr.reduce((newArr, el) => {
//     if (Array.isArray(el)) {
//       return [...newArr, ...flat(el)];
//     } else {
//       return [...newArr, el];
//     }
//   }, []);
// };

// const isMiniSudoku = (arr) => {
//   let res = flat(arr);
//   let removeDuplicate = [...new Set(res)];

//   if (res.length !== removeDuplicate.length) {
//     return false;
//   }

//   return res.every((e) => e <= 9 && e >= 1);
// };

// console.log(
//   isMiniSudoku([
//     [8, 9, 2],
//     [5, 6, 1],
//     [3, 7, 4],
//   ])
// );

//--------------------------------------------------------

//Matrix Subtraction

// const subtract = (a, b) => {
//   return a.map((e, i) => e - b[i]);
// };

// const sub = (a = [], b = []) => {
//   return a.map((ar1, index) => subtract(ar1, b[index]));
// };

// console.log(
//   sub(
//     [
//       [2, 2, 3],
//       [4, 6, 6],
//       [7, 8, 10],
//     ],
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ]
//   )
// );
//--------------------------------------------------------

//Number of Two or More Consecutive Ones

// ############################################################################# NOT COMPLETED #####################################################################

// const countOnes = (arr) => {
//   let count = 0;
//   let bool = false;

//   arr.forEach((el) => {
//     if (el === 1) {
//       if (bool) {
//         count++;
//         bool = false;
//       } else {
//         bool = true;
//       }
//     }
//     if (el === 0) {
//       bool = false;
//     }
//   });

//   return count;
// };

// console.log(countOnes([[1, 1, 1, 1, 0, 0, 0, 0]]));

//--------------------------------------------------------

//Accumulating Product
// const getProduct = (arr, index) => {
//   return arr.reduce((mul, v, i) => {
//     if (i <= index) {
//       mul *= v;
//     }
//     return mul;
//   }, 1);
// };

// const accumulatingProduct = (arr) => {
//   return arr.map((e, i) => getProduct(arr, i));
// };

// console.log(accumulatingProduct([1, 2, 3, 4]));

//--------------------------------------------------------
//Spicy Food

// const billSplit = (food, amt) => {
//   let myAmt = 0;
//   let myFriendAmt = 0;

//   food.forEach((f, i) => {
//     if (f === "S") {
//       myAmt += amt[i];
//     } else {
//       let halfAmt = amt[i] / 2;
//       myAmt += halfAmt;
//       myFriendAmt += halfAmt;
//     }
//   });

//   return [myAmt, myFriendAmt];
// };

// console.log(billSplit(["S", "N"], [41, 10]));
//--------------------------------------------------------
//Word Builder

// const wordBuilder = (word, position) => {
//   let newWord = [];

//   position.forEach((e, i) => {
//     newWord[e] = word[i];
//   });

//   return newWord.join("");
// };

// console.log(wordBuilder(["g", "e", "o"], [1, 0, 2]));
//--------------------------------------------------------

//Ranged Reversal

// const rangedReversal = (arr, start, end) => {
//   let a = arr.slice(0, start);
//   let b = arr.slice(start, end + 1).reverse();
//   let c = arr.slice(end + 1);

//   return a.concat(b, c);
// };

// console.log(rangedReversal([9, 8, 7, 4], 0, 0));

//--------------------------------------------------------
//Playing RisiKo!

// ############################################################################# NOT COMPLETED #####################################################################

//--------------------------------------------------------
// Partially Hidden String

// const replaceChar = (str) => {
//   return [...str]
//     .map((e, i) => {
//       if (i === 0 || i === str.length - 1) {
//         return e;
//       }
//       return "-";
//     })
//     .join("");
// };

// const partiallyHide = (str) => {
//   return str
//     .split(" ")
//     .map((e) => replaceChar(e))
//     .join(" ");
// };

// console.log(partiallyHide("Harry went to fight the basilisk"));
//--------------------------------------------------------

//Lottery Ticket

// const checMiniWin = ([str, num]) => {
//   let res = [...str].some((e) => e.charCodeAt(0) === num) ? 1 : 0;
//   return res;
// };

// const lottery = (arr, otherScore) => {
//   let myScore = arr.reduce((sum, e) => (sum += checMiniWin(e)), 0);
//   return myScore > otherScore ? "Winner" : "Looser";
// };

// console.log(
//   lottery(
//     [
//       ["ZSAMZB", 81],
//       ["XWWCXP", 72],
//       ["SYBRQOHP", 88],
//       ["HJSVV", 75],
//     ],
//     1
//   )
// );
//--------------------------------------------------------

//Fix The Error: Array Reduce

// const calculateSum = (str) => {
//   return [...str].reduce((sum, e) => (sum += e.charCodeAt(0)), 0);
// };

// console.log(calculateSum("a"));

// const reverseString = (str) => {
//   return [...str].reduce(
//     (newStr, e, i, arr) => (newStr += arr[arr.length - 1 - i]),
//     ""
//   );
// };

// console.log(reverseString("hello"));

//--------------------------------------------------------

//Evaluating Factorials

// const fac = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return n * fac(n - 1);
// };

// const evalFactorial = (arr) => {
//   return arr.reduce((sum, e) => (sum += fac(e)), 0);
// };

// console.log(evalFactorial([5, 4, 2]));
//--------------------------------------------------------

//Index Filtering

// const indexFilter = (arr, str) => {
//   return arr.map((e) => str.at(e)).join("");
// };

// console.log(
//   indexFilter([4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures")
// );

//--------------------------------------------------------

//Construct and Deconstruct

// String.prototype.construct = function () {
//   return this.split("").map((e, i) => this.slice(0, i + 1));
// };

// const constructDeconstruct = (str) => {
//   return str.construct().concat(str.construct().reverse());
// };

// console.log(constructDeconstruct("the sun"));

//--------------------------------------------------------
//Total Sales of Product

// const totalSales = (arr, p) => {
//   let index = arr[0].findIndex((e) => e == p);

//   if (index === -1) return "PRODUCT NOT FOUND";

//   return arr.slice(1).reduce((sum, e) => (sum += e[index]), 0);
// };

// console.log(
//   totalSales(
//     [
//       ["A", "B", "C"],
//       [2, 7, 1],
//       [3, 6, 6],
//       [4, 5, 5],
//     ],
//     "C"
//   )
// );

//--------------------------------------------------------

// const getBirthdayCake = (str, age) => {
//   let border = age % 2 === 0 ? "#" : "*";
//   let birthDayLine = `${border} ${age} Happy Birthday ${str}! ${age} ${border}`;
//   let len = birthDayLine.length;
//   return [border.repeat(len), birthDayLine, border.repeat(len)];
// };

// console.log(getBirthdayCake("Russell", 19));

//--------------------------------------------------------

//N-Sized Parts
// const partition = (word, n) => {
//   let res = [];

//   for (let i = 0; i < word.length; i += n) {
//     res.push(word.slice(i, i + n));
//   }

//   return res;
// };

// console.log(partition("chews", 2));
//--------------------------------------------------------

//Sort By Index of Character

// const sortByCharacter = (arr, n) =>
//   arr.sort((a, b) => (a[n - 1] > b[n - 1] ? 1 : -1));

// console.log(sortByCharacter(["mayor", "apple", "petal"], 5));
//--------------------------------------------------------

// const seesaw = (num) => {
//   num = num.toString();

//   let first, second;
//   let l = num.length;
//   let half = l / 2;

//   if (l % 2 === 0) {
//     first = parseInt(num.slice(0, half));
//     second = parseInt(num.slice(half));
//   } else {
//     first = parseInt(num.slice(0, Math.floor(half)));
//     second = parseInt(num.slice(Math.ceil(half)));
//   }

//   if (first === second) return "Balanced";
//   return first > second ? "left" : "right";
// };

// console.log(seesaw(585585));
//--------------------------------------------------------

//Percentage of Box Filled In

// const percentFilled = (arr) => {
//   let totalSpace = arr[0].length * arr.length;
//   let totalFilledBlock = 0;
//   let totalUsedSpace = 0;

//   arr.forEach((str) => {
//     [...str].forEach((e) => {
//       if (e === "#") {
//         totalFilledBlock++;
//       } else if (e === "o") {
//         totalUsedSpace++;
//       }
//     });
//   });

//   let total = (totalUsedSpace / (totalSpace - totalFilledBlock)) * 100;

//   return total;
// };

// console.log(
//   percentFilled(["######", "#ooo #", "#oo  #", "#    #", "#    #", "######"])
// );
//--------------------------------------------------------

//Get the Diagonals

// const getDiagonals = (arr = []) => {
//   let diagonal1 = arr.map((e, i) => e[i]);
//   let diagonal2 = arr.map((e, i) => e[arr.length - 1 - i]);
//   return [diagonal1, diagonal2];
// };

// // console.log(
// //   getDiagonals([
// //     ["a", "b", "c"], // i= 2 - 0 => 2-0 => 2
// //     ["d", "e", "f"], // i= 1 - 1 => 3-1 =>2-i => 1
// //     ["g", "h", "i"], // i= 0 - 2 => 3-1 =>2 -2 =>0
// //   ])
// // );

// console.log(getDiagonals([[true]]));

//--------------------------------------------------------

// const sockMerchant = (arr) => {
//   let obj = arr.reduce((ob, v) => {
//     if (v in ob) {
//       ob[v] += 1;
//     } else {
//       ob[v] = 1;
//     }
//     return ob;
//   }, {});

//   return Object.entries(obj).reduce((sum, [key, val]) => {
//     if (val >= 2) {
//       sum += parseInt(val / 2);
//     }
//     return sum;
//   }, 0);
// };
// console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]));
//--------------------------------------------------------

//Strictly Increasing or Decreasing

// const check = (arr) => {
//   let res = "";

//   for (let i = 0; i < arr.length - 1; i++) {
//     let c_el = arr[i];
//     let n_el = arr[i + 1];

//     if (c_el < n_el) {
//       if (res === "decreasing") {
//         return "neither";
//       }
//       res = "increasing";
//     } else if (c_el > n_el) {
//       if (res === "increasing") {
//         return "neither";
//       }
//       res = "decreasing";
//     } else {
//       return "neither";
//     }
//   }

//   return res;
// };

// console.log(check([1, 2, 3]));

//--------------------------------------------------------

//An Ordered Matrix

// const createArr = (index, col) =>
//   Array(col)
//     .fill()
//     .map((_, i) => col * index + i + 1);

// const orderedMatrix = (a, b) => {
//   return Array(a)
//     .fill()
//     .map((_, i) => createArr(i, b));
// };

// console.log(orderedMatrix(5, 5));

//--------------------------------------------------------
