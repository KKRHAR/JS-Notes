// What is JavaScript?
// JavaScript is a versatile, dynamically typed programming
// language used for interactive web applications,supporting
// both client-side and server-side development
// // JavaScript  is a synchronous and single-threaded, meaning that it executes code sequentially and only one operation can be in progress at a time.JavaScript provides mechanisms to handle asynchronous operations, such as Promises, async/await, and callback functions, which allow developers to write asynchronous code.
//These features enable tasks to be performed independently and in parallel without waiting for other tasks to complete, which improves performance and response time.
// In summary, while JavaScript is fundamentally synchronous, it is designed to support asynchronous programming through various language features and runtime mechanisms.

// Synchronous JavaScript – How the Function Execution Stack WorksSo what happens when you define a function and then invoke it? The JavaScript engine maintains a stack data structure called function execution stack

//Let's look at an example of three functions that execute one by one:
// function f1() {
//     // some code
//   }
//   function f2() {
//     // some code
//   }
//   function f3() {
//     // some code
//   }
  
//   // Invoke the functions one by one
//   f1();
//   f2();
//   f3();
//   First, f1() goes into the stack, executes, and pops out. Then f2() does the same, and finally f3(). After that, the stack is empty, with nothing else to execute.

// function f1() {
//     // Some code
//   }
//   function f2() {
//     f1();
//   }
//   function f3() {
//     f2();
//   }
//   f3();

//   Notice that first f3() gets into the stack, invoking another function, f2(). So now f2() gets inside while f3() remains in the stack. The f2() function invokes f1(). So, time for f1() to go inside the stack with both f2() and f3() remaining inside.

// First, f1() finishes executing and comes out of the stack. Right after that f2() finishes, and finally f3().

// The bottom line is that everything that happens inside the function execution stack is sequential. This is the Synchronous part of JavaScript. JavaScript's main thread makes sure that it takes care of everything in the stack before it starts looking into anything elsewhere.

// Asynchronous JavaScript – How Browser APIs and Promises Work

// The word asynchronous means not occurring at the same time.

// In JavaScript, asynchronous means that code starts a task now and finishes it later, allowing the browser to continue executing other functions in the main thread without blocking the flow of execution.

// The Cases Where Async is used are:
// Fetch the Data From Server.
// Want to execute Something with a delay.
// Want to execute Something after an event.

// In Js the asynchronous operation can be trigerred by :
//1.Browser APIs/Web APIs
//>> Set TimeOut,setInterval or any other handler like click.mouseover.They are the trigger for asynchronous operations in JS it means whenever these functions trigger somethings things maynot happen immediately it can happen after something or it may delay.

//2.Promises:They are unique javaScript object that allow you to make asunchronous operations.


// How to Handle Browser APIs/Web APIs
// Browser APIs like setTimeout and event handlers rely on callback functions. A callback function executes when an asynchronous operation completes. Here is an example of how a setTimeout function works:

// function printMe() {
//  console.log('print me');
//   }
  
// setTimeout(printMe, 2000);

// The setTimeout function executes a function after a certain amount of time has elapsed. In the code above, the text print me logs into the console after a delay of 2 seconds.

// Eg:function printMe() {
//     console.log('print me');
//   }
  
//   function test() {
//     console.log('test');
//   }
  
//   setTimeout(printMe, 2000);
//   test();

// In this code it manage to keep the callback function of setTimeout aside and continue its other executions.
// So Output will be:
//test 
//printMe

// // How the JavaScript Callback Queue Works (aka Task Queue)
// JavaScript maintains a queue of callback functions. It is called a callback queue or task queue. A queue data structure is First-In-First-Out(FIFO). So, the callback function that first gets into the queue has the opportunity to go out first.

// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');

//     setTimeout(f1, 0);

//     f2();
// }

// main();

// // These following things happen in this code:
// 1. The main() function gets inside the call stack.

// 2. It has a console log to print the word main. The console.log('main') executes and goes out of the stack.

// 3. The setTimeout browser API takes place.

// 4. The callback function puts it into the callback queue.

// 5. In the stack, execution occurs as usual, so f2() gets into the stack. The console log of f2() executes. Both go out of the stack.

// 6. The main() also pops out of the stack.

// 7. The event loop recognizes that the call stack is empty, and there is a callback function in the queue.

// 8. The callback function f1() then goes into the stack. Execution starts. The console log executes, and f1() also comes out of the stack.

// 9. At this point, nothing else is in the stack and queue to execute further.

// How the JavaScript Engine Handles Promises?

// In JavaScript, promises are special objects that help you perform asynchronous operations

// Here is an example of a promise in JavaScript:

// const promise = new Promise((resolve, reject) => resolve('I am a resolved promise');
// );

// After the promise is executed, we can handle the result using the .then() method and any errors with the .catch() method.

// promise.then(result => console.log(result))

//The point here is that JavaScript engine doesn't use the same callback queue we have seen earlier for browser APIs. It uses another special queue called the Job Queue.

// What is the Job Queue in JavaScript?

// Every time a promise occurs in the code, the executor function gets into the job queue. The event loop works, as usual, to look into the queues but gives priority to the job queue items over the callback queue items when the stack is free.

// Now, let's look at an example to understand this sequence better:

// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');

//     setTimeout(f1, 0);

//     new Promise((resolve, reject) =>
//         resolve('I am a promise')
//     ).then(resolve => console.log(resolve))

//     f2();
// }

// main();

// Output Will be :
// main
// f2
// I am a promise
// f1

// The flow is almost the same as above, but it is crucial to notice how the items from the job queue prioritize the items from the task queue. Also note that it doesn't even matter if the setTimeout has zero delay. It is always about the job queue that comes before the callback queue.

// function f1() {
//     console.log('f1');
//    }
   
//    function f2() { 
//        console.log('f2');
//    }
   
//    function f3() { 
//        console.log('f3');
//    }
//    function main() {
//      console.log('main');
   
//      setTimeout(f1, 50);
//      setTimeout(f3, 30);
   
//      new Promise((resolve, reject) =>
//        resolve('I am a Promise, right after f1 and f3! Really?')
//      ).then(resolve => console.log(resolve));
   
//      new Promise((resolve, reject) =>
//        resolve('I am a Promise after Promise!')
//      ).then(resolve => console.log(resolve));
   
//      f2();
//    }
   
//    main();

// Here is the expected output:
// main
// f2
// I am a Promise, right after f1 and f3! Really?
// I am a Promise after Promise!
// f3
// f1

// Here is the flow of the above code:

// main()
//   ├── console.log("main")  ✅ Done
//   ├── setTimeout(f1, 50)  ✅ (Added to Timer Queue)
//   ├── setTimeout(f3, 30)  ✅ (Added to Timer Queue)
//   ├── Promise 1 (Resolved Immediately)  ✅ (Added to Microtask Queue)
//   ├── Promise 2 (Resolved Immediately)  ✅ (Added to Microtask Queue)
//   ├── f2()  ✅ (Executed, prints "f2")

// In Summary
// To summarize:

// The JavaScript engine uses the stack data structure to keep track of currently executed functions. The stack is called the function execution stack.

// The function execution stack (aka call stack) executes the functions sequentially, line-by-line, one-by-one.

// The browser/web APIs use callback functions to complete the tasks when an asynchronous operation/delay is done. The callback function is placed in the callback queue.

// The promise executor functions are placed in the job queue.

// For each loop of the event loop, one macro task is completed out of the callback queue.

// Once that task is complete, the event loop visits the job queue. It completes all the micro-tasks in the job queue before it looks for the next thing.

// If both the queues get entries at the same point in time, the job queue gets preference over the callback queue.