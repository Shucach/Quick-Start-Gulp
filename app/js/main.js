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
import Utils from './clasess/UtilsClass';
import StopScroll from './clasess/StopScrollClass';

Utils.supportsWebp();
Utils.tabsInit();
Utils.toggleInit();

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
 * Example popup & fixed scroll
 */
let $openPopup = $('.open-popup'),
    stopScrollForPopup = null;
$openPopup.on('click', function (e) {
    e.preventDefault();

    console.log($(this).attr('data-id'));

    $($($(this).attr('data-id'))).fadeIn(200);
    $('.overlay_page').fadeIn(200);

    stopScrollForPopup = new StopScroll($($(this).attr('data-id')), '.wrap_popup', '.custom-scrollbar');
    stopScrollForPopup.disableScroll();
});
$('.overlay_page').on('click', function () {
    $('.overlay_page, .wrap_popup').fadeOut(200);
    stopScrollForPopup.enableScroll();
});


/**
 * Scrollbar
 */
// if($(window).width() >= 1200) {
//     console.log('Initial scrollbar');
//     $('.custom-scrollbar').scrollbar();
// }


