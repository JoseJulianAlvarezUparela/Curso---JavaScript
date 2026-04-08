export function PostCard(props) {

    let {date, slug, title} = props;    
    

    return `
        <article class="post-card"> 
            <img src="https://placeimg.dev/400x300/4F46E5" /alt=" ${title.rendered}" />
            <h2>${title.rendered}</h2>

            <p>
                <time datetime="${date}">${date}</time>
                <a href="#/${slug}">Ver publicación</a>
            </p>
        </article>
    `;
}