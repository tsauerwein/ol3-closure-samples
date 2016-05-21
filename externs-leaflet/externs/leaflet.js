/**
 * @externs
 * Very basic and incomplete externs for Leaflet.
 */


/**
 * @const
 */
var L = {};

/**
 * @param {string} div
 * @return {LeafletMap}
 */
L.map = function(div) {};


/**
 * @constructor
 */
var LeafletMap = function() {};

/**
 * @param {Array.<number>} coord
 * @param {number} z
 * @return {LeafletMap}
 */
LeafletMap.prototype.setView = function(coord, z) {};


/**
 * @param {string} url
 * @param {Object} options
 * @return {LeafletTileLayer}
 */
L.tileLayer = function(url, options) {};

/**
 * @constructor
 */
var LeafletTileLayer = function() {};

/**
 * @param {LeafletMap} map
 * @return {LeafletTileLayer}
 */
LeafletTileLayer.prototype.addTo = function(map) {};
