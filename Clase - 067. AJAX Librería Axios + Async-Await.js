(() => {
    const $axios = document.getElementById("axios-Async");
    
    (async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            
            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            
            const json = await res.json();
            
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
                $axios.appendChild($li);
            });
        } catch (err) {
            console.log(err);
            $axios.innerHTML = `Error: ${err.message}`;
        } finally {
            console.log("Me ejecuto");
        }
    })();
})();