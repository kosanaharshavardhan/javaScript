// console.log("Before hello");
try{
setInterval(()=>{
    console.log("Hello");
},1000)
}catch(e){
    console.log(e.message);
}
// console.log("after hello");