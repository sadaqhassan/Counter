let text = document.querySelector('#text')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let dalete = document.querySelector('#delete')

let count = 0

plus.addEventListener('click',()=>{
    count++
    text.innerHTML=count
})

minus.addEventListener('click',()=>{
    count--
    text.textContent=count;
})

dalete.addEventListener('click',()=>{
    count=0
    text.textContent=count
})


    if (count < 0) {
        text.style.color = 'red';
    } else {
        text.style.color = 'white';
    }


