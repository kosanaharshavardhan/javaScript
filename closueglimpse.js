function outer(){
    let outa=2;
    function inner(){
        console.log(outa);
    }
    return inner;
}
let a=outer();
a();
a();
// outa variable is a closure for inner function