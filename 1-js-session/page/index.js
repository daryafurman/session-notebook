console.log("Do you see me?");

const isANumber = "1";
let amIaNumber = 2;
let students = 16;

console.log("isANumber: ", isANumber);
console.log("amIaNumber: ", amIaNumber);

//Sum

console.log("------------SUM------------------");

let sum = isANumber + amIaNumber;
console.log("Sum: ", sum);
console.log("Type of: ", typeof sum);

const myString = "Hi class!";
const myString2 = "Really Math";

console.log("myString+myString2: ", myString + myString2);

//is one variable is a string we need to convert it to a number with parseInt
let itIsWhatItIs = parseInt(isANumber) + amIaNumber;
console.log("itIsWhatItIs: ", itIsWhatItIs);

//ADD

console.log("ADDing 1: ");
console.log("2. amIaNumber = amIaNumber + 1", amIaNumber);
amIaNumber += 1;
console.log("3. amIaNumber += 1: ", amIaNumber);
amIaNumber++;
console.log("4. amIaNumber++: ", amIaNumber);

const giveMeMore = 3;
amIaNumber += giveMeMore;
console.log("5. amIaNumber+= giveMeMore: s", amIaNumber);

//Substract
console.log("Substarct 1: ");
amIaNumber = amIaNumber - 1;
console.log("amIaNumber: amIaNumber -1:", amIaNumber);

amIaNumber = amIaNumber -= 1;
console.log("amIaNumber: amIaNumber -1:", amIaNumber);

amIaNumber = amIaNumber - 1;
console.log("amIaNumber: amIaNumber -1:", amIaNumber);
