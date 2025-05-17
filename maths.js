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