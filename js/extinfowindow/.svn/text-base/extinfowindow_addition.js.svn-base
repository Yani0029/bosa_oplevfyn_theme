/* $Id: marker.js,v 1.4.2.1 2010/04/08 13:40:19 rooby Exp $ */

/**
 * @file
 * Common marker routines.
 */

/*global $, Drupal, GEvent, GInfoWindowTab, GLatLng, GLatLngBounds */

var ClickMarkerFunc = function (params) {  
    // Local/stored content
    var marker = params.marker;    
    if (marker.text) {
      if (typeof (params.map) != 'undefined' && typeof(Drupal.settings.gmap_extended_markers.ExtInfo) != 'undefined' && Drupal.settings.gmap_extended_markers.ExtInfo == 1) {
        marker.marker.openExtInfoWindow(params.map, "custom_info_window_black", 
          marker.text, {
          beakOffset: 3
        });
      }
      else {
        marker.marker.openInfoWindowHtml(marker.text);
      }
    }
    // AJAX content
    if (marker.rmt) {
      var uri = marker.rmt;
      // If there was a callback, prefix that.
      // (If there wasn't, marker.rmt was the FULL path.)
      if (obj.vars.rmtcallback) {
        uri = obj.vars.rmtcallback + '/' + marker.rmt;
      }
      // @Bevan: I think it makes more sense to do it in this order.
      // @Bevan: I don't like your choice of variable btw, seems to me like
      // @Bevan: it belongs in the map object, or at *least* somewhere in
      // @Bevan: the gmap settings proper...
      //if (!marker.text && Drupal.settings.loadingImage) {
      //  marker.marker.openInfoWindowHtml(Drupal.settings.loadingImage);
      //}
      $.get(uri, {}, function (data) {
        if (typeof (params.map) != 'undefined' && typeof(Drupal.settings.gmap_extended_markers.ExtInfo) != 'undefined' && Drupal.settings.gmap_extended_markers.ExtInfo == 1) {
          marker.marker.openExtInfoWindow(params.map, "custom_info_window_black", 
            data, {
            beakOffset: 3
          });
        }
        else {
          marker.marker.openInfoWindowHtml(data);
        }
      });
    }
    // Tabbed content
    else if (marker.tabs) {
      var infoWinTabs = [];
      for (var m in marker.tabs) {
        if (marker.tabs.hasOwnProperty(m)) {
          infoWinTabs.push(new GInfoWindowTab(m, marker.tabs[m]));
        }
      }
      if (typeof (params.map) != 'undefined' && typeof(Drupal.settings.gmap_extended_markers.ExtInfo) != 'undefined' && Drupal.settings.gmap_extended_markers.ExtInfo == 1) {
        marker.marker.openExtInfoWindow(params.map, "custom_info_window_black", 
          infoWinTabs, {
          beakOffset: 3
        });
      }
      else {
        marker.marker.openInfoWindowHtml(infoWinTabs);
      }
    }
    // No content -- marker is a link
    else if (marker.link) {
      open(marker.link, '_self');
    }
  };

Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  obj.bind('addmarker', function (marker) {        
    GEvent.addListener(marker.marker, 'click', function(){
      obj.change('clickmarker', -1, {'marker': marker, 'map': obj.map});
    });
  });
  
  // Default marker actions.
  obj.unbind('clickmarker');
  
  obj.bind('clickmarker', ClickMarkerFunc);
});
