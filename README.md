<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# curry

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Transform a function into a sequence of functions each accepting a single argument.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
curry = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-curry@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var curry = require( 'path/to/vendor/umd/utils-curry/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-curry@v0.1.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.curry;
})();
</script>
```

#### curry( fcn\[, arity]\[, thisArg] )

Transforms a function into a sequence of functions each accepting a single argument.

```javascript
function add( x, y ) {
    return x + y;
}

var fcn = curry( add );

var sum = fcn( 2 )( 3 );
// returns 5
```

By default, `arity` is equal to `fcn.length`. For functions without explicit parameters, provide an `arity` argument.

```javascript
function add() {
    return arguments[ 0 ] + arguments[ 1 ];
}

var fcn = curry( add, 2 );

var sum = fcn( 2 )( 3 );
// returns 5
```

To specify the curried function execution context, provide a `thisArg` argument.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var obj = {
    'name': 'Ada',
    'greet': function greet( word1, word2 ) {
        return word1 + ' ' + word2 + ', ' + this.name + '!';
    }
};

var fcn = curry( obj.greet, obj );

var str = fcn( 'Hello' )( 'there' );
// returns 'Hello there, Ada!'
```

The function supports providing both an `arity` and execution context.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var obj = {
    'name': 'Ada',
    'greet': function greet() {
        return arguments[ 0 ] + ' ' + arguments[ 1 ] + ', ' + this.name + '!';
    }
};

var fcn = curry( obj.greet, 2, obj );

var str = fcn( 'Hello' )( 'there' );
// returns 'Hello there, Ada!'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Until return value resolution, each invocation returns a new partially applied curry function.

    ```javascript
    function add( x, y, z ) {
        return x + y + z;
    }

    var fcn = curry( add );

    var s0 = fcn( 1 )( 2 )( 3 );
    // returns 6

    s0 = fcn( -1 )( -2 )( -3 );
    // returns -6

    s0 = fcn( 10 )( 20 )( 30 );
    // returns 60

    // Return a partially applied curry function:
    var f1 = fcn( 3 );

    var s1 = f1( 4 )( 5 );
    // returns 12

    s1 = f1( 6 )( 7 );
    // returns 16

    s1 = f1( 8 )( 9 );
    // returns 20

    // Return a partially applied curry function:
    var f2 = fcn( 4 )( 5 );

    var s2 = f2( 6 );
    // returns 15

    s2 = f2( 70 );
    // returns 79

    s2 = f2( 700 );
    // returns 709
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-curry@v0.1.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var fcn;
var out;
var i;

function add( x, y, z, w, t, s ) {
    return x + y + z + w + t + s;
}

fcn = curry( add );
out = fcn;
for ( i = 0; i < add.length; i++ ) {
    out = out( i*10 );
}
console.log( out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-curry-right`][@stdlib/utils/curry-right]</span><span class="delimiter">: </span><span class="description">transform a function into a sequence of functions each accepting a single argument.</span>
-   <span class="package-name">[`@stdlib/utils-uncurry`][@stdlib/utils/uncurry]</span><span class="delimiter">: </span><span class="description">transform a curried function into a function invoked with multiple arguments.</span>
-   <span class="package-name">[`@stdlib/utils-uncurry-right`][@stdlib/utils/uncurry-right]</span><span class="delimiter">: </span><span class="description">transform a curried function into a function invoked with multiple arguments.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-curry.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-curry

[test-image]: https://github.com/stdlib-js/utils-curry/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/utils-curry/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-curry/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-curry?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-curry.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-curry/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-curry/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-curry/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-curry/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-curry/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-curry/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/curry-right]: https://github.com/stdlib-js/utils-curry-right/tree/umd

[@stdlib/utils/uncurry]: https://github.com/stdlib-js/utils-uncurry/tree/umd

[@stdlib/utils/uncurry-right]: https://github.com/stdlib-js/utils-uncurry-right/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
