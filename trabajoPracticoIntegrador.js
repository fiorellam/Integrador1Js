// 1. Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10
// libros. Cada libro debe tener las siguientes propiedades: ✓ id (número) ✓ título (string), ✓ autor (string), año (número), género (string),disponible (booleano).
let libros = [   
    {
        id: 1231,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        anio: 1997,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1232,
        titulo: "Harry Potter y la cámara secreta",
        autor: "J.K. Rowling",
        anio: 1998,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1233,
        titulo: "Harry Potter y el prisionero de Azkaban",
        autor: "J.K. Rowling",
        anio: 1999,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1234,
        titulo: "Harry Potter y el cáliz de fuego",
        autor: "J.K. Rowling",
        anio: 2000,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1235,
        titulo: "Harry Potter y la Orden del Fénix",
        autor: "J.K. Rowling",
        anio: 2003,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1236,
        titulo: "Harry Potter y el misterio del príncipe",
        autor: "J.K. Rowling",
        anio: 2005,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1237,
        titulo: "Harry Potter y las reliquias de la muerte",
        autor: "J.K. Rowling",
        anio: 2007,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1238,
        titulo: "El ladrón del rayo",
        autor: "Rick Riordan",
        anio: 2005,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 1239,
        titulo: "El mar de los monstruos",
        autor: "Rick Riordan",
        anio: 2006,
        genero: "Fantasía, Aventura",
        disponible: true
    },
    {
        id: 12310,
        titulo: "La maldición del titán",
        autor: "Rick Riordan",
        anio: 2007,
        genero: "Fantasía, Aventura",
        disponible: true
    }
];
// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:id (número) ✓ nombre (string) ✓ email (string) ✓ librosPrestados (array de ids de libros).
let usuarios = [
    {
        id: 1,
        nombre: "Fiorella Rodriguez",
        email: "fiorellaroma98@gmail.com",
        librosPrestados: [1231, 1232]
    },
    {
        id: 2,
        nombre: "Constanza Riveros",
        email: "coti@gmail.com",
        librosPrestados: [1233, 1234]
    },
    {
        id: 3,
        nombre: "Giselle Rastenis",
        email: "giselle@gmail.com",
        librosPrestados: [1235, 1236]
    },
    {
        id: 4,
        nombre: "Juan Perez",
        email: "jp@gmail.com",
        librosPrestados: [1237, 1238]
    },
    {
        id: 5,
        nombre: "Pedro Escamoso",
        email: "pedro@gmail.com",
        librosPrestados: [1239, 12310]
    }
];