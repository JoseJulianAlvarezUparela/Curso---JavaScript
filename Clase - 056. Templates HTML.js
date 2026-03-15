const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
        },
        {
            title: "Animales",
            img: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
        },
        {
            title: "Arquitectura",
            img: "https://images.pexels.com/photos/271627/pexels-photo-271627.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"   
        },
        {
            title: "Gente",
            img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"   
        },
    ]


cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title


    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone)

})

$cards.appendChild($fragment)