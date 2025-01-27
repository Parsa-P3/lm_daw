//Si el usuario introduce numeros negativos -> deberia funcionar el codigo! ahora sale NaN!
//Si el usuario introduce numeros sin coma -> imprime ("Error: los elemetos deben estar separado por coma!").
//si el usuario no introduce nada -> imprimimos ("Error: Porfavor introduce numero , el campo esta vacio!")
//si el usuario pone numero exponenciales no
//si el usuario introduce "" -> Error:
//si el usuario introduce los numero como palabras -> Error: has introducido un elemento que no es un numero!

function calcularPromedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Error: El input debe ser un array no vacío.";
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== "number" || isNaN(numeros[i])) {
            return `Error: El elemento en la posición ${i+1} no es un número.`;
        }
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Evento para calcular el promedio
let calculo = document.getElementById("calcular");

calculo.onclick = function () {
    //Recuperar el valor del input
    const input = document.getElementById("numeros").value;

    if (input.length === 0){
        alert("Oye que no has introducio nada tonto!");
    }else if((!(input.includes(",")) || input.includes("-") )){
        alert("los elemetos deben estar separado por coma!")
    }else{
        const numeros = input.split(",").map(num => parseFloat(num.trim()));
        //const decimales = numeros.map(num => parseFloat(num.trim()));
        const resultado = calcularPromedio(numeros);
    
        // Mostrar el resultado y registrar en consola
        console.log("Resultado calculado:", resultado);
        document.getElementById("resultado").innerText = resultado;

    }


}
