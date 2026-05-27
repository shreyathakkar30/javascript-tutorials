 function main(name){
     const name = 'Shreya Thakkar';

     function saymyName(){   //closure: closure is the combination of a function bundled together(enclosed)
//                             //with reference to its surrounding state
         console.log(name)
     }
    // saymyName();
    return saymyName;
}
//In other words, A closure gives you access to an outer functions's scope from an inner function

let consoleShreya = main('Shreya')
console.log(consoleShreya);
consoleShreya();
consoleShreya();
consoleShreya();
consoleShreya();
consoleShreya();
consoleShreya();
consoleShreya();
function adder(num){

    function add(b){
        console.log(num + b)

    }
    return add;
}

// //Utiliy Function
const addTo5 = adder(5);
const addTo10 = adder(10);

addTo5(2);
addTo5(15);

addTo10(2);


const myname = document.getElementById('myName');
const btn = document.getElementById('mybtn');

function makeTextSizer(size){

    function changesize(){
        myname.style.fontSize = `${size}px`;

    }
    return changesize;

}


const size12 = makeTextSizer(12);
const size52 = makeTextSizer(52);
const size20 = makeTextSizer(20);
const size5 = makeTextSizer(5);
const size72 = makeTextSizer(72);


btn.addEventListener("click", size72);



//Making Counter using Closure

function makeCounter(){
    let count = 1;

    function increment(){
        console.log(count++);
    }
    return increment

}

const counter1 = makeCounter();

counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();

