// 1. Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10
// libros. Cada libro debe tener las siguientes propiedades: ✓ id (número) ✓ título (string), ✓ autor (string), año (número), género (string),disponible (booleano).
let libros = [   
    { id: 1, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", anio: 1997, genero: "Fantasía, Aventura", disponible: true },
    { id: 2, titulo: "Harry Potter y la cámara secreta", autor: "J.K. Rowling", anio: 1998, genero: "Fantasía, Aventura", disponible: true },
    { id: 3, titulo: "Harry Potter y el prisionero de Azkaban", autor: "J.K. Rowling", anio: 2002, genero: "Fantasía, Aventura", disponible: true},
    { id: 4, titulo: "Harry Potter y el cáliz de fuego", autor: "J.K. Rowling", anio: 2001, genero: "Fantasía, Aventura", disponible: true },
    { id: 5, titulo: "Harry Potter y la Orden del Fénix", autor: "J.K. Rowling", anio: 2003, genero: "Fantasía, Aventura", disponible: true},
    { id: 6, titulo: "Harry Potter y el misterio del príncipe",autor: "J.K. Rowling",anio: 2005,genero: "Fantasía, Aventura",disponible: true},
    { id: 7, titulo: "Harry Potter y las reliquias de la muerte",autor: "J.K. Rowling",anio: 2007,genero: "Fantasía, Aventura",disponible: true},
    { id: 8, titulo: "El ladrón del rayo", autor: "Rick Riordan", anio: 2005, genero: "Fantasía, Aventura", disponible: true },
    { id: 9, titulo: "El mar de los monstruos", autor: "Rick Riordan", anio: 2006, genero: "Fantasía, Aventura", disponible: true },
    { id: 10, titulo: "La maldición del titán", autor: "Rick Riordan", anio: 2004, genero: "Fantasía, Aventura", disponible: false}
];
// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:id (número) ✓ nombre (string) ✓ email (string) ✓ librosPrestados (array de ids de libros).
let usuarios = [
    {id: 1, nombre: "Fiorella Rodriguez", email: "fiorellaroma98@gmail.com", librosPrestados: [1231, 1232, 10]},
    {id: 2, nombre: "Constanza Riveros", email: "coti@gmail.com", librosPrestados: [1233, 1234]},
    {id: 3, nombre: "Giselle Rastenis", email: "giselle@gmail.com",librosPrestados: [1235, 1236]},
    {id: 4, nombre: "Juan Perez", email: "jp@gmail.com", librosPrestados: [1237, 1238]},
    {id: 5, nombre: "Pedro Escamoso", email: "pedro@gmail.com", librosPrestados: [1239, 12310]}
];
// 2. Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
function agregarLibro(id, titulo, autor, anio, genero){
    let nuevoLibro = {id, titulo, autor, anio, genero, disponible: true}
    libros.push(nuevoLibro)
    // console.log(libros);
}
// agregarLibro(1, "titulo", "autor", 1990, "Fnnati" );

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor){
    criterio = criterio.toLowerCase();
    console.log(criterio, valor);
    for(let i =0 ; i < libros.length; i++){
        if(criterio == 'titulo' && libros[i].titulo.toLowerCase() == valor.toLowerCase()){
            return libros[i];
        }
        if(criterio == 'autor' && libros[i].autor.toLowerCase() == valor.toLowerCase()){
            return libros[i];
        }
        if(criterio == 'genero' && libros[i].genero.toLowerCase() == valor.toLowerCase()){
            return libros[i];
        }
    }
    return -1;
}
// console.log(buscarLibro("titulo", "Hay Potter y la piedra filosofal"));

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja
// (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio){
   criterio = criterio.toLowerCase()
    for(let i = 0 ; i < libros.length; i++){
        for(let j = 0; j < libros.length -i - 1; j++){
            let libroActual = libros[j];
            let libroSiguiente = libros[j + 1];
            if(criterio == 'titulo'){
                if((libroActual.titulo.toLowerCase() > libroSiguiente.titulo.toLowerCase())){
                    // console.log(libros[j].titulo.toLowerCase(), libros[j+1].titulo.toLowerCase());
                    let temp = libros[j];
                    // console.log('MAS LARGO', libroMasLargo);
                    libros[j] = libros[j+1];
                    libros[j+1] = temp;
                }
            } else if(criterio == 'anio'){
                if((libroActual.anio > libroSiguiente.anio)){
                    // console.log(libros[j].anio.toLowerCase(), libros[j+1].anio.toLowerCase());
                    let temp = libros[j];
                    // console.log('MAS LARGO', libroMasActual);
                    libros[j] = libros[j+1];
                    libros[j+1] = temp;
                }
            }
        }
    }
    // console.log(libros);
}
// ordenarLibros('titulo');
// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro
function borrarLibro(id){
    let indice = libros.findIndex(libro => {
        return libro.id == id;
    });
    
    libros.splice(indice, 1);
    console.log(libros);
}
// borrarLibro(2);

