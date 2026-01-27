let nombre = "Kenai",
edad = 5;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log("Woof Woof");
    }

}

console.log(perro)
perro.ladrar();


const dog = {
    nombre,
    edad,
    ladrar() {
        console.log("guau guau");
    }
}
console.log(dog)
dog.ladrar();