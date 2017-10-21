# Google Maps Javascript API Stub

Google Maps Javascript API is exposed under the `window.google` namespace, and has an object structure that's fairly involved.
This makes testing of components and other UI logic that depend on the Maps API a bit inconvenient, since you would inevitably have to stub out quite a few of the Maps API objects and method calls in your tests, even for fairly trivial usages.
It usually ends up adding noise to your tests, and obscuring their intent.

This package stubs out the `window.google` namespace, and all documented objects and methods of the Maps API under this namespace.
All of the stubs are `noop`s and usually return an empty object, or an object with a sensible structure as appropriate.
Importing this package into your tests will let you focus on testing your component and UI logic without having to worry about details of the Maps API.
In addition, you can set up explicit expectations on specific Google Maps API calls when you are testing interactions with the Maps API.

Initial versions of this package stub out significant portions of the documented Maps API.
Eventually this package will be versioned in lockstep with the Maps API versions (i.e. importing version `X` of this package will stub out version `X` of the Maps API).

## Usage
- Install the package

  `npm install --save-dev googlemaps-js-api-stub`

  OR
  
  `yarn add --dev googlemaps-js-api-stub`
  
- Import `googlemaps-js-api-stub` into your test
  
  `import 'googlemaps-js-api-stub'`
  
  OR
  
  `require 'googlemaps-js-api-stub'`
  
- Optionally, set expectations on specific API calls as required

```javascript
sinon.stub(window.google.Map, 'setZoom');
expect(window.google.Map.setZoom).to.have.been.called
```
