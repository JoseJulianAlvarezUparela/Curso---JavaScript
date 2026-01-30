// Redondear un número
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

// Obtener el valor absoluto
console.log(Math.abs(-10)); // 10

// Potencias y raíces
console.log(Math.pow(2, 3)); // 8 (2 elevado a la 3)
console.log(Math.sqrt(16)); // 4 (raíz cuadrada de 16)

// Número aleatorio entre 0 y 1
console.log(Math.random());

// Número aleatorio entre un rango (ejemplo: entre 1 y 10)
const randomInRange = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(randomInRange);

// Máximo y mínimo de una lista de números
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// Redondear hacia arriba o hacia abajo
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

// Trigonometría
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1