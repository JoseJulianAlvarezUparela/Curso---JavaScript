// AJAX: API Fetch + Async-Await con JSONPlaceholder

(async () => {
    // Función asincrónica para obtener usuarios
    async function obtenerUsuarios() {
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }
            
            const usuarios = await respuesta.json();
            console.log('Usuarios obtenidos:', usuarios);
            mostrarUsuarios(usuarios);
            
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    }

    // Función para mostrar usuarios en el DOM
    function mostrarUsuarios(usuarios) {
        const contenedor = document.getElementById('usuarios') || document.body;
        contenedor.innerHTML = '';
        
        usuarios.forEach(usuario => {
            const div = document.createElement('div');
            div.className = 'usuario';
            div.innerHTML = `<h3>${usuario.name}</h3><p>Email: ${usuario.email}</p>`;
            contenedor.appendChild(div);
        });
    }

    // Llamar a las funciones
    await obtenerUsuarios();
})();