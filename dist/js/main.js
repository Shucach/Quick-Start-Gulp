/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/classes/JSHelpersClass.js":
/*!******************************************!*\
  !*** ./app/js/classes/JSHelpersClass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JSHelpers; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * JS helpers for make work with DOOM more comfortable.
 */
var JSHelpers = /*#__PURE__*/function () {
  function JSHelpers() {
    _classCallCheck(this, JSHelpers);
  }

  _createClass(JSHelpers, [{
    key: "getSiblings",

    /**
     * Get Siblings elements
     * @param $firstChild
     * @returns {[]}
     */
    value: function getSiblings($firstChild) {
      var allSibling = [];

      for (var child in $firstChild) {
        if ($firstChild[child].nodeType === 1) {
          allSibling.push($firstChild[child]);
        }
      }

      return allSibling;
    }
  }]);

  return JSHelpers;
}();



/***/ }),

/***/ "./app/js/classes/StopScrollClass.js":
/*!*******************************************!*\
  !*** ./app/js/classes/StopScrollClass.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StopScroll; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StopScroll = /*#__PURE__*/function () {
  /**
   *
   * @param el
   * @param wrapClass
   * @param scrollClass - we can skip this class is if wrapClass will be scroll area
   * version 1.0.1
   */
  function StopScroll(el, wrapClass, scrollClass) {
    _classCallCheck(this, StopScroll);

    window.stElement = el;
    window.wrapClass = wrapClass;
    window.scrollClass = scrollClass;
    window.ts = '';
    window.direction = '';
  }
  /**
   * Fixed all scroll types except scroll inside selected block
   */


  _createClass(StopScroll, [{
    key: "disableScroll",
    value: function disableScroll() {
      var self = this; // Desktop

      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', self.wheel);
      }

      window.addEventListener('wheel', self.wheel, {
        passive: false
      });
      document.onkeydown = self.keydown; // Mobile

      window.addEventListener('touchstart', self.__touchstart, {
        passive: false
      }); // -webkit-overflow-scrolling touch
      // Need add padding bottom for some blocks for phones 80px
      // window.addEventListener('touchmove', self.mobileWheel, { passive: false });

      window.addEventListener('touchmove', self.mobileWheel, {
        passive: false
      });
    }
  }, {
    key: "__touchstart",
    value: function __touchstart(e) {
      window.ts = e.touches[0].clientY;
    }
    /**
     * Clear all event and on scroll
     */

  }, {
    key: "enableScroll",
    value: function enableScroll() {
      var self = this; // Desktop

      if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', self.wheel);
      }

      window.removeEventListener('wheel', self.wheel, {
        passive: true
      }); // Mobile

      window.removeEventListener('touchmove', self.mobileWheel, {
        passive: false
      });
    }
    /**
     * Stop scroll for desktop
     * @param e
     */

  }, {
    key: "wheel",
    value: function wheel(e) {
      // Direction
      if (e.deltaY < 0) {
        window.direction = 'up';
      } else if (e.deltaY > 0) {
        window.direction = 'down';
      } // NOTE: window.stElement[0] - not sure if it will be ok if use clear js. check


      if (window.stElement[0] === e.target.closest(window.wrapClass) || window.stElement[0] === e.target) {
        var element = window.stElement[0].querySelector(window.scrollClass) ? window.stElement[0].querySelector(window.scrollClass) : window.stElement[0],
            scrollHeight = Math.round(element.scrollHeight - element.scrollTop) <= element.clientHeight,
            scrollTop = element.scrollTop;

        if (scrollTop === 0 && scrollHeight && window.direction === 'up' || scrollTop === 0 && window.direction === 'up' || scrollHeight && window.direction === 'down') {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    }
    /**
     * Stop scroll for mobile
     * @param e
     */

  }, {
    key: "mobileWheel",
    value: function mobileWheel(e) {
      // Direction
      var te = e.changedTouches[0].clientY;

      if (window.ts > te + 5) {
        window.direction = 'down';
      } else if (ts < te - 5) {
        window.direction = 'up';
      }

      if (window.stElement[0] === e.target.closest(window.wrapClass) || window.stElement[0] === e.target) {
        var element = window.stElement[0].querySelector(window.scrollClass) ? window.stElement[0].querySelector(window.scrollClass) : window.stElement,
            scrollHeight = Math.round(element.scrollHeight - element.scrollTop) <= element.clientHeight,
            scrollTop = element.scrollTop;

        if (scrollTop === 0 && scrollHeight && window.direction === 'up' || scrollTop === 0 && window.direction === 'up' || scrollHeight && window.direction === 'down') {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    }
  }, {
    key: "keydown",
    value: function keydown(e) {
      var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

      for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
          if (e.target.type !== 'text' && e.target.type !== 'textarea' && e.target.type !== 'search' && e.target.type !== 'tel' && e.target.type !== 'email') {
            e.preventDefault();
            return;
          }
        }
      }
    }
  }]);

  return StopScroll;
}();



/***/ }),

