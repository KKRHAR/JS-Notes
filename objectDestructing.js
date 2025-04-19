const employee = {
    id: 7,
    name: 'James',
    dept: 'Spy'
  }
//   Traditionally, we will use the dot(.) 
//   notation or the subscript([]) notation to 
//   retrieve values from the object. 
// Eg:  
 
//   const d = employee.id;
//   const ame = employee.name;
  
// //   To destructure a value from an object,
//    you use a syntax like this,
  
  
//  const{ id, name } = employee

//  ⭐ Use destructuring to retrieve values
// from a nested object

// const employee = {
//     id: 007,
//     name: 'James',
//     dept: {
//       id: 'D001',
//       name: 'Spy',
//       address: {
//         street: '30 Wellington Square',
//         city: 'Chelsea'  
//       }
//     }  
//   }
// const address = employee.dept.address;
// The output is,
// {
//     "street": "30 Wellington Square",
//     "city": "Chelsea"
// }
// to retrieve the value of address, we will start with its predecessor key dept. So, dept is the top-level key with no predecessor. Hence the syntax is,

// const { dept: { address } } = employee;
// console.log(address);

// and for the street property,

// const { dept: { address: { street } } } = employee;
// console.log(street);

// ⭐ Define a new variable with object destructuring

// const employee = {
//     id: 007,
//     name: 'James',
//     dept: 'Spy'
//   }
  
// const age = employee.age ? employee.age : 25;
 // New Variable using object destructuring.

// const { name, age=25} = employee;
// console.log(age);

// const {name, dept, message = `${name} is 
// ${dept}`} = employee;
// console.log(message);

// ⭐ How to use JavaScript object
//  destructuring aliases?

// const employee = {
//     id: 007,
//     name: 'James',
//     dept: 'Spy'
//   }
  
// const { dept: department } = employee;
// console.log(department); //Spy

// console.log(dept); {error dept is not defined} 
// since it's value is changed to department

