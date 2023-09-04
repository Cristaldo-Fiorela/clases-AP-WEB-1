// *  Trabaja con numeros

const numero1 = "20";
const numero2 = "20.200";
const numero3 = "Veinte";
const numero4 = 20.2;
const numero5 = 20;

console.log(numero1);

// convierte el dato recibido a tipo number. Devuelve solo numeros enteros
console.log("=== PARSEINT ===");
console.log(Number.parseInt(numero1));
console.log(Number.parseInt(numero2));
console.log(Number.parseInt(numero3));

// convierte el dato recibido a tipo number. Trabaja con numeros enteros y decimales.
console.log("=== PARSEFLOAT ===");
console.log(Number.parseFloat(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseFloat(numero3));

// Chequea si el dato recibido es un numero entero.
console.log("=== isInteger ===");
console.log(Number.isInteger(numero1)); // false por String
console.log(Number.isInteger(numero4)); // false por decimal
console.log(Number.isInteger(numero5)); // true, es entero

// Chequea si el dato recibido es NaN
// Si no es number ni puede ser convertido a number = NaN
console.log("=== isNaN ===");
// NaN = Not a Numero
// no es un numero?
console.log(isNaN(numero1)); // false
console.log(isNaN(numero2)); // false
console.log(isNaN(numero3)); // true

// Devuelve un String, "corta" los decimales
console.log("=== toFixed ===");
const PI = Math.PI;
console.log(PI);

const fixedNum = PI.toFixed(2);
console.log(fixedNum);
console.log(typeof fixedNum);

const fixedNum2 = new Number(PI.toFixed(2));
const fixedNum3 = parseFloat(PI.toFixed(2));
console.log(fixedNum2);
console.log(fixedNum3);