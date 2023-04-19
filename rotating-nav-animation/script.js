/*David Mercado Ortiz*/
/*Selectores de identificacion en el html para los elementos que se van a manipular*/
const open = document.getElementById('open')
const close = document.getElementById('close')

/*Selector de todos los elementos catalogados como container */
const container = document.querySelector('.container')

/*Escuchador de eventos a partir del click, lo segundo se ejecuta una función que agrega 
la clase "show-nav" al elemento container. 
Este elemento container es el contenedor del menú de navegación.*/
open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

