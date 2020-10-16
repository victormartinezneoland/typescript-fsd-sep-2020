"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function extendedFunc(target, key) {
    console.log(`Mi target es ${target}`);
    console.log(`He llamado a ${key}`);
}
class Person {
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        console.log(`Tu nombre es ${this.name}`);
    }
}
__decorate([
    extendedFunc
], Person.prototype, "sayMyName", null);
const federico = new Person('Federico');
federico.sayMyName();
