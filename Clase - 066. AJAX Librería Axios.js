(() => {
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment()
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log(res)
        let json = res.data;
        json.forEach(el => {
                const $li = document.createElement("li")
                $li.innerHTML = `             
                    ${el.name} --- ${el.email}  --- ${el.phone}
                `

                $axios.appendChild($li)

            });
    })
    .catch(err => {
        console.log(err.response)
        console.log(`Estamos en el catcch ${err}`)
        let message = err.response.statusText || "Ocurrio un error"
        $axios.innerHTML = `Error ${err.response.status}: ${message}`
    })
    .finally(
        console.log("Me ejcuto")
    )
})()