// // console.log('Testing')
// //Variable
// //Var
// //DataType VariableName = Value; Strongly Typed Languages
// // JS= Loosely Typed Language
// // var age = 34;
// // var num1 = 10;
// // var num2 = 10;
// // var Name= "Shreya";
// // console.log(num1 + num2);
// // console.log(age)
// //Naming Conventions
// //firstname
// //FirstName-> Classes
// //first_name
// //firstName (preffered)(CammelCasing)
// //Var = Global Scope
// // if(true){
// //     var x = 10;
// // }
// // console.log(x)

// // if(true){
// //     let y = 19;
// //     console.log(y);
// // }
// //Let=> Local Scope
// //Const -> Always Local Scope and Strict It is nonchangable once assigned
// //Values Kabhi bhi Re-assign nhi ho sakti
// //Initializing of Values is Compolsory in the case of Const

// // const age = 22;
// // age = "Shreya"
// // console.log(age)

// // Variables
// // var | const | let

// // var - Global
// // Re-assign
// // Kahi bhi access krlo

// // let - Local
// // Reassign kr sakte hai
// // Acccess  sirf khud k block k andar hi kr sakte hai

// // const - local
// // Reassign nhi kr sakte
// // Access sirf khud k block k andar hi kr sakte hia

// // 90% of the time const used in production

// //Datatypes supported by Javascript
// //Numbers
// //Strings
// //Boolean
// //Undefined
// //NULL
// //Objects

// //Operators supported by JavaScript
// // +
// // -
// // *
// // /
// //LETS UNDERSTAND EACH AND EVERYTHING STEP BY STEP
// //Numbers and operators
// // let number1 = 29;
// // let number2 = 12.1;
// // console.log(number1 + number2);
// // console.log(number1 - number2);
// // console.log(number1 * number2);
// // console.log(number1 / number2);

// // Strings
// // const FirstName = 'Shreya'
// // const LastName= 'Thakkar'
// // console.log(FirstName + ' ' + LastName); //concatination
// // Booleans: True and   False Values accepted no other values accepted here

// //Boolean 1 | 0
// // Lets Prove the above point 
// // if (0){
// //     console.log(true);
// // }
// // if(1){
// //     console.log(true);
// // }
// //true ko javascript 1 manti hai and False ko vo 0 manti hai
// // So if you ever used any operator with boolean it will measure them as 0 or 1
// // let isloggedin = true;
// // console.log(isloggedin)
// //console.log(isloggedin + 10)
// //Null
// // let lastlogindate = null;
// // console.log(lastlogindate);
// //Undefined
// // let lastlogindate = undefined;
// // console.log(lastlogindate);
// // // objects
// // const person = {
// //     firstname: 'Shreya',
// //     lastname: 'Thakkar',
// //     age: 22,
// //     isloggedin: false,
// //     lastlogindate: null,
// // }
// // console.log(person.isloggedin)
// // String '1' + '1' = string
// // string + number = string
// // string * number = NAN not a number
// // console.log('1' * 1);
// // Typeof Operator
// // console.log(typeof '2121');
// // console.log(typeof 121212);
// // console.log(typeof true);
// // console.log(typeof null);
// // console.log(typeof person); //Throws object
// // console.log(typeof personalbar.firstname);// Throws String





// //From here Git push pending
// //Conditional Statements
// // if else stmts
// //Ladder if else
// // const age = 102;
// // if(age >= 80){
// //     console.log("Yes, you are an adult!!");
// // }
// // else if(age >= 18){
// //     console.log("Yes, you can vote!!");
// // }

// // else{
// //     console.log("No, you cant vote");
// // }

// // Ternary Operator: Exactly one operation can be covered using this ternary operator
// //? True statment :Else Statement
// // const age = 12;
// // age >= 80 ? console.log('Yes'): console.log('No');


// //Switch Statement
// // const option = 7;
// // switch(option){
// //     case 1: console.log('Namste!!');
// //         break;
// //     case 2: console.log('Hello!!');
// //         break;
// //     case 3: console.log('Heyya!!!');
// //         break;
// //     default: console.log('Invalid Option');

