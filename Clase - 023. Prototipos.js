function Animal(nombre, sonido) {   
    this.nombre = nombre;
    this.sonido = sonido;
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
};

Animal.prototype.sonar = function() {
    console.log(`Mira mi sonido ${this.sonido}`);
};

const Snnopy = new Animal("Snopy", "Woof"),
Garfield = new Animal("Garfield", "Meow");

console.log(Snnopy);
console.log(Garfield);

console.log("------------------")

Snnopy.sonar();
Garfield.sonar();

Snnopy.saludar();
Garfield.saludar();


console.log("------------------")


function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.nombreCompleto = function() {
    console.log(` mi nombre es ${this.nombre}, ${this.apellido}`);
}

const juan = new Persona("Juan", "Perez");
console.log(juan);
juan.nombreCompleto();



