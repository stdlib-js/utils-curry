// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function s(s,n,i){var o,l;if(!e(s))throw new TypeError(t("1SP3c",s));if(arguments.length<2){if(l=s.length,!r(l))throw new TypeError(t("1SPEX",l))}else if(arguments.length>2){if(o=i,!r(l=n))throw new TypeError(t("1SPAz",l))}else if(r(n))l=n;else{if(l=s.length,!r(l))throw new TypeError(t("1SPEX",l));o=n}return function e(r){return t;function t(t){var n=r.slice();return n.push(t),n.length<l?e(n):s.apply(o,n)}}([])}export{s as default};
//# sourceMappingURL=index.mjs.map
