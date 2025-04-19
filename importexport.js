// JavaScript Modules

// In JavaScript, one script is one module.
//  A module is nothing but a JavaScript file.


//We can use modules to keep the related area's 
//code footprint smaller, concise, and independent.
//Using modules, we can create reusable functionalities
//that automatically bring down the code quantity.
//Less Code means Less Bugs.

// Basics of export and import

// We can load modules into each other using
//  the keywords export and import.

// export: Using the export keyword, we make the
// module features available to other modules. 
// These features are usually the functions.However,
// it is not limited to it. We will be able to export
// variables, objects, classes, etc. from a module.

// import: As the name suggests, the import keyword 
// is used to import other modules' features.

// Example:
// calc.js

// export const sum = (a, b) => {
//     return a + b;
// };

// export const sub = (a,b) => {
//     return a - b;
// };


// index.js

// import { sum, sub } from './calc.js';

// console.log('The Sum is', sum(2,3));
// console.log('The Sub is', sub(5,3));

// We first export both the functions with their 
// names(sum and sub) from the module(JavaScript 
// file),calc.js.

// Finally,we will be importing(or loading) the index.js
//  file to an HTML file, say, index.html

//  <html>

//  <head>
//      <title>js-modules</title>
//  </head>

//  <body>
//      <script type="module" src="./src/index.js"></script>
//      <h1>
//          See the Debugger Console...
//      </h1>
//  </body>

//  </html>

// //Export Together and the Aliases
// In the above example, we have seen how to export the 
// functions individually. We may have situations where
// we need to export multiple things from a module.
// We can do all of them together.

// const sum = (a, b) => {
//     return a + b;
// };

// const sub = (a,b) => {
//     return a - b;
// };

// export { sum, sub };

// Aliases - While importing a function from a module,
// we can use an alias name instead. Consider the 
// following example where we have used the alias called 
// add for the imported function sum.


//import { sum as add, sub } from './calc.js';

//console.log('The Sum is', add(2,3));
//console.log('The Sub is', sub(5,3));

//Here the function name sum is changed as add
// using Aliases


// Importing as a Namespace

// At times, we may need to import a large number of functions from a module. It would be tedious and too much code to import them as comma-separated as we have seen so far. We can short-hand this by importing them together with a Namespace. A namespace is nothing but a name of our choice. Let us take a look at this example:

// import * as Calc from './calc.js';

// console.log('The Sum is', Calc.sum(2,3));
// console.log('The Sub is', Calc.sub(5,3));


// As we see here, we are importing *, which means all that is exported from, calc.js module. A more important fact to point here is importing the features by a name(Namespace) called Calc. As we did that, we can access the function using that Namespace.

// Default export and When not to use it

// JavaScript modules provide a special keyword called default with export to specify only one thing to export from a file. However, technically, we can export both Named Export and Default Export from a single file but, we shouldn't mix them. Use either Named or Default export.

// whoami.js

// const sayMyName = () => {
//     return 'Tapas';
// };

// export default sayMyName;


// As we see, the default keyword with export is in the above code. We can import a default exported function in two ways.

// Using default as syntax

// import { default as sayMyName } from './whoami.js';

// Without the curly braces ({ })

// import sayMyName from './whoami.js'; 

// 💥 Few points to consider,

// Try not to mix the default export and named export together. Use default export when only one thing to export.
// While importing a feature exported with 'default', it is not mandatory to use the same name. Here is an example of how we can import the sayMyName function.

// import { default as name } from './whoami.js';
// import name from './whoami.js';

// Combine exports
// We can combine the multiple exports from various modules and do a combined export from a single file. This is also called re-export oraggregating`. Let us understand this with an example,

// We first export sum and sub as before from the calc.js module. Here we have opted for named export.

 // calc.js

//  const sum = (a, b) => {
//     return a + b;
//  };

// const sub = (a,b) => {
//     return a - b;
// };

// export { sum, sub };

// Then, we export a function called sayMyName from another module called whoami.js. This time, we have used default export.

 // whoami.js

//const sayMyName = () => {
//return 'Tapas';
// };

//export default sayMyName;

// Now, we can combine the exports from both the modules into one module and export from there. Let us name the new module called combine.js.

 // combine.js

//  export * as Calc from './calc.js';
//  export name from './whoami.js';


// It is important to note the syntax here. It is almost like import, but we are actually re-exporting them. The advantage here is that we need to import only one file to access all these functions. Let us see, how are we going to do that,

// Import the functions


// import * as Combine from './combine.js';

// console.log('The Sum is', Combine.Calc.sum(2,3));
// console.log('The Sub is', Combine.Calc.sub(5,3));

// console.log('The name is', Combine.name());

