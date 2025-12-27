const num=new Number(100);
// a number object;
console.log(num)
console.log(num)
// number methods:
/*
 1. toString() --> datatype conversion
 2. toFixed() --> fixed decimals
 3. to Precision() --> fixed digits
 gives exp if more digits were there
 */
// .toLocaleString('en-IN') -->currency commas.
//tIP: USE DATATYPE() function in console brwoser window to know properties or length
// or when you declare a variable using a constructor method you can also view using it
//=-=-=-=--=-=-=++_+_+_+_+_+-=+-


//math methods
console.log(Math.ceil(0.4));
//Math.random()
//Math.random()* maxnum +minnum
//+minmum because to avoid 0
//use .floor to remove decimals
// formula
//Math.random()*(max-min+1)+min
console.log(Math.floor(Math.random()*(10)+1))
 // max-min+1 is range

 const otherNumber = 123.896

console.log(otherNumber.toPrecision(4));



// I give you array give me randome ele of array everytime i print it

let arr=[1,2,3,4,5,6,7,8,9,0];
// console.log("Enter array size as 10")

// console.log("Enter elements:")
// for(let i=0;i<10;i++)[
//     arr.push(ele)
// ]

console.log(arr[Math.floor(Math.random()*10)])

let name="harsha"
console.log(name[Math.floor(Math.random()*name.length)]);