// // }
// // In the below given example if you use If Else its not scalable
// // let a = 30;
// // let operator = '+';
// // let b = 20;
// // switch(operator){
// //     case '+': console.log(a + b); 
// //         break;
// //     case '-': console.log(a - b);
// //         break;
// //     case '*': console.log(a * b);
// //         break;
// //     default: console.log('I Dont Know!!')    
// // }

// //Logical Operators
// //Three main Logical Operators: AND OR NOT
// //AND: All the conditions must be true (&&)
// // const age = 19;
// // const gender = 'Male';
// // if (age >= 18 && gender == 'Male' ){
// //     console.log('You are adult male');
// // }
// //OR: atleast one condition should be true (||))
// // const age = 1;
// // const gender = 'Female';
// // if (age >= 18 || gender == 'Male' ){
// //     console.log('You are adult male');
// // }
// //NOT: it will convert true into false and False into True(!)
// //!true = false and !false = true
// //const num = 5;
// //% throws reminder
// // if(num % 2 != 0){//Another wat (!(num % 2 ==0))
// //     console.log('Odd Number');
// // }
// //Loops
// //Whenever you want to do repititave tasks you use Loops
// //Mainly three types of Loops are there
// // For While DoWhile
// //For => Use when you know how many times to loop

// // for(let i = 1; i <= 10; i+=2) {
// //     console.log('Shreya Thakkar' + i);
// // }
// //While: Jab tumhe condition pata ho but tumhe ye nhi pata ki us task ko achieve krne k liye kitne iterations lagne vali hai tab you can use While loop
// /*
//                                         You
//                                         House
// While                                        
// */
// // let initialposition = 0;
// // let house = 100;
// // while (initialposition != house){
// //    initialposition= initialposition + 1;
// //     console.log('Step Taken' + initialposition)
// // }
// //Do While loop: basically its similar to while but the only difference is it will first run the code then check for the condition
// // let initialposition = 100;
// // let house = 100;
// // do{
// //     initialposition= initialposition + 1;
// //     console.log('Step Taken' + initialposition)
// // }while(initialposition <= house)
// //Game: Guess the input
// //In this kind of Scenario Do While works
// // let number = 40;

// // let guess = 0;

// // do{
// //     guess = parseInt(prompt("Guess A Number"));
// //     if(guess == number){
// //         alert('Winner')
// //         break;
// //     }
// // }while(guess != 0)
// //Functions: A block of code that performs a particular task
// // function sayhello(){
// //     console.log('Hey Shreya Thakkar!! Hows it goin')
// // }
// // sayhello()//Calling of Function
// // sayhello()
// // sayhello()
// // sayhello()
// // sayhello()
// // Parameter
//             //argument
// // function add(a , b, c){
// //     console.log(a + b + c);
// //     return a + b+ c;

// // }
// // let a = add(5 , 10, 10);//Parameters
// // console.log('The Addition is '+a);
// // add(10, 10, 10);
// // add(5, 5, 5);
// // add(99, 99, 99);
// //Homework Multiplication of two numbers using function
// // function multiplication(a , b){
// //     //console.log( a * b);
// //     //return a * b;
// //     //let ans = a*b;
// //     //return ans;
// // }
// // let a = multiplication(10, 10);
// // console.log("Hey the Result is " + a);
// //Unlimited arguments ko accept kr sako
// // function addNumbers(){
// //     let answer = 0;
// //     for(let i = 0; i< arguments.length; i = i +1){
// //         answer = answer + arguments[i];
// //     }
// //     return answer;
// // }
// // let result = addNumbers(1, 22, 33, 324, 5, 890, 87, 34);
// // console.log('The result is '+ result);
// // function addNumbersv2(...number){//Spread operator
// //     let ans = 0
// //     for(let i = 0; i< number.length; i++){
// //         ans = ans + number[i];
// //     }
// //     return ans;
// // }
// // let result = addNumbersv2(10, 10, 70, 10);
// // console.log("the final result is: "+result);
// //Arrow Functions
// //1. Syntax
// // const sayhello = () => {//Arrow Function
// //     console.log('Hello this is shreya thakkar')
// // }
// // const add = (a, b) =>{
// //     return a + b;
// // }
// // const add = (a , b) => a + b;// One Liner Arrow Function
// // console.log(add(2,4));
// //2. ARGUMENTS keyword is not available in the Arrow Function
// // const addNumbers = (...nums) => {
// //     console.log(nums)
// // }
// // addNumbers(12, 12);
// //3. Hoisting
// //In the arrow Function Hoisting is not possible first you have to initialize the function and then you can access the function

