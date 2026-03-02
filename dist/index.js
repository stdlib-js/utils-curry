"use strict";var p=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var l=p(function(b,o){
var c=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,a=require('@stdlib/error-tools-fmtprodmsg/dist');function f(t,r,g){var u,e;if(!c(t))throw new TypeError(a('1SP3c',t));if(arguments.length<2){if(e=t.length,!n(e))throw new TypeError(a('1SPEX',e))}else if(arguments.length>2){if(e=r,u=g,!n(e))throw new TypeError(a('1SPAz',e))}else if(n(r))e=r;else{if(e=t.length,!n(e))throw new TypeError(a('1SPEX',e));u=r}return s([]);function s(m){return v;function v(h){var i=m.slice();return i.push(h),i.length<e?s(i):t.apply(u,i)}}}o.exports=f
});var w=l();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
