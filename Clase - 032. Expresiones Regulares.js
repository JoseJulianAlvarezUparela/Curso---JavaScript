let cadena = "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!";


let RxpReg = new RegExp("lorem", "i");
let RxpReg2 = /jose/i;


console.log(RxpReg.test(cadena));
console.log(RxpReg2.test(cadena));