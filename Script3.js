//--------------------------------------------------------
const users = [
  {
    id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
    email: "tcasaletto0@soundcloud.com",
    ip_address: "53.215.156.73",
  },
  {
    id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
    email: "nmoffett1@paginegialle.it",
    ip_address: "34.81.219.4",
  },
  {
    id: "1019b52c-db9d-45a2-975f-404455925a6a",
    email: "rcrampin2@yale.edu",
    ip_address: "65.181.114.151",
  },
  {
    id: "e8637c3b-645d-4742-a463-d2006742606f",
    email: "ddreinan3@smugmug.com",
    ip_address: "136.171.217.116",
  },
  {
    id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
    email: "gdorkin4@taobao.com",
    ip_address: "220.228.4.97",
  },
  {
    id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
    email: "vhucquart5@typepad.com",
    ip_address: "101.212.0.49",
  },
  {
    id: "74120248-03b5-4888-84c0-d1a459c6273b",
    email: "vsircombe6@marriott.com",
    ip_address: "28.180.205.167",
  },
  {
    id: "412a0669-7171-48b4-95eb-e898993ec1dc",
    email: "kdesouza7@t.co",
    ip_address: "61.44.195.62",
  },
  {
    id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
    email: "sbehnke8@booking.com",
    ip_address: "1.176.238.27",
  },
  {
    id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
    email: "clindsell9@nymag.com",
    ip_address: "44.37.119.76",
  },
];

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const checkValidEmail = (arr = []) => arr.every((e) => validateEmail(e.email));
// console.log(checkValidEmail(users));

const checkDomain = (arr = []) => {
  return arr.find((e) => e.email.includes("soundcloud"));
};
// console.log(checkDomain(users));

const replaceData = () => users.fill("deleted");
replaceData();
// console.log(users);

//--------------------------------------------------------

