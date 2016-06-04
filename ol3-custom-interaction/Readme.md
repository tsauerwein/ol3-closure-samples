# OpenLayers 3 custom interaction sample

This example demonstrates how existing OpenLayers classes can be extended.
This makes it possible to use classes or methods that are not exported in
the API. But be aware that these classes and methods may change in
OpenLayers without further notice. Though the compiler will tell you if a
method no longer exists or if the signature has changed.

To build the project, run:

    make build

This compiles the source files to `dist/app.js`.

To launch the development server, run:

    make serve

And then open [http://localhost:3000/](http://localhost:3000/).
