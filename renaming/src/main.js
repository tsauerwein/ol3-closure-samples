goog.provide('app');

/**
 * @constructor
 */
app.Address = function(street, postalCode, town, country) {
    this.street = street;
    this.postalCode = postalCode;
    this.town = town;
    this.country = country;
};

app.Address.prototype.print = function() {
    console.log(this.street);
    console.log(this.postalCode + ' ' + this.town);
    console.log(this.country);
};

app.run = function() {
    var peter = new app.Address(
        'Pariser Platz', 10117, 'Berlin', 'Germany');
    var mona = new app.Address(
        'Cour Carrée', 75001, 'Paris', 'France');
    peter.print();
    mona.print();
};

app.run();
