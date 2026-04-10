import api from "../Helpers/wp_api.js";
import { ajax } from "../Helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("posts"),
        $loader = d.querySelector(".loader");

    let { hash } = location;

    if ($loader) $loader.style.display = "block";
    $main.innerHTML = null;

    if (!hash || hash === "#/") {
        ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let html = "";
                posts.forEach((post) => (html += PostCard(post)));
                $main.innerHTML = html;
                if ($loader) $loader.style.display = "none";
            },
        });
    } else if (hash === "#/search") {
        $main.innerHTML = "<h2>SECTION SEARCH</h2>";
        if ($loader) $loader.style.display = "none";
    } else if (hash === "#/contact") {
        $main.innerHTML = "<h2>SECTION CONTACT</h2>";
        if ($loader) $loader.style.display = "none";
    } else {
        const slug = hash.slice(2);
        ajax({
            url: `${api.POST}?slug=${slug}&_embed`,
            cbSuccess: (post) => {
                const p = post[0];
                if (!p) {
                    $main.innerHTML = "<h2>No se encontro el post</h2>";
                    if ($loader) $loader.style.display = "none";
                    return;
                }
                const featured = p?._embedded?.["wp:featuredmedia"]?.[0];
                const img = featured?.source_url || "";
                const alt = featured?.alt_text || p.title.rendered;
                const imgHtml = img ? `<img src="${img}" alt="${alt}" />` : "";

                $main.innerHTML = `
                    <article class="post-page">
                        ${imgHtml}
                        <h2>${p.title.rendered}</h2>
                        <time datetime="${p.date}">${p.date}</time>
                        <section>${p.content.rendered}</section>
                    </article>
                `;
                if ($loader) $loader.style.display = "none";
            },
        });
    }

    w.scrollTo(0, 0);
}
