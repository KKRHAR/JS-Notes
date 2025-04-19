// JavaScript treats {} as a block statement 
// unless it's explicitly an object.
// ✔ Wrapping the destructuring assignment
//  in () forces JavaScript to interpret {}
//  as an object instead of a block.
// ✔ This is only needed when assigning 
// to pre-declared variables (i.e., when let or 
// const is NOT used in the same line).

// eg:

// let name;

// { name  } = user; // Uncaught SyntaxError: Unexpected token '='
// let name;

// ({ name  } = user);

// console.log(name)

// this is only done in object.

// Many times you may not know the property name
//  (key) of an object while destructuring it.
//  Consider this example. We have a user object:

// Dynamic Name Property.
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }
// Now the method getValue(key) takes a property 
// key name and should return the value of it.

// getValue('name') // Should return Alex
// getValue('age') // Should return 43

// // That how we use Dynamic Key
// const getValue = (key) => {
//     const { [key]: returnValue } = user;
//     console.log(returnValue); // Logs the value of the specific key (e.g., "Alex" or 30)
//     return returnValue;
//   };
// Eg:
// const user = {
//     name: "Alex",
//     age: 30,
//     address: "15th Park Avenue"
//   };
  
//   const getValue = (key) => {
//     const { [key]: returnValue } = user;  // Dynamically destructuring the key
//     console.log(returnValue); // Logging the value of that property
//     return returnValue;
//   };
  
//   console.log(getValue("name"));  // Output: "Alex"
//   console.log(getValue("age"));   // Output: 30
  
// // Here in the above code we are returning returnValue but it 
// doesn't have any value it only holds the object properties 
// It does not hold the entire user object, 
// just the value of the property you request.
// here we are requestig property of only name and age


// same as objectDestructuring.
  
//   console.log(getValue("name")); // "Alex"
//   console.log(getValue("age"));  // 30


// Destructure to the Function Parameter.
// const user = {
//     name: 'Alex',
//     age: 30,
//     address: '15th Park Avenue'
//   };
// Example 1: Destructuring an Object in Function Parameters

//   function displayUserInfo({ name, age }) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//   }
  
//   displayUserInfo(user);
//   // Output:
//   // Name: Alex
//   // Age: 30

// Example 2: Destructuring with Default Values
// const user = {
//     name: 'Alex',
//   };
  
//   function displayUserInfo({ name, age = 25 }) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//   }
  
//   displayUserInfo(user);
//   // Output:
//   // Name: Alex
//   // Age: 25
  
//Example 3: Destructuring Nested Objects in Function Parameters

// const user = {
//     name: 'Alex',
//     address: {
//       street: '15th Park Avenue',
//       city: 'New York',
//     },
//   };
  
//   function displayUserInfo({ name, address: { street, city } }) {
//     console.log(`Name: ${name}`);
//     console.log(`Street: ${street}`);
//     console.log(`City: ${city}`);
//   }
  
//   displayUserInfo(user);
//   // Output:
//   // Name: Alex
//   // Street: 15th Park Avenue
//   // City: New York
  
// Here in the below example we are directly passing the 
// object as a argument.

// const user = { name: "Alex", age: 30 };
// function displayUserInfo(user) {
//   console.log(`Name: ${user.name}, Age: ${user.age}`);
// }
// displayUserInfo(user)

// Destructure Function Return Value

// const getUser = () => {
//     return{ 
//         'name': 'Alex',
//         'address': '15th Park Avenue',
//         'age': 43
//     }
// }

// // const { name, age } = getUser();

// console.log(name, age); // Alex 43


// You need functions that return objects when you want to group related data together.
//  This approach makes it easier to return multiple values,
//  modify the data structure over time, and avoid creating a mess of separate variables


// Destructure in Loops

// const users = [
//     { 
//         'name': 'Alex',
//         'address': '15th Park Avenue',
//         'age': 43
//     },
//     { 
//         'name': 'Bob',
//         'address': 'Canada',
//         'age': 53
//     },
//     { 
//         'name': 'Carl',
//         'address': 'Bangalore',
//         'age': 26
//     }
// ];
// We can extract the property values with object destructuring using the for-of loop.

// for(let { name, age } of users) {
//     console.log(`${name} is ${age} years old!`);
// }
// This is the output:

// Alex is 43 years old!
// Bob is 53 years old!
// Carl is 26 years old!


// In this code, object destructuring is used to extract
// the log, warn, and error methods from the console object, 
// making them available as standalone functions.

// Normally, you call console.log(),
//  console.warn(), and console.error().

//  const { log, warn, error } = console;
//  This extracts log, warn, and error from the
//  console object and stores them in 
//  variables of the same name.

//  Now, log, warn, and error are direct references 
//  to console.log, console.warn, and console.error, respectively

//  log('I log into the browser console');  // Same as console.log('...')
// warn('I am a warning');           // Same as console.warn('...')
// error('I am an error');          // Same as console.error('...')


// Why is this useful?

// Shorter syntax: You don’t need to type console. every time.

// Improves readability: The code is cleaner and easier to understand.

// Useful in debugging: If you use log, warn, and error frequently, 
// destructuring makes your code more concise.

// Spread Syntax in JavaScript

// The Spread Syntax (also known as the Spread Operator) is another
// excellent feature of ES6. As the name indicates,
// it takes an iterable (like an array) and 
// expands (spreads) it into individual elements.

// We can also expand objects using the
// spread syntax and copy its enumerable 
// properties to a new object.

// With spread syntax we can clone, update, and
// merge objects in an immutable way. The immutability 
// helps reduce any accidental or unintentional changes 
// to the original (Source) object.

// syntax:
// const clone_some_object = {...some_object}


// Create a Clone of an Object

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const clone = {...user} // Output, {name: "Alex", address: "15th Park Avenue", age: 43}

// clone === user; // Output, false

// Note:Even though both objects have identical
// content, they are stored at different places
//  in memory so that's why it is false.

// Shallow copies ({ ...user }) create a new object
//  with the same values but a different
//  memory reference.

// Direct assignment (clone = user) makes both 
// variables point to the same object in memory.

// Deep copies are needed if an object has
//  nested objects (e.g., using JSON.parse
// (JSON.stringify(user)) or structuredClone(user)).


// Add Properties to Objects

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// // Add a new property salary
// const updatedUser = {...user, salary:12345}; // {name: "Alex", address: "15th Park Avenue", age: 43, salary: 12345}

// // Original object is unchanged
// console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}

// Update Properties

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const updatedUser = {...user, age:56}; // {name: "Alex", address: "15th Park Avenue", age: 56}

// console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}


// // Update Nested Objects
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43,
//     'department':{
//         'name': 'Sales',
//         'Shift': 'Morning',
//         'address': {
//             'city': 'Bangalore',
//             'street': '7th Residency Rd',
//             'zip': 560001
//         }
//     }
// }
// const updated = {
//     ...user, 
//     department: {'number': 7}
// }

// console.log(updated);

// As you execute it, you will realize that the code will replace the entire department object with the new value as, 
// {'number': 7}. This is not what we wanted!

// How do we fix that? We need to spread the properties of the nested object as well as add/update it. Here is the correct syntax that will add a new property number with the value 7 to
//  the department object without replacing its value:

//  const updated = {
//     ...user, 
//     department: {
//         ...user.department, 
//         'number': 7
//     }
// };

// console.log(updated);