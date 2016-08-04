goog.provide('app');
goog.require('Point');

app.run = function() {
    let p1 = new Point(0, 0);
    console.log(p1.format());
    let p2 = new Point(10, 10);
    console.log(p2.format());
    let p3 = p2.clone();
    console.log(p1.distanceTo(p3));
};

app.run();
