let i = 0;

while(i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

console.log("---");

do {
    console.log("El valor de i es: " + i);
    i++;
} while (i < 5);

console.log("---");

for(let j = 0; j < 5; j++) {
    console.log("El valor de j es: " + j);
}

console.log("---");

const numeros = [10, 20, 30, 40, 50];

for(let i = 0; i < numeros.length; i++) {
    // console.log("El valor del número es: " + numeros[i]);
    console.log(numeros[i]);
}


console.log("---");

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

for(let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}
