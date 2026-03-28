export default function fetchData(props) {
    let { url, cbSuccess } = props;

    fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err => {
            let message = err.statusText || "Ocurrió un error al acceder a la API";

            document.getElementById("root").innerHTML = `
                <div style="color:red; font-family:sans-serif;">
                    <h2>Error al cargar los datos</h2>
                    <p>${message}</p>
                    <p>Por favor, intenta nuevamente más tarde.</p>
                </div>
            `;

            console.log(err)
        });
}