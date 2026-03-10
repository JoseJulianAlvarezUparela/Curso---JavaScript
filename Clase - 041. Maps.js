let mapa = new Map();

mapa.set("nombre", "Juan");
mapa.set("edad", 30);
mapa.set("ciudad", "Madrid");   

console.log(mapa);

console.log(mapa.size); 
console.log(mapa.has("nombre"));
console.log(mapa.has("apellido"));


for (let [clave, valor] of mapa) {
    console.log(`${clave}: ${valor}`);
}

const mapa2 = new Map([
    ["nombre", "Juan"],
    ["edad", 30],
    ["ciudad", "Madrid"]
]);

console.log(mapa2);

const LlaveMap2 = [...mapa2.keys()];
const ValorMap2 = [...mapa2.values()];

console.log(LlaveMap2);
console.log(ValorMap2);