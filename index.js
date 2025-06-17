// sum of n number using recursion
let n=3;
let sum=0;
function fn (n){
    if(n < 0){
        return 0;
    }
   return fn(n-1,sum=sum+n)
}

fn(n)
console.log(sum);



//multiply of n number using recursion

let m=5;
let fact=1;
function factorial(m){
    if(m < 1){
        return 1;
    }
    return factorial(m-1,fact=fact+m)  
}
factorial(m)
console.log(fact);


// reverse an array using recursion

let arr = [1,2,7,5];
let l=0;
let r = arr.length-1;

let d=[];
function reverse(l,r){
    if(l > arr.length/2){
        return 
    }
    d[l]=arr[r];     
    d[r] = arr[l]
    return reverse(l+1,r-1)
;
}
reverse(l,r)
console.log(d)

// reverse an array

let arr1 = [3,2,5,7,5];
let a =arr1.length-1;
let newArr=[];

for(let i=0; i<=arr1.length-1; i++){
newArr[i] = arr1[a-i];

}
console.log(newArr)


