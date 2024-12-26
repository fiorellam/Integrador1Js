// 1. Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10
// libros. Cada libro debe tener las siguientes propiedades: ✓ id (número) ✓ título (string), ✓ autor (string), año (número), género (string),disponible (booleano).
let libros = [   
    { id: 1, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", anio: 1997, genero: "Fantasia, Aventura", disponible: true },
    { id: 2, titulo: "Harry Potter y la camara secreta", autor: "J.K. Rowling", anio: 1998, genero: "Fantasia, Aventura", disponible: true },
    { id: 3, titulo: "Harry Potter y el prisionero de Azkaban", autor: "J.K. Rowling", anio: 2002, genero: "Comedia", disponible: true},
    { id: 4, titulo: "Harry Potter y el caliz de fuego", autor: "J.K. Rowling", anio: 2001, genero: "Fantasia, Aventura", disponible: true },
    { id: 5, titulo: "Harry Potter y la Orden del Fenix", autor: "J.K. Rowling", anio: 2003, genero: "Ciencia Ficcion", disponible: true},
    { id: 6, titulo: "Harry Potter y el misterio de los 5 principes",autor: "J.K. Rowling",anio: 2005,genero: "Comedia",disponible: false},
    { id: 7, titulo: "Harry Potter y las reliquias de la muerte",autor: "J.K. Rowling",anio: 2007,genero: "Fantasia, Aventura",disponible: true},
    { id: 8, titulo: "El ladron del rayo 2", autor: "Rick Riordan", anio: 2005, genero: "Fantasia, Aventura", disponible: true },
    { id: 9, titulo: "El mar de los 5 monstruos", autor: "Rick Riordan", anio: 2006, genero: "Ciencia Ficcion", disponible: true },
    { id: 10, titulo: "La maldicion del titan", autor: "Rick Riordan", anio: 2004, genero: "Fantasia, Aventura", disponible: true}
];
// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:id (número) ✓ nombre (string) ✓ email (string) ✓ librosPrestados (array de ids de libros).
let usuarios = [
    {id: 1, nombre: "Fiorella Rodriguez", email: "FIORELLAROMA98@GMAIL.COM", librosPrestados: [1231, 1232, 10]},
    {id: 2, nombre: "Constanza Riveros", email: "COTI@GMAIL.COM", librosPrestados: [1233, 1234]},
    {id: 3, nombre: "Giselle Rastenis", email: "GISELLE@GMAIL.COM",librosPrestados: [1235, 1236]},
    {id: 4, nombre: "Juan Perez", email: "JP@GMAIL.COM", librosPrestados: [1237, 1238]},
    {id: 5, nombre: "Pedro Escamoso", email: "PEDRO@GMAIL.COM", librosPrestados: [1239, 12310]}
];
const prompt = require('prompt-sync')();
// 2. Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
function agregarLibro(id, titulo, autor, anio, genero){
    console.log('Ingrese los datos del libro a ingresar: ')
    id = libros.length + 1;
    titulo = prompt('Título: ');
    autor = prompt('Autor: ');
    anio = parseInt(prompt('Año de publicación: '));
    genero = parseInt(prompt('Género: '));
    let nuevoLibro = {id, titulo, autor, anio, genero, disponible: true}
    libros.push(nuevoLibro)
    console.log(`El libro ${nuevoLibro.titulo} fue añadido`);
};

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor){
    criterio = prompt('Por cual criterio quiere buscar el libro (titulo, autor, genero)?: ');
    criterio = criterio.toLowerCase();
    let resultado = [];
    if(criterio != "titulo" && criterio != "autor" && criterio != "genero"){
        console.log("El criterio no es valido");
    } else{
        valor = prompt(`Ingrese el ${criterio} del libro: `);
        valor = valor.toLowerCase();
        for(let i =0 ; i < libros.length; i++){
            if(criterio == 'titulo' && libros[i].titulo.toLowerCase() == valor.toLowerCase()){
                resultado.push(libros[i]);
            }
            if(criterio == 'autor' && libros[i].autor.toLowerCase() == valor.toLowerCase()){
                resultado.push(libros[i]);
            }
            if(criterio == 'genero' && libros[i].genero.toLowerCase() == valor.toLowerCase()){
                resultado.push(libros[i]);
            }
        }
        if(resultado != null){
            console.log("El libro fue encontrado", resultado);
        } else {
            console.log("El libro no fue encontrado");
        }
    }
};

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja
// (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio){
    criterio = prompt('Por cual criterio quiere ordenar los libros(titulo o anio)?: ');
    criterio = criterio.toLowerCase()
    if(criterio != "titulo" && criterio != "anio" ){
        console.log("El criterio no es valido");
    } else{
        for(let i = 0 ; i < libros.length; i++){
            for(let j = 0; j < libros.length -i - 1; j++){
                let libroActual = libros[j];
                let libroSiguiente = libros[j + 1];
                if(criterio == 'titulo'){
                    if((libroActual.titulo.toLowerCase() > libroSiguiente.titulo.toLowerCase())){
                        let temp = libros[j];
                        libros[j] = libros[j+1];
                        libros[j+1] = temp;
                    }
                } else if(criterio == 'anio'){
                    if((libroActual.anio > libroSiguiente.anio)){
                        let temp = libros[j];
                        libros[j] = libros[j+1];
                        libros[j+1] = temp;
                    }
                }
            }
        }
        console.log(libros)
    }
};

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro
function borrarLibro(id){
    id = prompt('Ingrese el ID del libro que desea eliminar: ')
    let indice = libros.findIndex(libro => {
        return libro.id == id;
    });
    let libroEliminado;
    if(indice != -1){
        libroEliminado = libros.splice(indice, 1);
        console.log("El libro que fue eliminado es: ", libroEliminado);
    } else {
        console.log(`El libro que intentas eliminar, no existe`);
    }
};

