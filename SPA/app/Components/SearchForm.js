export function SearchForm() {
    const $form = document.createElement("form"),
    $input = document.createElement("input")

    $form.classList.add("search-form")
    $input.name = "search"
    $input.type = "search"
    $input.placeholder = "Buscar..."
    $form.appendChild($input)

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!$input.value) return;
        location.hash = `#/search/${encodeURIComponent($input.value.trim())}`;
    });

    if (location.hash.includes("#/search/")) {
        $input.value = decodeURIComponent(location.hash.split("#/search/")[1]);
    }
    return $form;

}
