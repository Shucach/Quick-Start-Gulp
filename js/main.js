/**
 * Author: Ivan Horobets
 * Email: vanzzosolutions@gmail.com
 * Company: VanzzoSolutions
 */
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('ES6 the best'); //Example class

var Person =
/*#__PURE__*/
function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "seyHi",
    value: function seyHi() {
      console.log('Hi ' + this.name + ' your age is ' + this.age);
    }
  }]);

  return Person;
}();

var person = new Person('Harry', 25);
person.seyHi();