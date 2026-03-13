console.log(window)
let texto = "Hola Mundo, soy un texto en una variable"

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

// hablar(texto)