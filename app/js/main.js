/**
 * Author: Ivan Horobets
 * Email: vanzzosolutions@gmail.com
 * Company: VanzzoSolutions
 */

"use strict";

/**
 * Example use class & import file
 *
 * Classes style
 *      Support:
 *          Chrome - 49.0,
 *          Firefox 45,
 *          Edge 13,
 *          Internet Explorer - No support
 *          Opera - No support
 *          Safari - 9.0
 */

//Classes type
import Weather from './_WeaterClass';

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    seyHi() {
        console.log('ES6 the best');
        console.log('Hi ' + this.name + ' your age is ' + this.age);
    }
}
const person = new Person('Harry', 22);
const weather = new Weather();

person.seyHi();
weather.getWeather();

