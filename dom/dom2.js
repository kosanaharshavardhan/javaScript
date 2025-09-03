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


t[0].style.color='red'
'red'


let t2=document.querySelectorAll('li')
undefined


t2
NodeList(3) [li, li, li]


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

b.map((i)=>{
i.style.color='green';
property 2;
property 3;
.
.
property n;
})
(4) [undefined, undefined, undefined, undefined]
.

*/