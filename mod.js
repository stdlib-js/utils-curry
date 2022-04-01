// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,a=Object.prototype,o=a.toString,u=a.__defineGetter__,c=a.__defineSetter__,s=a.__lookupGetter__,f=a.__lookupSetter__;var l=function(r,e,t){var n,i,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(s.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,i&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,e,t.get),v&&c&&c.call(r,e,t.set),r},v=i,p=l,g=n()?v:p;var h=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=h;var d=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,E=y;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",T=_,V=O,x=y;var S=j,k=function(r){var e,t,n;if(null==r)return x.call(r);t=r[V],e=T(r,V);try{r[V]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[V]=t:delete r[V],n},I=w()?k:S,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=w();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},C=d,N=M;var B=m,G=function(r){return C(r)||N(r)},L=M;B(G,"isPrimitive",d),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=e,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;m(ir,"REGEXP",nr());var ar=ir,or=I;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};m(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var sr=cr;var fr=I,lr=ar.REGEXP,vr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pr=function(r){var e,t,n;if(("Object"===(t=fr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return vr(r)?"Buffer":t},gr=pr;var hr=pr;var mr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},dr=function(r){return hr(r).toLowerCase()},br=tr()?dr:mr;var wr=function(r){return"function"===br(r)};var yr=function(r){return"number"==typeof r},Er=Number,jr=Er.prototype.toString;var Pr=I,_r=Er,Or=function(r){try{return jr.call(r),!0}catch(r){return!1}},Tr=w();var Vr=function(r){return"object"==typeof r&&(r instanceof _r||(Tr?Or(r):"[object Number]"===Pr(r)))},xr=yr,Sr=Vr;var kr=m,Ir=function(r){return xr(r)||Sr(r)},Ar=Vr;kr(Ir,"isPrimitive",yr),kr(Ir,"isObject",Ar);var Fr=Ir,Rr=Number.POSITIVE_INFINITY,$r=Er.NEGATIVE_INFINITY,Mr=Math.floor;var Cr=function(r){return Mr(r)===r},Nr=Rr,Br=$r,Gr=Cr;var Lr=function(r){return r<Nr&&r>Br&&Gr(r)},Zr=Fr.isPrimitive,Wr=Lr;var Xr=function(r){return Zr(r)&&Wr(r)},zr=Fr.isObject,Ur=Lr;var Yr=function(r){return zr(r)&&Ur(r.valueOf())},Dr=Xr,qr=Yr;var Hr=m,Jr=function(r){return Dr(r)||qr(r)},Kr=Yr;Hr(Jr,"isPrimitive",Xr),Hr(Jr,"isObject",Kr);var Qr=Jr,re=Qr.isPrimitive;var ee=function(r){return re(r)&&r>0},te=Qr.isObject;var ne=function(r){return te(r)&&r.valueOf()>0},ie=ee,ae=ne;var oe=m,ue=function(r){return ie(r)||ae(r)},ce=ne;oe(ue,"isPrimitive",ee),oe(ue,"isObject",ce);var se=ue;var fe=function(r){return"string"==typeof r},le=String.prototype.valueOf;var ve=I,pe=function(r){try{return le.call(r),!0}catch(r){return!1}},ge=w();var he=function(r){return"object"==typeof r&&(r instanceof String||(ge?pe(r):"[object String]"===ve(r)))},me=fe,de=he;var be=m,we=function(r){return me(r)||de(r)},ye=he;be(we,"isPrimitive",fe),be(we,"isObject",ye);var Ee=we,je=Cr;var Pe=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&je(r.length)&&r.length>=0&&r.length<=9007199254740991};var _e=function(r){return r!=r},Oe=Fr.isPrimitive,Te=_e;var Ve=function(r){return Oe(r)&&Te(r)},xe=Fr.isObject,Se=_e;var ke=function(r){return xe(r)&&Se(r.valueOf())},Ie=Ve,Ae=ke;var Fe=m,Re=function(r){return Ie(r)||Ae(r)},$e=ke;Fe(Re,"isPrimitive",Ve),Fe(Re,"isObject",$e);var Me=Pe,Ce=Qr.isPrimitive,Ne=Ee.isPrimitive,Be=Re.isPrimitive;var Ge=function(r,e,t){var n,i,a;if(!Me(r)&&!Ne(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ce(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ne(r)){if(!Ne(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Be(e)){for(a=i;a<n;a++)if(Be(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Le=Ee.isPrimitive;var Ze=function(r){if(!Le(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},We=Ee.isPrimitive;var Xe=function(r){if(!We(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ze=Ze,Ue=Xe,Ye=Ee.isPrimitive;var De=function(r){return Ye(r)&&r===Ue(r)&&r!==ze(r)},qe=Rr,He=$r;var Je=function(r){return r==r&&r>He&&r<qe},Ke=Qr.isPrimitive;var Qe=function(r){return Ke(r)&&r>=0},rt=Qr.isObject;var et=function(r){return rt(r)&&r.valueOf()>=0},tt=Qe,nt=et;var it=m,at=function(r){return tt(r)||nt(r)},ot=et;it(at,"isPrimitive",Qe),it(at,"isObject",ot);var ut=at.isPrimitive,ct=Ee.isPrimitive;var st=function(r,e){var t,n;if(!ct(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ut(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ft=Qr.isPrimitive,lt=Ee.isPrimitive;var vt=st,pt=function(r,e,t){var n,i;if(!lt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!lt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ft(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var gt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(pt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+vt("0",i):vt("0",i)+r,n&&(r="-"+r)),r},ht=De,mt=Xe,dt=Ze,bt=Je,wt=Fr.isPrimitive,yt=gt;var Et=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!bt(n)){if(!wt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=yt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=yt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ht(r.specifier)?mt(t):dt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},jt=Ee.isPrimitive,Pt=/[-\/\\^$*+?.()|[\]{}]/g;var _t=function(r){var e,t;if(!jt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Pt,"\\$&"):(e=(e=r.substring(1,t)).replace(Pt,"\\$&"),r=r[0]+e+r.substring(t))},Ot=RegExp.prototype.exec;var Tt=I,Vt=function(r){try{return Ot.call(r),!0}catch(r){return!1}},xt=w();var St=_t,kt=wr,It=Ee.isPrimitive,At=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?Vt(r):"[object RegExp]"===Tt(r)))};var Ft=De,Rt=Xe,$t=Ze,Mt=function(r,e,t){if(!It(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(It(e))e=St(e),e=new RegExp(e,"g");else if(!At(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!It(t)&&!kt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ct=Je,Nt=Fr.isPrimitive,Bt=function(r){return Math.abs(r)},Gt=/e\+(\d)$/,Lt=/e-(\d)$/,Zt=/^(\d+)$/,Wt=/^(\d+)e/,Xt=/\.0$/,zt=/\.0*e/,Ut=/(\..*[^0])0*e/;var Yt=function(r){var e,t,n=parseFloat(r.arg);if(!Ct(n)){if(!Nt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Bt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Mt(t,Ut,"$1e"),t=Mt(t,zt,"e"),t=Mt(t,Xt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Mt(t,Gt,"e+0$1"),t=Mt(t,Lt,"e-0$1"),r.alternate&&(t=Mt(t,Zt,"$1."),t=Mt(t,Wt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Ft(r.specifier)?Rt(t):$t(t)},Dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var qt=st;var Ht=Ee.isPrimitive,Jt=Ge,Kt=_e,Qt=Et,rn=Yt,en=function(r){var e,t,n,i,a;for(e=0,n=[],a=Dt.exec(r);a;)(t=r.slice(e,Dt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Dt.lastIndex,a=Dt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},tn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+qt(" ",n):qt(" ",n)+r},nn=gt,an=String.fromCharCode;var on=wr,un=se.isPrimitive,cn=function(r){var e,t,n,i,a,o,u,c,s;if(!Ht(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=en(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Ht(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Jt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Kt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Kt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Kt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Kt(a)?String(n.arg):an(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=rn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=nn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=tn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var sn=function(r,e,t){var n,i;if(!on(r))throw new TypeError(cn("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)i=r.length;else if(arguments.length>2){if(n=t,!un(i=e))throw new TypeError(cn("invalid argument. Arity argument must be a positive integer. Value: `%s`.",i))}else un(e)?i=e:(i=r.length,n=e);return a([]);function a(e){return function(t){var o=e.slice();if(o.push(t),o.length<i)return a(o);return r.apply(n,o)}}};export{sn as default};
//# sourceMappingURL=mod.js.map
