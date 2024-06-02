//Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let numOne= 50
let numTwo= 100

if(numOne>numTwo){
    console.log(numOne)
}
else{
    console.log(numTwo)
}

//Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)


let Number = 14

if(Number > 0){
    console.log("number is positive")
}
else if(Number < 0){
    console.log("number is negative")
}
else{
    console.log("number is zero")
}

//Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let num = 7

if( 10 % num ==0){
console.log("number is divisible by 10")
}
else{
    console.log ("number is not divisible by 10")
}

//Solve the problem with Javascript  to check whether a number is even or odd. 


{
    let num = 4
    if (num % 2 ==0){
        console.log("number is odd")
    }
    else{
        console.log("number is even")
    }
}

//Solve the problem with Javascript  to check whether a character is in the alphabet or not.


let alphabet = "h"

if(alphabet>="a" && alphabet <="z" ||alphabet>="A" && alphabet <="Z" ){
console.log("nember is alphabet")
}
else{
    console.log("number is not alphabet")
}
    
//Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)


let temp = 30

if(temp >= 30){

    console.log("weather is too hot")
}
else if( 25 >= temp ){
    console.log("weather is too cold")
}
else{
    console.log("weather is normal")
}


//Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)


{
    let num1 = 456458685
    let num2 = 56647
    let num3 =56744

    let largest=Math.max(num1,num2,num3)
    console.log(largest)
}

//Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.


{
    let number = 17
    let result = (number%2) ? "evan number" : "odd number"

    console.log(result)
}

//Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

{
    let num1 = 40
    let num2= 294
    if(num1 > 30 && num2 > 30){
        console.log("are both grather than 30")
    }
    else{
        console.log("are not both grather than 30")
    }
}




//Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)


let age = 19
if(age >= 13 && age <= 19){
    console.log("teenager")
}
else{
    console.log("not teenager")

}


//Create a program that uses the logical OR operator to check if either one of two strings str1 or str2 is equal to "JavaScript". Output a boolean result.

let str1 = "Python";
let str2 = "JavaScript";

let result = (str1 === "javaScript" || str2 === "Python");
console.log(result);



//Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
//Find out if the average grade:
//If Percentage >= 90% then print “Grade A”
//Percentage >= 80% : Grade B
//Percentage >= 70% : Grade C
//Percentage >= 60% : Grade D
//Percentage >= 40% : Grade E
//Percentage < 40% : Grade F

let math = 89
let english = 89
let physics = 100

let total =(math+english+physics)


let avarage =(total / 3)


if(avarage >= 90){
    console.log("grade A")
}
else if(avarage >= 80){
    console.log("grade b")
}
else if(avarage >= 70){
    console.log("grade c")
}
else if(avarage >= 60){
    console.log("grade d")
}
else if(avarage >= 50){
    console.log("grade e")
}
else{
    console.log("fail")
}

console.log("Average Percentage:",avarage.toFixed(2) + "%");




//Find the random number between 1 to 10

let randomnumber = Math.floor(Math.random() *10) +1;
console.log(randomnumber)
 

//Create 3 meaningful arrays and  3 objects

let fruts = ["mango", "orange", "apple", "banana"]

let countries =[
    { name:"bangladesh"},
    { name:"india"},
    { name:"pakistan"},
    { name:"america"},
    { name:"australia"},
   
]
console.log(countries)

let pleyername = ["tamim","shakib", "liton",",musfiq"]
console.log(pleyername)

//object

let person ={
    name:"parvas",
    age:"20",
    city:"rajshahi"

}
console.log(person)
let car ={
    name:"bmw",
    age:"20",
    city:"rajshahi"

}
console.log(car)
let book ={
    name:"the magical land",
    age:"20",
    city:"rajshahi"

}
console.log(book)

//Create a while loop which prints values from 10 to 50

let value =10

while (value <= 50){
    console.log(value); value++
}

//Create a for loop which prints values from 20 to 60

for(let value=20; value <=60;value++){
    console.log(value);
}

//Create a function of adding two numbers

function addnumber(num1,num2){
    return num1+num2
}

let addition = addnumber(100,82)
console.log(addition)

//Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value. (shown in class)


function generateNumberList(initialValue, finalValue) {
    var numbers = [];
    for (var i = initialValue; i <= finalValue; i++) {
        numbers.push(i);
    }
    return numbers;
}
var initial = 1;
var final = 5;
var numberList = generateNumberList(initial, final);
console.log(numberList);

// Create a function which return whether the year is leap year or not


function isLeapYear(year) {
 
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


var year = 2024;
console.log(isLeapYear(year)); 


// Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal)

function checkTemperature(temperature) {
    if (temperature >= 30) {
        return "hot";
    } else if (temperature <= 25) {
        return "cold";
    } else {
        return "normal";
    }
}


var temperature2 = 35;
console.log(checkTemperature(temperature2)); 


//Create a function which returns whether the number is odd or even

function evenOdd(number){
    if(number % 2===0 ){
        return "odd"
    }
    else{
        return "even"
    }
}
let number1= 60;
console.log(evenOdd(number1));

//Splice and an given array - remove two items and adding two new elements 


///Reverse and sort an array where arr = [2,45,4,55,12,42,34,78]

var array =[2,45,4,55,12,42,34];
array.reverse();
array.sort((a,b) => a-b);

console.log(array)

//Create a object with car and add two function in there (called methods as well) and print out the the result calling two functions using this keyword as well

//Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’

let text = "I love coding";

let reversedText = text.split('').reverse().join('');

console.log(reversedText);

//Create an array with list of items. Iterate the array to view the list of the items in the console using for loop. 
var items = ["apple", "banana", "orange", "grape", "kiwi"];


for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
}
