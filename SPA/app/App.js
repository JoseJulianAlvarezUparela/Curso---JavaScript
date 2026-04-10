import { Header } from "./Components/header.js";
import { Loader } from "./Components/Loader.js"; 
import { Main } from "./Components/main.js";
import { Router } from "./Components/Router.js";

export function App () {
    const $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header())
    $root.appendChild(Main())
    $root.appendChild(Loader())

    Router()
}