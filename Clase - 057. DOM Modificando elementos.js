const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure")

$newCard.innerHTML = `

<img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" alt="People">
<figcaption>People</figcaption>

`


$newCard.classList.add("card")
$cards.insertAdjacentElement("beforeend", $newCard)