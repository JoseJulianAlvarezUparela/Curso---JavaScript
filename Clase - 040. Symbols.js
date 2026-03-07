Symbol()
console.log(Symbol)

let id = Symbol("Hola")
let id2 = "Hola"

console.log(id === id2)
console.log(id, id2)
console.log(typeof id, typeof id2)

const NOMBRE  = Symbol()

const persona = {
    [NOMBRE]: "Juan"
}

console.log(persona)

persona.NOMBRE = "Pedro"
console.log(persona)
