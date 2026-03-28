export function Loader(){
    const $loader = document.createElement("img")
    $loader.src = "/SPA/app/assets/loader.svg"
    $loader.alt = "Cargando..."
    $loader.classList.add("loader")
    return $loader;
}