function holaMundo () {
    alert("Este es un hola mundo de js")
    console.log(holaMundo)
}

const $EventoSemantico = document.getElementById("Evento-Semantico"),
      $EventoMultiple = document.getElementById("Evento-Multiple");

// $EventoSemantico.onclick = holaMundo()
$EventoSemantico.onclick = function () {
    alert("");
    holaMundo();
    alert("Hola desde un manejador de eventos semántico");
}