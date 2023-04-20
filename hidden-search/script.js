const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus();
})
/*
btn.addEventListener('click', getChange)

function getChange() {
    search.classList.toggle('active')
    input.focus()
}


function getChange() {
    console.log("asa");
 }

getChange(() => { 
    console.log("flecha");
})

*/