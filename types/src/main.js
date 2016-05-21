goog.provide('app');
goog.require('app.Point');

app.run = function() {
    var p1 = new app.Point(0, 0);
    console.log(p1.format());
    var p2 = new app.Point(10, 10);
    console.log(p2.format());
    var p3 = p2.clone();
    console.log(p1.distanceTo(p3));

    // type errors
    // var p4 = new app.Point('10', '10');
    // var p5 = new app.Point([0, 0]);
    // console.log(p1.distanceTo(null));
    // console.log(p1.distanceTo({x: 10, y: 10}));
};

app.run();
