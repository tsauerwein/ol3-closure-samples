# externs sample

When using an external library within an application that is compiled in
`ADVANCED` mode, the compiler would also rename calls to the external library.

To avoid the renaming and also to make the compiler aware of the types
of the external library, `externs` files can be provided. See also
[Declaring Externs](Declaring Externs).

In this example, a very basic externs files for Leaflet was written. Externs files
for other projects are available here:

* https://github.com/google/closure-compiler/tree/master/contrib/externs
* https://github.com/google/closure-compiler/tree/master/externs
* https://github.com/openlayers/ol3/tree/master/externs
* https://github.com/camptocamp/ngeo/tree/master/externs


To build the project, run:

    make build

Open the the file `dist/index.html` to check that the external functions are
called correctly.
