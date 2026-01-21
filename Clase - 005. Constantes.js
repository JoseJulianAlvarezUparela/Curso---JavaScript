/**
 * En JavaScript, las constantes se definen utilizando la palabra clave `const`.
 * Una constante es un identificador para un valor que no puede ser reasignado
 * después de su inicialización. Sin embargo, es importante tener en cuenta que
 * si el valor de la constante es un objeto o un array, sus propiedades o elementos
 * sí pueden ser modificados.
 *
 * Características principales de las constantes en JavaScript:
 * - Deben ser inicializadas en el momento de su declaración.
 * - No se pueden volver a declarar ni reasignar.
 * - Tienen un alcance de bloque, lo que significa que solo son accesibles dentro
 *   del bloque donde se declararon.
 *
 * Ejemplo:
 * ```javascript
 * const PI = 3.14159; // Declaración de una constante
 * console.log(PI); // 3.14159
 *
 * // PI = 3.14; // Esto generará un error porque no se puede reasignar una constante
 *
 * const obj = { name: "John" };
 * obj.name = "Doe"; // Esto es válido porque estamos modificando una propiedad del objeto
 * console.log(obj.name); // "Doe"
 * ```
 */

const PI = 3.14159;
console.log(PI);


