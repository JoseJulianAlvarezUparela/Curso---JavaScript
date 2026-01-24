// Funciones declaradas vs expresadas

function miFuncionDeclarada() {
    console.log("Esta es una función declarada");
    console.log("Puedes llamarme antes de mi declaración");
    console.log("¡Porque el intérprete me carga primero!");
}

miFuncionDeclarada();

console.log("--------------------------------------------------");

function estaFuncionDevuelveValor() {
    return 42;
}

let valorDevuelto = estaFuncionDevuelveValor();
console.log(valorDevuelto);


console.log("--------------------------------------------------");

function saludar(nombre, edad) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("José", 26);

console.log("--------------------------------------------------");

miFuncionDeclarada()

function miNuevaFuncionDeclarada() {
    console.log("Puedes invocarme antes de mi creación");
}
miFuncionDeclarada();

console.log("--------------------------------------------------");

// miFuncionExpresada();

const miFuncionExpresada = function() {
    console.log("Esta es una función expresada");
    console.log("No puedes llamarme antes de mi declaración");
    console.log("¡Porque el intérprete no me carga primero!");
}

miFuncionExpresada();

