/***/ "./app/js/classes/UtilsClass.js":
/*!**************************************!*\
  !*** ./app/js/classes/UtilsClass.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
/* harmony import */ var _StopScrollClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StopScrollClass */ "./app/js/classes/StopScrollClass.js");
/* harmony import */ var _JSHelpersClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JSHelpersClass */ "./app/js/classes/JSHelpersClass.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Utils = /*#__PURE__*/function (_JSHelpers) {
  _inherits(Utils, _JSHelpers);

  var _super = _createSuper(Utils);

  function Utils() {
    var _this;

    _classCallCheck(this, Utils);

    _this = _super.call(this);

    _this.tabsInit();

    _this.toggleInit();

    _this.fadePopup();

    _this.customSelect();

    _this.supportsWebp();

    _this.lazy();

    return _this;
  }
  /**
   * Tabs
   */


  _createClass(Utils, [{
    key: "tabsInit",
    value: function tabsInit() {
      var speed = 200;
      var self = this,
          $tabs = document.getElementsByClassName('tabs_wrap');

      for (var i = 0; i < $tabs.length; i++) {
        var $menus = $tabs[i].getElementsByClassName('tab_menu');

        for (var _i = 0; _i < $menus.length; _i++) {
          $menus[_i].addEventListener("click", function () {
            if (this.classList.contains('active')) return;
            var $tabMenu = this,
                dataID = this.getAttribute('data-id'),
                $contentShow = document.getElementById(dataID); //Add active class

            $tabMenu.parentNode.getElementsByClassName('active')[0].classList.remove('active');
            $tabMenu.classList.add('active'); //Siblings elements

            var allSibling = self.getSiblings($contentShow.parentNode.childNodes); //Move to opacity 0 all elements

            for (var _i2 = 0; _i2 < allSibling.length; _i2++) {
              if (allSibling[_i2].getAttribute('id') !== dataID) {
                allSibling[_i2].classList.add('tab_fade_out');
              }
            } //Start show new elements


            setTimeout(function () {
              for (var _i3 = 0; _i3 < allSibling.length; _i3++) {
                if (allSibling[_i3].getAttribute('id') !== dataID) {
                  allSibling[_i3].style.display = 'none';

                  allSibling[_i3].classList.remove('tab_fade_out');
                }
              }

              $contentShow.classList.add('tab_fade_in');
              $contentShow.removeAttribute('style');
              setTimeout(function () {
                $contentShow.classList.remove('tab_fade_in');
              }, speed);
            }, speed - 20);
          });
        }
      }
    }
    /**
     * Toggles slide
     * TODO: option for auto close open tab
     * TODO: mover to JS
     */

  }, {
    key: "toggleInit",
    value: function toggleInit() {
      var $toggle = $('.toggle_wrap');
      $toggle.each(function () {
        $(this).find('.toggle_header').on('click', function () {
          $(this).siblings('.toggle_content').slideToggle(200);
          $(this).toggleClass('active');
        });
      });
    }
    /**
     * Open|close fade popup
     * Triggers:
     *   Open popup: $(document).trigger('trigger.show.popup', ['#id_popup', '.scrollClass', 'focusNameInput']);
     *   Position all popups: $(document).trigger('trigger.position.all.popups');
     * TODO: move to JS
     */

  }, {
    key: "fadePopup",
    value: function fadePopup() {
      var $overlayPage = $('.overlay_page'),
          $popups = $('.wrap_popup'); //Need for Chrome.

      if ($popups.length) {
        positionPopup();
        $(document).on('click', '.open-popup', function (e) {
          e.preventDefault();
          var $this = $(this),
              id = $(this).attr('data-id');

          if (!id) {
            console.warn('Please set data-fade attribute');
            return false;
          }

          openPopup(id, $(this).attr('data-scroll-class'), $this.attr('data-focus'));
        }); //Trigger open popup

        $(document).bind('trigger.show.popup', function (e, id, thisScrollClass, thisFocus) {
          openPopup(id, thisScrollClass, thisFocus);
        }); //Trigger position all popups

        $(document).bind('trigger.position.all.popups', function () {
          positionPopup();
        }); //Close

        $popups.on('click', '.header .icon-clear, .close-popup', function (e) {
          e.preventDefault();
          allClose();
        });
      } //Position for all popup on desktop


      function positionPopup() {
        if ($(window).width() >= 1200) {
          var wW = $(window).width(),
              wH = $(window).height();
          $popups.each(function () {
            var blW = $(this).outerWidth(true),
                blH = $(this).outerHeight(true);
            $(this).css({
              'left': (wW - blW) / 2,
              'top': (wH - blH) / 2
            });
          });
        }
      }

      function openPopup(id, thisScrollClass, thisFocus) {
        $(id).fadeIn(200, function () {
          //Set autofocus on input
          if (thisFocus) {
            var inputF = $(id).find('input[name=' + thisFocus + ']');

            if (inputF.length) {
              inputF.focus();
            } else {
              console.warn('Input not found. Check input name!');
            }
          }
        });
        $overlayPage.fadeIn(200);
        setCloseOverlay(true);

        if (thisScrollClass) {
          //Set other scroll area
          //data-scroll-class=".product_wrap" - need set to open btn
          self.stopScrollSwipe = new _StopScrollClass__WEBPACK_IMPORTED_MODULE_0__["default"]($(id), '.wrap_popup', thisScrollClass);
        } else {
          self.stopScrollSwipe = new _StopScrollClass__WEBPACK_IMPORTED_MODULE_0__["default"]($(id), '.wrap_popup');
        }

        self.stopScrollSwipe.disableScroll();
      }

      function setCloseOverlay(set) {
        if (set) {
          $overlayPage.bind('click.fade.popup', function () {
            allClose();
          });
        } else {
          $overlayPage.unbind('click.fade.popup');
        }
      }

      function allClose() {
        $overlayPage.fadeOut(200);
        $popups.each(function () {
          var $eThis = $(this);
          $eThis.fadeOut(200);
        });
        setCloseOverlay(false);
        self.stopScrollSwipe.enableScroll();
      }
    }
    /**
     * Custom select actions
     * Idea from: https://m.habr.com/ru/post/491000/
     */

  }, {
    key: "customSelect",
    value: function customSelect() {
      var selectSingle = document.querySelector('.custom_select');
      var selectSingle_title = selectSingle.querySelector('.select_title');
      var selectSingle_labels = selectSingle.querySelectorAll('.select_label'); // Toggle menu

      selectSingle_title.addEventListener('click', function () {
        if ('active' === selectSingle.getAttribute('data-state')) {
          selectSingle.setAttribute('data-state', '');
        } else {
          selectSingle.setAttribute('data-state', 'active');
        }
      }); // Close when click to option

      for (var i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', function (evt) {
          selectSingle_title.textContent = evt.target.textContent;
          selectSingle.setAttribute('data-state', '');
        });
      } // Reset title
      // const reset = document.querySelector('.reset');
      // reset.addEventListener('click', () => {
      //     selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
      // });

    }
    /**
     * Check webp
     * @returns {*}
     */

  }, {
    key: "supportsWebp",
    value: function supportsWebp() {
      if (!self.createImageBitmap) return false;
      var iOS = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS) return false;
      var webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
      var blob = fetch(webpData).then(function (r) {
        return r.blob();
      });

      if (createImageBitmap(blob).then(function () {
        return true;
      }, function () {
        return false;
      })) {
        $('html').addClass('webp');
      } else {
        $('html').addClass('no-webp');
      }
    }
    /**
     * https://github.com/aFarkas/lazysizes
     */

  }, {
    key: "lazy",
    value: function lazy() {
      //if ('loading' in HTMLImageElement.prototype) {
      //TODO: load all images. Try nex time
      // const images = document.querySelectorAll('img[loading="lazy"]');
      // images.forEach(img => {
      //     img.src = img.dataset.src;
      // });
      //} else {
      //Dynamically import the LazySizes library
      // const script = document.createElement('script');
      // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
      // document.body.appendChild(script);
      //}
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
      document.body.appendChild(script);
    }
  }]);

  return Utils;
}(_JSHelpersClass__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_UtilsClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/UtilsClass */ "./app/js/classes/UtilsClass.js");
/* harmony import */ var _modules_CountdownTimerClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/CountdownTimerClass */ "./app/js/modules/CountdownTimerClass.js");
/**
 * Author: Ivan Horobets
 * Email: vanzzosolutions@gmail.com
 * Company: VanzzoSolutions
 */

