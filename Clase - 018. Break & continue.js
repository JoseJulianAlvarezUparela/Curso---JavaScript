// Ejemplo de uso de switch case
const opcion = 2;

switch (opcion) {
    case 1:
        console.log("Seleccionaste la opción 1");
        break;
    case 2:
        console.log("Seleccionaste la opción 2");
        break;
    case 3:
        console.log("Seleccionaste la opción 3");
        break;
    default:
        console.log("Opción no válida");
        break;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 5) {
        break; // Sale del ciclo cuando el número es 5
    }
    console.log(numeros[i]);
}