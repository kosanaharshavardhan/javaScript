//singleton
//objext.create
//object literals
const obj={
    name:"hazlewood",
    team:"rcb"

}
// key is taken as string
// accessing
console.log(obj.name)
// . method is violated when the key do not follow isentifier rules
console.log(obj['name'])
// interview
// insert symbol in obj
// 1. create a symbol 
//[symname]:"data" refers to created symbol
// now it no more takes it as a str
// access obj.[sumname]

//Object.freeze(obj) // unchangable
obj.print=function(){
    console.log("printed");
}
console.log(obj)
console.log(obj.print)
console.log(obj.print())

// constructor method
const objecr =new Object()
console.log(objecr) //singleton
 // merge 2 objs
 let obj3=Object.assign({},obj,objecr)
 // use spread operators mostly
 //Object.keys(objname) --> returns array
 console.log(Object.entries(obj))// key,value to array
console.log( obj.hasOwnProperty('name'))