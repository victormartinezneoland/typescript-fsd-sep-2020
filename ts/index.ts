// **************** //
// *    BASICS    * //
// **************** //

// INSTALACIONES
// Node --> Motor que ejecuta JavaScript sin necesidad de ejecutarlo en
// el navegador

// NPM (Node Package Manager) --> Gestor de paquetes de Node.

// NVM (Node Version Manager) --> Permite utilizar diferentes
// versiones de node

// npm install -g typescript  (sudo delante si te dice que no tienes permisos)
// tsc -v --> Comprobamos versión del compilador TS


// EJECUTAR
// node index.js --> Ejecuta el archivo JS con Node

// tsc --watch index.ts --> El compilador estará pendiente de
// los posibles cambios en el TS y automáticamente transpilará
// el código

// tsc --watch --> Compilar todos los archivos .ts y los posibles
// cambios que se produzcan

// tsc --init --> Crea un archivo tsconfig.json con la configuración
// a utilizar en nuestro proyecto TS


// Sintaxis básica para asignar un tipo de dato
// var nombreVariable: tipoDeDato;
// var nombreVariable: tipoDeDato = valor;

// Explícita
// var nombreVariable: tipoDeDato = valor;

// Implícita
// var nombreVariable = 'Pepe'; // Como le he asignado un string, su tipo será string


// ************************ //
// *    TIPOS DE DATOS    * //
// ************************ //

// // Number de cualquier tipo y también valores octales, hexadecimales y binarios
// let phoneNumber: number = 654654654;
// let phoneNumber2: number;
// phoneNumber2 = 654654654;

// let phoneNumber3 = 654654654;

// // Boolean
// let hasPool: boolean = true;
// let hasPool2: boolean;
// hasPool2 = true;

// let hasPool3 = true;

// // String
// let firstName: string = 'Horse Luis';
// let firstName2: string;
// firstName2 = 'Horse Luis';

// let firstName3 = 'Horse Luis';

// let firstName4: string = `Hola ${firstName2}. Bienvenido`;

// // Any - el voldemort
// let userId: any;
// userId = 1; // Number
// userId = '1'; // String

// let userInfo;
// userInfo = 234;
// userInfo = 'Pepito grillo';

// let introductionText = 'Hola Pepito';
// const firstNameText = introductionText.substring(5);
// console.log('El nombre de la persona es:', firstNameText);

// Void
// let noUsable: void;
// noUsable: null;
// noUsable: undefined;

// // Never
// function handleError(): never {
//     throw new Error('Ha ocurrido un error');
// }

// // Null
// let nullVar: null;
// nullVar = null;

// // Null no permite asignación implícita
// let otherNullVar = null;

// // Undefined
// let undefinedVar: undefined = undefined;

// // Undefined tampoco permite asignación implícita
// let otherUndefinedVar = undefined;

// // Object
// let user = {
//     id: 1,
//     username: 'horseluis',
//     isAdmin: true
// };

// console.log('El username es:', user.username);

// // Arrays
// let users: string[];
// users = ['Horse luis', 'Horse Pedro', 'pepe', 'pepa'];

// let users2 = ['pepe', 'pepa', 'ofelia'];

// // Tuple
// let users3: [string, number];
// users3 = ['Pepe', 30];

// // Array de tuplas
// let myList: [string, number][] = [['Pepe', 30], ['Pepe', 30], ['Pepe', 30]];

// // Enum (enumerado)
// enum PhotoOrientation {
//     Landscape, // 0
//     Portrait, // 1
//     Square, // 2
//     Panorama // 3
// }

// enum CoffeType {
//     Latte,
//     American,
//     Short
// }

// console.log(PhotoOrientation.Panorama);

// enum Country {
//     Espana = 'esp',
//     Alemania = 'ale',
//     Francia = 'fra',
//     Italia = 'ita'
// }

// console.log(Country.Espana);

// enum CountryPlus {
//     Eslovenia = 'esl',
//     Portugal = 'por',
//     Polonia = 'pol'
// }

// // Extender un enumerado en base a otro
// let combinedCountry = Object.assign({}, Country, CountryPlus);
// console.log(combinedCountry);


// // Unión de tipos
// let userId5: number | string;
// userId5 = 22;
// userId5 = '22';

// // let numPedido: number | string;
// // let laQueSea: number | string;

// // Alias de tipos
// type Id = number | string;
// let userId6: Id;

// let numPedido: Id;

// let miVar1 = false;
// let miVar2: number;

// function getUserById(id: Id, numeroPedido: Id): string {
//     return 'Pepe';
// }

// // getUserById(miVar1, 34);

// // Tipos personalizados
// type PhotoSize = '100x100' | '300x300' | '800x800';
// let myFirstPictureSize: PhotoSize = '300x300';
// // let mySecondPictureSize: PhotoSize = '1024x1024'; // Da error porque no se corresponde con ningún valor de su tipo personalizado


// // Aserciones de tipo - Forma 1
// let username: any;
// username = 254;

// let message: string = (<string>username).length > 5
//     ? `Bienvenido ${username}`
//     : 'El nombre es corto';

// console.log('MENSAJE', message);

// // Aserciones de tipo - Forma 2
// let message2: string = (username as string).length > 5
//     ? `Bienvenido ${username}`
//     : 'El nombre es corto';



// ********************* //
// *     FUNCIONES     * //
// ********************* //

// // Los parámetros opcionales tienen que ir los últimos
// function createPhoto(title: string, date?: string, size?: PhotoSize):void  {
//     console.log('Creando foto:', title, date, size);
// }

