const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const buscador = document.querySelector('#browserbar').value;
    const listajuegos = document.querySelector('#listajuegos');
    let count = 0;
    let elementosAEliminar = [];
    let elementoActual = listajuegos.firstElementChild;
    if(buscador.length === 0){
        while (elementoActual && elementosAEliminar.length < 5) {
            elementoActual.classList.remove('custom-hidden');
            elementoActual = elementoActual.nextElementSibling; 
        }
    }
    while (elementoActual && elementosAEliminar.length < 5) {
        if (buscador === elementoActual.id) {
            elementoActual.classList.remove('custom-hidden') 
        }else{
            elementoActual.classList.add('custom-hidden')
        }
        elementoActual = elementoActual.nextElementSibling; 
        count++;
    }
}
)