// alert("Test"); -> comentario línea
/* Comentario detallado
    saddjlasksdkasd
    aslñdañslkd
    asldasldk
*/

//Declaración variable en una línea
let product = "PS5 Pro";

//Declaración varias variables en una misma línea
let price = "", dimensions = 0;

product = "PS5";

//alert(product);

// 10_product = "TEST!!" -> no está permitido declarar varibles que comiencen por dígitos

//no podemos declarar variables usando palabras reservadas: https://es.w3hmong.com/js/js_reserved.htm
///let return = true;

let pokemon = "Bulbasur";

function showPokemon (nombrePokemon) {
    // nombrePokemon = pokemon;
    pokemon = "Charmander";

    console.log(nombrePokemon);
}


showPokemon(pokemon);

let firstName = "Jon";
let lastName = "Snow";
let age = 24;

//Soy Jon Snow y tengo 24 años

console.log("Soy", firstName, lastName, "y tengo", age, "años.");

function gameOfThronesPresentation (nombre, apellido, edad) {
    console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);
}

//gameOfThronesPresentation(firstName, lastName, age);

//age = age + 6;
age += 6;
console.log("Soy", firstName, lastName, "y tengo", age, "años.");

age = age - 6;
age -= 6;
console.log("Soy", firstName, lastName, "y tengo", age, "años.");

// age = age * 1;
age *= 10;
console.log("Soy", firstName, lastName, "y tengo", age, "años.");

// age = age / 1;
age /= 2;
console.log("Soy", firstName, lastName, "y tengo", age, "años.");

// age = age + 1
age++;
console.log("Soy", firstName, lastName, "y tengo", age, "años.");



// Sumar 25 y dividir entre 5




