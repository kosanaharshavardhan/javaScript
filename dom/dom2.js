/*

htmlcollection and nodelist are not array but similar to array
they don't have map loop
convert them to array
and do whateevr you want
// query selector all gives nodelist
// get elt by calss gives html collection
document.querySelectorAll('li')
NodeList(3) [li, li, li]
let t=document.querySelectorAll('li')
undefined
t
NodeList(3) [li, li, li]
t
NodeList(3) [li, li, li]
t[0].style.color='red'
'red'
let t2=document.querySelectorAll('li')
undefined
t2
NodeList(3) [li, li, li]
t2.forrach(()=>{)
VM264:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
t2.forrach(()=>{
})
VM270:1 Uncaught TypeError: t2.forrach is not a function
    at <anonymous>:1:4
(anonymous) @ VM270:1Understand this error
t2.forrach((item)=>{
item.style.
})
VM308:3 Uncaught SyntaxError: Unexpected token '}'Understand this error
t2.forrach((item)=>{
item.style.color='blue'
})
VM332:1 Uncaught TypeError: t2.forrach is not a function
    at <anonymous>:1:4
(anonymous) @ VM332:1Understand this error
t2.foreach((item)=>{
item.style.color='blue'
})
VM342:1 Uncaught TypeError: t2.foreach is not a function
    at <anonymous>:1:4
(anonymous) @ VM342:1Understand this error
t2.forEach((item)=>{
item.style.color='blue'
})
undefined




let a=document.getElementsByClassName('l')
undefined
a
HTMLCollection(4) [li.l, li.l, li.l, li.l]
Array.from(a)
(4) [li.l, li.l, li.l, li.l]
let b=Array.from(a)
undefined
b
(4) [li.l, li.l, li.l, li.l]
b.map(()=>{)
VM626:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
b.map((i)=>{
i.style.color='green'

})
(4) [undefined, undefined, undefined, undefined]

(){
dom propety 1;
dom proprty 2;
.
.
.
dom property n;

}
*/