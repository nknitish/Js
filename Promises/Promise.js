//--------------------------------------------------------

// let cart = ["Shoes", "paint", "shirt"];

// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     if (cart.length) {
//       let cartId = cart.map((e) => e.charCodeAt(0)).join("");
//       console.log("A");
//       setTimeout(() => {
//         resolve(cartId);
//       }, 1000);
//       console.log("B");
//     } else {
//       reject(new Error("Cart Not Found"));
//     }
//   });
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     if (orderId) {
//       resolve(parseInt(orderId) / 2);
//     }
//     reject(new Error("OrderId Not Found"));
//   });
// }

//--------------------------------------------------------
// then() & catch()
// createOrder(cart)
//   .then((cartId) => proceedToPayment(cartId))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));

//--------------------------------------------------------

//Async/Await are way to handle promises in Js
//It is a alternative of .then().catch()
//It return whatever is returned by promise

// async function handleCart(cart) {
//   let orderId;
//   let amt;

//   try {
//     orderId = await createOrder(cart);
//     amt = await proceedToPayment(orderId);
//   } catch (error) {
//     console.log(error.message);
//   }

//   return [orderId, amt];
// }

// handleCart(cart).then((res) => {
//   console.log(res);
// });

//=======================================================

//Write a polyfill of promises

//Incomplete

// function promisePolyfill(executor) {
//   let onResolve,
//     onReject,
//     isFulfilled = false,
//     isCalled = false,
//     value;

//   function resolve(value) {
//     isFulfilled = true;
//     value = value;

//     if (typeof onResolve === "function") {
//       onResolve(value);
//       isCalled = true;
//     }
//   }

//   function reject(value) {
//     onReject(value);
//   }

//   this.then = function (callback) {
//     onResolve = callback;

//     if (isFulfilled && !isCalled) {
//       isCalled = true;
//       onResolve(value);
//     }
//     return this;
//   };
//   this.catch = function (callback) {
//     onReject = callback;
//     return this;
//   };

//   executor(resolve, reject);
// }

// let a = new promisePolyfill((resolve, reject) => {
//   // setTimeout(() => {
//   resolve("A");
//   // }, 1000);
// });

// a.then((res) => console.log("res", res)).catch((err) => {
//   console.log(err);
// });

//=======================================================

//Promise.race

// const sleep = (t) =>
//   new Promise((res) =>
//     setTimeout(() => {
//       res(t);
//     }, t)
//   );

// async function promiseRace(arr = []) {
//   return await Promise.all(arr);
// }

// // sleep(5000)
// //   .then((res) => console.log(res))
// //   .catch((e) => console.log("Error", e));

// promiseRace([sleep(1000), sleep(5000)])
//   .then((res) => console.log(res))
//   .catch((e) => console.log("Error", e));
//=======================================================
//=======================================================
