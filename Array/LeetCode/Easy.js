//--------------------------------------------------------

// 1502. Can Make Arithmetic Progression From Sequence

// var canMakeArithmeticProgression = function (arr) {
//   let length = arr.length;

//   //If length is < 2
//   if (!length || length <= 2) {
//     return true;
//   }

//   let sortedArray = arr.sort((a, b) => (a > b ? 1 : -1));

//   let idealGap = sortedArray[1] - sortedArray[0];

//   for (let i = 1; i < sortedArray.length - 1; i++) {
//     let gap = sortedArray[i + 1] - sortedArray[i];

//     if (idealGap !== gap) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(canMakeArithmeticProgression([1, 2, 4]));
//--------------------------------------------------------

//26. Remove Duplicates from Sorted Array

// var removeDuplicates = function (nums) {
//   let onlyUnique = [...new Set(nums)];

//   let diff = nums.length - onlyUnique.length;

//   nums = onlyUnique;

//   for (let i = 0; i < diff; i++) {
//     nums.push("_");
//   }

//   return onlyUnique;
// };

// let arr = [1, 1, 2];
// console.log(removeDuplicates(arr));
// console.log(arr);
//--------------------------------------------------------

//35. Search Insert Position

// var searchInsert = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   let middle;

//   while (start <= end) {
//     middle = parseInt((start + end) / 2);

//     if (target === nums[middle]) {
//       return middle;
//     }

//     if (target < nums[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   return start;
// };

// console.log(searchInsert([1, 3, 5, 6], 7));
//--------------------------------------------------------

// 66. Plus One

// var plusOne = function (digits) {
//   let num = BigInt(digits.join("")) + 1n + "";
//   return [...num];
// };

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

//--------------------------------------------------------

// var merge = function (nums1 = [], m, nums2, n) {
//   nums1.splice(m);
//   nums2 = nums2.slice(0, n);

//   //Concat Num1 and Num2
//   nums2.forEach((element) => {
//     nums1.push(element);
//   });

//   // for (let i = m, j = 0; j < n; j++, i++) {
//   //   nums1[i] = nums2[j];
//   // }

//   //Sorting Array

//   nums1.sort((a, b) => a - b);
// };

// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 2,
//   nums2 = [2, 5, 6],
//   n = 3;

// console.log(merge(nums1, m, nums2, n));
// console.log({ nums1 });
//--------------------------------------------------------
