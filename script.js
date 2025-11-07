const minus= document.querySelector('.dec')
const plus= document.querySelector('.inc')
const count=document.querySelector('.count')
const input=document.querySelector('.id')
const zero=document.querySelector('.zero')
const mult=document.querySelector('.mul')
const div=document.querySelector('.div')
plus.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const inputvalue=parseInt(input.value) || 1;
    count.innerText=countValue+inputvalue;
})
minus.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const inputvalue=parseInt(input.value) || 1;
    count.innerText=countValue-inputvalue
})
mult.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText)
    const inputValue=parseInt(input.value) || 2
    count.innerText=countValue*(inputValue) 
})
div.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText)
    const inputValue=parseInt(input.value) || 2
    count.innerText=countValue/(inputValue)
})
zero.addEventListener('click',()=>{
    count.innerText=0;
})

