const minus= document.querySelector('.dec')
const plus= document.querySelector('.inc')
const count=document.querySelector('.count')
const input=document.querySelector('.id')
const zero=document.querySelector('.zero')
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
zero.addEventListener('click',()=>{
    count.innerText=0;
})

