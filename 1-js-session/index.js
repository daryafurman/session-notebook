var oldUse;

oldUse = "Try not to use this";

console.log("old Use:", oldUse);

/* Ways to run JS files
1. In the terminal: system or VS terminal.
From the current folder write:
node fileName.js
2. In VS code: Run > Run without Debugging > select ‘node’
3. In the browser: */

let newVariable = "I can change in time!";

const myValueWillNotChange = "You are stuck with me!";

console.log("newVariable: ", newVariable);
console.log("myValueWillNotChange: ", myValueWillNotChange);

console.log("Data Types");

//Booleans
const myBoolean = false;
console.log("myBoolean: ", myBoolean);

//Stings
const myString = "It´s my string";
console.log("myString: ", myString);

//Numbers
const myNumber = 123;
console.log("myNumber: ", myNumber);

//BigInt
const myBigInt = 3000n;
console.log("myBigInt: ", myBigInt);

//null
const myNull = null;
console.log("myNull: ", myNull);

//array
const myArray = ["Elem 1", 2, "elem 3", false, "5"];
console.log("myArray: ", myArray);

//Object
const myObject = {
  cohortName: "Coriander",
  amountStudents: 15,
  academy: "Spiced",
};
console.log("myObject: ", myObject);
