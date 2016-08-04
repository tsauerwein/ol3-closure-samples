# ES6

The Google Closure Compiler supports ES6. By setting `language_in` to
`ECMASCRIPT6_STRICT` and `language_out` to `ECMASCRIPT5_STRICT`, the
compiler will transpile from ES6 to ES5. See also 
[Status of ES6 support in Closure Compiler](https://github.com/google/closure-compiler/wiki/ECMAScript6).

To build the project, run:

    make build

This compiles the source file `src/main.js` to `dist/app.js`.

To launch the development server, run:

    make serve

And then open [http://localhost:3000/](http://localhost:3000/).
