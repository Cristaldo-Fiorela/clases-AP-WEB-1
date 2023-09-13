// Selectores de DOM
const mensajeInput = document.getElementById('mensajeInput');
const agregarButton = document.getElementById('agregar');
const tarjetasContainer = document.getElementById('tarjetas');

// Eventos
agregarButton.addEventListener('click', () => {
    const mensaje = mensajeInput.value.trim();
    if (mensaje !== '') {
        crearTarjeta(mensaje);
        actualizarLocal();
        mensajeInput.value = '';
    }
});

window.addEventListener('load', () => {
    const tarjetasGuardadas = JSON.parse(localStorage.getItem('tarjetas'));

    tarjetasGuardadas.forEach(mensaje => {
        crearTarjeta(mensaje);
    });
})

// Funciones
function crearTarjeta(mensaje) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    const mensajeParrafo = document.createElement('p');
    tarjeta.classList.add('mensaje');

    mensajeParrafo.textContent = mensaje;

    const btnEliminar = document.createElement('span');
    btnEliminar.classList.add('eliminar');
    btnEliminar.textContent = 'Eliminar';

    btnEliminar.addEventListener('click', () => {
        tarjeta.remove();
        actualizarLocal();
    });

    tarjeta.appendChild(mensajeParrafo);
    tarjeta.appendChild(btnEliminar);
    tarjetasContainer.appendChild(tarjeta);
}

function actualizarLocal() {
    const tarjetas = [];
    const elementoP = document.querySelectorAll('.mensaje p');
    
    elementoP.forEach(parrafo => {
        tarjetas.push(parrafo.textContent);
    })

    localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
}