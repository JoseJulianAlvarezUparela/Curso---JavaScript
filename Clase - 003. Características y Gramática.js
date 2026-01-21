// // Symbol (valor único e inmutable, a menudo usado como clave de propiedad de objeto)
// let bigIntVar = 9007199254740991n; // BigInt (números enteros muy grandes)

// console.log(typeof stringVar);
// console.log(typeof numberVar);
// console.log(typeof booleanVar);
// console.log(typeof undefinedVar);
// console.log(typeof nullVar); // Ojo: typeof null es 'object', es un error histórico de JS.
// console.log(typeof symbolVar);
// console.log(typeof bigIntVar);

// // 4. Operadores:
// // Aritméticos: +, -, *, /, %, **, ++, --
// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...
// console.log(a % b); // 1 (residuo)
// console.log(a ** b); // 1000 (potencia)
// a++; // a = 11
// b--; // b = 2

// // Comparación: ==, ===, !=, !==, <, >, <=, >=
// // == (igualdad de valor, con coerción de tipo)
// console.log(5 == '5'); // true
// // === (igualdad estricta, valor y tipo)
// console.log(5 === '5'); // false
// console.log(5 != '5'); // false
// console.log(5 !== '5'); // true
// console.log(a > b); // true

// // Lógicos: && (AND), || (OR), ! (NOT)
// let esMayor = true;
// let tienePermiso = false;
// console.log(esMayor && tienePermiso); // false
// console.log(esMayor || tienePermiso); // true
// console.log(!esMayor); // false

// // Asignación: =, +=, -=, *=, /=, %=, **=
// let x = 10;
// x += 5; // x = x + 5; // x es 15

// // 5. Est