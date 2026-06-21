const javascriptQuestions = [

{
category:"JavaScript",
difficulty:"Easy",
question:"What is JavaScript?",
expectedAnswer:"JavaScript is a programming language used to create interactive web pages."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What are variables?",
expectedAnswer:"Variables are used to store data values."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"Difference between let, const and var?",
expectedAnswer:"var is function scoped, let and const are block scoped, const cannot be reassigned."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What are data types in JavaScript?",
expectedAnswer:"String, Number, Boolean, Null, Undefined, Object, Symbol and BigInt."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What is typeof operator?",
expectedAnswer:"It returns the data type of a variable."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What is an array?",
expectedAnswer:"Array stores multiple values in a single variable."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What is an object?",
expectedAnswer:"Object stores data as key-value pairs."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What is a function?",
expectedAnswer:"Function is a reusable block of code."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What is an arrow function?",
expectedAnswer:"Arrow function is a shorter syntax for writing functions."
},

{
category:"JavaScript",
difficulty:"Easy",
question:"What is a callback function?",
expectedAnswer:"A callback is a function passed as an argument to another function."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is closure?",
expectedAnswer:"Closure allows a function to access variables from its outer scope even after the outer function has returned."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is hoisting?",
expectedAnswer:"Hoisting moves declarations to the top of their scope before execution."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is event bubbling?",
expectedAnswer:"Event bubbling means an event propagates from child to parent."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is event capturing?",
expectedAnswer:"Event capturing propagates events from parent to child."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"Difference between == and ===?",
expectedAnswer:"== compares values after type conversion, === compares both value and type."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is DOM?",
expectedAnswer:"DOM is the Document Object Model representing HTML as objects."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is BOM?",
expectedAnswer:"Browser Object Model provides browser-related objects like window and navigator."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is localStorage?",
expectedAnswer:"localStorage stores data permanently in the browser."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is sessionStorage?",
expectedAnswer:"sessionStorage stores data only until the browser tab is closed."
},

{
category:"JavaScript",
difficulty:"Medium",
question:"What is JSON?",
expectedAnswer:"JSON is a lightweight format for data exchange."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"Explain promises.",
expectedAnswer:"Promises handle asynchronous operations with pending, fulfilled and rejected states."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is async/await?",
expectedAnswer:"Async/await provides a cleaner way to work with promises."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is event loop?",
expectedAnswer:"Event loop executes asynchronous callbacks after the call stack is empty."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is call stack?",
expectedAnswer:"Call stack keeps track of function execution order."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is microtask queue?",
expectedAnswer:"Microtask queue stores promise callbacks and executes before macrotasks."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is macrotask queue?",
expectedAnswer:"Macrotask queue stores tasks like setTimeout and setInterval callbacks."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"Difference between map() and forEach()?",
expectedAnswer:"map returns a new array while forEach does not."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"Difference between filter() and find()?",
expectedAnswer:"filter returns all matching elements while find returns the first match."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"Difference between slice() and splice()?",
expectedAnswer:"slice returns a new array, splice modifies the original array."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is destructuring?",
expectedAnswer:"Destructuring extracts values from arrays or objects into variables."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is spread operator?",
expectedAnswer:"Spread operator expands iterable elements."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is rest operator?",
expectedAnswer:"Rest operator collects multiple values into an array."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is debounce?",
expectedAnswer:"Debounce delays function execution until after a specified delay."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is throttle?",
expectedAnswer:"Throttle limits function execution to once within a specified interval."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is currying?",
expectedAnswer:"Currying transforms a function with multiple arguments into nested single-argument functions."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is lexical scope?",
expectedAnswer:"Lexical scope means scope is determined by code structure."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"Difference between null and undefined?",
expectedAnswer:"null represents intentional absence of value while undefined means value is not assigned."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is optional chaining?",
expectedAnswer:"Optional chaining safely accesses nested properties using ?."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is template literal?",
expectedAnswer:"Template literals allow embedded expressions using backticks."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is module in JavaScript?",
expectedAnswer:"Modules split code into reusable files using import and export."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is strict mode?",
expectedAnswer:"Strict mode enables stricter error checking using 'use strict'."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"Difference between synchronous and asynchronous programming?",
expectedAnswer:"Synchronous executes line by line while asynchronous allows non-blocking execution."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is prototype?",
expectedAnswer:"Prototype is an object from which other objects inherit properties."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is prototype chain?",
expectedAnswer:"Prototype chain is the mechanism through which objects inherit properties."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is call() method?",
expectedAnswer:"call invokes a function with a specified this value."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is apply() method?",
expectedAnswer:"apply invokes a function with a specified this value and array arguments."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is bind() method?",
expectedAnswer:"bind returns a new function with a fixed this context."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is shallow copy?",
expectedAnswer:"Shallow copy copies only the first level of an object."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is deep copy?",
expectedAnswer:"Deep copy creates a completely independent copy including nested objects."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is garbage collection?",
expectedAnswer:"Garbage collection automatically frees unused memory."
},

{
category:"JavaScript",
difficulty:"Hard",
question:"What is memory leak?",
expectedAnswer:"Memory leak occurs when allocated memory is not released."
}

];

export default javascriptQuestions;