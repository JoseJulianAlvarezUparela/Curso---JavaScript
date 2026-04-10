export function PostCard(props) {
    let { date, id, slug, title } = props;
    const featured = props?._embedded?.["wp:featuredmedia"]?.[0];
    const img = featured?.source_url || "";
    const alt = featured?.alt_text || title.rendered;
    const imgHtml = img ? `<img src="${img}" alt="${alt}" />` : "";

    return `
        <article class="post-card"> 
            ${imgHtml}
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${date}</time>
                <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
            </p>
        </article>
    `;
}
