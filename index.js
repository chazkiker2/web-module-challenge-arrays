var originalFlavors = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond",
];

const testArr1 = ["item1", "item2", "item3", "item4", "item5"];

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

  (1) an array 

  Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

  To save you from having to count the items above, you can assume that length of originalFlavors is 31. 
    You may also want to test your function by creating and passing an array of a different length, 
    to make sure it returns FALSE if length is not 31. 

  i.e. is31Flavors(originalFlavors) will return TRUE.

*/

function is31Flavors(arr) {
  if (arr.length === 31) {
    return true;
  }
  return false;
}

// console.log(
is31Flavors(originalFlavors);
// );
// console.log(is31Flavors(testArr1));

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor(arr, flavor) {
  if (!Array.isArray(arr)) {
    console.log("inputted array is not an array!");
    if (typeof flavor !== "string") {
      console.log("inputted flavor is not a string!");
    }
    return null;
  }

  arr.unshift(flavor);
  // console.log(arr);
  return arr;
}
addFlavor(originalFlavors, "Rainbow Sherbert");
// console.log(addFlavor(testArr1, "itemA"));

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/

function removeLastFlavor(arr) {
  if (!Array.isArray(arr)) {
    console.log("must input an array");
    return null;
  }

  arr.pop();
  // console.log(arr);
  return arr;
}
// console.log(removeLastFlavor(testArr1));

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(arr, i) {
  let err = false;
  if (!Array.isArray(arr)) {
    console.log("arr is not an array!");
    err = true;
  } else if (isNaN(i)) {
    console.log("index must be a number");
    err = true;
  } else if (!(i < arr.length && i >= 0)) {
    console.log("invalid index provided");
    err = true;
  }
  if (err) return null;

  return arr[i];
}
// console.log(getFlavorByIndex(originalFlavors, 2));
getFlavorByIndex(originalFlavors, 2);

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
  as opposed to just arbitrarily removing the first or last flavor. 
  
  Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavorByName(arr, flavor) {
  if (!Array.isArray(arr)) {
    console.log("arr is not an array!");
    return null;
  } else if (typeof flavor !== "string") {
    console.log("flavor must be a string");
    return null;
  }

  if (arr.includes(flavor)) {
    const indexToDelete = arr.indexOf(flavor);

    arr.splice(arr.indexOf(flavor), 1);
    return arr;
  } else {
    console.log("The provided flavor is not in the array!");
    return null;
  }
}
// console.log(is31Flavors(originalFlavors));
// console.log(is31Flavors(removeFlavorByName(originalFlavors, "Vanilla")));
// console.log(is31Flavors(originalFlavors));

// console.log(removeFlavorByName(originalFlavors, "Vanilla"));
removeFlavorByName(originalFlavors, "Vanilla");

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

function copy(originalArr, newArr) {
  if (!Array.isArray(originalArr)) {
    console.log("originalArr must be an array!");
    return null;
  } else if (!Array.isArray(newArr)) {
    console.log("The newArr must be an array!");
    return null;
  }

  if (newArr.length > 0) {
    // assuming user inputted an array (as the newArr argument) in order to append (concat) the copy of originalArr into newArr
    console.log(
      "Creating a copy of new array and concatenating said copy to newArr——if newArr is an existing array with elements inside, the copy will have more than 31 flavors"
    );
    return newArr.concat([...originalArr]);
  } else {
    // assuming user inputted an empty array (as the newArr argument) in order to copy the original into newArr... in which case the newArr argument is useless
    return [...originalArr];
  }
}
//test function call where (1) originalArr is an array, (2) newArr is an existing array with elements in it
// WORKING AS EXPECTED
// let existingArrayWithElements = ["element1", "element2"];
// const testCopy1 = copy(testArr1, existingArrayWithElements);
// console.log(testCopy1);

// test function call where (1) originalArr is an array, (2) newArr is an existing array without any elements (rendering newArr argument useless)
// WORKING AS EXPECTED
// let existingArrayEmpty = [];
// const testCopy2 = copy(testArr1, existingArrayEmpty);
// console.log(testCopy2);

// test function call where (1) originalArr is not an array at all. The copy function should return null.
// WORKING AS EXPECTED
// let existingArrayEmpty2 = [];
// let originalNonArray = "THIS IS NOT AN ARRAY";
// const testCopy3 = copy(originalNonArray, existingArrayEmpty2);
// console.log(testCopy3);

// let existingArray = ["el1", "el2", "el3"];
// let targetArray = [];
// placeCopyArray = copy(existingArray, targetArray);
// console.log(existingArray);
// console.log(targetArray);

function copy_BETTER(arr) {
  // A better copy function since it gets rid of the unuseful second argument of the original function
  if (!Array.isArray(arr)) {
    console.log("arr is not an array! please provide an array!");
    return null;
  }
  return [...arr];
}
// test copy_BETTER function call where arr is an array
// WORKING SA EXPECTED
// const copy_BETTER_test1 = copy_BETTER(testArr1);
// console.log(copy_BETTER_test1);

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. 
  Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. 

  Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". 
  This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord(arr, searchStr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().includes(searchStr.toLowerCase())) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
