// Hello! Welcome to the JavaScript Tutorial :)
// My name is James, you can follow me on twitter at @JamesLMilner
// Out lets start

// Firstly, double forward slash gives us a comment! This won't get executed!

// Defining a variable
var hello = "Hello Maptime West London"; // Note the use of quoation marks, and also the semi colon at the end
// Semi colons are not show stoppers if forgotten but is generally bad practice to not use them as it causes the interpreter to guess
// We use semi colons after every statement that doesn't end in a curly brace
// See here for more info: http://www.codecademy.com/blog/78-your-guide-to-semicolons-in-javascript

// Try to avoid doing this:
badIdea = "This is how you define a global variable; generally bad practice";

// Using the console in your browser
console.log(hello); // <- This is a method called log! It belongs to the console object. Think of methods as things an object can 'do'

// you can clear the console like so:
console.clear();

// Simple maths functions
var two = 1+1;
console.log(two); // <- This will print 2!
console.log(1+1); // You can also just log directly without storing the outcome in a variable if you so wish.

//  Simple maths functions - multiplicatio; try -, %, /
var nine = 3*3;
console.log(nine) // <- This will print 9!

//  Simple maths functions - multiplicatio; try -, %, /
var nine = 3*3;
console.log(nine) // <- This will print 9!

//  Simple maths functions with vars /
var eighteen = nine*two;
console.log(eighteen); // <- This will print 9!
console.log("The square root of eighteen is: ", Math.sqrt(eighteen))

// decrement and increment (plus and minus one!)
var willBeTen = 8;
var three = ++two; // Increment by 1
var eight = --nine; // Decrement by 2
willBeTen += 2; //Notice we don't use var because it's already inistialised!
console.log("Three: ", three, " Seven: ", eight, " and Ten ", willBeTen);
// Note we can do the special asignment with other arithmetic operators: -, *, / etc

// So far we've seen that there are integers and strings (characters so to speak)
// But that's not all; really there are a few base data types in JavaScript

var length = 16;                               // Integer (a type of Number)
var float = 55.55                              // Float (a type of Number)
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array (a type of Object)
var x = {firstName:"John", lastName:"Doe"};    // Object
var notdefined = undefined;                    // undefined
var anullvar = null;                           // null (a type of Object (???))

// See the APPENDIX at the end for details

//JavaScript evaluates expressions from left to right
var x = 16 + 4 + "Volvo"; // x is not equal to 20volvo
console.log(x) // I told you so
var x = "Volvo" + 16 + 4; // x is now Volvo164 - the first operand was a string, so that's the data type assumed
console.log(x)

// JavaScript doesn't have strong typing, and variables can be reasigned to other data types
var a = "MapTime";
var a = 1337;
// No errors get thrown here!

// We can start strings with either single or double quotes
// We can use single quotes inside double quotes
var answer = "It's alright";             // Single quote inside double quotes
var answer = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer = 'He is called "Johnny"';    // Double quotes inside single quotes

// Booleans allow us to set true or false, this is useful for switches for example
var x = true;
var y = false;

// We can also initialise values as undefined to use later
var maptime; // the type of this variable is considered undefined
maptime = "MapTime";
maptime = undefined; // We can reset it to undefined

// Arrays are lists of items
alist = [0, 1, 2, 3, 4, 5];
console.log(alist[0], alist[5]);

// We can asign variables in the list, even ones that don't exist yet
// Also we can have any mix of data types in a list
alist[6] = "6";
console.log(alist[6]);

// It's really useful to know an lists length sometimes
console.log(alist[6].length)

// To clarify a method is a function you can use on an operation
// on or with an object

// other Array methods include :

    alist.push("maps"); // Add an item
    var liststring = alist.join(" - ");
    console.log(liststring) // will print 0 - 1 - 2 - 3 - 4 - 5 - 6 - maps
    alist.pop(); // Removes the last item
    alist.shift(); // Removes first element
    alist.unshift("maps") // Adds element to the front of an array
    alist.sort(); // Sort a list
    alist.reverse();

// Important! JavaScript does not support arrays with named indexes!
// i.e. no associative arrays/dictionaries - use objects for this functionality

// OPERATORS

// Comparison Operators
var x = 10;
var y = 5;
var z = "5";

console.log(z == 5); // true - same value
console.log(z === 5); // false - same value AND type
console.log(y > x); // false
console.log(y < x); // true
console.log(x != y) // true --- not equal to also !== for type check too
console.log(x >= z) // true -- equal to or greater than
console.log(x <= z) // true -- equal to or less than

// Conditional Operators

console.log( x > y && z < x ); // true AND Operators - true && true
console.log( x > y || z < x); // true , first statement is true so it gets shortcutted
console.log( !(x > y) ) // false, inverse the assignment - it was true so results in false

// CONDITIONS

if (x > y) {
    console.log("x is greater than y");
}
else if (x < y) {
    console.log("x is less than y");
}
else {
    console.log("x is equal to y");
}

// if - If true, do this
// else if - If that's not true but this is true, do this
// else - Otherwise just do this

// LOOPS

// For Loop
cars = ["Seat","Volvo", "Ferrari", "Skoda", "Vauxhaul"] // Our Cars array!

for (i = 0; i < cars.length; i++) {
    // i = 0 in first loop and then increments by 1
    // it does this until i is equal to the length of the number of cars in the array
    console.log(cars[i]);
}

// The setup for for loops is as follows:
// for (setup variables; while condition is true; after loop iteration) { }

// While Loop

//While i is less than ten add one to i
while (i < 10) {
    i++ // Increment by 1
    console.log(i) // Log i's value
}

// Usage : while(statement is true) { do this }

// FUNCTIONS

// Functions allow us to reuse pieces of code with nonspecific inputs


// We define a new function with the keyword function. we then give it a name and the input parameters in this case (x, y)
function add(x, y) {
    return x + y; // We use the return keyword to output from a function; it returns an output
}

// Lets use our add function!
var thisIsThree = add(1, 2); // Returns 3
var thisIsSeven = add(2, 5); // Returns 7

// Functions allow us to avoid rewriting code, it allows us to reuse logic!

// OBJECTS

// "In JavaScript, almost everything is an object.
//
// Booleans can be objects (or primitive data treated as objects)
// Numbers can be objects (or primitive data treated as objects)
// Strings can be objects (or primitive data treated as objects)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are objects
// In JavaScript, all values, except primitive values, are objects."
//                                                              w3schools.com

var person = {
    firstName: "James",
    lastName: "Milner",
    age: 50,
    eyeColor: "blue",
    maptime: function() {
        console.log("MapTime West London, wooooo!");
    }
};
console.log(person.firstName);
person.age = 23;
person.maptime();

// THE END
//document.getElementById('end').innerHTML = "THE END.";

// APPENDIX!
// Data types are a bit confusing - array is a special type of object, floats and integers
// are a special types of type number
// this leads to this!
var array = [];
var isArray = Object.prototype.toString.call( array ) === '[object Array]'
