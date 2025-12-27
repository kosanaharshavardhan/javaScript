let str="HELLO";
console.log("H"+"Y")
console.log("H",2)
str="Hiiiiiii"
console.log(`${str}`)

//str  methods
//1. .charat() give index get char
//2. .indexof() give char get index
//3  .substring(start ,end+1)
//4. .slice() //same as .substring but can take -ve (-ve starts from backside)
//5. trim --> remove space
//6. replace('oldval','newval');// just replace firsy occurence
//7. .includes
//8. .split('-')
console.log(str.slice(-2,-1))
console.log(str.slice(-5,4))
console.log(str.replaceAll('i','I'))

console.log(str.split(''))

let har="harsha"
console.log(har.slice(2,3));