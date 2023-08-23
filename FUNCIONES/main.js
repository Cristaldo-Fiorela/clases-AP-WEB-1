// ? DECLARACION UNA FUNCION

function sumar() {
    console.log(2+ 2);
}

// ? EXPRESION DE FUNCION (function expression)
const sumar2 = function () {
    console.log(4 + 2);
}
// sumar2();
// sumar();

// ? FUNCIONES DEFAULT O NATIVA
// const nombre = prompt("Cual es tu nombre?");
// alert("Hola " + nombre);
//console.log(parseInt("20"));

// ? PARAMETROS Y FUNCIONES

function sumar3(a, b) { // son parametros
    console.log(a + b);
}

(a, b) => {
    console.log(a + b);
}
// sumar3(2, 3); // son argumentos
// sumar3(200, 323); 
// sumar3(2440, 32123);

function saludar( nombre, apellido ) {
    console.log(`Hola ${nombre} ${apellido}`);
    console.log("Hola " + nombre + " " + apellido );
}
//saludar("rolando", "distel");

// ? DEFINIR PARAMETROS DE DEFAULT

function saludar( nombre, apellido = '' ) {
    console.log(`Hola ${nombre} ${apellido}`);
}
//saludar("rolando");


// ? Comunicandose entre ellas
//iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');
    autenticarUsuario();
    historialUsuario();
}

function autenticarUsuario() {
    console.log('Autenticando...');
}

function historialUsuario() {
    console.log('Historial');
}

// ? RETURN y valores
function sumar4( a, b) {
    return a + b;
}

const resultado = sumar4(4, 4);
//console.log(resultado);

// ? ARROW

function sumar() {
    console.log(2+ 2);
}

let arrow = () => {
    console.log(4 + 2);
}

const arrow2 = () => console.log(4 + 2);
const arrow3 = (a, b) => console.log(a + b);
const arrow4 = nombre => console.log(`Hola ${nombre}`);

arrow();
arrow2();
arrow3(4, 2);
arrow4("Fiorela");

// ? FUNCIONES EN OBJETOS

const reproductor2 = {
    reproducir: function(nombre) {
        console.log(`Reproduciendo ${nombre}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id, nombre) {
        console.log(`Cancion encontrada que coincide con ${id}`);
        console.log(`Cancion ${nombre} borrada...`);
    }
}
let reproducir = (nombre) => console.log(`Reproduciendo ${nombre}`)

const reproductor = {
    nombreUsuario: 'Antonio',
    premium: true,
    reproducir: reproducir, 
    pausar: () => console.log('pausando...'),
    borrar: (id, nombre) => {
        console.log(`Cancion encontrada que coincide con ${id}`);
        console.log(`Cancion ${nombre} borrada...`);
    }
}

const netflix = {
    nombreUsuario: 'Antonio',
    premium: true,
    reproducir: reproducir(),
    pausar: () => console.log('pausando...'),
}

console.log(reproductor.nombreUsuario)
reproductor.pausar();
reproductor.borrar(13, 'Coldplay');
console.log(reproductor.reproducir('VIVA LA VIDA'));