//map filter reduce

//filter:
// .filter(()=>{
    // return a;})
    // returns values into a new array



//map()
// same as for loop returns a new array
// Array.map().filter().map()
//chaining
// the output of 1st method will be forworded to second method and last method returns to the assigned array
 

//reduce()
function intialvalue(num){
    return num;
}
let arr=[1,2,3,4,5]
let ans=arr.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue}
    ,0)
// 1. accumulator will take intnial value
// 2. then accumulator will store value of acc+currval
// 3. then repeat the process until array ends.
console.log(ans)
    const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// arr.reduce((acc, currval)=>{
//     return acc+currval.price,0
// })
let ar=[1,2,3,4,5]
let br=ar.filter((ele)=>{
    if(ele%2==0) return ele;
})
console.log(br)
let sum=ar.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum)