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