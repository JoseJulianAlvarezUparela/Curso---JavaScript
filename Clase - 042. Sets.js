// Crear un Set con varios valores (los duplicados se eliminan automáticamente)
const set = new Set([1, 2, 3, 4, 5, true, false, {}, {}, "hola", "hello"]);

console.log(set);
console.log(set.size);

// Crear un Set vacío y agregar elementos
const set2 = new Set()

set2.add(1);
set2.add(2);
set2.add(2); // Este duplicado se ignora
set2.add(3);

console.log(set2);
console.log(set2.size);

// Recorrer el set con for...of (usando 'const' en lugar de 'item')
for (const item of set){
    console.log(item);
}

// Recorrer set2 usando forEach
console.log("Recorriendo el set2")
set2.forEach(item => console.log(item));

// Verificar si un elemento existe en el set
console.log(set.has(1));
console.log(set.has(10));


let arr1 = Array.from(set);
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);

