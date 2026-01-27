console.log("Before hello");
try{
const s=setInterval(()=>{
    console.log("Hello");
},1000)
clearInterval(s);
}catch(e){
    console.log(e.message);
}
console.log("after hello");