// 3. Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nombre, email){
    nombre = prompt('Nombre: ');
    email = prompt('Email: ');
    let id = usuarios.length + 1; // Se define la variable id que nos permita ir agregando a cada nuevo usuario
    let nuevoUsuario = {id, nombre, email} 
    usuarios.push(nuevoUsuario) // Se procede a utilizar el metodo .push() que nos permite agregar un nuevo elemento al final del array 
    console.log("El usuario", nuevoUsuario, "fue creado exitosamente"); // Se imprime al nuevo usuario en consola
};

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
function mostrarTodosLosUsuarios(){
    usuarios.join() // Se utiliza el metodo .join() que nos permite combinar todos los elementos de un array en una unica cadena
    console.log(usuarios); 
}

// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(email){
    email = prompt('Ingrese el email del usuario que desea buscar: ').toUpperCase();
    let buscandoUsuario = usuarios.find(usuario => usuario.email.toUpperCase() == email);
    // Se procede a utilizar el metodo .find() con el objeto de buscar un elemento dentro del arreglo que cumpla con determinada condicion
    // Se utiliza el condicional if para definir las condiciones e imprimir los resultados 
    if(buscandoUsuario){
        console.log(`El usuario encontrado es: ${buscandoUsuario.nombre}`); 
    }else{
        console.log(`El usuario no ha sido encontrado`); 
    }
};

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario(nombre, email){
    nombre = prompt('Ingrese el nombre del usuario: ').toLowerCase();
    email = prompt('Ingrese el email: ').toLowerCase();
    let indice = usuarios.findIndex(usuario => usuario.nombre.toLowerCase() == nombre && usuario.email.toLowerCase() == email)
    // Se utiliza el metodo .findIndex() que nos permita localizar la posicion especifica de un elemento segun una condicion definida
    if(indice == -1){
    console.log(`No existe un usuario con ese Email`); 
    }else{
        usuarios.splice(indice, 1) // Utilizamos el metodo .splice() que nos permite borrar el elemento del array
        console.log(`El usuario ${nombre} fue eliminado`)
    }
;}

// 4. Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario){
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

