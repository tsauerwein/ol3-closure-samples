goog.provide('app.Point');

/**
 * @constructor
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {number=} opt_z The z coordinate.
 */
app.Point = function(x, y, opt_z) {
    this.x = x;
    this.y = y;
    this.z = opt_z;
};

/**
 * @return {string} Formatted point.
 */
app.Point.prototype.format = function() {
    if (this.z !== undefined) {
        return '[' + this.x + ', ' + this.y + ', ' + this.z + ']';
    } else {
        return '[' + this.x + ', ' + this.y + ']';
    }
};

/**
 * @param {!app.Point} other An other point.
 * @return {number} The distance.
 */
app.Point.prototype.distanceTo = function(other) {
    return Math.sqrt(
        Math.pow(this.x - other.x, 2) +
        Math.pow(this.y - other.y, 2)
    );
};


/**
 * There is no @return tag, but the compiler figures out
 * what type this method returns.
 */
app.Point.prototype.clone = function() {
    return new app.Point(this.x, this.y, this.z);
};
