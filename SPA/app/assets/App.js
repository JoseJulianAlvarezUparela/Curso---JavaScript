import api from "./Helpers/wp_api.js";
import ajax from "./Helpers/ajax.js" 

export function App () {
    document.getElementById("root").innerHTML = `<h1>Hola Mundo</h1>`
    console.log(api)

    ajax({
        url: api.POST,
        cbSuccess: (posts) => {
            console.log(posts)
        }
    })
}