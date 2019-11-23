var EMPTY_OBJECT = {};
var EMPTY_ARRAY = [];
var noop = function() {};
var fnEmptyObject = function() {
  return EMPTY_OBJECT;
};

window.google = {
  maps: {
    __gjsload__: noop,
    event: {
      addListener: noop,
    },
    places: {
      AutocompleteService: function() {
        return {
          getPlacePredictions: noop,
        };
      },
    },

    Animation: EMPTY_OBJECT,
    Attribution: EMPTY_OBJECT,
    BicyclingLayer: noop,
    Circle: noop,
    ControlPosition: EMPTY_OBJECT,
    Data: noop,
    DirectionsRenderer: noop,
    DirectionsService: noop,
    DirectionsStatus: EMPTY_OBJECT,
    DistanceMatrixElementStatus: EMPTY_OBJECT,
    DistanceMatrixService: noop,
    DistanceMatrixStatus: EMPTY_OBJECT,
    ElevationService: noop,
    ElevationStatus: EMPTY_OBJECT,
    FusionTablesLayer: noop,
    Geocoder: noop,
    GeocoderLocationType: EMPTY_OBJECT,
    GeocoderStatus: EMPTY_OBJECT,
    GroundOverlay: noop,
    ImageMapType: noop,
    InfoWindow: fnEmptyObject,
    KmlLayer: noop,
    KmlLayerStatus: EMPTY_OBJECT,
    LatLng: function(lat, lng) {
      return {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),

        lat: function() { return this.latitude; },
        lng: function() { return this.longitude; },
      };
    },
    LatLngBounds: function(ne, sw) {
      return {
        getSouthWest: function() { return sw; },
        getNorthEast: function() { return ne; },
        toJSON: () => ({
            south: sw ? (sw.lat || sw.latitude) : 0,
            north: ne ? (ne.lat || ne.latitude) : 0,
            west: sw ? (sw.lng || sw.longitude) : 0,
            east: ne ? (ne.lng || ne.longitude) : 0,
        }),
      };
    },
    Map: function() {
      return {
        //methods
        fitBounds: noop,
        getBounds: noop,
        getCenter: noop,
        getDiv: noop,
        getHeading: noop,
        getMapTypeId: noop,
        getProjection: noop,
        getStreetView: noop,
        getTilt: noop,
        getZoom: noop,
        panBy: noop,
        panTo: noop,
        panToBounds: noop,
        setCenter: noop,
        setHeading: noop,
        setMapTypeId: noop,
        setOptions: noop,
        setStreetView: noop,
        setTilt: noop,
        setZoom: noop,
        controls: EMPTY_OBJECT,
        data: {
          add: noop,
          addListener: noop,
          addGeoJson: noop,
          contains: noop,
          forEach: noop,
          getControlPosition: noop,
          getControls: noop,
          getDrawingMode: noop,
          getFeatureById: noop,
          getMap: noop,
          getStyle: noop,
          loadGeoJson: noop,
          overrideStyle: noop,
          remove: noop,
          revertStyle: noop,
          setControlPosition: noop,
          setControls: noop,
          setDrawingMode: noop,
          setMap: noop,
          setStyle: noop,
          toGeoJson: noop,
          controlPosition: EMPTY_OBJECT,
          controls: EMPTY_ARRAY,

        },
        mapTypes: {
          set: noop,
        },
        overlayMapTypes: {
          clear: noop,
          getArray: noop,
          getAt: noop,
          getLength: noop,
          insertAt: noop,
          pop: noop,
          push: noop,
          removeAt: noop,
          setAt: noop,
        },
      };
    },
    MapTypeControlStyle: EMPTY_OBJECT,
    MapTypeId: {
      HYBRID: '',
      ROADMAP: '',
      SATELLITE: '',
      TERRAIN: '',
    },
    MapTypeRegistry: noop,
    Marker: function() {
      return {
        setMap: noop,
        setTitle: noop,
        setVisible: noop,
        setZIndex: noop,
      };
    },
    MarkerImage: fnEmptyObject,
    MarkerOptions: {
      visible: false,
    },
    MaxZoomService: function() {
      return {
        getMaxZoomAtLatLng: noop,
      };
    },
    MaxZoomStatus: EMPTY_OBJECT,
    MVCArray: noop,
    MVCObject: noop,
    NavigationControlStyle: EMPTY_OBJECT,
    OverlayView: fnEmptyObject,
    Point: fnEmptyObject,
    Polygon: noop,
    Polyline: noop,
    Rectangle: noop,
    SaveWidget: noop,
    ScaleControlStyle: EMPTY_OBJECT,
    Size: fnEmptyObject,
    StreetViewCoverageLayer: noop,
    StreetViewPanorama: noop,
    StreetViewService: noop,
    StreetViewStatus: EMPTY_OBJECT,
    StrokePosition: EMPTY_OBJECT,
    StyledMapType: noop,
    SymbolPath: EMPTY_OBJECT,
    TrafficLayer: noop,
    TransitLayer: noop,
    TransitMode: EMPTY_OBJECT,
    TransitRoutePreference: EMPTY_OBJECT,
    TravelMode: EMPTY_OBJECT,
    UnitSystem: EMPTY_OBJECT,
    ZoomControlStyle: EMPTY_OBJECT,
  },
};
