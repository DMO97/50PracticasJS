
/*David Mercado*/
/**Este código de JavaScript utiliza el método querySelectorAll() 
 * para seleccionar todos los elementos en el documento HTML que tienen la clase panel. 
 * Luego, el método forEach() se usa para iterar sobre cada elemento seleccionado
 *  y agregar un escuchador de eventos de clic a cada uno. Cuando se hace clic en un elemento panel, 
 * se llama a la función removeActiveClasses() para eliminar la clase active de todos los elementos panel, 
 * y luego se agrega la clase active al elemento que se acaba de hacer clic mediante la propiedad classList. */
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


/*La función removeActiveClasses() también utiliza el método forEach() para iterar sobre cada elemento panel
 y eliminar la clase active de cada uno. Al hacer esto, garantiza que solo un elemento panel tenga la 
 clase active en un momento dado. */
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}