// let arr=[0,1,2,3,'a',true]
// // shallow copy --> same reference
// // //deep copy --> not same refernce
// // // object method
// // let arr2=new Array(0,1,2,3)
// // //methods
// // /*
// // 1. length
// // 2.push(elt) --> adds at back 1 element
// // 2.pop() --> remove lasst value
// // 3.unshift(elt) --> add at front
// // 4.shift() --> remove elt at front
// // 5. includes(elt)
// // 6. indexof()
// // 7..join() --> coverts elt into str
// // */
// // let str=arr.join();
// // console.log(str);
// // console.log(arr.splice(1,2))
// // console.log(arr)
// // //slice --> dont change the array and ignores last index
// // //splice --> removes the content from original array and takes last value also
// //  // arr1,arr2
// //  //arr1.push(arr2)=> arr1=[1,2,3,[arr2]]
// // //arr[1][2];
// // //8. .concat(newarr) return a new array
// // ///-----------

// // //1.spread operator(...) --> makesall  elements as individuals
// // // let arr=[...arr1,...arr2]
// // //.flat(depth) --> return nre array at single dimension
// // //.Array.from(str) -> creates array from str
// // // isArray() => is it array?
// // console.log(Array.from({name:"Sss"})) //intresting we should specify it with what it should take array eg: key or value
// // //Array.of(elt1,elt2,elt3);

// // array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)
// // myArr.shift()

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// // const newArr = myArr.join()

// // console.log(myArr);
// // console.log( newArr);


// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);



let arr=[1,2,3]
let brr=[4,5,6]
arr.push(brr)
// use this
// console.log(arr.concat(brr))
// console.log(arr)
console.log(arr[3][2])
console.log(arr.flat(2))

