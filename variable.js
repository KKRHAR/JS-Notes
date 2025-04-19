// There are mainly three types of Scope:
// -Block Scope
//- Functional Scope
//- Global Scope


// How to Use JavaScript Variable in Block Scope
// If you do not want a variable declared inside 
// a { } block to be accessed outside of the block,
//  you need to declare them using the let or const keywords. Variables declared with the var keyword inside the { } block are accessible outside of the block too

{
    let f_name  = 'Alex';
    const ZIP = 500067;
    var age = 25;
}

console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP); // Uncaught ReferenceError: ZIP is not defined
console.log(age); // 25

//Note:Do not use the var keyword inside a block 
// (block scope).
//Always use let and const instead.

// How to Use JavaScript Variables in
//  Functional Scope

// A variable declared inside a function using these keywords
//  is not accessible outside the function. 
// That's the applied functional scope.

// It is true irrespective of whether you use var, 
// let, or const. Inside the function,
//  they are pretty similar in managing a variable's scope.


function f1() {
    let f_name = "Alex";
    const ZIP = 560089;
    var age = 25;   
   }
   
   f1();
   
   console.log(f_name); // Uncaught ReferenceError: f_name is not defined
   console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
   console.log(age);  // Uncaught ReferenceError: age is not defined
   
//    The variable declared with var inside a function
//     is not accessible outside of it.
//     The keyword var has function-scope.


// How to Use JavaScript Variables in Global Scope
// Variables declared outside of any functions 
// and blocks are global and are said
//  to have Global Scope.
//  This means you can access them 
// from any part of the current JavaScript program.

// You can use var, let, and const to declare global variables. But you shouldn't do it too often.
let f_name = "Alex";
 const ZIP = 560089;
 var age = 25;  

// f1() is a function
function f1() {
  console.log(f_name); // Alex
  console.log(ZIP);  // 560089
  console.log(age);  // 25
}

f1();

console.log(f_name); // Alex
console.log(ZIP);  // 560089
console.log(age);  // 25

// variables declared with var are 
//  throughout the entire function in which they
//  are defined, but they are not accessible outside 
// of that function.

//Example 
function exampleFunction() {
    var x = 1;
    console.log(x); // Outputs 1
  }
  console.log(x); // Throws an error because x 
  // is not defined in the global scope

  function printIfGFG(text) {
    if(text == "GeeksforGeeks" || text == "GFG") {
       let message = "Verified Geek";
       console.log(message); // Output: Verified Geek
    }}
    console.log(message); //// Output: Uncaught ReferenceError:
    //  message is not defined
    //For const also same 





// How to Reassign a New Value 
// to a Variable in JavaScript

// Once you've declared a variable with var
//  or let, you can reassign a new value to the variable 
// in your programming flow.
//  It is possible if the variable is accessible to 
// assign a value. But with const,
//  you can't reassign a new value 
// at all.



// Declare variables with initial values
// let f_name = "Alex";
// const ZIP = 560089;
// var age = 25;

// Reassign values
f_name = "Bob"; // the f_name value is 'Bob"
ZIP = 65457; // Uncaught TypeError: Assignment to constant variable.
age = 78; // the age value is 78


// When an object is declared and assigned a value with const, 
// you can still change the value of its properties.
//  But you can not reassign another object
//  value to the same variable.



// const blog = {
//     'url': 'https://greenroots.info'
// }

// blog.url = 'https://blog.greenroots.info"; //Allowed

// blog = {}; // Uncaught TypeError: Assignment to constant variable.




// You need to consider these circumstances and concepts to evaluate 
// how var, let, and const behave. So, the rule goes:

// Don't use var anymore.
// Use let or const.
// Use const more often. Use let when you need to 
// reassign another value to a variable.
// Don't try to access a variable 
// without declaring it.