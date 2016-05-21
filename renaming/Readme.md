# renaming sample

To build the project, run:

    make build

This compiles the source file `src/main.js` to `dist/app.js`. If you
open the compiled file, it's hard to see what the compiler actually
did. By using the [pretty-print flag](https://developers.google.com/closure/compiler/docs/api-ref#formatting),
the compiler will add line breaks and indentation.

To get a pretty-printed build, run:

    make build-debug

Open `dist/app-debug.js` and you can notice the following:

* The class name, method, parameter and property names were renamed.
* The instance method `app.Address.prototype.print` was turned
  into a static function.
* The local variable `peter` was removed.
