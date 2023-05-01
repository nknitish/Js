/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

let textDom = document.querySelector("p");
textDom.innerHTML = textDom.innerText
  .split(" ")
  .map((word) =>
    word.length >= 8 ? `<span style="background:yellow"> ${word}</span>` : word
  )
  .join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

// let newLink = document.createElement("a");
// newLink.innerHTML = "Click Me";
// newLink.href = "https://forcemipsum.com/";
// newLink.target = "_blank";
// document.body.insertBefore(newLink, textDom);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

// textDom.innerHTML = textDom.innerText
//   .split(".")
//   .map((word) => word)
//   .join(`.<br/>`);

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

let textArrLength = textDom.innerText.split(" ").length;
let para = document.createElement("p");
para.innerHTML = textArrLength;
let headerDom = document.getElementById("heading");
document.body.insertBefore(para, textDom);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

// textDom.innerHTML = textDom.innerText
//   .split(" ")
//   .map((word) => {
//     if (word.includes("?")) {
//       return word.replace("?", "🤔");
//     } else if (word.includes("!")) {
//       return word.replace("!", "😲");
//     } else {
//       return word;
//     }
//   })
//   .join(" ");

// let arr = ["C", 7, {}, "B", "A", "A", "D", "F", "C", "B", 1, 2, 4, []];
// let sortOrder = ["A", "B", "C"];

// const sortArr = (arr = [], sortOrder = []) => {
//   sortOrder.forEach((e) => {
//     arr = arr.sort((a, b) => {
//       return a === e || b === e ? 1 : -1;
//     });
//   });
//   return arr;
// };

// console.log(sortArr(arr, sortOrder));

// console.log([2, 3, 4].find((e) => e === 2));
