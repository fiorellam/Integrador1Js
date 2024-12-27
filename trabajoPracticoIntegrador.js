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
    let nuevoLibro = {id, titulo, autor, anio, genero, disponible: true} // Una vez teniendo todos los datos, de crea el objeto (nuevoLibro)
    libros.push(nuevoLibro) //Se agrega el libro al arreglo
    console.log(`El libro ${nuevoLibro.titulo} fue añadido`); //Se imprime un mensaje con ese nuevo libro
};

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor){
    criterio = criterio.toLowerCase(); //Se pasa a minusculas para no tener problemas de case sensitive
    let resultado = []; //Variable que irá guardando los libros que cumplan con el criterio
    if(criterio != "titulo" && criterio != "autor" && criterio != "genero"){ //Hacemos una validacion del criterio, si el usuario ingresa algo diferente, no debe ejecutarse la busqueda
        console.log("El criterio no es valido");
    } else{
        valor = valor.toLowerCase(); //Se convierte en minusculas
        for(let i =0 ; i < libros.length; i++){ //Recorremos el arreglo de libros
            //Dependiendo del criterio y si esa propiedad del objeto es igual al valor que esta buscando el usuario, entonces hacemos un push al arreglo de resultados
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
            console.log("El libro fue encontrado", resultado);//Si el resultado no es nulo, mostramos el resultado
        } else {
            console.log("El libro no fue encontrado"); //Si es nulo, mostramos que el libro no fue encontrado
        }
    }
};

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja
// (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio){
    criterio = criterio.toLowerCase() //Se pasa a minusculas
    if(criterio != "titulo" && criterio != "anio" ){ //Si el criterio no es valido, se muestra un mensaje en la terminal
        console.log("El criterio no es valido");
    } else{ //Si el criterio es valido, entonces ordenamos la lista de libros
        for(let i = 0 ; i < libros.length; i++){ //Se utilizan 2 for para poder ir comparando la propiedad del 1er objeto con el 2do
            for(let j = 0; j < libros.length -i - 1; j++){ 
                let libroActual = libros[j]; //Establecemos que el libro actual es el 1er objeto cuando i = 0
                let libroSiguiente = libros[j + 1]; //Establecemos que el libro siguiente es el 2do objeto cuando i = 0
                if(criterio == 'titulo'){ //Si el criterio de busqueda es por titulo
                    if((libroActual.titulo.toLowerCase() > libroSiguiente.titulo.toLowerCase())){ //Si el titulo del libro Actual es mayor que el de libroSiguiente
                        let temp = libros[j]; //Guardamos temporalmente el libroActual
                        libros[j] = libros[j+1]; // Ahora intercambiamos el valor libros[j] al siguiente libro
                        libros[j+1] = temp; //Y el siguiente libro ahora va a tener el valor actual
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
    let indice = libros.findIndex(libro => { //Se busca el indice del libro
        return libro.id == id;
    });
    let libroEliminado; //Tenemos una variable para guardar el libro eliminado
    if(indice != -1){ //Si se encuentra el indice
        libroEliminado = libros.splice(indice, 1); //Procemos a eliminar ese objeto en ese indice
        console.log("El libro que fue eliminado es: ", libroEliminado);
    } else { //Si no existe, solo indicamos que el libro que desea eliminarse no existe
        console.log(`El libro que intentas eliminar, no existe`);
    }
};

// 3. Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nombre, email){
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
    idLibro = parseInt(prompt('Ingrese el id del libro: ')); //Se pide el id al usuario
    let findBook = libros.find(libro => libro.id == idLibro); //Se busca el libro por id
    if(!findBook){ // Si no es encuentra, se muestra un mensaje al usuario
        console.log(`El id ${idLibro} no existe`);
        return;
    };
    if(findBook.disponible == false){ // Si el libro no esta disponnible
        console.log(`El libro ${findBook.titulo} no se encuentra disponible`); //Mostramos un mensaje de que no esta disponible
        libroPrestado = false;  //Mantenemos libro prestado como falso
        return;
    }else if(findBook.disponible == true) { //Si el libro esta disponible
        findBook.disponible = false 
        libroPrestado = true; 
    };

    idUsuario = parseInt(prompt('Ingrese el id del usuario: '));
    let findUser = usuarios.find(usuario => usuario.id == idUsuario); // Buscamos al usuario
    if(!findUser){ //Si no existe un usuario con ese id
        console.log(`No existe un usuario con este id`);
        libroPrestado = false;
    }else{ //Si existe ese usuario 
        findUser.librosPrestados.push(findBook.id) //Le agregamos a la lista de libros prestados el nuevo libro
        console.log(`El usuario ${findUser.nombre} tomó prestado el libro ${findBook.titulo}`);
    };
};

// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario){
 //Declaro la variable libroDevuelto como false para al final poder imprimir el mensaje correcto
    idLibro = parseInt(prompt('Ingrese el ID del libro a devolver: ')); //Solicitamos el id al usuario
    let encontrarLibro = libros.find(libro => libro.id == idLibro); //Buscamos el libro por id
    if(!encontrarLibro){//Si no se encuentra el libro
        console.log(`El id ${idLibro} no existe`); //Imprimimos este mensaje
        return;
    }else if(encontrarLibro.disponible === true){ //Si el libro esta disponible
        console.log(`El libro ${encontrarLibro.titulo} no ha sido prestado`); //Mostrmaos que el libro no ha sido prestado
        return;
    }else{
        encontrarLibro.disponible = true; 
    };

    idUsuario = parseInt(prompt('Ingrese el ID del usuario: ')); //Solicitamos el id del Usuario
    let encontrarUsuario = usuarios.find(usuario => usuario.id === idUsuario); //Buscamos al usuario por id
    if(!encontrarUsuario){ //Si no se encuentra el usuario
        console.log(`El id ${idUsuario} no existe`);
        return;}
    
    let bookIndex = encontrarUsuario.librosPrestados.indexOf(idLibro) //Obtenemos el indice del libro
    if(bookIndex === -1){ //Si no encontramos el libro
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
    let cantidadTotalLibros = libros.reduce(acumulador=>{ //Utilizamos reduce para tener una variable y acumular la cantidad de libros
        return acumulador + 1;
    }, 0)
    //Otra forma de resolverlo
    // let cantidadTotalLibros = libros.length;
    console.log("Cantidad total de libros: ", cantidadTotalLibros); // Imprimimos la cantidad de libros

    let librosPrestados = libros.filter(libro => { //Filtrammos la cantidad de libros disponibles
        return libro.disponible === false;
    });
    console.log("Cantidad de libros prestados: ", librosPrestados.length); //Imprimimos la cantidad de libros prestados

    let librosPorGenero = libros.reduce((acumulador, libro) => {
        // console.log('Acumulador ', acumulador);
        if(acumulador[libro.genero]){ //Si el genero existe
            acumulador[libro.genero] += 1; //Le sumamos uno mas
        } else { //Si el genero no existe, inicialmente le damos el valor de 0
            acumulador[libro.genero] = 1 ;
        }
        return acumulador; //Retornamos cada uno de los generos con su genero y contador
    },{})
    console.log('Libros por genero: ', librosPorGenero);

    let libroMasNuevo = libros.reduce((masNuevo, libroActual)=>{ //Obtenemos el libro mas Nuevo recorriendo cada uno de los libros
        return masNuevo.anio < libroActual.anio ? libroActual : masNuevo;
    });
    let libroMasAntiguo = libros.reduce((masAntiguo, libroActual)=>{//Obtenemos el libro mas Antiguo recorriendo cada uno de los libros
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
    //Usamos un acumulador para obtener la suma de los años
    let sumaAnios = libros.reduce((suma, libro) => {
        return suma + libro.anio;
    }, 0 )

    let cantidadLibros = libros.length; //Cantidad de libros
    let promedio = Math.round(sumaAnios / cantidadLibros); //obtenemos el promedio dividiendo la suma entre la cantidad de Libros. con Math redondeamos
    console.log('Promedio de anios de publicacion', promedio);

    let librosAniosFrecuencias = libros.reduce((acumulador, libro) => { //Recorremos el arreglo de libros y vamos creando un objeto con un contador de frecuencias de cada año
        if(acumulador[libro.anio]){
            acumulador[libro.anio] += 1;
        } else {
            acumulador[libro.anio] = 1;
        }
        return acumulador;
    }, {});
    //Creamos un arreglo de propiedades
    let propiedades = [];
    for(let propiedad in librosAniosFrecuencias){ //Aqui recorremos cada uno de los valores (años) para poder acceder a su valor
        propiedades.push(propiedad); //Vamos agregando cada una de estos valores(a;os) al arreglo de propiedades
    }

    let max = 0; //Lo inicializamos en 0
    let anioFrecuente = 0; //Al igual en 0
    for(let i = 0; i < propiedades.length; i++){
        let clave = propiedades[i]; //La clave seria el primer año dentro del arreglo de propiedades
        // console.log(librosAniosFrecuencias[clave]);
        //Math.max toma dos o mas numeros y devuelve el mas grande entre ellos
        max = Math.max(max, librosAniosFrecuencias[clave]); //Obtenemos el numero maximo entre cada uno de los librosFrecuentes

        if(librosAniosFrecuencias[clave] === max){ //Cuando la cantidad de frecuencias sea igual al maximo
            anioFrecuente = clave; //Asignamos la variable anio Frecuente al a;o mas frecuente
        }
    }
    console.log("El anio mas frecuente fue: ", anioFrecuente);

    let anios = libros.map(libro => { //Obtenemos los a;ios
        return libro.anio;
    });

    let anioMasAntiguo = anios[0]; //Asignamos el a;o mas antiguo como el primer numero del arreglo
    let anioMasNuevo = anios[0]; //Asignamos el a;o mas nuevo como el primer numero del arreglo

    for(let i = 1; i < anios.length; i++){//Recorremos todo el arreglo de anios
        anioMasAntiguo = Math.min(anioMasAntiguo, anios[i]); //Obtenemos el minimo con Math
    }

    for(let i = 1; i < anios.length; i++){//Recorremos todo el arreglo de anios
        anioMasNuevo = Math.max(anioMasNuevo, anios[i]);//Obtenemos el maximo con math
    }
    let diferenciaAnios = Math.abs(anioMasAntiguo - anioMasNuevo) //Obtenemos la diferencia de a;os restando el anioMasAntiguo y anioMasNuevo
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
    });

    // ✓ Formatear los emails de los usuarios a minúsculas.
    usuarios.map(function(usuario){
    let mailMinuscula = usuario.email.toLowerCase(); // Se procedio a utilizar el metodo .toLowerCase() para convertir los caracteres de la cadena a minuscula 
    console.log(mailMinuscula);  
    });
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
        5. Identificación Avanzada de libros
        6. Calculos Estadisticos
        7. Normalizar Datos o Manejo de cadenas
        `);
        
    //Creamos el Menu principal con sus opciones
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
            //Creamos un submenu para las opciones de la gestion de libros
            let opcionLibros = parseInt(prompt('Seleccione la acción que desea realizar: '));

            switch (opcionLibros) {
                case 1:
                    console.log('Ingrese los datos del libro a ingresar: ')
                    id = libros.length + 1; //Se crea un id dinamico, tomando en cuenta la cantidad de libros que tiene el arreglo
                    //Se piden los datos al usuario
                    titulo = prompt('Título: ');
                    autor = prompt('Autor: ');
                    anio = parseInt(prompt('Año de publicación: '));
                    genero = parseInt(prompt('Género: '));
                    agregarLibro(id, titulo, autor, anio, genero);
                    break;
                case 2:
                    criterio = prompt('Por cual criterio quiere buscar el libro (titulo, autor, genero)?: '); //Se pide al usuario el criterio de busqueda
                    valor = prompt(`Ingrese el ${criterio} del libro: `); //Se pregunta al usuario el valor que se va a buscar
                    buscarLibro(criterio, valor);
                    break;
                case 3:
                    criterio = prompt('Por cual criterio quiere ordenar los libros(titulo o anio)?: '); //Se pide el criterio al usuario
                    ordenarLibros(criterio);
                    break;
                case 4:
                    id = prompt('Ingrese el ID del libro que desea eliminar: ')
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
            //2do menu para la gestion de usuarios
            let opcionUsuarios = parseInt(prompt('Seleccione la acción que desea realizar: '));

            switch (opcionUsuarios) {
                case 1:
                    nombre = prompt('Nombre: ');
                    email = prompt('Email: ');
                    registrarUsuario(nombre, email);
                    break;
                case 2:
                    mostrarTodosLosUsuarios();
                    break;
                case 3:
                    email = prompt('Ingrese el email del usuario que desea buscar: ').toUpperCase();
                    buscarUsuario(email);
                    break;
                case 4:
                    nombre = prompt('Ingrese el nombre del usuario: ').toLowerCase();
                    email = prompt('Ingrese el email: ').toLowerCase();
                    borrarUsuario(nombre, email);
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
            //3er menu para el sistema de prestamos
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
    //Tenemos una funcion que maneja opciones no validas
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