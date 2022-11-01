// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).curry=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(t,e)||a.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,s="set"in r,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,e,r.get),s&&f&&f.call(t,e,r.set),t};var l=r;function p(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var e,r,n,o,i;if(null==t)return v.call(t);r=t[m],i=m,e=null!=(o=t)&&d.call(o,i);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},h=Boolean.prototype.toString;var w=b();function j(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function _(t){return s(t)||j(t)}function E(){return new Function("return this;")()}p(_,"isPrimitive",s),p(_,"isObject",j);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof S?S:null;var P=function(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(T)return T;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",V);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function x(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!F(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(x));var G="function"==typeof t||"object"==typeof N||"function"==typeof A?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function k(t){return"function"===G(t)}function L(t){return"number"==typeof t}var M=Number,R=M.prototype.toString;var U=b();function Y(t){return"object"==typeof t&&(t instanceof M||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function X(t){return L(t)||Y(t)}p(X,"isPrimitive",L),p(X,"isObject",Y);var q=Number.POSITIVE_INFINITY,z=M.NEGATIVE_INFINITY,D=Math.floor;function H(t){return t<q&&t>z&&D(e=t)===e;var e}function J(t){return L(t)&&H(t)}function K(t){return Y(t)&&H(t.valueOf())}function Q(t){return J(t)||K(t)}function W(t){return J(t)&&t>0}function Z(t){return K(t)&&t.valueOf()>0}function $(t){return W(t)||Z(t)}function tt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return p(Q,"isPrimitive",J),p(Q,"isObject",K),p($,"isPrimitive",W),p($,"isObject",Z),function(t,e,r){var n,o;if(!k(t))throw new TypeError(tt("0j33p",t));if(arguments.length<2){if(!W(o=t.length))throw new TypeError(tt("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",o))}else if(arguments.length>2){if(n=r,!W(o=e))throw new TypeError(tt("0j3Bi",o))}else if(W(e))o=e;else{if(!W(o=t.length))throw new TypeError(tt("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",o));n=e}return i([]);function i(e){return function(r){var u=e.slice();if(u.push(r),u.length<o)return i(u);return t.apply(n,u)}}}}));
//# sourceMappingURL=browser.js.map
