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
import UtilsClass from './classes/UtilsClass';
import CountdownTimer from './modules/CountdownTimerClass';


const utilsObj = new UtilsClass();

utilsObj.tabsInit();
utilsObj.toggleInit();
utilsObj.fadePopup();

new CountdownTimer('Jan 5, 2025 15:37:25', '#demo-countdown-timer');

if($('body').length) {
    console.log('Support jQuery');
}

/**
 * Trigger open popup
 */
$('.trigger-open-popup').on('click', function (e) {
    e.preventDefault();
    $(document).trigger('trigger.show.popup', ['#popup_1', '.custom-scrollbar']);
});

/**
 * Scrollbar
 */
// if($(window).width() >= 1200) {
//     console.log('Initial scrollbar');
//     $('.custom-scrollbar').scrollbar();
// }


