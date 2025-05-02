let arr=[0,1,2,3,'a',true]
// shallow copy --> same reference
//deep copy --> not same refernce
// object method
let arr2=new Array(0,1,2,3)
//methods
/*
1. length
2.push(elt) --> adds at back 1 element
2.pop() --> remove lasst value
3.unshift(elt) --> add at front
4.shift() --> remove elt at front
5. includes(elt)
6. indexof()
7..join() --> coverts elt into str
*/
let str=arr.join();
console.log(str);
//slice --> dont change the array and ignores last index
//splice --> removes the content from original array and takes last value also
 // arr1,arr2
 //arr1.push(arr2)=> arr1=[1,2,3,[arr2]]
//arr[1][2];
//8. .concat(newarr) return a new array
///-----------

//1.spread operator(...) --> makesall  elements as individuals
// let arr=[...arr1,...arr2]
//.flat(depth) --> return nre array at single dimension
//.Array.from(str) -> creates array from str
// isArray() => is it array?
console.log(Array.from({name:"Sss"})) //intresting
//Array.of(elt1,elt2,elt3);
