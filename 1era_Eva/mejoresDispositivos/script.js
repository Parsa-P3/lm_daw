// Opcional: dividir la ejecución con los cambios de estilos y la ejecución con las modificaciones en dos botones diferentes. 
// Es decir, en lugar de 1 botón que haga todo, utiliza 2 botones, uno para cambiar estilos y otro para modificar y eliminar.
// Opcionalmente también sube el proyecto a un nuevo repositorio privado a github e invítame como colaborador del repositorio; mi nombre de usuario: alexprometeo

function modificarDOM() {
    //  - header: darle un al texto que sea itálico;
    let header = document.getElementsByTagName("header")[0];
    console.log("elemento header: ", header);

    header.style = "font-style: italic;";

    //  - elemento con clase "item": modificar el color de fondo para que sea diferente al asignado en CSS;
    let item = document.getElementsByClassName("item")[0];
    console.log("primer elemento con la clase item: ", item);
    item.style = "background-color: #fbf1aa;";


    //  - elemento con identificador "lista" Añade un margen por debajo de la lista de 10 pixeles
    let lista = document.getElementById("lista");
    console.log("elemento con el identificador lista: ", lista);
    lista.style = "margin-bottom: 10px";


    //  - modificar el texto del span perteneciente al primer elemento de la lista a "CAMBIADO"
    let elementosHijos = item.children;
    console.log("elementosHijos", elementosHijos);
    let primerSpan = elementosHijos[1];

    primerSpan.innerText = "CAMBIADO!!";


    //  - eliminar el último elemento de la lista haciendo referencia a la colección de elemento y al índice que se corresponda al último elemento 
    let elmentosHijosLista = lista.children;
    console.log("elmentosHijosLista", elmentosHijosLista);

    let ultimoLista = elmentosHijosLista[elmentosHijosLista.length-1];

    console.log("ultimoLista", ultimoLista);

    ultimoLista.remove();


}