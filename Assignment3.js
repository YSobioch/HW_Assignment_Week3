//Coding Step 1:
const ages = [3,9,23,64,2,8,28,93];

//This function subtracts the first element from the last element in an array
function subtractFirstFromLast(array){
    const tempArray = array.slice();
    var num = tempArray.pop()-tempArray.shift();
    return num;
}
console.log("1:")


//Coding Step 1a:
console.log(" a: " + subtractFirstFromLast(ages));


//Coding Step 1b: 
ages.push(15);
console.log(" b: " + subtractFirstFromLast(ages));


//Coding Step 1c:
function ArrayAverager(array){
    var tempNum = 0;
    for (i = 0; i < array.length ; i++) {
        tempNum = tempNum + array[i];
        if (i == array.length - 1){
            tempNum = tempNum/array.length;
            tempNum = Math.round(tempNum);
        }
    } 
    return tempNum;  
}

console.log(" c: " + ArrayAverager(ages));



//Coding Step 2:
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("2:");


//Coding Step 2a:
var num = 0;

for (i = 0; i < names.length ; i++) {
    num = num + names[i].length;
    if (i == names.length - 1){
        num = num/names.length;
        num = Math.round(num);
    }
}

console.log(" a: " + num);


//Coding Step 2b:
var string = ""

for (i = 0; i < names.length ; i++) {
    string = string + names[i] + " ";
}

console.log (" b: " + string);



//Coding Step 3:
console.log("3: You can either reference it as arr[] or with a function called pop, if you're using a exact copy of the array as to not actually get rid of the last number.");



//Coding Step 4:
console.log("4: You can either reference it as arr[0] or with a function called shift, if you're using a exact copy of the array as to not actually get rid of the first number.");



//Coding Step 5:
var num = 0;
const nameLengths = [];

for (i = 0; i < names.length; i++) {
    num = names[i].length;
    nameLengths.push (num);
}

console.log ("5: " + nameLengths);



//Coding Step 6:
var num = 0

for (i = 0; i < nameLengths.length; i++) {
    num = num + nameLengths[i]
}

console.log("6: " + num);



//Coding Step 7: 
function helloThere(word, n){
    var helloThere = word
    for (i = 1; i < n ; i++) {
        helloThere = helloThere + word
    }
    return helloThere;
}
  
console.log("7: " + helloThere("Hello", 3));



//Coding Step 8: 
function title(firstName, lastName) {
    var title = firstName + " " + lastName
    return title;
}

//Good taste if you know who it's referencing :3
console.log ("8:", title("James", "Sunderland"));



//Coding Step 9:
var num = 0

//One true and one false array for the purposes of testing
const testing1 = [2, 3, 4]
const testing2 = [55, 72, 120]

function bigSum(array) {
    for (i = 0; i < array.length; i++) {
        num = num + array[i];
    }
    return (num > 100);
}

console.log("9: " + bigSum(testing2));



//Coding 10:
//We've already created this code so no need to repeat
//Again, just some arrays to test to see if the function is accurate
const testing3 = [3, 4, 5]
const testing4 = [35, 72, 320]

console.log("10: " + ArrayAverager(testing4));



//Coding 11:
const testing5 = [23, 52, 73]
const testing6 = [12, 27, 34]

function largerSumation(array1, array2) {
    return (ArrayAverager(array1) > ArrayAverager(array2))   
}

console.log ("11: " + largerSumation(testing5, testing6))



//Coding 12:

function willBuyDrink(isHotOutside, moneyInPocket) {
    return (isHotOutside === true && moneyInPocket >= 10.50)
}

console.log("12: " + willBuyDrink(false, 11));



//Coding 13: 
//This function rolls a dice of any number of sides, you know, for DND
function rollDice(sidesOfDice){
    var num;
    num = Math.random() * sidesOfDice;
    num = Math.trunc(num) + 1;
    return num;
}

//Checking roll with a D20, just refresh the page and watch it go!
console.log("13. " + rollDice(20));



