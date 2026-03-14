const $card = document.querySelector(".card");

console.log($card.className); // Devuelve una cadena con el valor del atributo class
console.log($card.classList); // Devuelve una colección de DOMTokenList con las clases del elemento

console.log($card.classList.contains("card")); // Devuelve true si el elemento tiene la clase especificada
console.log($card.classList.contains("active")); // Devuelve false si el elemento no tiene la clase especificada

$card.classList.toggle("rotate"); // Agrega la clase "rotate" si no existe, o la elimina si ya existe
