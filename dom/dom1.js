// doc

// document.getElementById('hi')

// <h1 style=​"color:​ white;​" id=​"hi" class=​"hi1">​hiiiii​</h1>​

// document.getElementById('hi').id
// 'hi'

// document.getElementById('hi').className
// 'hi1'

// document.getElementById('hi').className.innerHTML
// undefined


// document.getElementById('hi').className.innerHTML()




// document.getElementById('hi').getAttribute(class)


// document.getElementById('hi').getAttribute('class')
// 'hi1'



// document.getElementById('hi').setAttribute('class', 'test hi')
// undefined

// console.log('don;t override the previous class')



// let a= document.getElementById('hi')
// undefined




// a.style.backgroundColor='red'
// 'red'



// h1.textContent

// let h1=document.getElementById('hi')
// undefined


// h1.innerText
// 'hiiiii'
// it ignores the invisible values even though it present on html code


// h1.textContent
// 'hiiiiiInvisible text'
// see it gave invisible value also



// h1.innerHTML
// 'hiiiii<span style="display: none;">Invisible text</span>'
// it gives you a full html code



// document.querySelector('h1')
// <h1 style=​"color:​ white;​" id=​"hi" class=​"hi1">​…​</h1>​
// querselector('.class')
// selets only first ele if multiple ele are there
// selection can be useda s css selectors


// let ul=document.querySelector('ul')
// undefined


// ul
// <ul>​…​</ul>​


// ul.querySelector('li')
// <li>​::marker​"1"</li>​


// let li=ul.querySelector('li')
// undefined


// li.style.color='red'
// 'red'

// can manipulate easilyy
