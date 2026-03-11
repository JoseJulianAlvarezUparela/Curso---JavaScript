const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

const manejador = {
    set(obj, prop, valor) { 
        if(Object.keys(obj).indexOf(prop) === -1) {
            console.warn(`La propiedad ${prop} no existe en el objeto`);
            return false;
        }
        obj[prop] = valor;
        return true;
    }
}

const Jon = new Proxy(persona, manejador);
Jon.nombre = "Jon";
Jon.edad = 25;

console.log(Jon);