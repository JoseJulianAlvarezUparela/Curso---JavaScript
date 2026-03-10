// const ws = new WeakSet();
// // console.log(ws); // WeakSet { <items unknown> }
// let valor1 = { "valor": 1 };
// let valor2 = { "valor": 2 };
// let valor3 = { "valor": 3 };

// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);

// console.log(ws.has(valor1)); // true
// console.log(ws.has(valor2));

// ws.delete(valor1);
// console.log(ws)


// setInterval(() => console.log(ws), 1000);


// setTimeout(() => {
//     valor2 = null;
//     valor3 = null;
// }, 2000);




const wm = new WeakMap();

let llave1 = { "llave": 1 };
let llave2 = { "llave": 2 };
let llave3 = { "llave": 3 };

wm.set(llave1, "valor1");
wm.set(llave2, "valor2");

console.log(wm);

