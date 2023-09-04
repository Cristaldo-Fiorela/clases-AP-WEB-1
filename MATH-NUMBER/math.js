// *  Trabaja con operaciones matematicas

let resultado;

// Redondea un decimal hacia arriba o abajo del numero entero mas cercano.
// 9-5 => redondea para arriba
// 4-1 => redondea para abajo
console.log("=== ROUND ===");
resultado = Math.round(2.1); // 2
resultado = Math.round(2.6); // 3
resultado = Math.round(2.5);
resultado = Math.round(2.2);
resultado = Math.round(2.4);

console.log(resultado);

// Redondea siempre al numero entero de arriba
console.log("=== CEIL ===");
resultado = Math.ceil(2.1);
console.log(resultado);

// Redondea siempre al numero entero de abajo
console.log("=== FLOOR ===");
resultado = Math.floor(2.8);
console.log(resultado);

// Raiz cuadrada
console.log("=== SQRT ===");
resultado = Math.sqrt(4);
resultado = Math.sqrt(9);
resultado = Math.sqrt(81);
resultado = Math.sqrt(144);

console.log(resultado);

// Busca el numero min
console.log("=== MIN ===");
resultado = Math.min(3, 5, 1, 12, -3)
console.log(resultado);

// Busca el numero max
console.log("=== MAX ===");
resultado = Math.max(3, 5, 1, 12, -3)
console.log(resultado);

// min y max con arrays => spread operator
console.log("=== CON ARRAY ===");
let arrayNumber = [3, 5, 1, 12, -3];
console.log(arrayNumber);
console.log(...arrayNumber);

resultado = Math.max(...arrayNumber);

console.log(resultado);

// Aleatorios
console.log("=== RANDOM ===");
// rango (inclusive) 0 a 1 (excluido)
resultado = Math.random();
console.log(resultado);

// indicando un rango a Random
resultado = Math.floor(Math.random() * 30); // 0 al 29
resultado = Math.ceil(Math.random() * 30); // 1 al 30
console.log(resultado);