// 3. Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nombre, email){
    let id = usuarios.length + 1; 
    let nuevoUsuario = {id, nombre, email}
    usuarios.push(nuevoUsuario)
   //console.log(nuevoUsuario); 
}
//registrarUsuario("Pablo Ramirez", "juanr@gmail.com");

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
function mostrarTodosLosUsuarios(){
usuarios.join() 
return usuarios; 

}
//console.log(mostrarTodosLosUsuarios(usuarios)); 

// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(email){
    let buscandoUsuario = usuarios.find(usuario => usuario.email == email)

       if(buscandoUsuario){
            console.log(`El usuario encontrado es: ${buscandoUsuario.nombre}`); 
       }
       else{
           console.log(`El usuario no ha sido encontrado`); 

       }     
    
}
//console.log(buscarUsuario('giselle@gmail.com')); 

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario(nombre, email){
    let indice = usuarios.findIndex(usuario => usuario.nombre == nombre && usuario.email == email)
    if(indice == -1){
    console.log(`No existe un usuario con ese Email`); 
    }
    else{
        usuarios.splice(indice, 1)
        console.log(`El usuario ${nombre} fue eliminado`)
    }


}
borrarUsuario("Giselle Rastenis", "giselle@gmail.com"); 

// 4. Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario){
    //libroPrestado = false;
    idLibro = parseInt(prompt('Ingrese el id del libro: '));
    let findBook = libros.find(libro => libro.id == idLibro);
    if(!findBook){
        console.log(`El id ${idLibro} no existe`);
        return;
    };

    if(findBook.disponible == false){
        console.log(`El libro ${findBook.titulo} no se encuentra disponible`);
        libroPrestado = false;
        return;
    }else if(findBook.disponible == true) {
        findBook.disponible = false
        libroPrestado = true;
    };

    idUsuario = parseInt(prompt('Ingrese el id del usuario: '));
    let findUser = usuarios.find(usuario => usuario.id == idUsuario);
    if(!findUser){
        console.log(`No existe un usuario con este id`);
        libroPrestado = false;
    }else{
        findUser.librosPrestados.push(findBook.id)
        console.log(`El usuario ${findUser.nombre} tomó prestado el libro ${findBook.titulo}`);
    };
};

// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario){
 //Declaro la variable libroDevuelto como false para al final poder imprimir el mensaje correcto
    idLibro = parseInt(prompt('Ingrese el ID del libro a devolver: '));
    let encontrarLibro = libros.find(libro => libro.id == idLibro);
    if(!encontrarLibro){
        console.log(`El id ${idLibro} no existe`);
        return;
    }else if(encontrarLibro.disponible === true){
        console.log(`El libro ${encontrarLibro.titulo} no ha sido prestado`);
        return;
    }else{
        encontrarLibro.disponible = true;
    };

    idUsuario = parseInt(prompt('Ingrese el ID del usuario: '));
    let encontrarUsuario = usuarios.find(usuario => usuario.id === idUsuario);
    if(!encontrarUsuario){
        console.log(`El id ${idUsuario} no existe`);
        return;}
    
    let bookIndex = encontrarUsuario.librosPrestados.indexOf(idLibro)
    if(bookIndex === -1){
        console.log(`El usuario ${encontrarUsuario.nombre} no tomò prestado el libro ${encontrarLibro.titulo}`);
        return;
    }else if(encontrarUsuario && bookIndex){
        encontrarUsuario.librosPrestados.splice(bookIndex, 1)
    };
    
    console.log(`El usuario ${encontrarUsuario.nombre} devolvió el libro ${encontrarLibro.titulo}`);
};
//devolverLibro();

// 5. Reportes
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente
// información: ✓ Cantidad total de libros. ✓ Cantidad de libros prestados. ✓ Cantidad de libros por género. ✓ Libro más antiguo y más nuevo
function generarReporteLibro(){

}

// 6. Identificación Avanzada de libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra
// (no títulos que contengan números ni otros caracteres).
// b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
function librosConPalabrasEnTitulo(){

}

// 7. Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// ✓ Promedio de años de publicación de los libros. ✓ Año de publicación más frecuente.  ✓ Diferencia en años entre el libro más antiguo y el más nuevo
function calcularEstadisticas(){

}

// 8. Manejo de Cadenas
// a) Crear una función normalizarDatos() que utilice métodos de strings para:
// ✓ Convertir todos los títulos a mayúsculas. ✓ Eliminar espacios en blanco al inicio y final de los nombres de autores. ✓ Formatear los emails de los usuarios a minúsculas.
function normalizarDatos(){

}

// 9. Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
function menuPrincipal(){

}

// 10. Comentando mi código
// a) Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código.
// b) Deberán seccionar el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.
