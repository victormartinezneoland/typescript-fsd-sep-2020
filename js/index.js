"use strict";
let phoneNumber = 654654654;
let phoneNumber2;
phoneNumber2 = 654654654;
let phoneNumber3 = 654654654;
let hasPool = true;
let hasPool2;
hasPool2 = true;
let hasPool3 = true;
let firstName = 'Horse Luis';
let firstName2;
firstName2 = 'Horse Luis';
let firstName3 = 'Horse Luis';
let firstName4 = `Hola ${firstName2}. Bienvenido`;
let userId;
userId = 1;
userId = '1';
let userInfo;
userInfo = 234;
userInfo = 'Pepito grillo';
let noUsable;
function handleError() {
    throw new Error('Ha ocurrido un error');
}
let nullVar;
nullVar = null;
let otherNullVar = null;
let undefinedVar = undefined;
let otherUndefinedVar = undefined;
let user = {
    id: 1,
    username: 'horseluis',
    isAdmin: true
};
console.log('El username es:', user.username);
let users;
users = ['Horse luis', 'Horse Pedro', 'pepe', 'pepa'];
let users2 = ['pepe', 'pepa', 'ofelia'];
let users3;
users3 = ['Pepe', 30];
let myList = [['Pepe', 30], ['Pepe', 30], ['Pepe', 30]];
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
console.log(PhotoOrientation.Panorama);
var Country;
(function (Country) {
    Country["Espana"] = "esp";
    Country["Alemania"] = "ale";
    Country["Francia"] = "fra";
    Country["Italia"] = "ita";
})(Country || (Country = {}));
console.log(Country.Espana);
var CountryPlus;
(function (CountryPlus) {
    CountryPlus["Eslovenia"] = "esl";
    CountryPlus["Portugal"] = "por";
    CountryPlus["Polonia"] = "pol";
})(CountryPlus || (CountryPlus = {}));
let combinedCountry = Object.assign({}, Country, CountryPlus);
console.log(combinedCountry);
let userId5;
userId5 = 22;
userId5 = '22';
let userId6;
let numPedido;
let miVar1 = false;
let miVar2;
function getUserById(id, numeroPedido) {
    return 'Pepe';
}
let myFirstPictureSize = '300x300';
let username;
username = 254;
let message = username.length > 5
    ? `Bienvenido ${username}`
    : 'El nombre es corto';
console.log('MENSAJE', message);
let message2 = username.length > 5
    ? `Bienvenido ${username}`
    : 'El nombre es corto';
function createPhoto(title, date, size) {
    console.log('Creando foto:', title, date, size);
}
createPhoto('Título1', '2020', '800x800');
class Photo {
    constructor(id, title, date, size) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.size = size;
    }
    titleToUppercase() {
        return this.title.toUpperCase();
    }
}
class Album {
    private prueba;


    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.pictures = [];
        this.#prueba = 'fdsdis';
    }
    addPhoto(photo) {
        this.pictures.push(photo);
    }

    getPrueba() {
        console.log(this.#prueba);
    }
}
const miAlbum = new Album(1, 'Mis mejores fotos', 'Descripción');
const miFoto = new Photo(21, 'Mi título', '2019', '800x800');
miAlbum.addPhoto(miFoto);
console.log('MIALBUM', miAlbum);
miAlbum.getPrueba();
