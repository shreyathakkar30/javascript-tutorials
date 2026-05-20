// console.log('Testing')
//Variable
//Var
//DataType VariableName = Value; Strongly Typed Languages
// JS= Loosely Typed Language
// var age = 34;
// var num1 = 10;
// var num2 = 10;
// var Name= "Shreya";
// console.log(num1 + num2);
// console.log(age)
//Naming Conventions
//firstname
//FirstName-> Classes
//first_name
//firstName (preffered)(CammelCasing)
//Var = Global Scope
// if(true){
//     var x = 10;
// }
// console.log(x)

// if(true){
//     let y = 19;
//     console.log(y);
// }
//Let=> Local Scope
//Const -> Always Local Scope and Strict It is nonchangable once assigned
//Values Kabhi bhi Re-assign nhi ho sakti
//Initializing of Values is Compolsory in the case of Const

// const age = 22;
// age = "Shreya"
// console.log(age)

// Variables
// var | const | let

// var - Global
// Re-assign
// Kahi bhi access krlo

// let - Local
// Reassign kr sakte hai
// Acccess  sirf khud k block k andar hi kr sakte hai

// const - local
// Reassign nhi kr sakte
// Access sirf khud k block k andar hi kr sakte hia

// 90% of the time const used in production

//Datatypes supported by Javascript
//Numbers
//Strings
//Boolean
//Undefined
//NULL
//Objects

//Operators supported by JavaScript
// +
// -
// *
// /
//LETS UNDERSTAND EACH AND EVERYTHING STEP BY STEP
//Numbers and operators
// let number1 = 29;
// let number2 = 12.1;
// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);

// Strings
// const FirstName = 'Shreya'
// const LastName= 'Thakkar'
// console.log(FirstName + ' ' + LastName); //concatination
// Booleans: True and   False Values accepted no other values accepted here

//Boolean 1 | 0
// Lets Prove the above point 
// if (0){
//     console.log(true);
// }
// if(1){
//     console.log(true);
// }
//true ko javascript 1 manti hai and False ko vo 0 manti hai
// So if you ever used any operator with boolean it will measure them as 0 or 1
// let isloggedin = true;
// console.log(isloggedin)
//console.log(isloggedin + 10)
//Null
// let lastlogindate = null;
// console.log(lastlogindate);
//Undefined
// let lastlogindate = undefined;
// console.log(lastlogindate);
// // objects
// const person = {
//     firstname: 'Shreya',
//     lastname: 'Thakkar',
//     age: 22,
//     isloggedin: false,
//     lastlogindate: null,
// }
// console.log(person.isloggedin)
// String '1' + '1' = string
// string + number = string
// string * number = NAN not a number
// console.log('1' * 1);
// Typeof Operator
// console.log(typeof '2121');
// console.log(typeof 121212);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof person); //Throws object
// console.log(typeof personalbar.firstname);// Throws String