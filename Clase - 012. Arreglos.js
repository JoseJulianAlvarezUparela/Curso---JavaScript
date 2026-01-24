const a = []
console.log(a);

console.log("-------------------");

const miArreglo = [10, 20, 30, 40, 50];
console.log("Arreglo completo:", miArreglo);

console.log(miArreglo.length)
console.log(miArreglo[0])
console.log(miArreglo[4])

const d = Array(5).fill(100)
console.log(d);


const colores = ["Rojo", "Verde", "Azul"];
console.log("Colores:", colores);

colores.push("Amarillo");
console.log("Después de push:", colores);

colores.pop();
console.log("Después de pop:", colores);


colores.forEach(function(e, index) {
    console.log((`<li id="${index}" >${e}</li>`));
});