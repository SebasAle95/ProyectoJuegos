const formulario = document.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const comentario = document.querySelector("#comentario").value;

    const nuevoNombre = document.createElement("span");
    const nuevoApellido = document.createElement("span");
    const nuevoComentario = document.createElement("p");
    const nuevoDiv = document.createElement("div");
    
    nombre = nombre + " ";

    nuevoNombre.classList.add("text-light");
    nuevoNombre.classList.add("h6");
    nuevoApellido.classList.add("text-light");
    nuevoApellido.classList.add("h6");
    nuevoComentario.classList.add("text-light");
    nuevoDiv.classList.add("border");
    nuevoDiv.classList.add("border-light");
    nuevoDiv.classList.add("rounded");
    nuevoDiv.classList.add("my-2");

    nuevoNombre.textContent = nombre;
    nuevoApellido.textContent = apellido;
    nuevoComentario.textContent = comentario;

    nuevoDiv.appendChild(nuevoNombre);
    nuevoDiv.appendChild(nuevoApellido);
    nuevoDiv.appendChild(nuevoComentario);

    document.querySelector("#comentarioscontainer").appendChild(nuevoDiv);
    console.log(nuevoDiv);

    document.querySelector("#nombre").value = null;
    document.querySelector("#apellido").value = null;
    document.querySelector("#comentario").value = null;
})