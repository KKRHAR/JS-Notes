// Combine (or Merge) two Objects

// The last practical use of the spread syntax in 
// JavaScript objects is to combine or merge two objects.
//  obj_1 and obj_2 can be
//  merged together using the following syntax:

//  const merged = {...obj_1, ...obj_2};

// Note that this way of merging performs a shallow
// merge. This means that if there is a common
// property between both the objects, the property value 
// of obj_2 will replace the property value of obj_1 in the merged object.

// Let's take the user and department
// objects to combine (or merge) them together


 
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const department = {
//     'id': '001',
//     'Shift': 'Morning'
// }

// Merge the objects using the spread syntax, like this:

// output for above code is:
// {
//     name: 'Alex',
//     address: '15th Park Avenue',
//     age: 43,
//     id: '001',
//     Shift: 'Morning'
//   }

// Here If we change the department object like this:

// const department = {
//     'name': 'Sales',
//     'Shift': 'Morning'
// }



// const completeDetails = {...user, ...department};

// console.log(completeDetails);

// {
//   name: 'Sales',
//   address: '15th Park Avenue',
//   age: 43,
//   Shift: 'Morning'
// }

// Now if we merge this then the value of name is
// Changed.The name property value of the user
//object is replaced by the name property value of
//  the department object in the merged object output. 
// So be careful of using it this way.

//The Rest Parameter in JavaScript

// The Rest parameter is kind of opposite to
// the spread syntax. While spread syntax helps
// expand or spread elements and properties, 
// the rest parameter helps collect them together.

// Let's look at an example of the following 
// user object:


const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

// We know how to destructure the age property to
// create a variable and assign the value of it. How 
// about creating another object at the same time with 
// the remaining properties of the user object? Here you go:

const {age, ...rest} = user;
console.log(age, rest);

// // Output will be:
// 43 { name: 'Alex', address: '15th Park Avenue'}


// In Summary
// To summarize,

// Object destructuring is new 
// syntax introduced in ES6. It helps create variables
// by extracting the object's properties 
// in a much simpler way.
// If you are working with (or planning to use) a framework/library 
// like angular, react, or vue, you will be
//  using a lot of object destructuring syntax.
// Object destructuring and Spread
//  syntax are not the same thing.
// Spread syntax (also known as the Spread Operator) 
// is used to copy the enumerable properties of 
// an object to create a clone of it. We can 
// also update an object or merge with another object 
// using the spread syntax.
// The Rest parameter is kind of the opposite of 
// the Spread syntax. It helps to consolidate
// (or collect) the remaining object properties
//  into a new object while destructuring is done.