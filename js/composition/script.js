
function add(a, b) {
    return a + b;
}

function square(x) {
    return x * x;
}

function addTwoandSquare(a, b) {
    return square(add(a, b));
}

console.log(addTwoandSquare(2, 3)); // Output: 25

//what if I want that perform sequentially without nesting function calls?
// what if we have more than two functions to compose?
// composition is a powerful technique that allows us to combine multiple functions together to create more complex functionality.

function composeTwoFunctions(fn1, fn2) {
    return function(a, b){
        return fn2(fn1(a, b)); 
    }
}


const task = composeTwoFunctions(add, square);
console.log(task(2, 3)); // Output: 25

// we can also create a more general compose function that can take any number of functions and compose them together.  