// createPhoto('Título1', '2020', '800x800');


// ********************* //
// *     INTERFACES    * //
// ********************* //

// Son contratos. Condiciones que deben cumplir aquellos elementos que utilicen la interfaz.

// interface Media {
//     id: number,
//     title: string,
// }

// interface Photo extends Media {
//     date: string,
//     size?: PhotoSize
// }

// interface Album extends Media {
//     description: string,
// }

// const album: Album = {
//     id: 1,
//     title: 'Playa 1',
//     description: 'Tomando cervezas en el chiringuito'
// };

// const photo: Photo = {
//     id: 1,
//     title: 'Foto1',
//     date: '2019',
//     size: '300x300'
// };


// function showPhoto(image: Photo) {
//     console.log('Muestro la foto');
// }

// let image: Photo = {
    
//     title: 'Prueba1',
//     date: '2019',

// }
// // image.title = 'Valor2';

// showPhoto({title: 'Prueba1', date: '2019'});


// **************** //
// *    CLASES    * //
// **************** //

// class Photo {
//     // Propiedades
//     id: number;
//     title: string;
//     date: string;
//     size: PhotoSize;

//     // Constructor
//     constructor(id: number, title: string, date: string, size: PhotoSize) {
//         this.id = id;
//         this.title = title;
//         this.date = date;
//         this.size = size;
//     }

//     // Métodos
//     titleToUppercase(): string {
//         return this.title.toUpperCase();
//     }
// }

// class Album {
//     // Propiedades
//     #id: number;
//     private title: string;
//     private description: string;
//     private pictures: Photo[];

//     // Constructor
//     constructor(id: number, title: string, description: string) {
//         this.#id = id;
//         this.title = title;
//         this.description = description;
//         this.pictures = [];
//     }

//     // Métodos
//     public addPhoto(photo: Photo):void {
//         this.pictures.push(photo);
//     }
// }

// const miAlbum: Album = new Album(1, 'Mis mejores fotos', 'Descripción');
// const miFoto: Photo = new Photo(21, 'Mi título', '2019', '800x800');

// miAlbum.addPhoto(miFoto);
// console.log('MIALBUM', miAlbum);

// miAlbum.#id = 99;
// console.log('MIALBUM', miAlbum);

// PERMISOS DE LAS PROPIEDADES Y LOS MÉTODOS
// Podemos dar los siguientes permisos a las propiedades y los métodos de una clase:
// - public --> Por defecto, aunque podemos indicarlo explícitamente
// - private --> Hace que la propiedad/método no sea accesible desde fuera de la clase
// - # --> Es una forma moderna de hacer que una propiedad/método sea privado. A diferencia de private, con
//     # tenemos una encapsulación verdadera en JS
// - protected --> Hace que la propiedad/método sea accesible sólo en su clase y en clases que hereden de ella

// GETTERS y SETTERS
// Son métodos que permiten obtener (GET) o establecer (SET) un valor en una propiedad


// Super clase
// Una clase abstracta se utiliza cuando no queremos que alguien pueda instanciar objetos utilizando esa clase
// abstract class Media {
//     protected readonly _id: number; // Propiedad sólo de lectura. NO puedo cambiar su valor
//     protected _title: string;

//     constructor(id: number, title: string) {
//         this._id = id;
//         this._title = title;
//     }
// }

// // Sub clases
// class Photo extends Media {
//     private _date: string;

//     constructor(id: number, title: string, date: string) {
//         super(id, title); // Es una llamada al constructor de la súper clase
//         this._date = date;
//     }

//     // Getters - Setters
//     get id(): number {
//         return this._id;
//     }
//     set id(newId: number) {
//         this._id = newId;
//     }

//     get title(): string {
//         return this._title;
//     }
//     set title(newTitle: string) {
//         this._title = newTitle;
//     }

//     // Métodos
//     // los que queramos
// }

// class Album extends Media {
//     private _description: string;
//     private _pictures: Photo[];

//     constructor(id: number, title: string, description: string) {
//         super(id, title);
//         this._description = description;
//         this._pictures = [];
//     }

//     // Getters - Setters
//     get id(): number {
//         return this._id;
//     }
//     set id(newId: number) {
//         this._id = newId;
//     }

//     get title(): string {
//         return this._title;
//     }
//     set title(newTitle: string) {
//         this._title = newTitle;
//     }

//     // Métodos
//     public addPhoto(photo: Photo):void {
//             this._pictures.push(photo);
//     }

//     // Método estático - Son accesibles desde cualquier parte de nuestra aplicación llamando directamente a la clase
//     public static saludar(saludo: string): void {
//         console.log(`Este es el saludo: ${saludo}`);
//     }
// }

// const miFoto = new Photo(22, 'Hola', 'Hola');

// const miAlbum = new Album(30, 'Hola', 'Hello');
// miAlbum.addPhoto(miFoto);

// // Llamada al método estático de la clase Album
// Album.saludar('Mi saludo');

// // miFoto.id = 99;
// // miFoto.id


// ********************* //
// *    DECORADORES    * //
// ********************* //

// Permiten extender la funcionalidad de otros elementos
// Los decoradores NO existen en JS. Sólo en TS

function extendedFunc(target: any, key: any) {
    // target --> Hace referencia al elemento que posee el decorador
    // key --> Hace referencia al elemento que extendemos
    console.log(`Mi target es ${target}`);
    console.log(`He llamado a ${key}`);
}

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @extendedFunc
    sayMyName() {
        console.log(`Tu nombre es ${this.name}`);
    }
}

const federico = new Person('Federico');

federico.sayMyName();