# exports sample

Because the Google Closure compiler renames class and function names,
the compiled code could not be called from outside (like in this example
from JavaScript code embedded in HTML). By using the `@export` annotation
and the compiler flag `generate_exports` a method can be exported during
the compilation.

To build the project, run:

    make build

Open the the file `dist/index.html` to check that the exported function can be
called correctly.
