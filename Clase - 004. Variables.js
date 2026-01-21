// var permite declarar variables con un alcance global o de función.
// let permite declarar variables con un alcance de bloque.
let variable = "Hola Mundo";
console.log(variable);
console.log("************************")


var musica = "Rock";
console.log ("Me gusta el ", musica);
{
    var musica = "Pop";
    console.log("Dentro del bloque me gusta el ", musica);
}



console.log("LET")


let musica2 = "Rock";
console.log("Me gusta el ", musica2);
{
    let musica2 = "Pop";
    console.log("Dentro del bloque me gusta el ", musica);
}

console.log("Fuera del bloque me gusta el ", musica2);


