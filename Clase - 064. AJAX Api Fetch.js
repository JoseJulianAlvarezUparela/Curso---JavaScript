(() => {
    const $Fetch = document.getElementById("Fetch")
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(
        res => {
            console.log("Respuesta")
            return res.ok ? res.json(): Promise.reject(res)
        }
    )

    .then((json) => {
        console.log(json)

        json.forEach(el => {
                const $li = document.createElement("li")
                $li.innerHTML = `             
                    ${el.name} --- ${el.email}  --- ${el.phone}
                `

                $fragment.appendChild($li)

            });

            $Fetch.appendChild($fragment)
    })
    
    .catch((error) => {
            console.log("Error");
            let message = xhr.statusText || "Ocurrio un error."
            $Fetch.innerHTML = `Error ${xhr.status}; ${message}`

    })
    
    .finally(() => {
            console.log("Me ejecutaré")
    })

})()