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

async function declarada() {
    try {
        console.log('Inicia Async Function');
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(4); 
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        console.log('Termina Async Function');
        console.log('------------------');

    } catch (error) {
        console.error('Error en función async:', error);
    }
}

declarada();

const expresada = async () => {
    try {
        console.log('Inicia Async Function');
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromise(4); 
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        console.log('Termina Async Function');

    } catch (error) {
        console.error('Error en función async:', error);
    }
}


expresada();












