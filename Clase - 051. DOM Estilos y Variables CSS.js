const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM).getPropertyValue("background-color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("padding", "10px 20px");
$linkDOM.style.setProperty("width", "fit-content");
$linkDOM.style.setProperty("border-radius", "10px");
$linkDOM.style.setProperty("font-family", "Arial, Helvetica, sans-serif");

$linkDOM.style.backgroundColor = "#00a7de";
$linkDOM.style.color = "#fff";

const $html = document.documentElement,
      $body = document.body;

let DarkColor = getComputedStyle($html).getPropertyValue("--color-terciario"),
    LightColor = getComputedStyle($html).getPropertyValue("--color-texto");

$body.style.backgroundColor = LightColor;
$body.style.color = DarkColor;

$html.style.setProperty("--color-terciario", LightColor);