// 5. Reportes
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente
// información: ✓ Cantidad total de libros. ✓ Cantidad de libros prestados. ✓ Cantidad de libros por género. ✓ Libro más antiguo y más nuevo
function generarReporteLibro(){
    let cantidadTotalLibros = libros.reduce(acumulador=>{
        return acumulador + 1;
    }, 0)
    //Otra forma de resolverlo
    // let cantidadTotalLibros = libros.length;
    console.log("Cantidad total de libros: ", cantidadTotalLibros);

    let librosPrestados = libros.filter(libro => {
        return libro.disponible === false;
    });
    console.log("Cantidad de libros prestados: ", librosPrestados.length);

    let librosPorGenero = libros.reduce((acumulador, libro) => {
        // console.log('Acumulador ', acumulador);
        if(acumulador[libro.genero]){
            acumulador[libro.genero] += 1;
        } else {
            acumulador[libro.genero] = 1 ;
        }
        return acumulador;
    },{})
    console.log('Libros por genero: ', librosPorGenero);

    let libroMasNuevo = libros.reduce((masNuevo, libroActual)=>{
        return masNuevo.anio < libroActual.anio ? libroActual : masNuevo;
    });
    let libroMasAntiguo = libros.reduce((masAntiguo, libroActual)=>{
        return masAntiguo.anio < libroActual.anio ? masAntiguo : libroActual;
    });
    console.log("Libro mas nuevo: " , libroMasNuevo);
    console.log("Libro mas antiguo: ", libroMasAntiguo);
}

// 6. Identificación Avanzada de libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra
// (no títulos que contengan números ni otros caracteres).
// b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
function librosConPalabrasEnTitulo(){
const onlyWords = /^[^\d]+$/; // Se define la expresion regular para que solo reconozca palabras
let titulosSoloPalabras = libros.filter(libro =>
    onlyWords.test(libro.titulo) // Utilizando los metodos .filter y .test para poder filtrar y obtener la condicion requerida
)
console.log(titulosSoloPalabras); 
}

// 7. Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// ✓ Promedio de años de publicación de los libros. ✓ Año de publicación más frecuente.  ✓ Diferencia en años entre el libro más antiguo y el más nuevo
function calcularEstadisticas(){
    let sumaAnios = libros.reduce((suma, libro) => {
        return suma + libro.anio;
    }, 0 )

    let cantidadLibros = libros.length;
    let promedio = Math.round(sumaAnios / cantidadLibros);
    console.log('Promedio de anios de publicacion', promedio);

    let librosAniosFrecuencias = libros.reduce((acumulador, libro) => {
        if(acumulador[libro.anio]){
            acumulador[libro.anio] += 1;
        } else {
            acumulador[libro.anio] = 1;
        }
        return acumulador;
    }, {});

    let propiedades = [];
    for(let propiedad in librosAniosFrecuencias){
        propiedades.push(propiedad);
    }

    let max = 0;
    let anioFrecuente = 0;
    for(let i = 0; i < propiedades.length; i++){
        let clave = propiedades[i];
        // console.log(librosAniosFrecuencias[clave]);
        //Math.max toma dos o mas numeros y devuelve el mas grande entre ellos
        max = Math.max(max, librosAniosFrecuencias[clave]);

        if(librosAniosFrecuencias[clave] === max){
            anioFrecuente = clave;
        }
    }

    console.log("El anio mas frecuente fue: ", anioFrecuente);

    let anios = libros.map(libro => {
        return libro.anio;
    });

    let anioMasAntiguo = anios[0];
    let anioMasNuevo = anios[0];

    for(let i = 1; i < anios.length; i++){
        anioMasAntiguo = Math.min(anioMasAntiguo, anios[i]);
    }

    for(let i = 1; i < anios.length; i++){
        anioMasNuevo = Math.max(anioMasNuevo, anios[i]);
    }

    let diferenciaAnios = Math.abs(anioMasAntiguo - anioMasNuevo)
    console.log("Diferencia de anios: ", diferenciaAnios);

}

// 8. Manejo de Cadenas
// a) Crear una función normalizarDatos() que utilice métodos de strings para:

