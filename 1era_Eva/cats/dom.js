
//CSS: # -> identificador; . -> clase
let tagBody = document.getElementsByTagName("body");
let tagMain = document.getElementsByTagName("main");
let mainHeader = document.getElementById("mainHeader");
let thunder = document.getElementsByClassName("thunder");

//Recuperar una lista con todos los elementos con el nombre de etiqueta "li"
let liTags = document.getElementsByTagName("li");

//Recuperar una lista con todos los elementos con el nombre de etiqueta "h3"
let h3Tags = document.getElementsByTagName("h3");


console.log("Body: ", tagBody);
console.log("MainHeader: ", mainHeader);
console.log("Thunder: ", thunder);
console.log("Etiquetas <li>: ", liTags);
console.log("Etiquetas <h3>: ", h3Tags);

//tagBody[0].style = "background-color: lightcyan";
tagBody[0].style.backgroundColor = "lightcyan";

tagMain[0].style = "padding-top: 1rem; padding-left: 1rem;"
//tagMain[0].style.paddingTop ="1rem";
//tagMain[0].style.paddingLeft ="1rem";

// Darle estilo igual que en nuestro CSS a las siguientes etiquetas utilziando JS
// p, img, section, ul, ol

// for (let x = 3; x < liTags.length; x++) {
for (let x = 0; x < liTags.length; x++) {
    console.log("Soy el elemento nº ", x, " dentro de la lista de 'lis': ", liTags[x]);

    //condición preguntando por el indice mayor o igual a 3
    if (x >= 3) {
        //cambiar el texto del elemento seleccionado por "Agua"
        //liTags[x].innerHTML = "Agua";
        paintRat(liTags[x]);
    }
}

//Recorrer la lista de los elementos h3 y asignarle el mismo emoticono a todos los elementos
for (let index = 0; index < h3Tags.length; index++) {
    console.log("Soy el elemento nº ", index, " dentro de la lista de 'h3s': ", h3Tags[index]);

    //h3Tags[index].innerHTML = "🐭";
    // if (index > 0) {
    //     paintRat(h3Tags[index]);
    // }

    //Pintar emoticono solamente en el elemento h3 que tenga la clase 'dislike'
    if (h3Tags[index].className === 'dislike') {
        h3Tags[index].innerHTML = "🐭";
    }
}


// alexandru.cucuruzeanu@mercanza.es

function paintRat(elementoHTML) {
    elementoHTML.innerHTML = "🐭";
}

let nuevoH1 = document.createElement("h1");

console.log("Mi nuevo H1: ", nuevoH1);

nuevoH1.innerHTML = "Nuevo H1 desde javascript";

console.log("Mi nuevo H1 con contenido: ", nuevoH1);

/*Añadir al elemento con id = 'mainHeader' el elemento creado 
    dinámicamente en javscript
*/
mainHeader.appendChild(nuevoH1);

/*
    Añadir dos nuevos párrafos al elemento con el id igual a 'mainHeader'
    los dos párrafos deben tener el color de texto 'purple'
*/


let nuevoP = document.createElement("p");
nuevoP.innerHTML = "1er p nuevo";
nuevoP.style.color = "purple";

let nuevoP2 = document.createElement("p");
nuevoP2.innerHTML = "2do p nuevo";
nuevoP2.style.color = "purple";


mainHeader.appendChild(nuevoP);
mainHeader.appendChild(nuevoP2);

//Añadir elemento HTML como cadena de texto con variable
let nuevoDiv = "<div>Tom & Jerry 😸🐭</div>";
//Añadir elemento HTML como cadena de texto sin variable
//mainHeader.insertAdjacentHTML('afterbegin', "<div>Tom & Jerry 😸🐭</div>");

//Añadir el elemento como el 1er elemento dentro de la etiqueta a la que referenciamos
//Primer hijo
mainHeader.insertAdjacentHTML('afterbegin', nuevoDiv);

//Añadir el elemento antes de etiqueta a la que referenciamos
//Elemento hermano
mainHeader.insertAdjacentHTML('beforebegin', nuevoDiv);

//Añadir el elemento al final dentro de la etiqueta a la que referenciamos
//Elemento hijo
mainHeader.insertAdjacentHTML('beforeend', nuevoDiv);


//Añadir el elemento despues de la etiqueta a la que referenciamos
//Elemento hermano
mainHeader.insertAdjacentHTML('afterend', nuevoDiv);


//Eliminar el elemento 
//mainHeader.remove();


//Eliminar el elemento hijo igual a la variable div
let hijosMainHeader = mainHeader.childNodes;
console.log("Elementos hijos de #mainHeader: ", hijosMainHeader);

//mainHeader.removeChild();

/*
    Recorrer la lista con los elementos hijos de mainHeader
    y quitar los que tengan en su innerHTML "Tom & Jerry 😸🐭"
*/

// for if 

for (let index = 0; index < hijosMainHeader.length; index++) {
    if (hijosMainHeader[index].innerText === 'Tom & Jerry 😸🐭') {
    //if (hijosMainHeader[index].innerHTML == 'Tom &amp; Jerry 😸🐭') {

        //Podemos utilizar el elemento y la clase removeChild
        mainHeader.removeChild(hijosMainHeader[index]);

        //O directamente borrar ese elemento
        //hijosMainHeader[index].remove();
    }
}


// if (hijosMainHeader[index].innerHTML == 'Tom &amp; Jerry 😸🐭') {


//beforebegin
//afterbegin
//beforeend
//afterend


//console.log("style: ", tagMain[0].style);


//console.log("Body hijos: ", tagBody[0].childNodes);


/*
//Esperar a que cargue la ventana (con script dentro de head)
window.onload = function () {
    //CSS: # -> identificador; . -> clase
    let tagBody = document.getElementsByTagName("body");
    let mainHeader = document.getElementById("mainHeader");
    let thunder = document.getElementsByClassName("thunder");


    console.log("Body: ", tagBody);
    console.log("MainHeader: ", mainHeader);
    console.log("Thunder: ", thunder);

    tagBody[0].style = "background-color: lightcyan";
}
*/
