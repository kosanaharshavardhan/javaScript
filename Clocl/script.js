let hour=document.querySelector('.hour');
let second=document.querySelector('.second');
let minute=document.querySelector('.minute');
function upclk(){
    const mydate=new Date();
    hour.innerText= `${mydate.getHours()}`;
    second.innerText= `${mydate.getSeconds()}`;
    minute.innerText=`${mydate.getMinutes()}`;
}
setInterval(() => {
   upclk();
}, 1000);

