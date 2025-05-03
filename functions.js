function print(){
    console.log("printing...")
}
print()
//3+null ==3

// default parameter
let fun=function(para= 'defaultName'){
    return para;
}
console.log(fun())
// rest parameter unlimited arguments
//fun(...num)
function a(y,z,...arr){
    return arr;
}
console.log(a(1,2,3,4,5))
// function parameters can be objs
//function({a:1}) //passing obj
//function([1,2,3,]) //passing array

//scopes
// let --> eventhough variable names are same butthey are differnt using let scope

//hoisting
//const let can't be hoisted
// var function() can