function add(a){
    //Function currying
    return function(b){
        return function(c){
            return a + b + c;
        }
    }

}
//Currying call
console.log(add(2)(3)(7));

//console.log(add(2, 5, 10));


//Practical Usage of currying
//Suppose you want to create automated Email Server
// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
//         }
//     }
// }
//Below is the modern Javascript pattern you can use for currying
const sendAutoEmail = (to) => (subject) => (body) =>
    `Sending Email to ${to} with subject ${subject}: ${body}`


let step1 = sendAutoEmail('shreyathakkar2004@gmail.com');
let step2 = step1('New Order Confirmation');
console.log(step2("Hey Shreya, Here is something for you!!"));
