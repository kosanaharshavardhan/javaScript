let arr=()=>{

}
// this --> node enivrinment empty obj
// console --> window obj
function print(){
    let a=1
    console.log(this.a);
    //runs on global context
    // this keyword cannot be used.
}
print()