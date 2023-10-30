let btn = document.querySelector('button')
let first = document.querySelector('.first')
let result = document.querySelector('.container__result')
let score = document.querySelector('#score')
let form = document.querySelector('form')
let value = null;

window.onload = ()=>{
    for (let input of form){
        input.checked = false
    }
}

btn.addEventListener("click",()=>{

    first.classList.add('show_off')
    result.classList.add('show_result')
})


form.addEventListener('click',(e)=>{
    if (e.target.tagName =='INPUT'){
        value = e.target.value
    }
    if(e.target.tagName =="SPAN"){
        value = e.target.previousElementSibling.value
    }
    if (value){
        btn.removeAttribute('disabled')
        btn.style.opacity ='1'
        btn.classList.add('active')
    }
    score.textContent = `You selected ${value} out of 5`
})