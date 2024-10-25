// main.js
import { sayHello, monthOfYear } from "./index.js";
import callMe from "./index.js"; // Import default

console.log(sayHello);   
console.log(callMe);    
console.log(monthOfYear()); 

alert("This is an alert from main.js");

sayHello();
callMe(); 

console.log(monthOfYear()); 
