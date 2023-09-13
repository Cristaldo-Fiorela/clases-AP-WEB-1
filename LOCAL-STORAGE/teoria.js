// * Agregar elementos
const mascota = 'Donna';

                    // clave  | valor
localStorage.setItem('nombre', 'fiorela');
localStorage.setItem('nombreMascota', mascota);
localStorage.setItem('edad', 24);

// * Objetos y Arrays
const mentores = ['Ariel', 'Alexis', 'Fiorela'];
const alumnos = {
    cantidad: 19,
    curso: 'AP Web 01',
    activo: true
}

const mentoresString = JSON.stringify(mentores);
console.log(mentoresString);

const alumnosString = JSON.stringify(alumnos);
console.log(alumnosString);

localStorage.setItem('alumnos', alumnosString);
localStorage.setItem('mentores', mentoresString);
localStorage.setItem('mentores2', JSON.stringify(mentores));

// * Obtener los datos almacenados en local Storage
console.log('==== GET ITEM ===');
const miNombre = localStorage.getItem('nombre');
console.log(miNombre);

const miEdad = localStorage.getItem('edad');
console.log(miEdad);

const mentoresJSON = localStorage.getItem('mentores');
console.log(mentoresJSON);
console.log(JSON.parse(mentoresJSON));

const alumnosJSON = localStorage.getItem('alumnos');
console.log(alumnosJSON);
console.log(JSON.parse(alumnosJSON));

// * Borrar los datos almacenados en local Storage
localStorage.removeItem('nombre');
localStorage.removeItem('nombreMascota');
localStorage.removeItem('mentores2');

localStorage.clear();