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

//check some 
let x=9;
let q=10 , c=8;
let d=80;
let ans;
console.log(ans=q>x&&c>d); // true && flase = flase
console.log(`${q>x} && ${c>d} = ${q>x&&c>d}`);
console.log(`${q>x} || ${c>d} = ${q>x || c>d}`);
console.log(`${q>x} || ${c>d} && !${c>d} = ${(q>x || c>d ) && !c>d}`);  
// true || false -> true ! false -> ture not a false = true

//truthy & faly check
if(""){
    console.log("not empty");
} else {
    console.log("empty");
}
if(" "){
    console.log("not empty->ex-2");
} else {
    console.log("empty->ex-2");
}

let day=7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Tursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Worng day!");
}