function outer(){
    let outa=2;
    function inner(){
        console.log(outa);
        outa++;
    }
    return inner;
}
let a=outer();
a()
a()
let b=outer()
b()
b()
b()
// outa variable is a closure for inner function