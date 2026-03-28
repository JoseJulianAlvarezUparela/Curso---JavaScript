import api from "./Helpers/wp_api.js";
import ajax from "./Helpers/ajax.js"
import { title } from "./Components/Title.js";
import { Loader } from "./Components/Loader.js"; 

export function App () {
    const d = document,
    $root = d.getElementById("root");


    $root.appendChild(title())
    $root.appendChild(Loader())

    ajax ({
        url:"no-valida",
        cbSuccess: () => {
            
        }
    })

}