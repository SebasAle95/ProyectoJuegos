let btnthemelight = document.querySelector('#btnthemelight');
let btnthemedark = document.querySelector('#btnthemedark');


btnthemelight.addEventListener('click', ()=> cambiartema('light'));
btnthemedark.addEventListener('click',  ()=> cambiartema('dark'));

//leer el localstorage
let temaconfigurado = JSON.parse(localStorage.getItem('tema')) ||  'dark';

cambiartema(temaconfigurado);

function cambiartema(color){

    document.querySelector('html').setAttribute('data-bs-theme', color);

    //guardar en localstorage

    localStorage.setItem('tema', JSON.stringify("color"));
}

// TAREA: cambiar el icono del navbar segun el tema seleccionado