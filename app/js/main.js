/**
 * Author: Ivan Horobets
 * Email: vanzzosolutions@gmail.com
 * Company: VanzzoSolutions
 */

"use strict";

console.log('ES6 the best');

//Example class
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    seyHi() {
        console.log('Hi ' + this.name + ' your age is ' + this.age);
    }
}
const person = new Person('Harry', 25);

person.seyHi();

