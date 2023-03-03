"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// The OCS & QSA Qs Functions

/*The O like object Function.If an object is passed to the function, it just returns that object back again. Otherwise,
it assumes that an ID has been passed and returns the object to which the ID refers.*/
var O = function O(i) {
  return _typeof(i) == 'object' ? i : document.getElementById(i);
};
/* The C like Class Function. It return the object that refer the class i*/


var C = function C(i) {
  return document.getElementsByClassName(i);
};
/*The S like Style Function. It gives easy access to the style (or CSS) properties of an object*/


var S = function S(i) {
  return O(i).style;
};
/* The QSA like QuerySelectorAll function */


var QSA = function QSA(i) {
  return querySelectorAll(i);
};

var QSAd = function QSAd(i) {
  return document.querySelectorAll(i);
};
/* The Qs like QuerySelector function */


var Qs = function Qs(i) {
  return querySelector(i);
};

var Qsd = function Qsd(i) {
  return document.querySelector(i);
}; // End of OCS & QSA Qs functions
// Transform text object


var textTransform = {
  //lowercase allow to transform the first letter at Uppercase et the remains at lowercase like as (Mitondji)
  lowerCase: function lowerCase(text) {
    var s = " ";

    if (text && typeof text === 'string') {
      for (var index = 0; index < text.length; index++) {
        s += text.charAt(0).toUpperCase() + text.substring(1).toLowerCase() + " ";
        return s.substring(0, s.length - 1);
      }
    } else {
      console.log('null');
    }
  },
  // end of lowercase
  // The uppercase funtions allow to transform letter to uppercase like as (JUSTINE)
  upperCase: function upperCase(text) {
    var s = " ";

    if (text && typeof text === 'string') {
      s = text.toUpperCase();
      return s;
    }
  } //end of upercase function

}; // These function allow to use the methods of the textTransform object 

var elementLower = function elementLower(element) {
  var e = textTransform.lowerCase(element);
  return e;
};

var elementUpper = function elementUpper(element) {
  var e = textTransform.upperCase(element);
  return e;
};