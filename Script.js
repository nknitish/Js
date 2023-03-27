// const getExtension = (fileName) => {
//   let index = [...fileName].find((e) => e === ".");
//   console.log({ index });
//   if (index === -1) return false;
//   return fileName.substring(index);
// };

// Split()    // Array //
// findIndex  // Array // Find element in array else return undefined
// indexOf //Works with String
// console.log(getExtension("Myname.js"));

//--------------------------------------------------------
// const checkSum = (num1, num2) => {
//   if (num1 === 100 || num2 === 100) return true;
//   if (num1 + num2 === 100) return true;

//   return false;
// };

// console.log(checkSum(90, 10));

//--------------------------------------------------------
// const replaceString = (string) => {
//   return string
//     .split("")
//     .map((char) => {
//       let charCode = char.charCodeAt(0);
//       if (charCode >= 48 && charCode <= 57) return char;
//       if (charCode === 32) return char;
//       return String.fromCharCode(charCode + 1);
//     })
//     .join("");
// };

// console.log(replaceString("H E L L 1 2 3 4 "));

//--------------------------------------------------------

// const getDate = (today) => {
//   let month = today.getMonth() + 1;
//   let date = today.getDate();
//   let year = today.getFullYear();
//   let dateFormat = `${date}/${month}/${year} `;
//   return dateFormat;
// };

// console.log(getDate(new Date()));

//--------------------------------------------------------

// function addNewtoSting(text) {
//   let newText = "New";
//   return text.toLowerCase() === "new" ? newText : newText + " " + text;
// }

// console.log(addNewtoSting("New"));

//--------------------------------------------------------

// function combineSting(string) {
//   let length = string?.length;

//   if (length <= 3) {
//     return string;
//   } else {
//     let first3char = string.substring(0, 3);
//     let last3char = string.substring(length - 3, length);
//     return first3char + " " + last3char;
//   }
// }

// console.log(combineSting("JavaScript"));

//--------------------------------------------------------

// const concatStrings = (string1 = "", string2 = "") => {
//   return string1.slice(1) + " " + string2.slice(1);
// };

// console.log(concatStrings("Name", "Nitish"));

//--------------------------------------------------------

// const findNearestTo100 = (num1, num2) => {
//   if (num1 <= 100 && num2 <= 100) return num1 > num2 ? num1 : num2;

//   let gapforNum1 = Math.abs(100 - num1);
//   let gapforNum2 = Math.abs(100 - num2);

//   return gapforNum1 < gapforNum2 ? num1 : num2;
// };

// console.log(findNearestTo100(70));

//--------------------------------------------------------

// const findOccurance = (text, char) => {
//   let count = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] == char) {
//       count++;
//     }
//   }

//   return count >= 2 && count <= 4;
// };

// console.log(findOccurance("Heelllleee", "e"));

//--------------------------------------------------------

// const findNumberOfEvenDigit = (arr = []) =>
//   arr?.filter((num) => num % 2 !== 0)?.length;

// console.log(findNumberOfEvenDigit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//--------------------------------------------------------

// const findEvenNumberOfGivenArray = (num) => {
//   return Array(num)
//     .fill()
//     .map((e, i) => i + 1)
//     .filter((e) => e % 2 === 0);
// };
// console.log(findEvenNumberOfGivenArray(100));
//--------------------------------------------------------

// const checkIfArrayIsSorted = (arr = []) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }

//   return true;

//   let arrString = arr.join("");
//   let sortedArray = arr.sort((a, b) => (a > b ? 1 : -1))?.join(""); // sting

//   return arrString === sortedArray;
// };
// console.log(checkIfArrayIsSorted([2, 3, 4, 5, 10, 6, 7, 8, 9, 13]));

//--------------------------------------------------------

// const findLargestNumer = (arr) => Math.max(...arr);

// const getEvenNumber = (arr) => arr?.filter((e) => e % 2 === 0);

// console.log(findLargestNumer(getEvenNumber([1, 2, 4, 66, 150, 88, 5, 8, 7])));

//--------------------------------------------------------

// const replaceFirstChar = (string) => {
//   return string
//     .split("")
//     .map((e, i) => (i == 0 ? "$" : e))
//     .join("");
// };

// console.log(replaceFirstChar("Hello"));

//--------------------------------------------------------

// const checkLeapYear = (year) => year % 4 === 0;

// console.log(checkLeapYear(2009));

//--------------------------------------------------------

// const compareObj = (a, b) => {
//   return Object.keys(a).every((key) => b[key]);
// };

// let a = {
//   lname: "Mishra",
//   name: "Nitish",
// };
// let b = {
//   name: false,
//   location: "Delhi",
//   lname: 0,
// };

// console.log(compareObj(a, b));
//--------------------------------------------------------

// const checkNumisLessThen5 = (number) => number < 5;
// const checkNumisGreaterThen5 = (number) => number > 5;

// const predicate = (arr = [], func) => arr.every(func);

// console.log(predicate([6, 7, 20, 8, 10], checkNumisLessThen5));

// console.log(predicate([6, 7, 20, 8, 10], checkNumisGreaterThen5));

// console.log(predicate([6, 7, 20, 8, 10], checkNumisLessThen5));

//--------------------------------------------------------
// const findUnique = (text) => Array.from(new Set([...text])).join("");

// console.log(findUnique("Vaishali Nitish"));

//--------------------------------------------------------

// const findNonRepeatChar = (text) => {
//   return [...text].filter((e, i, arr) => {
//     return arr.filter((temp) => temp === e).length === 1;
//   });
// };

// console.log(findNonRepeatChar("abcabcc"));

//--------------------------------------------------------

const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