/**
 * Example use class & import file
 *
 * Classes style
 *  user [@babel/preset-env] for support es5
 */
//Classes type

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



new _classes_UtilsClass__WEBPACK_IMPORTED_MODULE_0__["default"](); // Utils.supportsWebp();
// Utils.tabsInit();
// Utils.toggleInit();
// Utils.fadePopup();
// Utils.customSelect();

new _modules_CountdownTimerClass__WEBPACK_IMPORTED_MODULE_1__["default"]('Jan 5, 2025 15:37:25', '#demo-countdown-timer');

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "seyHi",
    value: function seyHi() {
      console.log('ES6 the best');
      console.log('Hi ' + this.name + ' your age is ' + this.age);
    }
  }]);

  return Person;
}();

var person = new Person('Harry', 0);
person.seyHi();

if ($('body').length) {
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

/***/ }),

/***/ "./app/js/modules/CountdownTimerClass.js":
/*!***********************************************!*\
  !*** ./app/js/modules/CountdownTimerClass.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountdownTimer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CountdownTimer = /*#__PURE__*/function () {
  /**
   * @param date
   *      Format: Jan 5, 2021 15:37:25
   * @param output
   *      '#demo-countdown-timer'
   */
  function CountdownTimer(date, output) {
    _classCallCheck(this, CountdownTimer);

    this.countDownDate = new Date(date).getTime();
    this.outputEl = document.querySelector(output);
    this.timerLoop();
  }

  _createClass(CountdownTimer, [{
    key: "timerLoop",
    value: function timerLoop() {
      var self = this,
          x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = self.countDownDate - now; // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000); // Display the result in the element with id="demo"
        //TODO: if will need add different formats

        self.outputEl.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; // If the count down is finished, write some text

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }]);

  return CountdownTimer;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map