// // Que es aprendejs.org

// /*
//     Aprendejs.org es una plataforma online que ofrece cursos y recursos para aprender JavaScript.
//     Se enfoca en proporcionar una experiencia de aprendizaje práctica y guiada, con proyectos y ejercicios.
//     Es un recurso útil para principiantes y para aquellos que buscan profundizar sus conocimientos en JavaScript.
// */

// // Variables
// // Las variables son contenedores para almacenar datos.

// // Declaración de variables
// var nombre = "Juan"; // 'var' es la forma antigua de declarar variables. No se recomienda su uso.
// let edad = 30; // 'let' es la forma moderna y recomendada para declarar variables que pueden cambiar.
// const PI = 3.14159; // 'const' es para declarar variables cuyo valor no cambiará.

// console.log(nombre); // Imprime el valor de la variable 'nombre' en la consola.
// console.log(edad);
// console.log(PI);

// // Tipos de datos
// // JavaScript tiene varios tipos de datos.

// // String (cadena de texto)
// let saludo = "Hola, mundo!";
// let mensaje = 'Esto es un string.';

// console.log(typeof saludo); // 'typeof' devuelve el tipo de dato de una variable.

// // Number (números)
// let numeroEntero = 10;
// let numeroDecimal = 10.5;

// console.log(typeof numeroEntero);
// console.log(typeof numeroDecimal);

// // Boolean (verdadero/falso)
// let esVerdadero = true;
// let esFalso = false;

// console.log(typeof esVerdadero);

// // Undefined (valor no definido)
// let sinValor;
// console.log(sinValor); // Output: undefined
// console.log(typeof sinValor); // Output: undefined

// // Null (ausencia intencional de cualquier valor)
// let valorNulo = null;
// console.log(valorNulo); // Output: null
// console.log(typeof valorNulo); // Output: object (esto es un error histórico de JavaScript)

// // Symbol (introducido en ES6, para valores únicos)
// const id = Symbol('id');
// console.log(typeof id);

// // BigInt (para números enteros muy grandes)
// const numeroGrande = 1234567890