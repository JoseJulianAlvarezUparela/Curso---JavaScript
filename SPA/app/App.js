import api from "./Helpers/wp_api.js";
import ajax from "./Helpers/ajax.js"
import { Header } from "./Components/header.js";
import { Loader } from "./Components/Loader.js"; 
import { Posts } from "./Components/Posts.js";
import {PostCard} from "./Components/PostCard.js"   

export function App () {
    const d = document,
    $root = d.getElementById("root");

    $root.appendChild(Header())
    $root.appendChild(Posts())
    $root.appendChild(Loader())

    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            let html = "";
            posts.forEach((post) => {
                html += PostCard(post);
            }) 
            d.querySelector(".loader").style.display = "none";
            d.getElementById("posts").innerHTML = html;
            console.log(posts)      
        },
    })
}