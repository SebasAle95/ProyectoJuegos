const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    const buscador = document.querySelector('#browserbar').value;
    const listajuegos = document.querySelector('listajuegos');
    while(listajuegos.firstChild){
        console.log('sdas')
        if (buscador !== listajuegos.firstChild.id){
            listajuegos.removeChild();
        }
    }
}
)
