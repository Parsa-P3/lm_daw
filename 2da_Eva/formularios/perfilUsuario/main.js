let crearPerfil = document.getElementById("create_profile");

/* 

<input id="nombre" type="text" maxlength="120" required>
<input id="edad" type="number" max="120">
<textarea id="descripcion" max="250"></textarea> 

*/

crearPerfil.onclick = function () {
    // imprimir por consola los valores de los 3 primeros inputs
    let nombreCompleto = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let descripcion = document.getElementById("descripcion").value;

    console.log("Nombre completo: ", nombreCompleto);
    console.log("Edad: ", edad);
    console.log("Descripción: ", descripcion);

    let contenido = document.getElementById("profile_preview");

    contenido.innerHTML = `
        <h3>Nombre: ${nombreCompleto}, ${edad} años</h3>
        <p>Descripción personal: </p>
        <p>${descripcion}</p>
    `;

    contenido.style.display = "block";

    
}