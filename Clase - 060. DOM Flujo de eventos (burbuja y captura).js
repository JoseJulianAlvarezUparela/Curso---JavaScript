const $divsEventos = document.querySelectorAll(".eventos div")
console.log($divsEventos)

function flujoEventos(e) {
    console.log("hola")
}

console.log($divsEventos)

$divsEventos.forEach(div => {
    div.addEventListener("click", flujoEventos)
    div.addEventListener("click", flujoEventos, true)
})