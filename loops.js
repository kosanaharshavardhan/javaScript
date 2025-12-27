// while do while for

// for of --> values
// can't iterate over objects
// can iterate over maps
// const mapp=new Map()
// mapp.set('in','india')


// for (const [key,value] of mapp) {
//     console.log(key+':'+value)
// }
// for of can;t be iterated over objs

const obj={
    a:1,
    b:2
}

for (const val in obj) {
    console.log(val)
}

// for in loop gives keys
// for (const key in obj) {
//     console.log(val)
// }
// vivce versa can't br iterated over maps



// forEach

let arr=["hi","hello","true","@#"]

// arr.forEach( function name (){

// } )
// arr.forEach(function(val){
//     console.log(val);
// })
// arr.forEach((item)=>{
//     console.log(item)
// })

// function print(val){
//     console.log(val)
// }
// arr.forEach(print)

arr.forEach((item , index , array)=>{
// arguments for each takes

console.log(index,item,array)
})

// can use on objects inside arrays