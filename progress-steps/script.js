/*David Mercado Ortiz*/
/*Esta seccion se encarga de seleccionar los elementos del html con los 
que se piensaq trabajar*/
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

/*Inicializar una variable currentActive la cual siturara el contador en la 
Primera posicion*/
let currentActive = 1

/*Cuando el usuario hace clic en el botón "Next" o "Prev", la variable 
currentActive se actualiza para reflejar la parte actual del proceso. 
Si currentActive es mayor que el número de círculos, se establece en el 
número máximo de círculos. Si currentActive es menor que 1, se establece 
en 1. Después de actualizar currentActive, se llama a la función update().*/
next.addEventListener('click', () =>{
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () =>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }

    update()
})


/*La función update() actualiza la visualización del formulario cada vez que el usuario 
hace clic en un botón de navegación. Primero, itera a través de todos los círculos en el formulario
 y agrega la clase "active" a los círculos anteriores al círculo activo y elimina la clase "active" 
 de los círculos posteriores al círculo activo.*/ 
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}