goog.provide('Point');

var Point = class {
    /**
     * @param {number} x The x coordinate.
     * @param {number} y The y coordinate.
     * @param {number=} opt_z The z coordinate.
     */
    constructor(x, y, opt_z) {
        this.x = x;
        this.y = y;
        this.z = opt_z;
    }

    /**
     * @return {string} Formatted point.
     */
    format() {
        if (this.z !== undefined) {
            return `[${this.x},  ${this.y}, ${this.z}]`;
        } else {
            return `[${this.x},  ${this.y}]`;
        }
    }

    /**
     * @param {!Point} other An other point.
     * @return {number} The distance.
     */
    distanceTo(other) {
        return Math.sqrt(
            Math.pow(this.x - other.x, 2) +
            Math.pow(this.y - other.y, 2)
        );
    }


    /**
     * There is no @return tag, but the compiler figures out
     * what type this method returns.
     */
    clone() {
        return new Point(this.x, this.y, this.z);
    }
}