// // const sayhey = ()=>{
// //     console.log('Hey there!!');
// // }
// // sayhey();

// //4. This keyword
// // Arrow function's scope is global here, This keyword will refer global window instead of refer Object

// // const obj = {
// //     value: 20,
// //     myfunction: () => {
// //         console.log(this);
// //     },
// // }
// // obj.myfunction();
// // In the below Scenario Simple function is created which refers to the object itself
// //But jaise hi isse Arrow function me hum try krenge it will refer Window Object Global scope
// //This is the main difference between arrow function and normal function
// //mainly arrow functions used
// // const obj = {
// //     value: 20,
// //     myfunction: function ()  {
// //         console.log(this);
// //     },
// // }
// // obj.myfunction();
// // High order functions and Callback 
// // High order: A function that takes a function as argument
// // Callback: Jis function ko humne as a arg accept kiya ho usse kehte hai callback
// // function add(a , b, cb){
// //     let result = a + b;
// //     cb(result);
// //     return () => console.log(result);
// // }
// // let resultadd = add( 233, 33, () => {});
// // resultadd();
// // Arrays:
// // const students = ['Shreya', 'John', 'Jane', 'Khushi'];//Strings in this Array
// // // students[0] = 'Shreya Thakkar'
// // // console.log(students[0]);
// // students[1] = 'Macbook pro'

// // students.push('Alexa')
// // students.push('Siri')
// // console.log(students)

// //Homogenous: Arrays me always same values store ho sakti hai suppose all numbers, all string
// //But in Javascript: tum iske andar string aur integer, number, or even keep emoji or you can use Boolean as well
// //So it is heterogenous
// // const myarray = [1, 'Shreya', true, "✅"];
// // myarray.push('👉');
// // myarray.push(17);
// // myarray.push({name: 'Shreya'})
// // //myarray.pop();
// // myarray.reverse();
// // console.log(myarray);
// //console.log(myarray.indexOf('Shre'));//Throw -1 which means value does not exists in the array

// //Depth in Arrays
// // const students = ['Shreya', 'Thakkar', 'Alpeshkumar', 13, 'meetvilla'];
// // // students.forEach(val => console.log(val + " Sssshhhh"));
// // //  students.map(val => console.log(val));
// // // Another example to understand .map vs .forEach
// // const numbers = [1, 2, 3, 4, 5];
// // // numbers.forEach(val => console.log(val * 2));
// // function double(n){
// //     return n * 2;
// // }
// // let newArr1 = numbers.forEach(double);
// //  let newArr = numbers.map(double);
// // console.log(newArr1);// Throws Undefined as it does not return anything
// // console.log(newArr);//Gives the proper o/p
// // find=> You can find an element from the array whether its present or not
// // const numbers = [1, 2, 3, 4, 5, 6];
// // let ans = numbers.find(val => val === 5)
// // console.log(ans);
// //findindex
// //const numbers = [1, 2, 3, 4, 5, 6];
// //let ans = numbers.findIndex(val => val === 3)
// // console.log(numbers[ans]);
// // console.log(numbers.includes(1));
// const newArr = numbers.filter(num => num % 2 === 0);//All the even numbers filtered here
// console.log(newArr);
// console.log(numbers);
// Slice
// let newArray = numbers.slice(1, 4 + 1);
// console.log(newArray);
// Splice: remove the element from the array original array
// let newArray = numbers.splice(1, 4);
// console.log(newArray);
// console.log(numbers);
// DOM Manipulation
// What is DOM?