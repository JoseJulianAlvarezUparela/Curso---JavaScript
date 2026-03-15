function holaMundo(){
    console.log("Hola Mundo")
    console.log(Event)
}


function saludar(nombre = "No tienes nombre"){
    alert(`Hola ${nombre}`)
}

const $eventoSemantico = document.getElementById("Evento-Semantico"),
    $eventoMultiple = document.getElementById("Evento-Multiple"),
    $RemoverEvento = document.getElementById("Evento-Remover")

$eventoSemantico.onclick = holaMundo
$eventoSemantico.onclick = function(e) {
    alert("Hola, soy un manejador de eventos semantico")
    console.log(e)
    console.log(Event)
}

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", (e) => {
    alert("Manejador de eventos multiples")
    console.log(e)
    console.log(e.type)
    console.log(e.target)
});

$eventoMultiple.addEventListener("click", () => {
    saludar()
    saludar("Lucia")
})

const removerDobleClick = (e) => {
    alert(`Removiendo  el evento de tipo ${e.type}`)
    console.log(e)
    $RemoverEvento.removeEventListener("dblclick", removerDobleClick);
    $RemoverEvento.disabled = true;
}

$RemoverEvento.addEventListener("dblclick", removerDobleClick)