function normalizarDatos(){
    
//✓ Convertir todos los títulos a mayúscula. 
    
    libros.map(function(libro){
        let libroMayuscula = libro.titulo.toUpperCase(); // Se utiliza el metodo .toUpperCase() que nos permite convertir los caracteres de la cadena a mayuscula 
        console.log(libroMayuscula);

//✓ Eliminar espacios en blanco al inicio y final de los nombres de autores. 

    let autoresSinEspacios = libro.autor.trim(); // Ultilizamos el metodo .trim() para eliminar los espacios al principio y al final de la cadena de texto
    console.log(autoresSinEspacios); 

    })

// ✓ Formatear los emails de los usuarios a minúsculas.

usuarios.map(function(usuario){
    let mailMinuscula = usuario.email.toLowerCase(); // Se procedio a utilizar el metodo .toLowerCase() para convertir los caracteres de la cadena a minuscula 
    console.log(mailMinuscula);  
    })
};


// 9. Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
function menuPrincipal() {
    console.log(`
    *** Menú Principal ***
    1. Gestionar Libros
    2. Gestionar Usuarios
    3. Gestionar Préstamos
    4. Obtener Reportes
    5. Identificación de Libros
    6. Obtener Estadísticas
    7. Normalizar Datos
    `);

    let opcionMenuPrincipal = parseInt(prompt('Por favor, ingrese la opción deseada: '));

    switch (opcionMenuPrincipal) {
        case 1:
            console.log(`
            *** Gestión de Libros ***
            1. Agregar un Libro
            2. Buscar un Libro
            3. Ordenar Libros Alfabéticamente
            4. Eliminar un Libro
            `);

            let opcionLibros = parseInt(prompt('Seleccione la acción que desea realizar: '));

            switch (opcionLibros) {
                case 1:
                    agregarLibro();
                    break;
                case 2:
                    buscarLibro();
                    break;
                case 3:
                    ordenarLibros();
                    break;
                case 4:
                    borrarLibro();
                    break;
                default:
                    manejarOpcionInvalida();
            }
            break;

        case 2:
            console.log(`
            *** Gestión de Usuarios ***
            1. Registrar un Nuevo Usuario
            2. Mostrar Todos los Usuarios
            3. Buscar un Usuario por Email
            4. Borrar un Usuario por Nombre y Email
            `);

            let opcionUsuarios = parseInt(prompt('Seleccione la acción que desea realizar: '));

            switch (opcionUsuarios) {
                case 1:
                    registrarUsuario();
                    break;
                case 2:
                    mostrarTodosLosUsuarios();
                    break;
                case 3:
                    buscarUsuario();
                    break;
                case 4:
                    borrarUsuario();
                    break;
                default:
                    manejarOpcionInvalida();
            }
            break;

        case 3:
            console.log(`
            *** Sistema de Préstamos ***
            1. Prestar un Libro
            2. Devolver un Libro
            `);

            let opcionPrestamos = parseInt(prompt('Seleccione la acción que desea realizar: '));

            switch (opcionPrestamos) {
                case 1:
                    prestarLibro();
                    break;
                case 2:
                    devolverLibro();
                    break;
                default:
                    manejarOpcionInvalida();
            }
            break;
        
            case 4:
                generarReporteLibro();
                break;

            case 5:
                librosConPalabrasEnTitulo();
                break;

            case 6:
                calcularEstadisticas();
                break;

            case 7:
                normalizarDatos();
                break;

        default:
            console.log('Opción inválida. Por favor, seleccione una opción válida del menú principal.');
            menuPrincipal();
    }

    function manejarOpcionInvalida() {
        console.log(`
        Opción no válida. ¿Qué desea hacer?
        1. Volver al Menú Principal
        2. Cancelar la Operación
        `);

        let opcion = parseInt(prompt('Ingrese su opción: '));

        switch (opcion) {
            case 1:
                menuPrincipal();
                break;
            case 2:
                console.log('Operación cancelada.');
                break;
            default:
                console.log('Entrada inválida. Operación cancelada automáticamente.');
        }
    }
};


menuPrincipal();
// 10. Comentando mi código
// a) Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código.
// b) Deberán seccionar el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.