// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),e.alternate&&(t=p.call(t,h,"$1."),t=p.call(t,y,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):s.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function S(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,i,a,c,l,s,f,p,g,d,h;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+E(h):E(h)+p)),c+=n.arg||"",l+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var P,V=Object.prototype,F=V.toString,C=V.__defineGetter__,$=V.__defineSetter__,N=V.__lookupGetter__,R=V.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var B=P;function G(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var W="function"==typeof Symbol?Symbol:void 0,z="function"==typeof W?W.toStringTag:"";var Y=Z()?function(e){var r,t,n,i,o;if(null==e)return M.call(e);t=e[z],o=z,r=null!=(i=e)&&U.call(i,o);try{e[z]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[z]=t:delete e[z],n}:function(e){return M.call(e)},q=Boolean,D=Boolean.prototype.toString;var H=Z();function J(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function K(e){return L(e)||J(e)}G(K,"isPrimitive",L),G(K,"isObject",J);var Q="object"==typeof self?self:null,ee="object"==typeof window?window:null,re="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},te="object"==typeof re?re:null,ne="object"==typeof globalThis?globalThis:null;var ie=function(e){if(arguments.length){if(!L(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(Q)return Q;if(ee)return ee;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ie.document&&ie.document.childNodes,ae=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;G(ce,"REGEXP",ue);var le=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};function se(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ue.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!le(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var pe="function"==typeof e||"object"==typeof ae||"function"==typeof oe?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?fe(e).toLowerCase():r};function ge(e){return"number"==typeof e}var de=Number,he=de.prototype.toString;var ye=Z();function be(e){return"object"==typeof e&&(e instanceof de||(ye?function(e){try{return he.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function ve(e){return ge(e)||be(e)}G(ve,"isPrimitive",ge),G(ve,"isObject",be);var we=Number.POSITIVE_INFINITY,me=de.NEGATIVE_INFINITY,Ee=Math.floor;function je(e){return e<we&&e>me&&Ee(r=e)===r;var r}function _e(e){return ge(e)&&je(e)}function Se(e){return be(e)&&je(e.valueOf())}function Te(e){return _e(e)||Se(e)}function xe(e){return _e(e)&&e>0}function ke(e){return Se(e)&&e.valueOf()>0}function Ie(e){return xe(e)||ke(e)}function Oe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function Ae(e,r,t){var n,i;if("function"!==pe(e))throw new TypeError(Oe("1SP3c",e));if(arguments.length<2){if(!xe(i=e.length))throw new TypeError(Oe("1SPEX",i))}else if(arguments.length>2){if(n=t,!xe(i=r))throw new TypeError(Oe("1SPAz",i))}else if(xe(r))i=r;else{if(!xe(i=e.length))throw new TypeError(Oe("1SPEX",i));n=r}return function r(t){return o;function o(o){var a=t.slice();return a.push(o),a.length<i?r(a):e.apply(n,a)}}([])}G(Te,"isPrimitive",_e),G(Te,"isObject",Se),G(Ie,"isPrimitive",xe),G(Ie,"isObject",ke);export{Ae as default};
//# sourceMappingURL=mod.js.map