const accounts = [
  {
    _id: "5e56d5f5c00d45b8f1125ef4",
    index: 0,
    guid: "955310d3-45df-47e7-bc9c-92504d5e92d2",
    isActive: true,
    balance: "$3,926",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    name: "George Bond",
    gender: "male",
    company: "GEEKOL",
    email: "georgebond@geekol.com",
    phone: "+1 (862) 591-2584",
    address: "677 Rost Place, Brandermill, Virgin Islands, 854",
    about:
      "Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.",
    registered: "2014-05-31T09:59:01 -01:00",
    latitude: -30.600915,
    longitude: -83.795214,
    tags: [
      "nostrud",
      "aliquip",
      "est",
      "laboris",
      "voluptate",
      "do",
      "dolor",
      ["deserunt", "ipsum"],
      ["consectetur", "quis", "commodo"],
    ],
    friends: [
      { id: 0, name: "Alisa Ford" },
      { id: 1, name: "Hess Howell" },
      { id: 2, name: "Gwendolyn Hendrix" },
    ],
    greeting: "Hello, George Bond! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5e56d5f51837c78c32ed16ef",
    index: 1,
    guid: "416d3864-dc91-45e3-817c-07562b04b512",
    isActive: false,
    balance: "$1,273",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Fay Carlson",
    gender: "female",
    company: "SIGNIDYNE",
    email: "faycarlson@signidyne.com",
    phone: "+1 (922) 529-2437",
    address: "786 Belvidere Street, Carbonville, South Dakota, 3020",
    about:
      "Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.",
    registered: "2017-04-18T02:00:02 -01:00",
    latitude: 74.274128,
    longitude: -119.604152,
    tags: ["et", "ut", "mollit", "occaecat", "ipsum", "mollit", "pariatur"],
    friends: [
      { id: 0, name: "Miranda Little" },
      { id: 1, name: "Ellen Burks" },
      { id: 2, name: "Shanna Logan" },
    ],
    greeting: "Hello, Fay Carlson! You have 10 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5e56d5f54b9a9491ba37fec9",
    index: 2,
    guid: "46839c30-0b7e-4009-98f1-9b8d770a0c88",
    isActive: false,
    balance: "$3,455",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "French Bennett",
    gender: "male",
    company: "PASTURIA",
    email: "frenchbennett@pasturia.com",
    phone: "+1 (883) 501-3963",
    address: "856 Hemlock Street, Alfarata, Nevada, 5261",
    about:
      "Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.",
    registered: "2015-04-16T11:53:33 -01:00",
    latitude: 85.491905,
    longitude: 90.342252,
    tags: ["laboris", "reprehenderit", "est", "in", "duis", "voluptate", "non"],
    friends: [
      { id: 0, name: "Mayer Sullivan" },
      { id: 1, name: "Wiggins Hudson" },
      { id: 2, name: "Jacqueline Gibbs" },
    ],
    greeting: "Hello, French Bennett! You have 10 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5e56d5f55dd72bb06144c70c",
    index: 3,
    guid: "52b94117-bd93-4d8f-b8e3-f2fd1c3988fc",
    isActive: false,
    balance: "$1,733",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "Shannon Mitchell",
    gender: "male",
    company: "DECRATEX",
    email: "shannonmitchell@decratex.com",
    phone: "+1 (876) 447-3381",
    address: "870 Tillary Street, Aurora, Vermont, 8055",
    about:
      "Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.",
    registered: "2014-01-29T04:55:04 -00:00",
    latitude: 77.845921,
    longitude: -137.754911,
    tags: ["consequat", "non", "dolore", "cupidatat", "irure", "ipsum", "quis"],
    friends: [
      { id: 0, name: "Isabelle Luna" },
      { id: 1, name: "Marissa Beach" },
      { id: 2, name: "Sarah Simmons" },
    ],
    greeting: "Hello, Shannon Mitchell! You have 4 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5e56d5f5bb33b3df103cbfb9",
    index: 4,
    guid: "2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f",
    isActive: true,
    balance: "$1,839",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: "Johns Hooper",
    gender: "male",
    company: "ZENTHALL",
    email: "johnshooper@zenthall.com",
    phone: "+1 (868) 432-2105",
    address: "446 Emmons Avenue, Tyro, South Carolina, 3627",
    about:
      "Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.",
    registered: "2017-09-06T09:24:11 -01:00",
    latitude: -33.444624,
    longitude: 99.697197,
    tags: ["et", "minim", "sunt", "irure", "et", "esse", "consectetur"],
    friends: [
      { id: 0, name: "Cynthia Hays" },
      { id: 1, name: "Estela Walton" },
      { id: 2, name: "Christy Ball" },
    ],
    greeting: "Hello, Johns Hooper! You have 1 unread messages.",
    favoriteFruit: "apple",
  },
];

/**
 * Exercise 01
 *
 * The first account has nested arrays of tags in it's tag property.  Get a list of all tags for this account as a one-dimensional array.
 */

const getAllTags = (arr) => {
  return [].concat(...arr);
};

console.log(getAllTags(accounts[0]?.tags));
/**
 * Exercise 02
 *
 * Check whether the tags for the first account includes the "consectetur" tag
 */

const checkIfTagContains = (arr, consectetur) => {
  return getAllTags(arr).includes(consectetur);
};

console.log(checkIfTagContains(accounts[0]?.tags, "consectetur"));

/**
 * Exercise 03
 *
 * Get a list of all the tags for all the accounts and join them together as a string separated by commas.
 */

const getTagsinSring = (arr = []) => {
  let result = [];
  arr.forEach((e) => {
    result = result.concat(getAllTags(e.tags));
  });

  return result.map((e) => e).join(", ");
};

console.log(getTagsinSring(accounts));

/**
 * Exercise 04
 *
 * Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)
 */

const getAllFriends = (arr = []) => {
  let result = [];
  arr.forEach((e) => {
    result = result.concat(e.friends);
  });
  return result.map((res) => res.name);
};

console.log(getAllFriends(accounts));

/**
 * Exercise 05
 *
 * Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500
 */

const getFilteredFriend = (arr = []) => {
  let result = arr.filter((e) => {
    if (e.age < 30) {
      let amt = parseInt(e.balance.replace(/[^0-9.-]+/g, ""), 10);

      if (amt > 1500) {
        return true;
      }
    }
  });

  return getAllFriends(result);
};

// console.log(getFilteredFriend(accounts));

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
