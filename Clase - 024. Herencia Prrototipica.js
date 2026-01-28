function Animal(nombre, sonido) {   
    this.nombre = nombre;
    this.sonido = sonido;
}

Animal.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre}`);
};

Animal.prototype.sonar = function() {
    console.log(`Mira mi sonido ${this.sonido}`);
};

function Perro(nombre, sonido, raza) {
    this.super = Animal;
    this.super(nombre, sonido);
    this.raza = raza;
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function() {
    console.log("Guau guau");
}

Perro.prototype.ladrar = function() {
    console.log("Guau guau");
}



const Snnopy = new Perro("Snopy", "Woof", "Pastor Alemán"),
Garfield = new Animal("Garfield", "Meow");

console.log(Snnopy);
console.log(Garfield);

console.log("------------------")

Snnopy.sonar();
Garfield.sonar();

Snnopy.saludar();
Garfield.saludar();

