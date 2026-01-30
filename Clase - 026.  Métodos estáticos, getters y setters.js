class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre; // Usamos un guion bajo para indicar que es una propiedad "privada"
        this._edad = edad;
    }

    // Getter para obtener el nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para establecer el nombre
    set nombre(nuevoNombre) {
        if (nuevoNombre.length > 0) {
            this._nombre = nuevoNombre;
        } else {
            console.error("El nombre no puede estar vacío.");
        }
    }

    // Getter para obtener la edad
    get edad() {
        return this._edad;
    }

    // Setter para establecer la edad
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.error("La edad debe ser un número positivo.");
        }
    }
}

// Uso de la clase
const persona = new Persona("José", 30);

console.log(persona.nombre); // José
persona.nombre = "María"; // Cambiamos el nombre
console.log(persona.nombre); // María

console.log(persona.edad); // 30
persona.edad = 35; // Cambiamos la edad
console.log(persona.edad); // 35

// Intentamos asignar valores inválidos
persona.nombre = ""; // Error: El nombre no puede estar vacío.
persona.edad = -5; // Error: La edad debe ser un número positivo.