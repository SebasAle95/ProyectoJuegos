const imgPublicidad = "../img/Deporte/publi.png"
document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        const nuevapublicidad = document.createElement("img");
        nuevapublicidad.src = imgPublicidad;
        //nuevapublicidad.classList.add()
        document.querySelector("#publicidadcontainer").appendChild(nuevapublicidad);
        setTimeout(() => {
            document.querySelector("#publicidadcontainer").removeChild(nuevapublicidad);
        }, 7000);
    }, 4000);
})