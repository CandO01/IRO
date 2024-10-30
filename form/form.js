
//function expression with two parameters.
let iro = function(fee, food){
    return(fee+food);
}
let payment = iro(20,30);
console.log(payment);

let rent = (houseRent)=>{
    return(20000+houseRent);
}
let annualRent = rent(50000);
console.log(annualRent);

//Function declaration

function iroGrace(fee, food){
    return(fee*food);
}
iroGrace(20,30);
console.log(iroGrace(20,30));

function sayHi(age){
    console.log('Hi' + '' + 'I' + 'am' + age + 'years');
}
sayHi(30);

function area(length, breadth){
    return(length*breadth);
}
area(30,50);
console.log(area(30,50));

function sayHello(){
    console.log('HELLO WORLD');
}
sayHello();

//IF STATEMENT

let age =24;
if(age > 24){
    console.log('You are too old');
}
else{
    console.log('Welcome home son');
}
//Global variable
//Global variables are variables that are written outside of a function

let made = 'Bus';
function correct(){
    console.log(made);
}
correct();

function correct1(){
   console.log(typeof made);
}
correct1();
//Linear variable//Linear variables are variables that are written inside the function. And 
//the do not apply to function that are not having the same variable.

function confirm(){
    let made1 = 'Car';
    console.log(typeof made1);
}
correct();
function confirm1(){
    console.log(typeof made1);
}
correct1();