// // TEST filterByWord function call with regular letter case
// // WORKS AS EXPECTED
// const filterTest1 = filterByWord(originalFlavors, "Chocolate");
// console.log(filterTest1);

// // TEST filterByWord() with varying letter case
// // WORKS AS EXPECTED
// const filterTest2 = filterByWord(originalFlavors, "CHOcoLATE");
// console.log(filterTest2);

/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(arr) {
  let wordcountSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let splitElmt = arr[i].split(" ");
    wordcountSum += splitElmt.length;
  }
  return wordcountSum / arr.length;
}

// // TEST getAverageWordLength()
// //WORKS AS EXPECTED
// const testArr2 = ["This is", "an", "array", "of words that", "are split up differently", "the", "average should", "be", "1.777777777777"];
// const avgWordTest1 = getAverageWordLength(testArr2);
// console.log(avgWordTest1);
// const avgWordTest2 = getAverageWordLength(originalFlavors);
// console.log(avgWordTest2);








/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////         FINISHED         ///////////////////////////////////////////////////////////////////
/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. 

Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].

*/

// Data ⬇️
var newFlavors = [
  "Date night",
  "U.S.S Butterscotch (Stranger Things special)",
  "Honey Almond",
  "Mint Chocolate Chip",
  "Chocolate",
  "Oreo® Cookies'n Cream",
  "Chocolate Chip",
  "Pralines 'n Cream",
  "Very Berry Strawberry",
  "Chocolate Chip Cookie Dough",
  "Old Fashioned Butter Pecan",
  "Jamoca®",
  "Jamoca® Almond Fudge",
  "Reese's® Peanut Butter Cup",
  "Rocky Road",
  "Peanut Butter ’n Chocolate",
  "Gold Medal Ribbon®",
  "World Class® Chocolate",
  "Cherries Jubilee",
  "Chocolate Fudge",
  "Daiquiri Ice",
  "Rainbow Sherbet",
  "Rainbow Swirl",
];
var seasonalFlavors = [
  "America's Birthday Cake",
  "Baseball Nut®",
  "Blueberry Cheesecake",
  "Bourbon Street Pecan Pie",
  "Brownie Bar Mashup",
  "Cherry Cordial with Kisses",
  "Chocolate Mousse Royale",
  "French Vanilla",
  "Eggnog",
  "German Chocolate Cake",
  "Icing on the Cake",
  "Love Potion #31",
  "New York Cheesecake",
  "Nutty Coconut",
  "Peppermint",
  "Strawberry Cheesecake",
  "Rock ’n Pop Swirl",
  "Reese’s Peanut Butter Cup",
  "Trick Oreo Treat",
  "Winter White Chocolate",
  "made with Snickers®",
  "made with M&M's®",
  "Heath®",
  "Mango Tango",
];
var regionalFlavors = [
  "Pink Bubblegum",
  "Caramel Macchiato",
  "York Peppermint Pattie",
  "Cotton Candy",
  "Orange Sherbet",
  "Grape Ice",
  "Watermelon Ice",
  "Miami Vice Sorbet",
  "Splish Splash®",
  "Wild 'n Reckless Sherbet",
  "Lemon Custard",
  "Oregon Blackberry",
  "Bananas ‘n Strawberries",
  "Mississippi Mud",
  "Rum Raisin",
  "Creole Cream Cheese",
  "Chocolate Almond",
  "Fudge Brownie",
  "Banana Nut",
  "Black Walnut",
  "Cotton Candy Crackle",
  "Quarterback Crunch",
  "Chocolate Chocolate Chip Cheesecake",
  "Caramel 'n' Cookies",
];

function getRandomFlavors(arr1, arr2, arr3, arr4) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || !Array.isArray(arr3) || !Array.isArray(arr4)) {
    console.log("All given parameters must be arrays.");
    return null;
  }

  const arrAllFlavors = [
    [...arr1],
     [...arr2],
      [...arr3],
       [...arr4]
  ];

  const arrRandomFlavors = [];

  for (let i=0; i<31; i++) {
    let added = false;
    let outerIndex = Math.floor(Math.random() * arrAllFlavors.length);
    let innerIndex = Math.floor(Math.random() * arrAllFlavors[outerIndex].length);

    while (!added) {
      let flavorToAdd = arrAllFlavors[outerIndex][innerIndex];
      if (!arrRandomFlavors.includes(flavorToAdd)) {
        arrRandomFlavors.push(flavorToAdd);
        added = true;
      } else {
        if (innerIndex < arrAllFlavors[outerIndex].length - 1) {
          innerIndex++;
        } else if (outerIndex < arrAllFlavors.length - 1) {
          innerIndex = 0;
          outerIndex++;
        } else {
          outerIndex = 0;
        }
      }
    }
    
  }

  return arrRandomFlavors;
}
// // TESTING getRandomFlavors() function call. IT WORKS IT WORKS IT WORKS!!!!
// const randomArr = getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors);
// console.log(randomArr);
// console.log(is31Flavors(randomArr));


