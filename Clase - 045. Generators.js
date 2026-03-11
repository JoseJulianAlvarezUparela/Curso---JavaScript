function* iterable() {
    yield 'Hola';
    console.log('Hola Mundo');
    yield 'Mundo';
    yield '!';
}

let iterador = iterable();

for(let y of iterador) {
    console.log(y);
}

const arr = [...iterable()];
console.log(arr);

