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
 *  user [@babel/preset-env] for support es5
 */

//Classes type
import Weather from './_WeaterClass';
import LazyLoad from './helpers/LazyLoadClass';

let testVariable = true;
console.log(testVariable);

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
const person = new Person('Harry', 0);
const weather = new Weather();


person.seyHi();
weather.getWeather();

/**
 * Lazy
 */
LazyLoad.lazy();

if($('body').length) {
    console.log('Support jQuery');
}

