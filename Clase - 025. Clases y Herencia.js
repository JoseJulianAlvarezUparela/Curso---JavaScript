class Animal {
    constructor(nombre, sonido, raza) {
        this.nombre = nombre;
        this.sonido = sonido;
        this.raza = raza; // Assign raza directly here
    }

    hacerSonido() {
        console.log(`${this.nombre} dice ${this.sonido}`);
    }

    presentarse() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

const perro = new Animal('Firulais', 'Guau Guau', 'Labrador'),
    gato = new Animal('Michi', 'Miau Miau', 'Siames');

console.log(perro);
console.log(gato);
perro.presentarse();
perro.hacerSonido();
gato.presentarse();
gato.hacerSonido();
