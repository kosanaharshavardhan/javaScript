//json ==> stringified objects
//destructing the objects

const obj=
{
    biggnaemeee :"ss"
}
obj.biggnaemeee
// it is a drag to always use this big name
//instead
// {}--> desctructing
// let {key in obj}=objname
let {biggnaemeee:smallname}=obj
console.log(smallname)

// json both keys and values are strings
// numbers bools come in their orignals
//1. json.Stringify()
//2.json.Parse() no symbols ,functions,undefined


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
