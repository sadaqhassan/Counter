let text = document.querySelector('#text')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let dalete = document.querySelector('#delete')

let count = 0

plus.addEventListener('click',()=>{
    count++
    text.innerHTML=count
})

dalete.addEventListener('click',()=>{
    count=0
    text.textContent=count
})



