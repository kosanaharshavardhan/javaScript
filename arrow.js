let arr=()=>{

}
// this --> node enivrinment empty obj
// console --> window obj
function print(){
    let a=1
    console.log(this.a);
    //runs on global context
    // this keyword cannot be used.(strcit mode)
}
print()

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()

// (a,b,)=>(a+b)
// ()--> t0 return wwithout return keyword

