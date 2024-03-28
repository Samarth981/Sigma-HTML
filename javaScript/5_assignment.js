let arr=[1,2,3,4,5,6,2,3];
for(let i=0; i<=arr.length; i++){
    if(arr[i]==2){
        arr.splice(i,1);
    }
}   
console.log(arr);

///Q-2
let num=2356898349839;
let copy = num;
let count=0;
while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//Q3
let n = 7;
let fac=1;
for(let i=1; i<=n;i++){
    fac = fac*i;
}
console.log(fac);

//Q-4
let array = [5,4,2,8,6];
let big =0;
for(let i=0;i<=array.length;i++){
    if(array[i]>big){
        big = array[i];
    }
}
console.log(big);