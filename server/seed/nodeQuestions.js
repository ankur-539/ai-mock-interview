const nodeQuestions = [

{
category:"Node.js",
difficulty:"Easy",
question:"What is Node.js?",
expectedAnswer:"Node.js is a JavaScript runtime built on Chrome's V8 engine."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is npm?",
expectedAnswer:"npm is the Node Package Manager used to install packages."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is package.json?",
expectedAnswer:"package.json contains project metadata and dependencies."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is Express.js?",
expectedAnswer:"Express.js is a web framework for Node.js."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is the V8 engine?",
expectedAnswer:"V8 is Google's JavaScript engine used by Node.js."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is require()?",
expectedAnswer:"require() imports modules in CommonJS."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is module.exports?",
expectedAnswer:"module.exports is used to export functionality from a module."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is the fs module?",
expectedAnswer:"The fs module is used for file system operations."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is path module?",
expectedAnswer:"The path module provides utilities for working with file paths."
},

{
category:"Node.js",
difficulty:"Easy",
question:"What is nodemon?",
expectedAnswer:"Nodemon automatically restarts the server when files change."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is middleware in Express?",
expectedAnswer:"Middleware functions execute between request and response."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is routing?",
expectedAnswer:"Routing maps incoming requests to handler functions."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is REST API?",
expectedAnswer:"REST API follows HTTP methods to perform CRUD operations."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is JSON?",
expectedAnswer:"JSON is a lightweight data interchange format."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is req object?",
expectedAnswer:"req contains information about the incoming request."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is res object?",
expectedAnswer:"res is used to send responses to the client."
},

{
category:"Node.js",
difficulty:"Medium",
question:"Difference between PUT and PATCH?",
expectedAnswer:"PUT replaces the entire resource while PATCH updates part of it."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is CORS?",
expectedAnswer:"CORS controls cross-origin resource sharing between domains."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is dotenv?",
expectedAnswer:"dotenv loads environment variables from a .env file."
},

{
category:"Node.js",
difficulty:"Medium",
question:"What is bcrypt?",
expectedAnswer:"bcrypt is used to hash passwords securely."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is JWT?",
expectedAnswer:"JWT is a token-based authentication mechanism."
},

{
category:"Node.js",
difficulty:"Hard",
question:"How does JWT work?",
expectedAnswer:"JWT contains header, payload and signature and is verified on protected routes."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is authentication?",
expectedAnswer:"Authentication verifies the identity of a user."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is authorization?",
expectedAnswer:"Authorization determines what a user is allowed to access."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is event-driven architecture?",
expectedAnswer:"Node.js uses an event-driven architecture to handle asynchronous operations."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is the event loop?",
expectedAnswer:"The event loop handles asynchronous callbacks without blocking execution."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is callback hell?",
expectedAnswer:"Callback hell occurs when many nested callbacks reduce readability."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What are Promises?",
expectedAnswer:"Promises handle asynchronous operations with pending, fulfilled and rejected states."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is async/await?",
expectedAnswer:"Async/await simplifies working with Promises."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is stream in Node.js?",
expectedAnswer:"Streams process data chunk by chunk instead of loading everything into memory."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What are readable streams?",
expectedAnswer:"Readable streams allow reading data continuously."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What are writable streams?",
expectedAnswer:"Writable streams allow writing data continuously."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is buffer?",
expectedAnswer:"Buffer stores binary data temporarily."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is cluster module?",
expectedAnswer:"Cluster allows multiple Node.js processes to utilize CPU cores."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is child_process?",
expectedAnswer:"child_process executes system commands or other scripts."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is process object?",
expectedAnswer:"process provides information about the current Node.js process."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is global object?",
expectedAnswer:"global is the global namespace object in Node.js."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is __dirname?",
expectedAnswer:"__dirname returns the directory name of the current module."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is __filename?",
expectedAnswer:"__filename returns the current file path."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is Mongoose?",
expectedAnswer:"Mongoose is an ODM library for MongoDB."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is schema in Mongoose?",
expectedAnswer:"Schema defines the structure of MongoDB documents."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is model in Mongoose?",
expectedAnswer:"Model provides an interface to interact with a MongoDB collection."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is populate()?",
expectedAnswer:"populate() replaces referenced IDs with actual documents."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is aggregation?",
expectedAnswer:"Aggregation processes data using stages like match and group."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is indexing in MongoDB?",
expectedAnswer:"Indexes improve query performance."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is MongoDB Atlas?",
expectedAnswer:"MongoDB Atlas is a cloud-hosted MongoDB service."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is rate limiting?",
expectedAnswer:"Rate limiting restricts the number of requests from a client."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is Helmet?",
expectedAnswer:"Helmet secures Express apps by setting HTTP headers."
},

{
category:"Node.js",
difficulty:"Hard",
question:"What is Morgan?",
expectedAnswer:"Morgan is HTTP request logging middleware."
},

{
category:"Node.js",
difficulty:"Hard",
question:"How do you handle errors in Express?",
expectedAnswer:"Using try-catch blocks and centralized error-handling middleware."
},

{
category:"Node.js",
difficulty:"Hard",
question:"How do you deploy a Node.js application?",
expectedAnswer:"Node.js apps can be deployed on platforms like Render, Railway, VPS or cloud providers."
}

];

export default nodeQuestions;