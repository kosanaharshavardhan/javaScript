//map filter reduce

//filter:
// .filter(()=>{
    // return a;})
    // returns values into a new array



//map()
// same as for loop returns a new array
// Array.map().filter().map()
//chaining
// the output of 1st method will be forworded to second method and last method returns to the assigned array
 

//reduce()
function intialvalue(num){
    return num;
}
arr.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue,
    intialvalue(0)
// 1. accumulator will take intnial value
// 2. then accumulator will store value of acc+currval
// 3. then repeat the process until array ends.
})
