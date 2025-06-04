var EMPTY_OBJECT = {};
var EMPTY_ARRAY = [];
var noop = function() {};
var fnEmptyObject = function() {
  return EMPTY_OBJECT;
};

window.google = {
  maps: {
    __gjsload__: noop,
    importLibrary: noop,
    event: {
      addListener: noop,
      clearInstanceListeners: noop,
      clearListeners: noop,
      hasListeners: function() { return false; },
      removeListener: noop,
      trigger: noop,
    },
    places: {
      AutocompleteService: function() {
        return {
          getPlacePredictions: function(request, callback) {
            if (callback) {
              callback(EMPTY_ARRAY, google.maps.places.PlacesServiceStatus.OK);
            } else {
              return Promise.resolve({ predictions: EMPTY_ARRAY });
            }
          },
          getQueryPredictions: function(request, callback) {
            if (callback) {
              callback(EMPTY_ARRAY, google.maps.places.PlacesServiceStatus.OK);
            } else {
              return Promise.resolve({ predictions: EMPTY_ARRAY });
            }
          }
        };
      },
      PlacesServiceStatus: {
        OK: 'OK',
        ZERO_RESULTS: 'ZERO_RESULTS',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        INVALID_REQUEST: 'INVALID_REQUEST',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        NOT_FOUND: 'NOT_FOUND'
      },
      PlacesService: function(attrContainer) {
        return {
          findPlaceFromPhoneNumber: function(request, callback) { callback(EMPTY_ARRAY, google.maps.places.PlacesServiceStatus.OK); },
          findPlaceFromQuery: function(request, callback) { callback(EMPTY_ARRAY, google.maps.places.PlacesServiceStatus.OK); },
          getDetails: function(request, callback) { callback(fnEmptyObject(), google.maps.places.PlacesServiceStatus.OK); },
          nearbySearch: function(request, callback) { callback(EMPTY_ARRAY, { nextPage: noop, hasNextPage: false }, google.maps.places.PlacesServiceStatus.OK); },
          textSearch: function(request, callback) { callback(EMPTY_ARRAY, { nextPage: noop, hasNextPage: false }, google.maps.places.PlacesServiceStatus.OK); }
        };
      },
      PlaceAutocompleteElement: function(options) { return { addEventListener: noop, getPlace: fnEmptyObject, setLocationBias: noop, setLocationRestriction: noop, setTypes: noop }; },
      PlaceDetailsElement: function(options) { return { addEventListener: noop, place: null }; },
      PlaceDirectionsButton: function(options) { return { addEventListener: noop, map: null, place: null, travelMode: null }; },
      PlaceMediaElement: function(options) { return { addEventListener: noop, photos: EMPTY_ARRAY }; },
      PlaceReviewsElement: function(options) { return { addEventListener: noop, reviews: EMPTY_ARRAY }; },
      PriceLevel: { FREE: 'FREE', INEXPENSIVE: 'INEXPENSIVE', MODERATE: 'MODERATE', EXPENSIVE: 'EXPENSIVE', VERY_EXPENSIVE: 'VERY_EXPENSIVE' },
      BusinessStatus: { OPERATIONAL: 'OPERATIONAL', CLOSED_TEMPORARILY: 'CLOSED_TEMPORARILY', CLOSED_PERMANENTLY: 'CLOSED_PERMANENTLY' },
    },
    controls: {
      "right_bottom": EMPTY_ARRAY
    },

    Animation: { BOUNCE: 1, DROP: 2 },
    Attribution: EMPTY_OBJECT,
    BicyclingLayer: function() { return { getMap:fnEmptyObject, setMap:noop }; },
    Circle: function(options) { return { getBounds:fnEmptyObject, getCenter:function() {return new google.maps.LatLng(0,0);}, getDraggable:function(){return false;}, getEditable:function(){return false;}, getMap:fnEmptyObject, getRadius:function(){return 0;}, getVisible:function(){return true;}, setCenter:noop, setDraggable:noop, setEditable:noop, setMap:noop, setOptions:noop, setRadius:noop, setVisible:noop, addListener:noop }; },
    ControlPosition: {
      TOP_LEFT: 'top_left', TOP_CENTER: 'top_center', TOP_RIGHT: 'top_right',
      LEFT_TOP: 'left_top', LEFT_CENTER: 'left_center', LEFT_BOTTOM: 'left_bottom',
      RIGHT_TOP: 'right_top', RIGHT_CENTER: 'right_center', RIGHT_BOTTOM: 'right_bottom',
      BOTTOM_LEFT: 'bottom_left', BOTTOM_CENTER: 'bottom_center', BOTTOM_RIGHT: 'bottom_right',
      BLOCK_START_INLINE_START: 'block_start_inline_start', BLOCK_START_INLINE_CENTER: 'block_start_inline_center', BLOCK_START_INLINE_END: 'block_start_inline_end',
      INLINE_START_BLOCK_START: 'inline_start_block_start', INLINE_START_BLOCK_CENTER: 'inline_start_block_center', INLINE_START_BLOCK_END: 'inline_start_block_end',
      BLOCK_END_INLINE_START: 'block_end_inline_start', BLOCK_END_INLINE_CENTER: 'block_end_inline_center', BLOCK_END_INLINE_END: 'block_end_inline_end',
      INLINE_END_BLOCK_START: 'inline_end_block_start', INLINE_END_BLOCK_CENTER: 'inline_end_block_center', INLINE_END_BLOCK_END: 'inline_end_block_end'
    },
    Data: function(options) { return { add:function(feature){ return new google.maps.Data.Feature(feature);}, addGeoJson:noop, contains:function(feature){return false;}, forEach:noop, getControlPosition:fnEmptyObject, getControls:function(){return EMPTY_ARRAY;}, getDrawingMode:function(){return null;}, getFeatureById:function(id){return new google.maps.Data.Feature();}, getMap:fnEmptyObject, getStyle:fnEmptyObject, loadGeoJson:noop, overrideStyle:noop, remove:noop, revertStyle:noop, setControlPosition:noop, setControls:noop, setDrawingMode:noop, setMap:noop, setStyle:noop, toGeoJson:function(callback){callback(EMPTY_OBJECT);}, addListener:noop }; },
    DirectionsRenderer: function(options) { return { getDirections: fnEmptyObject, getMap: fnEmptyObject, getPanel: fnEmptyObject, getRouteIndex: function() { return 0; }, setDirections: noop, setMap: noop, setOptions: noop, setPanel: noop, setRouteIndex: noop, addListener: noop }; },
    DirectionsService: function() { return { route: function(request, callback) { callback({ routes: [ {legs:[{steps:[], distance: {text:'', value:0}, duration:{text:'',value:0}, end_address:'', start_address:''}] , overview_path:[], warnings:[], copyrights:'' } ] }, google.maps.DirectionsStatus.OK); } }; },
    DirectionsStatus: { OK: 'OK', UNKNOWN_ERROR: 'UNKNOWN_ERROR', OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT', REQUEST_DENIED: 'REQUEST_DENIED', INVALID_REQUEST: 'INVALID_REQUEST', ZERO_RESULTS: 'ZERO_RESULTS', MAX_WAYPOINTS_EXCEEDED: 'MAX_WAYPOINTS_EXCEEDED', NOT_FOUND: 'NOT_FOUND' },
    DistanceMatrixElementStatus: { OK: 'OK', NOT_FOUND: 'NOT_FOUND', ZERO_RESULTS: 'ZERO_RESULTS' },
    DistanceMatrixService: function() { return { getDistanceMatrix: function(request, callback) { callback({rows:[], originAddresses:[], destinationAddresses:[]}, google.maps.DistanceMatrixStatus.OK); } }; },
    DistanceMatrixStatus: { OK: 'OK', INVALID_REQUEST: 'INVALID_REQUEST', OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT', REQUEST_DENIED: 'REQUEST_DENIED', UNKNOWN_ERROR: 'UNKNOWN_ERROR', MAX_ELEMENTS_EXCEEDED: 'MAX_ELEMENTS_EXCEEDED', MAX_DIMENSIONS_EXCEEDED: 'MAX_DIMENSIONS_EXCEEDED' },
    ElevationService: function() { return { getElevationAlongPath: function(request, callback) { callback(EMPTY_ARRAY, google.maps.ElevationStatus.OK); }, getElevationForLocations: function(request, callback) { callback(EMPTY_ARRAY, google.maps.ElevationStatus.OK); } }; },
    ElevationStatus: { OK: 'OK', INVALID_REQUEST: 'INVALID_REQUEST', OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT', REQUEST_DENIED: 'REQUEST_DENIED', UNKNOWN_ERROR: 'UNKNOWN_ERROR' },
    FusionTablesLayer: function(options) { console.warn('FusionTablesLayer is deprecated and non-functional.'); return {setMap: noop, getMap:noop}; },
    Geocoder: function() { return { geocode: function(request, callback) { callback(EMPTY_ARRAY, google.maps.GeocoderStatus.OK); } }; },
    GeocoderLocationType: { ROOFTOP: 'ROOFTOP', RANGE_INTERPOLATED: 'RANGE_INTERPOLATED', GEOMETRIC_CENTER: 'GEOMETRIC_CENTER', APPROXIMATE: 'APPROXIMATE' },
    GeocoderStatus: { OK: 'OK', ERROR: 'ERROR', INVALID_REQUEST: 'INVALID_REQUEST', OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT', REQUEST_DENIED: 'REQUEST_DENIED', UNKNOWN_ERROR: 'UNKNOWN_ERROR', ZERO_RESULTS: 'ZERO_RESULTS' },
    GroundOverlay: function(url, bounds, opts) { return { getBounds:function(){ return new google.maps.LatLngBounds();}, getMap:fnEmptyObject, getOpacity:function(){return 1;}, getUrl:function(){return url;}, setMap:noop, setOpacity:noop, addListener:noop }; },
    ImageMapType: function(options) { return { getOpacity:function(){return 1;}, getTile:function(tileCoord, zoom, ownerDocument){ return ownerDocument.createElement('div');}, releaseTile:noop, setOpacity:noop, addListener:noop, alt:(options && options.alt) ||'', maxZoom:(options && options.maxZoom) ||20, minZoom:(options && options.minZoom) ||0, name:(options && options.name) ||'', projection:null, radius:6378137, tileSize: (options && options.tileSize) || new google.maps.Size(256,256) }; },
    InfoWindow: function(opts) {
      return {
        addListener: noop,
        close: noop,
        focus: noop,
        getContent: fnEmptyObject,
        getHeaderContent: fnEmptyObject,
        getHeaderDisabled: function(){return false;},
        getPosition: function(){ return new google.maps.LatLng(0,0); },
        getZIndex: function(){return 0;},
        open: noop,
        setContent: noop,
        setHeaderContent: noop,
        setHeaderDisabled: noop,
        setOptions: noop,
        setPosition: noop,
        setZIndex: noop,
        getIsOpen: function(){ return false; }
      };
    },
    KmlLayer: function(options) { return { getDefaultViewport:function(){return new google.maps.LatLngBounds();}, getMap:fnEmptyObject, getMetadata:fnEmptyObject, getStatus:function(){return google.maps.KmlLayerStatus.OK;}, getUrl:function(){return '';}, getZIndex:function(){return 0;}, setMap:noop, setOptions:noop, setUrl:noop, setZIndex:noop, addListener:noop }; },
    KmlLayerStatus: { OK: 'OK', DOCUMENT_NOT_FOUND: 'DOCUMENT_NOT_FOUND', DOCUMENT_TOO_LARGE: 'DOCUMENT_TOO_LARGE', FETCH_ERROR: 'FETCH_ERROR', INVALID_DOCUMENT: 'INVALID_DOCUMENT', INVALID_REQUEST: 'INVALID_REQUEST', LIMITS_EXCEEDED: 'LIMITS_EXCEEDED', TIMED_OUT: 'TIMED_OUT', UNKNOWN: 'UNKNOWN' },
    LatLng: function(lat, lng) {
      return {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        equals: noop,
        lat: function() { return this.latitude; },
        lng: function() { return this.longitude; },
        toJSON: function() { return {lat: this.latitude, lng: this.longitude}; },
        toString: function() { return '(' + this.latitude + ', ' + this.longitude + ')'; },
        toUrlValue: function(precision) { return this.latitude.toFixed(precision||6) + ',' + this.longitude.toFixed(precision||6); }
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
        union: noop,
        extend: noop,
        contains: function(latLng) { return false; },
        equals: function(other) { return false; },
        getCenter: function() { return new google.maps.LatLng(0,0); },
        intersects: function(other) { return false; },
        isEmpty: function() { return !this.ne && !this.sw; },
        toSpan: function() { return new google.maps.LatLng(0,0); },
        toString: function() { return '('+this.getSouthWest().toString()+', '+this.getNorthEast().toString()+')'; },
        toUrlValue: function(precision) { return this.getSouthWest().toUrlValue(precision) + ',' + this.getNorthEast().toUrlValue(precision); },
      };
    },
    LatLngAltitude: function(lat, lng, altitude) {
      return {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        altitude: parseFloat(altitude),
        equals: noop,
        toJSON: function() { return {lat: this.lat, lng: this.lng, altitude: this.altitude}; }
      };
    },
    Map: function() {
      return {
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
        getClickableIcons: function() { return true; },
        getDatasetFeatureLayer: fnEmptyObject,
        getFeatureLayer: fnEmptyObject,
        getHeadingInteractionEnabled: function() { return true; },
        getInternalUsageAttributionIds: function() { return EMPTY_ARRAY; },
        getMapCapabilities: fnEmptyObject,
        getRenderingType: function() { return 'RASTER'; },
        getTiltInteractionEnabled: function() { return true; },
        moveCamera: noop,
        setClickableIcons: noop,
        setHeadingInteractionEnabled: noop,
        setRenderingType: noop,
        setTiltInteractionEnabled: noop,
        controls: {
          "right_bottom": EMPTY_ARRAY
        },
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
    MapElement: function(options) {
      return {
        center: (options && options.center) || null,
        mapId: (options && options.mapId) || null,
        zoom: (options && options.zoom) || null,
        innerMap: new google.maps.Map(options),
        addEventListener: noop,
        removeEventListener: noop
      };
    },
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
        setIcon: noop,
        addListener: noop,
        getPosition: noop,
        getAnimation: fnEmptyObject,
        getClickable: function() { return true; },
        getCursor: fnEmptyObject,
        getDraggable: function() { return false; },
        getIcon: fnEmptyObject,
        getLabel: fnEmptyObject,
        getOpacity: function() { return 1; },
        getShape: fnEmptyObject,
      };
    },
    MarkerImage: fnEmptyObject,
    MarkerOptions: {
      visible: false,
    },
    MaxZoomService: function() { return { getMaxZoomAtLatLng: function(latlng, callback) { callback({status: google.maps.MaxZoomStatus.OK, zoom: 20}); } }; },
    MaxZoomStatus: { OK: 'OK', ERROR: 'ERROR' },
    MVCObject: function() {
      return {
        addListener: noop,
        bindTo: noop,
        get: noop,
        notify: noop,
        set: noop,
        setValues: noop,
        unbind: noop,
        unbindAll: noop
      };
    },
    MVCArray: function() {
      var arr = [];
      return {
        clear: noop,
        forEach: function(callback) { arr.forEach(callback); },
        getArray: function() { return arr; },
        getAt: function(i) { return arr[i]; },
        getLength: function() { return arr.length; },
        insertAt: function(i, elem) { arr.splice(i, 0, elem); },
        pop: function() { return arr.pop(); },
        push: function(elem) { arr.push(elem); return arr.length; },
        removeAt: function(i) { var elem = arr[i]; arr.splice(i, 1); return elem; },
        setAt: function(i, elem) { arr[i] = elem; },
        addListener: noop
      };
    },
    NavigationControlStyle: EMPTY_OBJECT,
    OverlayView: function() { },
    Point: function(x,y){ return {x:x, y:y, equals:function(other){return this.x === other.x && this.y === other.y;}, toString:function(){return '('+this.x+', '+this.y+')';}}; },
    Polygon: function(options) { return { getDraggable:function(){return false;}, getEditable:function(){return false;}, getMap:fnEmptyObject, getPath:function(){return new google.maps.MVCArray();}, getPaths:function(){return new google.maps.MVCArray();}, getVisible:function(){return true;}, setDraggable:noop, setEditable:noop, setMap:noop, setOptions:noop, setPath:noop, setPaths:noop, setVisible:noop, addListener:noop }; },
    Polyline: function(options) { return { getDraggable:function(){return false;}, getEditable:function(){return false;}, getMap:fnEmptyObject, getPath:function(){return new google.maps.MVCArray();}, getVisible:function(){return true;}, setDraggable:noop, setEditable:noop, setMap:noop, setOptions:noop, setPath:noop, setVisible:noop, addListener:noop }; },
    Rectangle: function(options) { return { getBounds:function(){return new google.maps.LatLngBounds();}, getDraggable:function(){return false;}, getEditable:function(){return false;}, getMap:fnEmptyObject, getVisible:function(){return true;}, setBounds:noop, setDraggable:noop, setEditable:noop, setMap:noop, setOptions:noop, setVisible:noop, addListener:noop }; },
    ScaleControlStyle: EMPTY_OBJECT,
    Size: function(width,height,widthUnit,heightUnit){ return {width:width, height:height, equals:function(other){return this.width === other.width && this.height === other.height;}, toString:function(){return '('+this.width+', '+this.height+')';}}; },
    StreetViewCoverageLayer: function() { return { getMap:fnEmptyObject, setMap:noop }; },
    StreetViewPanorama: function(container, opts) { return { focus:noop, getLinks:function(){return EMPTY_ARRAY;}, getLocation:fnEmptyObject, getMotionTracking:function(){return false;}, getPano:function(){return '';}, getPhotographerPov:fnEmptyObject, getPosition:function(){return new google.maps.LatLng(0,0);}, getPov:function(){return {heading:0, pitch:0};}, getStatus:function(){return google.maps.StreetViewStatus.OK;}, getVisible:function(){return true;}, getZoom:function(){return 1;}, registerPanoProvider:noop, setLinks:noop, setMotionTracking:noop, setOptions:noop, setPano:noop, setPosition:noop, setPov:noop, setVisible:noop, setZoom:noop, addListener:noop, controls: EMPTY_ARRAY }; },
    StreetViewService: function() { return { getPanorama: function(request, callback) { callback(fnEmptyObject(), google.maps.StreetViewStatus.OK); } }; },
    StreetViewStatus: { OK: 'OK', ZERO_RESULTS: 'ZERO_RESULTS', UNKNOWN_ERROR: 'UNKNOWN_ERROR' },
    StreetViewPreference: { BEST: 'best', NEAREST: 'nearest' },
    StreetViewSource: { DEFAULT: 'default', GOOGLE: 'google', OUTDOOR: 'outdoor' },
    StrokePosition: { CENTER:0, INSIDE:1, OUTSIDE:2 },
    StyledMapType: function(styles, options) { return { getTile:function(tileCoord, zoom, ownerDocument){ return ownerDocument.createElement('div');}, releaseTile:noop, alt:(options && options.alt) ||'', maxZoom:(options && options.maxZoom) ||20, minZoom:(options && options.minZoom) ||0, name:(options && options.name) ||'' }; },
    SymbolPath: { CIRCLE: 0, FORWARD_CLOSED_ARROW: 1, FORWARD_OPEN_ARROW: 2, BACKWARD_CLOSED_ARROW: 3, BACKWARD_OPEN_ARROW: 4 },
    TrafficLayer: function(options) { return { getMap:fnEmptyObject, setMap:noop, setOptions:noop }; },
    TransitLayer: function(options) { return { getMap:fnEmptyObject, setMap:noop }; },
    TransitMode: EMPTY_OBJECT,
    TransitRoutePreference: EMPTY_OBJECT,
    TravelMode: { DRIVING: 'DRIVING', WALKING: 'WALKING', BICYCLING: 'BICYCLING', TRANSIT: 'TRANSIT' },
    UnitSystem: {
      METRIC: 0,
      IMPERIAL: 1
    },
    ZoomControlStyle: EMPTY_OBJECT,
    Settings: function() {},
    marker: {},
    Place: function(options) {
      this.id = (options && options.id) || null;
      this.displayName = '';
      this.formattedAddress = '';
      this.location = null;
      this.accessibilityOptions = null; this.addressComponents = EMPTY_ARRAY; this.adrFormatAddress = ''; this.allowsDogs = null; this.attributions = EMPTY_ARRAY; this.businessStatus = null; this.editorialSummary = null; this.evChargeOptions = null; this.fuelOptions = null; this.googleMapsURI = ''; this.iconBackgroundColor = ''; this.internationalPhoneNumber = ''; this.nationalPhoneNumber = ''; this.openingHours = null; this.regularOpeningHours = null; this.parkingOptions = null; this.paymentOptions = null; this.photos = EMPTY_ARRAY; this.plusCode = null; this.priceLevel = null; this.rating = null; this.reviews = EMPTY_ARRAY; this.servesBeer = null; this.types = EMPTY_ARRAY; this.userRatingCount = null; this.utcOffsetMinutes = null; this.viewport = null; this.websiteURI = '';
      return this;
    },
    drawing: {},
    visualization: {},
    journeySharing: {},
    maps3d: {},
    geometry: {},
    ColorScheme: { LIGHT: 'LIGHT', DARK: 'DARK', FOLLOW_SYSTEM: 'FOLLOW_SYSTEM' },
    RenderingType: { RASTER: 'RASTER', VECTOR: 'VECTOR', UNINITIALIZED: 'UNINITIALIZED' },
    FeatureType: { ADMINISTRATIVE_AREA_LEVEL_1: 'ADMINISTRATIVE_AREA_LEVEL_1', ADMINISTRATIVE_AREA_LEVEL_2: 'ADMINISTRATIVE_AREA_LEVEL_2', COUNTRY: 'COUNTRY', DATASET: 'DATASET', LOCALITY: 'LOCALITY', POSTAL_CODE: 'POSTAL_CODE', SCHOOL_DISTRICT: 'SCHOOL_DISTRICT' },
    MapsNetworkErrorEndpoint: { DIRECTIONS_ROUTE: 'DIRECTIONS_ROUTE', DISTANCE_MATRIX: 'DISTANCE_MATRIX', ELEVATION_ALONG_PATH: 'ELEVATION_ALONG_PATH', ELEVATION_LOCATIONS: 'ELEVATION_LOCATIONS', FLEET_ENGINE_GET_DELIVERY_VEHICLE: 'FLEET_ENGINE_GET_DELIVERY_VEHICLE', FLEET_ENGINE_GET_TRIP: 'FLEET_ENGINE_GET_TRIP', FLEET_ENGINE_GET_VEHICLE: 'FLEET_ENGINE_GET_VEHICLE', FLEET_ENGINE_LIST_DELIVERY_VEHICLES: 'FLEET_ENGINE_LIST_DELIVERY_VEHICLES', FLEET_ENGINE_LIST_TASKS: 'FLEET_ENGINE_LIST_TASKS', FLEET_ENGINE_LIST_VEHICLES: 'FLEET_ENGINE_LIST_VEHICLES', FLEET_ENGINE_SEARCH_TASKS: 'FLEET_ENGINE_SEARCH_TASKS', GEOCODER_GEOCODE: 'GEOCODER_GEOCODE', MAPS_MAX_ZOOM: 'MAPS_MAX_ZOOM', PLACES_AUTOCOMPLETE: 'PLACES_AUTOCOMPLETE', PLACES_DETAILS: 'PLACES_DETAILS', PLACES_FIND_PLACE_FROM_PHONE_NUMBER: 'PLACES_FIND_PLACE_FROM_PHONE_NUMBER', PLACES_FIND_PLACE_FROM_QUERY: 'PLACES_FIND_PLACE_FROM_QUERY', PLACES_GATEWAY: 'PLACES_GATEWAY', PLACES_GET_PLACE: 'PLACES_GET_PLACE', PLACES_LOCAL_CONTEXT_SEARCH: 'PLACES_LOCAL_CONTEXT_SEARCH', PLACES_NEARBY_SEARCH: 'PLACES_NEARBY_SEARCH', PLACES_SEARCH_TEXT: 'PLACES_SEARCH_TEXT', STREETVIEW_GET_PANORAMA: 'STREETVIEW_GET_PANORAMA' },
  },
};

google.maps.LatLngBounds.MAX_BOUNDS = new google.maps.LatLngBounds(new google.maps.LatLng(-90,-180), new google.maps.LatLng(90,180));

google.maps.geometry.encoding = { decodePath: function(encodedPath) { return []; }, encodePath: function(path) { return ''; } };
google.maps.geometry.spherical = { computeArea: function(path, radius) { return 0; }, computeDistanceBetween: function(from, to, radius) { return 0; }, computeHeading: function(from, to) { return 0; }, computeLength: function(path, radius) { return 0; }, computeOffset: function(from, distance, heading, radius) { return null; }, computeOffsetOrigin: function(to, distance, heading, radius) { return null; }, computeSignedArea: function(loop, radius) { return 0; }, interpolate: function(from, to, fraction) { return null; } };
google.maps.geometry.poly = { containsLocation: function(latLng, polygon) { return false; }, isLocationOnEdge: function(latLng, poly, tolerance) { return false; } };

google.maps.drawing.DrawingManager = function(options) { return { getDrawingMode:function(){return null;}, getMap:fnEmptyObject, setDrawingMode:noop, setMap:noop, setOptions:noop, addListener:noop }; };
google.maps.drawing.OverlayType = { MARKER: 'marker', POLYGON: 'polygon', POLYLINE: 'polyline', RECTANGLE: 'rectangle', CIRCLE: 'circle' };

google.maps.visualization.HeatmapLayer = function(options) { return { getData:function(){return new google.maps.MVCArray();}, getMap:fnEmptyObject, setData:noop, setMap:noop, setOptions:noop }; };

google.maps.journeySharing.JourneySharingMapView = function(options) { return { automaticViewportMode: null, element: null, enableTraffic: false, locationProviders: EMPTY_ARRAY, map: null, mapOptions: null, addLocationProvider: noop, removeLocationProvider: noop, addListener: noop }; };
google.maps.journeySharing.FleetEngineServiceType = { DELIVERY_VEHICLE_SERVICE: 'DELIVERY_VEHICLE_SERVICE', TASK_SERVICE: 'TASK_SERVICE', TRIP_SERVICE: 'TRIP_SERVICE', UNKNOWN_SERVICE: 'UNKNOWN_SERVICE' };
google.maps.journeySharing.AutomaticViewportMode = { FIT_ANTICIPATED_ROUTE: 'FIT_ANTICIPATED_ROUTE', NONE: 'NONE'};
google.maps.journeySharing.vehicle = {};
google.maps.journeySharing.TripType = { SHARED: 'SHARED', EXCLUSIVE: 'EXCLUSIVE', UNKNOWN_TRIP_TYPE: 'UNKNOWN_TRIP_TYPE' };

google.maps.maps3d.Map3DElement = function(options) { return { addEventListener:noop, center:null, zoom:null, heading:0, tilt:0, roll:0, flyTo:noop, flyCameraTo:noop, stopCameraAnimation:noop }; };
google.maps.maps3d.AltitudeMode = { ABSOLUTE: 'ABSOLUTE', CLAMP_TO_GROUND: 'CLAMP_TO_GROUND', RELATIVE_TO_GROUND: 'RELATIVE_TO_GROUND', RELATIVE_TO_MESH: 'RELATIVE_TO_MESH' };
google.maps.maps3d.MapMode = { HYBRID: 'HYBRID', SATELLITE: 'SATELLITE'};

google.maps.WebGLOverlayView = function() {};
google.maps.WebGLOverlayView.prototype.onAdd = noop;
google.maps.WebGLOverlayView.prototype.onContextRestored = noop;
google.maps.WebGLOverlayView.prototype.onDraw = noop;
google.maps.WebGLOverlayView.prototype.onRemove = noop;
google.maps.WebGLOverlayView.prototype.onStateUpdate = noop;
google.maps.WebGLOverlayView.prototype.requestRedraw = noop;
google.maps.WebGLOverlayView.prototype.requestStateUpdate = noop;
google.maps.WebGLOverlayView.prototype.setMap = noop;
google.maps.WebGLOverlayView.prototype.getMap = fnEmptyObject;

google.maps.OverlayView.prototype.draw = noop;
google.maps.OverlayView.prototype.getMap = fnEmptyObject;
google.maps.OverlayView.prototype.getPanes = fnEmptyObject;
google.maps.OverlayView.prototype.getProjection = function() { return { fromLatLngToDivPixel: function(){ return new google.maps.Point(0,0); }, fromDivPixelToLatLng: function(){ return new google.maps.LatLng(0,0); }, fromLatLngToContainerPixel: function(){ return new google.maps.Point(0,0); }, fromContainerPixelToLatLng: function(){ return new google.maps.LatLng(0,0); }, getWorldWidth: function(){ return 256; } }; };
google.maps.OverlayView.prototype.onAdd = noop;
google.maps.OverlayView.prototype.onRemove = noop;
google.maps.OverlayView.prototype.setMap = noop;
google.maps.OverlayView.preventMapHitsAndGesturesFrom = noop;
google.maps.OverlayView.preventMapHitsFrom = noop;

google.maps.Marker.MAX_ZINDEX = 0;

google.maps.Place.searchByText = function(request) { return Promise.resolve({places: EMPTY_ARRAY}); };
google.maps.Place.searchNearby = function(request) { return Promise.resolve({places: EMPTY_ARRAY}); };
google.maps.Place.prototype.fetchFields = function(request) { return Promise.resolve(this); };
google.maps.Place.prototype.toJSON = function() { return { id: this.id }; };
google.maps.Place.prototype.getNextOpeningTime = function(){ return Promise.resolve(null); };
google.maps.Place.prototype.isOpen = function(date){ return Promise.resolve(false); };

google.maps.Settings.getInstance = fnEmptyObject;
google.maps.Settings.experienceIds = EMPTY_ARRAY;
google.maps.Settings.fetchAppCheckToken = noop;

google.maps.MapsNetworkError = function() {};
google.maps.MapsRequestError = function() {};
google.maps.MapsServerError = function() {};

google.maps.Data.Feature = function(options) { return { forEachProperty:noop, getGeometry:fnEmptyObject, getId:function(){return undefined;}, getProperty:function(name){return undefined;}, removeProperty:noop, setGeometry:noop, setProperty:noop, toGeoJson:function(callback){callback(EMPTY_OBJECT);} }; };

google.maps.marker.AdvancedMarkerElement = function(options) {
  return {
    collisionBehavior: (options && options.collisionBehavior) || null,
    gmpClickable: (options && options.gmpClickable) || null,
    gmpDraggable: (options && options.gmpDraggable) || false,
    map: (options && options.map) || null,
    position: (options && options.position) || null,
    title: (options && options.title) || '',
    zIndex: (options && options.zIndex) || null,
    addListener: noop,
  };
};

google.maps.marker.PinElement = function(options) {
  return {
    background: (options && options.background) || null,
    borderColor: (options && options.borderColor) || null,
    element: (options && options.element) || null,
    glyph: (options && options.glyph) || null,
    glyphColor: (options && options.glyphColor) || null,
    scale: (options && options.scale) || 1,
  };
};

google.maps.marker.CollisionBehavior = {
  OPTIONAL_AND_HIDES_LOWER_PRIORITY: 'OPTIONAL_AND_HIDES_LOWER_PRIORITY',
  REQUIRED: 'REQUIRED',
  REQUIRED_AND_HIDES_OPTIONAL: 'REQUIRED_AND_HIDES_OPTIONAL'
};
