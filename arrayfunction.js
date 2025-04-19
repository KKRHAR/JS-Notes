// When (and why) you should use ES6 arrow
//  functions — and when you shouldn’t

// Here is a function written in ES5 syntax:

// function timesTwo(params) {
//   return params * 2
// }

// timesTwo(4);  // 8
// Now, here is the same function expressed as an arrow function:

// var timesTwo = (params) => params * 2

// timesTwo(4);  // 8

// variety of syntaxes available in 
// arrow functions. Let’s run through 
// some of the common ones:

// 1. No parameters
// If there are no parameters,
//  you can place an empty parentheses 
// before =&gt;.

// () => 42
// In fact, you don’t even need the parentheses!

// _ => 42
// 2. Single parameter
// With these functions, parentheses are optional:

// x => 42  || (x) => 42
// 3. Multiple parameters
// Parentheses are required for these functions:

// (x, y) => 42
// 4. Statements (as opposed to expressions)
// In its most basic form, a function expression 
// produces a value, while a function statement 
// performs an action.

// With the arrow function, it is important to remember 
// that statements need to have curly braces.
//  Once the curly braces are present,
//  you always need to write return as well.

// Here is an example of the arrow function used with
//  an if statement:

// var feedTheCat = (cat) => {
//   if (cat === 'hungry') {
//     return 'Feed the cat';
//   } else {
//     return 'Do not feed the cat';
//   }

//what happen if we removed curly bracket and return then we 
// can write above code in this way:
// var feedTheCat = (cat) => cat === 'hungry'
//  ? 'Feed the cat' : 'Do not feed the cat';

// }
// 5. “Block body”
// If your function is in a block, you must 
// also use the explicit return statement:

// var addValues = (x, y) => {
//   return x + y
// }
// 6. Object literals
// If you are returning an object literal,
//  it needs to be wrapped in parentheses.
//  This forces the interpreter to evaluate 
// what is inside the parentheses, and the object literal is returned.

// x =>({ y: x })
// const createCar = (make, model) => ({
//     make: make,
//     model: model,
//     year: 2022
//   });
  
//   const car = createCar('Tesla', 'Model S');
//   console.log(car);

// Binding in Regular Function and Arrow Function

// Regular function (function() {}):

// When you use a regular function inside setTimeout, the 
// value of this is not inherited from the surrounding context.
//  By default, it refers to the global scope (or undefined in strict mode).

// That's why you need to use .bind(this) to explicitly bind 
// this to the correct context (in this case, the obj).

// Arrow function (() => {}):

// Arrow functions do not have their own this. Instead, 
// they lexically bind this to the value of this from the surrounding 
// context (the context in which the arrow function was created).

// So, if an arrow function is inside a method of an object,
//  it will inherit this from the object and behave correctly without needing .bind().

// Example:
// Regular function (requires .bind(this)):
// javascript

// const obj = { 
//   name: "Joe",
//   showName: function() {
//     setTimeout(function() {
//       console.log(this.name);  // `this` refers to the global context, not `obj`
//     }.bind(this), 1000);  // `.bind(this)` binds `this` to `obj`
//   }
// };

// obj.showName();  // Output: "Joe"

// Arrow function (lexically binds this):
// javascript

// const obj = { 
//   name: "Joe",
//   showName: function() {
//     setTimeout(() => {
//       console.log(this.name);  // `this` refers to `obj` because arrow function lexically binds `this`
//     }, 1000);
//   }
// };

// obj.showName();  // Output: "Joe"
// Arrow function in showName itself:
// javascript

// const obj = { 
//   name: "Joe",
//   showName: () => {
//     setTimeout(() => {
//       console.log(this.name);  // `this` refers to the global context here, NOT `obj`
//     }, 1000);
//   }
// };

// obj.showName();  // Output: `undefined` (because `this` refers
// to the global context)
// In short:

// Regular functions in setTimeout have their own 
// this which refers to the global object,
//  not the object itself. We use .bind(this) 
// to correct that.

// Arrow functions inherit this from the surrounding 
// context and do not need .bind(this).



// Arrow functions shine best with anything that 
// requires this to be bound to the context, 
// and not the function itself.

// Despite the fact that they are anonymous, 
// I also like using them with methods such as 
// map and reduce, because it makes 
// code more readable. 