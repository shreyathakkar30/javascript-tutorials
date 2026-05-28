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

const ATM = (function (initialbalance){
    let balance = initialbalance;

    function withdraw(amt){
        if(amt > balance){
            return "Are you sure you have enough balance?";
        }else{
            balance -= amt;
            return balance;
            //console.log(`You have withdrawn ${amt} and your remaining balance is ${balance}`);
        }
    }
    return { withdraw };
})

const shreya = ATM(1000);
console.log(shreya.withdraw(200));
console.log(shreya.withdraw(200));
console.log(shreya.withdraw(2000));