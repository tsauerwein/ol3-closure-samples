goog.provide('app');

function hello(o) {
    alert('Hello, ' + o.firstName + ' ' + o.lastName);
}

app.run = function() {
    var person = {firstName: 'New', lastName: 'user'};
    hello(person);
    console.log(person);
};

app.run();
