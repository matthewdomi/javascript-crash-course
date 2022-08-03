// Declaring a variable
// Keyword identifier/VariableName = Value
var firstName = "Demak";
let lastName = "Ventures";
let age = 29;
let isOnline = true;
let products = ["Shoes", "Shirts", "Trousers"];
let other = [
    Color: "Orange",
    Location: "UCC",
    Contact: 0541739373,
];
const fullName = firstName + " " + lastName;  //  cocatenation
const mySelf = `My name is ${firstName} ${lastName}`;  // String interpolation 
console.log(fullName);
// Strings
let sentence = "Demak Ventures:Your home of quality, affordable wears for wholesale and retailers";
console.log(sentence.lenght);
console.log(sentence.split(:));
console.log(sentence.replace("wholesale","customers"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("Demak"));
console.log(sentence.endsWith("Demak"));
console.log(sentence.includes("whosesale"));


// Array
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days.lenght);
days = days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Wednesday"));
console.log(days[5]); //retrieving data
days[0]="Sunday"; //change data in the array
console.log(days);

//Object
let person = {
     firstName = "Demak",
    lastName = "Ventures",
    age = 29,
};
console.log(person.firstName);
console.log(person["firstName"]);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));






