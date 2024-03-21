let password = prompt("set your password"); // user enter
let newpassword = password.trim(); //store as a no space
console.log(newpassword); // print new without space 


// UpperCase & LowerCase
let upper = password.toUpperCase();
console.log(upper);
let lower = password.toLowerCase();
console.log(lower);

//indexOf
let index = "I love cording"
let ans = index.indexOf("cording"); // c is coming in 7 number
console.log(ans);

//slice
let slice = index.slice(-2) // index.length-2 --> like I -> output->ng
console.log(slice);
console.log(`if 2 then come:  ${index.slice(2)}`);


//chaining
console.log(password.trim().toUpperCase()); // 1,2,3 line in code 

let sam = "IloveCoding"
console.log(sam.slice(-2));

//replace & repeat
let abc ="Mango";
console.log(abc.replace("an","sa"));
console.log(abc.repeat(3));

let empty = [] //empty aray
console.log(empty);

//Array
console.warn("Array");
let array = ['Samarth', 'Soham', 'fenil'];
console.log(array);
//push
array.push('aryan');
console.log(array);
//pop
array.pop();
console.log(array);

//Unshift()
array.unshift('Add first');
console.log(array);
console.log(array.length);
//shift
array.shift();
// array.shift().shift(); // not work, because the first shift() would return the element removed from the array, not the array itself. 
console.log(array);
// methods
console.log(array.indexOf("Samarth"));
console.log(array.indexOf("aryan"));
console.log(array.includes("Samarth")); //true
console.log(array.includes("green"));

//concatenation & reverse
let p = ["red", "yellow", "blue"];
let s =["green"];
//concat
console.log(p.concat(s)); // not change old value
console.log(p.reverse());
console.log(p); //output is rever because revers() is change old value 
