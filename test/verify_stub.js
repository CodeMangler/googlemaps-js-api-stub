const assert = require('assert');
require('../stub.js');

async function runTests() {
  console.log('Starting API structure verification...');

  // 1. Routes
  assert.ok(google.maps.routes, 'google.maps.routes should exist');
  assert.strictEqual(typeof google.maps.routes.computeRoutes, 'function', 'computeRoutes should be a function at google.maps.routes');
  console.log('✓ google.maps.routes.computeRoutes is correctly placed');

  // 2. Address Validation
  assert.ok(google.maps.addressValidation, 'google.maps.addressValidation should exist');
  assert.strictEqual(typeof google.maps.addressValidation.fetchAddressValidation, 'function', 'fetchAddressValidation should be a function at google.maps.addressValidation');
  console.log('✓ google.maps.addressValidation.fetchAddressValidation is correctly placed');

  // 3. Place
  const placeOptions = { id: 'test-id' };
  const place = new google.maps.places.Place(placeOptions);
  assert.strictEqual(place.id, 'test-id', 'Place instance should have correct ID');
  assert.strictEqual(typeof place.fetchFields, 'function', 'Place instance should have fetchFields');
  assert.strictEqual(typeof google.maps.places.Place.searchByText, 'function', 'google.maps.places.Place.searchByText should exist');
  assert.strictEqual(typeof google.maps.places.Place.searchNearby, 'function', 'google.maps.places.Place.searchNearby should exist');

  const legacyPlace = new google.maps.Place(placeOptions);
  assert.strictEqual(legacyPlace.id, 'test-id', 'Legacy Place should delegate correctly');
  console.log('✓ google.maps.places.Place and legacy Place are correctly implemented');

  // 4. Maps3D
  const map3d = new google.maps.maps3d.Map3DElement({ center: {lat: 1, lng: 2}, zoom: 10, heading: 45 });
  assert.deepStrictEqual(map3d.center, {lat: 1, lng: 2}, 'Map3DElement should initialize center');
  assert.strictEqual(map3d.zoom, 10, 'Map3DElement should initialize zoom');
  assert.strictEqual(map3d.heading, 45, 'Map3DElement should initialize heading');
  console.log('✓ google.maps.maps3d.Map3DElement initializes from options correctly');

  // 5. importLibrary
  const mapsLib = await google.maps.importLibrary('maps');
  assert.strictEqual(mapsLib, google.maps, 'importLibrary("maps") should return google.maps');
  const routesLib = await google.maps.importLibrary('routes');
  assert.strictEqual(routesLib, google.maps.routes, 'importLibrary("routes") should return google.maps.routes');
  console.log('✓ google.maps.importLibrary works for new libraries');

  console.log('All API structure assertions passed!');
}

runTests().catch(err => {
  console.error('Assertion failed:', err);
  process.exit(1);
});
