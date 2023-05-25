//=======================================================

//Write a function that resolve promises recursively

// let a = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A");
//   }, 1000);
// });

// let b = new Promise((resolve, reject) => {
//   reject("B");
// });
// let c = new Promise((resolve, reject) => {
//   resolve("C");
// });

// function promRecursive(arr) {
//   if (!arr.length) return;
//   const element = arr.shift();
//   element.then((res) => console.log(res)).catch((error) => console.log(error));
//   promRecursive(arr);
// }

// promRecursive([a, b, c]);

//=======================================================

//Convert to Async/Await

// function loadData(url) {
//   return fetch(url).then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error(res.status);
//     }
//   });
// }

// // --------------------------

// async function loadData1(url) {
//   let response = await fetch(url);
//   if (response.status === 200) {
//     return response.json();
//   } else {
//     return new Error(response.status);
//   }
// }

//=======================================================

// const first = new Promise((resolve, reject) => {
//   resolve("First");
// });
// const second = new Promise((resolve, reject) => {
//   resolve(first);
// });

// second
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((e) => console.log("Error: ", e));

//=======================================================
// console.log("start");

// const promise1 = Promise.resolve().then(() => {
//   console.log("promise1");
//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });

// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise2 = Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);

// console.log("end");
//=======================================================

//=======================================================
