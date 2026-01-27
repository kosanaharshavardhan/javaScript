//singleton   created by constructor
//objext.create
//object literals // not a single ton
const obj={
    name:"hazlewood",
    team:"rcb"

}
obj.hi="hello"
console.log(obj)
// key is taken as string
// accessing
console.log(obj.name)
// . method is violated when the key do not follow identifier rules
console.log(obj['name'])
// interview
// insert symbol in obj
// 1. create a symbol 
//[symname]:"data" refers to created symbol
// now it no more takes it as a str
// access obj.[symname]

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
 let obj3=Object.assign({},obj,objecr)// {}--> default if some thing goes wrong it will return empty obj{target,source}
 // use spread operators mostly
 //Object.keys(objname) --> returns array
 console.log(Object.entries(obj))// key,value to array
console.log( obj.hasOwnProperty('name'))
// delete obj.key
// obj.freeze() const
// obj.seal changes
// obj.preventextension u know can delete