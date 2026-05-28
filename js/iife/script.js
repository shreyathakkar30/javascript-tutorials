//IIFE - Immediately Invoked Function Expression
(function add (a, b){
    let age = 30;
    console.log(a + b);
    console.log(age);
})(6, 2);

//async IIFE
const data = (async () => await fetch("https://domain.name/path/file.ext")) ();

(function saySomething(){
    console.log("Hello World");
})();


(() => console.log("Hello I am Es6"))();

const value = (() => 100)();
console.log(value); 
