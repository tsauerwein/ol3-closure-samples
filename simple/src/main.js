goog.provide('app');

app.printHello = function() {
    console.log('Hello');
};

app.someUnusedFunction = function() {
    console.log('Unused function');
};

app.run = function() {
    app.printHello();
};

app.run();
