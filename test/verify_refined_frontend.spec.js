import { test, expect } from '@playwright/test';
import path from 'path';

test('verify google maps stub in browser', async ({ page }) => {
  const filePath = `file://${path.resolve(__dirname, '../test.html')}`;
  await page.goto(filePath);

  // Check if google object is defined
  const isGoogleDefined = await page.evaluate(() => typeof google !== 'undefined');
  expect(isGoogleDefined).toBe(true);

  // Verify new namespaces and methods
  const apiCheck = await page.evaluate(async () => {
    const results = {};
    results.routesCompute = typeof google.maps.routes.computeRoutes === 'function';
    results.addressValidationFetch = typeof google.maps.addressValidation.fetchAddressValidation === 'function';
    results.placeClass = typeof google.maps.places.Place === 'function';
    results.placeSearchByText = typeof google.maps.places.Place.searchByText === 'function';
    results.map3dClass = typeof google.maps.maps3d.Map3DElement === 'function';

    // Test importLibrary
    const airQualityLib = await google.maps.importLibrary('airQuality');
    results.airQualityLibOk = airQualityLib === google.maps.airQuality;

    return results;
  });

  expect(apiCheck.routesCompute).toBe(true);
  expect(apiCheck.addressValidationFetch).toBe(true);
  expect(apiCheck.placeClass).toBe(true);
  expect(apiCheck.placeSearchByText).toBe(true);
  expect(apiCheck.map3dClass).toBe(true);
  expect(apiCheck.airQualityLibOk).toBe(true);

  await page.screenshot({ path: 'frontend_verification_refined.png' });
});
