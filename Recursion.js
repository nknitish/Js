const input = [
  {
    title: "some title",
    channel_id: "123we",
    options: [
      {
        channel_id: "abc",
        image: "http://asdasd.com/all-inclusive-block-img.jpg",
        title: "All-Inclusive",
        options: [
          {
            channel_id: "dsa2",
            title: "Some Recommends",
            options: [
              {
                image: "http://www.asdasd.com",
                title: "Sandals",
                id: "1",
                content: {},
              },
            ],
          },
        ],
      },
    ],
  },
];

console.log(findNestedObj(input, "title", "Some Recommend"));
console.log(getObject(input));

function findNestedObj(entireObj, keyToFind, valToFind) {
  let foundObj;
  console.log("Object", entireObj);
  JSON.stringify(entireObj, (temp, nestedValue, key) => {
    console.log("obj", nestedValue);
    if (nestedValue && nestedValue[keyToFind] == valToFind) {
      foundObj = nestedValue;
      return;
    }
    return nestedValue;
  });

  return foundObj || null;
}

function getObject(theObject) {
  var result = null;

  if (theObject instanceof Array) {
    for (let i = 0; i < theObject.length; i++) {
      result = getObject(theObject[i]);
      if (result) {
        break;
      }
    }
  } else {
    for (let prop in theObject) {
      if (prop == "id" && theObject[prop] === "1") {
        return theObject;
      }
      if (
        theObject[prop] instanceof Array ||
        theObject[prop] instanceof Object
      ) {
        result = getObject(theObject[prop]);
        if (result) {
          break;
        }
      }
    }
  }

  return result;
}
