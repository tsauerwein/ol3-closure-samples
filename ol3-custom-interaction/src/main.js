goog.provide('app');

goog.require('app.Drag');
goog.require('ol.Feature');
goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.geom.Polygon');
goog.require('ol.layer.Tile');
goog.require('ol.layer.Vector');
goog.require('ol.source.TileJSON');
goog.require('ol.source.Vector');
goog.require('ol.style.Fill');
goog.require('ol.style.Stroke');
goog.require('ol.style.Style');


app.run = function() {
  var polygonFeature = new ol.Feature(
      new ol.geom.Polygon([[[-3e6, -1e6], [-3e6, 1e6],
          [-1e6, 1e6], [-1e6, -1e6], [-3e6, -1e6]]]));

  var map = new ol.Map({
    interactions: ol.interaction.defaults().extend([new app.Drag()]),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.TileJSON({
          url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.json'
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [polygonFeature]
        }),
        style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            width: 3,
            color: [255, 0, 0, 1]
          }),
          fill: new ol.style.Fill({
            color: [0, 0, 255, 0.6]
          })
        })
      })
    ],
    target: 'map',
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  });
};

app.run();
