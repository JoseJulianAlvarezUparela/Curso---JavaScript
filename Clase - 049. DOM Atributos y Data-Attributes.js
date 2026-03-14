console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang", "es-MX"));


const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("href", "https://youtube.com");
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel");

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.description)

$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");

console.log($linkDOM.dataset.description)

