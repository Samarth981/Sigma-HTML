console.log("fullName", ':', "Samarth Patel");
let a=5;
let b=10;
console.log("sum is :", a+b); //not print a+b but print output
let output=`The using template sum is : ${a+b} rupees.`;
console.log(output);
let p;
console.log(p = a>b);


//if-else 
let age=18;
if(age>=18){
    console.log(`you are a ${age} year old, so you can drive`);
}
else{
    console.log('you can not drive');
}

//prectice quetion
let colore='pink';
if(colore=='red'){
    console.log("Stop!");
} else if(colore=='yellow'){
    console.log("Slow down");
} else if(colore=='green'){
    console.log("Go");
} else{
    console.log('Please enter valied colore(red, yellow, green)');
}
    
//prectice  q-2
let size='XL'
if(size==='XL'){
    console.log("price is rupees 250");
}
else if(size==='L'){
    console.log("price is rupees 200");
}
else if(size==='M'){
    console.log("price is rupees 100");
}
else if(size==='S'){
    console.log("price is rupees 50");
}else{
    console.log("Please enter valied size");
}