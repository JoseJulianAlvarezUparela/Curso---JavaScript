let edad = 18

if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

console.log("----- Otro ejemplo -----")

if (edad < 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

console.log("----------")

let hora = 10
if (hora > 0 && hora <= 12) {                               // && = and
    console.log("Buenos días")  
} else if (hora > 12 && hora <= 18) {
    console.log("Buenas tardes")
}   else if (hora > 18 && hora <= 24) {
    console.log("Buenas noches")
}