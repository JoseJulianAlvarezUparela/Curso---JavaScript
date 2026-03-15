const $whatisDOM = document.getElementById("que-es")

let text = `El DOM (Document Object Model) es una interfaz de programación para los documentos HTML y XML. Proporciona una representación estructurada del documento como un árbol de nodos, donde cada nodo representa un elemento, atributo o texto del documento. El DOM permite a los desarrolladores acceder y manipular el contenido, la estructura y el estilo de un documento de manera dinámica utilizando lenguajes de programación como JavaScript. Con el DOM, puedes modificar el contenido de una página web, agregar o eliminar elementos, cambiar estilos y responder a eventos del usuario, lo que hace que las páginas web sean interactivas y dinámicas.`;

$whatisDOM.textContent = text;
$whatisDOM.style.textAlign = "center";
$whatisDOM.style.padding = "20px";
$whatisDOM.style.backgroundColor = "rgb(240, 240, 240)";
$whatisDOM.style.borderRadius = "10px";