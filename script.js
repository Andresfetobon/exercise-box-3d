// Selección de elementos del DOM:

// boxesContainer: Selecciona un elemento HTML con el ID 'boxes',  que es un contenedor donde se agregarán las cajas.
const boxesContainer = document.getElementById('boxes')

// btn: Selecciona un elemento HTML con el ID 'btn', para que sea un botón en la página.
const btn = document.getElementById('btn')

// Agregar evento al botón:
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))
// Este código agrega un eventListener al botón (btn). Cuando se hace clic en el botón, se ejecuta una función de flecha (() => ...) que llama a classList.toggle('big') en boxesContainer. Esto significa que alternará la clase 'big' en el contenedor boxesContainer cada vez que se haga clic en el botón.

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
    // añadimos la clase box con classList al HTML
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()