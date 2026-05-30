// Iteratos and Generators

// Iterators are objects that can be iterated over, meaning you can loop through their values one at a time. They have a special method called `next()` that returns an object with two properties: `value` (the current value) and `done` (a boolean indicating whether the iteration is complete).    
// Generators are a special type of function that can be paused and resumed, allowing you to create iterators more easily. They are defined using the `function*` syntax and use the `yield` keyword to produce values one at a time. When a generator function is called, it returns an iterator object that can be used to iterate through the values produced by the generator.

// Example of a generator function that produces a sequence of numbers:
for (const val of[1,2,3,4,5]) {
    console.log(val);
}
// Iteration protocols
//for...of
//function* and Generator
//yield and yield*
function makeiterator(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationcount = 0;
    return {
        next(){
            if(iterationcount < end){
                result = { value: nextStart, done: false };
                nextStart = nextStart + step;
                iterationcount++;
                return result;
            }
            return { value: iterationcount, done: true };
            
        }
    }

}

const myiterator = makeiterator(10,20);
let result1 = myiterator.next();

while(!result1.done){
    console.log(result1.value);
    result1 = myiterator.next();
}

