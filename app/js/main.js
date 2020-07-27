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
import Utils from './classes/UtilsClass';
import CountdownTimer from './modules/CountdownTimerClass';
new Utils();

// Utils.supportsWebp();
// Utils.tabsInit();
// Utils.toggleInit();
// Utils.fadePopup();
// Utils.customSelect();
new CountdownTimer('Jan 5, 2021 15:37:25', '#demo-countdown-timer');

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
person.seyHi();

if($('body').length) {
    console.log('Support jQuery');
}

/**
 * Trigger open popup
 */
$('.trigger-open-popup').on('click', function (e) {
    e.preventDefault();
    $(document).trigger('trigger.show.popup', ['#popup_1', '.custom-scrollbar', 'name']);
});


/**
 * Scrollbar
 */
// if($(window).width() >= 1200) {
//     console.log('Initial scrollbar');
//     $('.custom-scrollbar').scrollbar();
// }


