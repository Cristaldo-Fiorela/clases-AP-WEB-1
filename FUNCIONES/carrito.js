let producto;
let producto2;
let producto3;
let producto4;
let total;

const cliente = {
    nombre: 'Juan',
    presupuesto:500,
    carrito : []
}

const { carrito } = cliente

console.log(cliente)

producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
}
producto2 = {
    nombre: "Teclado",
    precio: 100,
    disponible: true,
}
producto3 = {
    nombre: "mouse",
    precio: 20,
    disponible: true,
}
producto4 = {
    nombre: "Auriculares",
    precio: 150,
    disponible: true,
}

carrito.push(producto2.precio, producto.precio, producto3.precio);
console.log(carrito);

function sumarCarrito(array) {
    let resultado = 0;
    for(let numero of array) {
        resultado += numero;
    }
    return resultado;
}

total = sumarCarrito(carrito);
console.log(total);

let arrayEjmplo = [4, 50]
let resultado2 = sumarCarrito(arrayEjmplo);
console.log(resultado2);

function calcularImpuesto(hola) {
    return hola * 1.15;
}

const totalPagar = calcularImpuesto(total);
console.log(totalPagar);