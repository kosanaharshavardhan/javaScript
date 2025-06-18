let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleDateString('default',{
//     timeZone
// }))
// console.log(typeof myDate)
// //custom dates
// let cusDate=new Date(2025,4,1,6,33,23);
// console.log(cusDate.toString())
// // new Date("yyyy-mm-dd")
// //new Date("mm-dd-yyyy")
// //new Date("dd-mm-yyyy")
//  // in js date.now represents no. of milliseconds passed after jan 1 1970 midnight(weird right)
 let time=Date.now();
 console.log(time)
//  console.error(time)
//  console.log(cusDate.getTime())//in milliseconds
//  //.getMonth()
//  //.getDay()

console.log(myDate.getTime())