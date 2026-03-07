function cuadradoPromise(value){

    if (typeof value !== 'number') {
        return Promise.reject(`Error, el valor "${value}" no es un número`);
    }
    
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            valor: value,
            resultado: value * value
        })
    }, 0 | Math.random() * 500);
    })
}

cuadradoPromise(0)
.then((obj) => {
    console.log(obj);
    console.log('Inicia Promise');
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return obj;
})
.then(obj => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadradoPromise(2);
})
.then(obj => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadradoPromise(3);
})
.then(obj => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    return cuadradoPromise(4);
})
.then(obj => {
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
    console.log('Termina Promise');
})

.catch(error => {
    console.error('Error en promesa:', error);
});