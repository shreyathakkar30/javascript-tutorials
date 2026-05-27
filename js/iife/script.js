//IIFE - Immediately Invoked Function Expression
(function add (a, b){
    console.log(a + b);
})(6, 2);

(function saySomething(){
    console.log("Hello World");
})();


(() => console.log("Hello I am Es6"))();

const value = (() => 100)();
console.log(value); 