const getAvgIncome = () => {
  let totalIncome = people.reduce(
    (sum, person) => (sum += parseInt(person.salary)),
    0
  );

  return (totalIncome / people.length).toFixed(2);
};

const personAgeMoreThen30 = () => {
  return people?.filter((e) => {
    let date = new Date(e.DOB);
    let currentDate = new Date();
    let gap = currentDate.getFullYear() - date.getFullYear();

    if (gap > 30) {
      return true;
    }

    return false;
  });
};

const getFullName = () => people.map((p) => p.firstName + " " + p.lastName);
const sortPeople = () =>
  people.sort((a, b) => {
    let person1 = new Date(a.DOB);
    let person2 = new Date(b.DOB);

    return person1 > person2 ? 1 : -1;
  });

const getDepartmentCount = () => {
  let obj = {};
  people.forEach((p) => {
    if (obj[p.department]) {
      obj[p.department] += 1;
    } else {
      obj[p.department] = 1;
    }
  });

  return obj;
};

// console.log(getAvgIncome());
// console.log(personAgeMoreThen30());
// console.log(getFullName());
// console.log(sortPeople());
// console.log(getDepartmentCount());

//--------------------------------------------------------
const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

const getNonDeliveredItems = (csid) => {
  return orders?.filter(
    (order) => order.customerId === csid && order.items.length
  );
};

const addTotalPrice = (arr = []) => {
  return arr.map((order) => {
    return {
      ...order,
      totalPrice: order.items?.reduce((sum, p) => (sum += p.price), 0),
    };
  });
};

const haveAllOrderDelivered = (arr = []) =>
  arr.every((order) => order.delivered);

const checkOrderOfCustomer = (arr = [], csid) => {
  return arr.some((order) => order.customerId === csid && order.items.length);
};

const checkProduct = (arr = [], productId) => {
  return arr.some((order) => {
    return order.items.some((p) => p.productId === productId);
  });
};

// console.log(getNonDeliveredItems("234"));
// console.log(addTotalPrice(orders), orders);
// console.log(haveAllOrderDelivered(orders));
// console.log(checkOrderOfCustomer(orders, "123"));
// console.log(checkProduct(orders, "1234"));

//--------------------------------------------------------
const users = [
  {
    id: "88f24bea-3825-4237-a0d1-efb6b92d37a4",
    firstName: "Sam",
    lastName: "Hughes",
  },
  {
    id: "2a35032d-e02b-4508-b3b5-6393aff75a53",
    firstName: "Terri",
    lastName: "Bishop",
  },
  {
    id: "7f053852-7440-4e44-838c-ddac24611050",
    firstName: "Jar",
    lastName: "Burke",
  },
  {
    id: "d456e3af-596a-4224-b1dc-dd990a34c9cf",
    firstName: "Julio",
    lastName: "Miller",
  },
  {
    id: "58a1e37b-4b15-47c1-b95b-11fe016f7b64",
    firstName: "Chester",
    lastName: "Flores",
  },
  {
    id: "b4a306cb-8b95-4f85-b9f8-434dbe010985",
    firstName: "Madison",
    lastName: "Marshall",
  },
  {
    id: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c",
    firstName: "Ava",
    lastName: "Pena",
  },
  {
    id: "7f0ce45a-bdca-4067-968b-d908e79276ce",
    firstName: "Gabriella",
    lastName: "Steward",
  },
  {
    id: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6",
    firstName: "Charles",
    lastName: "Campbell",
  },
  {
    id: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
    firstName: "Madison",
    lastName: "Lambert",
  },
];

const comments = [
  { userId: "88f24bea-3825-4237-a0d1-efb6b92d37a4", text: "Great Job!" },
  {
    userId: "7f053852-7440-4e44-838c-ddac24611050",
    text: "Well done, I think I understand now!",
  },
  {
    userId: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
    text: "How do you do that? 😲",
  },
  { userId: "7f053852-7440-4e44-838c-ddac24611050", text: "OK great thanks" },
  { userId: "b4a306cb-8b95-4f85-b9f8-434dbe010985", text: "Cool, thanks!" },
  { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Nice one 😉" },
  { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Got it." },
  { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Thanks!" },
  { userId: "58a1e37b-4b15-47c1-b95b-11fe016f7b64", text: "Cool 😀" },
  { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Great stuff!" },
];

const getUserID = (user) => {
  return users
    .filter((u) => user.includes(u.firstName) && user.includes(u.lastName))
    .map((e) => e.id)
    .join("");
};

// console.log(getUserID("Madison Marshall"));

const getFirstCommentPerson = (userId) => {
  return users
    .filter((u) => u.id === userId)
    .map((e) => e.firstName + " " + e.lastName)
    .join("");
};

// console.log(getFirstCommentPerson(comments[0].userId));

const getUserNameByComment = (cmt) => {
  let userId = comments
    .filter((comment) => comment.text === cmt)
    .map((e) => e.userId)
    .join("");

  return getFirstCommentPerson(userId);
};

// console.log(getUserNameByComment("OK great thanks"));

const addNameInComment = () => {
  const getName = (userId, nameType) => {
    return users
      .filter((user) => user.id === userId)
      .map((e) => e[nameType])
      .join("");
  };
  return comments.map((comment) => {
    return {
      ...comment,
      firstName: getName(comment.userId, "firstName"),
      lastName: getName(comment.userId, "lastName"),
    };
  });
};
// console.log(addNameInComment());

const getNonCommentUser = () => {
  return users
    .filter((user) => {
      let result = comments.find((cmt) => cmt.userId === user.id);
      console.log(result);
      return !result;
    })
    .map((e) => e.firstName + " " + e.lastName);
};

console.log(getNonCommentUser());

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
