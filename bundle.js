/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dat_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_datamaps__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_datamaps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_datamaps__);


console.log(__WEBPACK_IMPORTED_MODULE_0__dat_js__["a" /* DATA */]);
console.log("name", __WEBPACK_IMPORTED_MODULE_0__dat_js__["a" /* DATA */][0].name);
console.log("geolocation", __WEBPACK_IMPORTED_MODULE_0__dat_js__["a" /* DATA */][0].geolocation);
console.log("mass", __WEBPACK_IMPORTED_MODULE_0__dat_js__["a" /* DATA */][0].mass);

var map = new __WEBPACK_IMPORTED_MODULE_1_datamaps___default.a({
  element: document.getElementById('container'),
  fills: {
    defaultFill: 'blue'
  }
});

map.bubbles(__WEBPACK_IMPORTED_MODULE_0__dat_js__["a" /* DATA */], {
  popupTemplate: function (geo, data) {
    return ['<div class="hoverinfo">' + data.name, '<br/>Payload: ' + data.yield + ' kilotons', '<br/>Country: ' + data.country + '', '<br/>Date: ' + data.date + '', '</div>'].join('');
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DATA = [{ "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.08333, 50.775] }, "id": "1", "mass": "21", "name": "Aachen", "nametype": "Valid", "recclass": "L5", "reclat": "50.775000", "reclong": "6.083330", "year": "1880-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.23333, 56.18333] }, "id": "2", "mass": "720", "name": "Aarhus", "nametype": "Valid", "recclass": "H6", "reclat": "56.183330", "reclong": "10.233330", "year": "1951-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-113, 54.21667] }, "id": "6", "mass": "107000", "name": "Abee", "nametype": "Valid", "recclass": "EH4", "reclat": "54.216670", "reclong": "-113.000000", "year": "1952-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.9, 16.88333] }, "id": "10", "mass": "1914", "name": "Acapulco", "nametype": "Valid", "recclass": "Acapulcoite", "reclat": "16.883330", "reclong": "-99.900000", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-64.95, -33.16667] }, "id": "370", "mass": "780", "name": "Achiras", "nametype": "Valid", "recclass": "L6", "reclat": "-33.166670", "reclong": "-64.950000", "year": "1902-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [71.8, 32.1] }, "id": "379", "mass": "4239", "name": "Adhi Kot", "nametype": "Valid", "recclass": "EH4", "reclat": "32.100000", "reclong": "71.800000", "year": "1919-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [95.16667, 44.83333] }, "id": "390", "mass": "910", "name": "Adzhi-Bogdo (stone)", "nametype": "Valid", "recclass": "LL3-6", "reclat": "44.833330", "reclong": "95.166670", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.61667, 44.21667] }, "id": "392", "mass": "30000", "name": "Agen", "nametype": "Valid", "recclass": "H5", "reclat": "44.216670", "reclong": "0.616670", "year": "1814-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-65.23333, -31.6] }, "id": "398", "mass": "1620", "name": "Aguada", "nametype": "Valid", "recclass": "L6", "reclat": "-31.600000", "reclong": "-65.233330", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-64.55, -30.86667] }, "id": "417", "mass": "1440", "name": "Aguila Blanca", "nametype": "Valid", "recclass": "L", "reclat": "-30.866670", "reclong": "-64.550000", "year": "1920-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-9.57028, 16.39806] }, "id": "423", "mass": "1000", "name": "Aioun el Atrouss", "nametype": "Valid", "recclass": "Diogenite-pm", "reclat": "16.398060", "reclong": "-9.570280", "year": "1974-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.38333, 19.08333] }, "id": "424", "mass": "24000", "name": "Aïr", "nametype": "Valid", "recclass": "L6", "reclat": "19.083330", "reclong": "8.383330", "year": "1925-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [2.33333, 50.66667] }, "id": "425", "name": "Aire-sur-la-Lys", "nametype": "Valid", "recclass": "Unknown", "reclat": "50.666670", "reclong": "2.333330", "year": "1769-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.05, 29.51667] }, "id": "426", "mass": "779", "name": "Akaba", "nametype": "Valid", "recclass": "L6", "reclat": "29.516670", "reclong": "35.050000", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.95, 29.71667] }, "id": "427", "mass": "1800", "name": "Akbarpur", "nametype": "Valid", "recclass": "H4", "reclat": "29.716670", "reclong": "77.950000", "year": "1838-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.43333, 8.91667] }, "id": "432", "mass": "3000", "name": "Akwanga", "nametype": "Valid", "recclass": "H", "reclat": "8.916670", "reclong": "8.433330", "year": "1959-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [42.81667, 39.91667] }, "id": "433", "mass": "50000", "name": "Akyumak", "nametype": "Valid", "recclass": "Iron, IVA", "reclat": "39.916670", "reclong": "42.816670", "year": "1981-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [39.51667, 24.41667] }, "id": "446", "mass": "160", "name": "Al Rais", "nametype": "Valid", "recclass": "CR2-an", "reclat": "24.416670", "reclong": "39.516670", "year": "1957-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [28.96, 13.66033] }, "id": "447", "mass": "700", "name": "Al Zarnkh", "nametype": "Valid", "recclass": "LL5", "reclat": "13.660330", "reclong": "28.960000", "year": "2001-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [4.08333, 44.11667] }, "id": "448", "mass": "6000", "name": "Alais", "nametype": "Valid", "recclass": "CI1", "reclat": "44.116670", "reclong": "4.083330", "year": "1806-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.01667, 44.65] }, "id": "453", "mass": "2000", "name": "Albareto", "nametype": "Valid", "recclass": "L/LL4", "reclat": "44.650000", "reclong": "11.016670", "year": "1766-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.66667, 2] }, "id": "454", "mass": "625", "name": "Alberta", "nametype": "Valid", "recclass": "L", "reclat": "2.000000", "reclong": "22.666670", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.01533, 45.82133] }, "id": "458", "mass": "252", "name": "Alby sur Chéran", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "45.821330", "reclong": "6.015330", "year": "2002-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.78333, 51.78333] }, "id": "461", "mass": "700", "name": "Aldsworth", "nametype": "Valid", "recclass": "LL5", "reclat": "51.783330", "reclong": "-1.783330", "year": "1835-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.13333, 36.23333] }, "id": "462", "mass": "3200", "name": "Aleppo", "nametype": "Valid", "recclass": "L6", "reclat": "36.233330", "reclong": "37.133330", "year": "1873-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.75, 44.88333] }, "id": "463", "mass": "908", "name": "Alessandria", "nametype": "Valid", "recclass": "H5", "reclat": "44.883330", "reclong": "8.750000", "year": "1860-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.81667, 50.95] }, "id": "465", "mass": "9251", "name": "Alexandrovsky", "nametype": "Valid", "recclass": "H4", "reclat": "50.950000", "reclong": "31.816670", "year": "1900-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.15, 45.26667] }, "id": "466", "mass": "228000", "name": "Alfianello", "nametype": "Valid", "recclass": "L6", "reclat": "45.266670", "reclong": "10.150000", "year": "1883-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "50", ":@computed_region_nnqa_25f4": "429", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-85.88333, 42.53333] }, "id": "2276", "mass": "32000", "name": "Allegan", "nametype": "Valid", "recclass": "H5", "reclat": "42.533330", "reclong": "-85.883330", "year": "1899-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-105.31667, 26.96667] }, "id": "2278", "mass": "2000000", "name": "Allende", "nametype": "Valid", "recclass": "CV3", "reclat": "26.966670", "reclong": "-105.316670", "year": "1969-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [32.41275, 20.74575] }, "id": "48915", "mass": "3950", "name": "Almahata Sitta", "nametype": "Valid", "recclass": "Ureilite-an", "reclat": "20.745750", "reclong": "32.412750", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [44.21556, 35.27333] }, "id": "2284", "mass": "6000", "name": "Alta'ameem", "nametype": "Valid", "recclass": "LL5", "reclat": "35.273330", "reclong": "44.215560", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.25, 27.66667] }, "id": "2290", "mass": "6400", "name": "Ambapur Nagla", "nametype": "Valid", "recclass": "H5", "reclat": "27.666670", "reclong": "78.250000", "year": "1895-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [85.56667, 26.58333] }, "id": "2294", "mass": "2700", "name": "Andhara", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "26.583330", "reclong": "85.566670", "year": "1880-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "49", ":@computed_region_nnqa_25f4": "1723", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-70.75, 44.61667] }, "id": "2295", "mass": "3200", "name": "Andover", "nametype": "Valid", "recclass": "L6", "reclat": "44.616670", "reclong": "-70.750000", "year": "1898-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.5, 48.7] }, "id": "2296", "mass": "600", "name": "Andreevka", "nametype": "Valid", "recclass": "L3", "reclat": "48.700000", "reclong": "37.500000", "year": "1969-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.86667, 20.88333] }, "id": "2298", "mass": "17900", "name": "Andura", "nametype": "Valid", "recclass": "H6", "reclat": "20.883330", "reclong": "76.866670", "year": "1939-01-01T00:00:00.000" }, { "fall": "Found", "geolocation": { "type": "Point", "coordinates": [0, 0] }, "id": "50693", "mass": "256.8", "name": "Northwest Africa 5815", "nametype": "Valid", "recclass": "L5", "reclat": "0.000000", "reclong": "0.000000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.55, 47.46667] }, "id": "2301", "name": "Angers", "nametype": "Valid", "recclass": "L6", "reclat": "47.466670", "reclong": "-0.550000", "year": "1822-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-44.31667, -22.96667] }, "id": "2302", "mass": "1500", "name": "Angra dos Reis (stone)", "nametype": "Valid", "recclass": "Angrite", "reclat": "-22.966670", "reclong": "-44.316670", "year": "1869-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [39.71667, 9.53333] }, "id": "2304", "mass": "6500", "name": "Ankober", "nametype": "Valid", "recclass": "H4", "reclat": "9.533330", "reclong": "39.716670", "year": "1942-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [105.18333, 25.15] }, "id": "2305", "mass": "2500", "name": "Anlong", "nametype": "Valid", "recclass": "H5", "reclat": "25.150000", "reclong": "105.183330", "year": "1971-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [140.78556, 40.81056] }, "id": "2313", "mass": "320", "name": "Aomori", "nametype": "Valid", "recclass": "L6", "reclat": "40.810560", "reclong": "140.785560", "year": "1984-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-2.71667, 53.58333] }, "id": "2318", "mass": "15000", "name": "Appley Bridge", "nametype": "Valid", "recclass": "LL6", "reclat": "53.583330", "reclong": "-2.716670", "year": "1914-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.38333, 43.86667] }, "id": "2320", "mass": "3200", "name": "Apt", "nametype": "Valid", "recclass": "L6", "reclat": "43.866670", "reclong": "5.383330", "year": "1803-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-66, -33] }, "id": "2325", "mass": "810", "name": "Arbol Solo", "nametype": "Valid", "recclass": "H5", "reclat": "-33.000000", "reclong": "-66.000000", "year": "1954-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "18", ":@computed_region_nnqa_25f4": "2697", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-94.3, 38.5] }, "id": "2329", "mass": "5070", "name": "Archie", "nametype": "Valid", "recclass": "H6", "reclat": "38.500000", "reclong": "-94.300000", "year": "1932-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-60.66667, -31.41667] }, "id": "2340", "mass": "7450", "name": "Arroyo Aguiar", "nametype": "Valid", "recclass": "H5", "reclat": "-31.416670", "reclong": "-60.666670", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.03333, 42.45] }, "id": "2345", "mass": "41", "name": "Asco", "nametype": "Valid", "recclass": "H6", "reclat": "42.450000", "reclong": "9.033330", "year": "1805-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "774", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-97.01, 31.805] }, "id": "48954", "mass": "9500", "name": "Ash Creek", "nametype": "Valid", "recclass": "L6", "reclat": "31.805000", "reclong": "-97.010000", "year": "2009-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.3, 52.05] }, "id": "2346", "mass": "1300", "name": "Ashdon", "nametype": "Valid", "recclass": "L6", "reclat": "52.050000", "reclong": "0.300000", "year": "1923-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.55, 43.03333] }, "id": "2353", "mass": "2000", "name": "Assisi", "nametype": "Valid", "recclass": "H5", "reclat": "43.033330", "reclong": "12.550000", "year": "1886-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [80.625, 25.25417] }, "id": "4883", "mass": "1280", "name": "Atarra", "nametype": "Valid", "recclass": "L4", "reclat": "25.254170", "reclong": "80.625000", "year": "1920-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-103.66667, 20.06667] }, "id": "4884", "mass": "94.2", "name": "Atemajac", "nametype": "Valid", "recclass": "L6", "reclat": "20.066670", "reclong": "-103.666670", "year": "1896-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "29", ":@computed_region_nnqa_25f4": "3134", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-87, 34.75] }, "id": "4885", "mass": "265", "name": "Athens", "nametype": "Valid", "recclass": "LL6", "reclat": "34.750000", "reclong": "-87.000000", "year": "1933-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "20", ":@computed_region_nnqa_25f4": "602", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-96.15, 34.31667] }, "id": "4888", "mass": "1384.2", "name": "Atoka", "nametype": "Valid", "recclass": "L6", "reclat": "34.316670", "reclong": "-96.150000", "year": "1945-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.16667, 44.38333] }, "id": "4893", "mass": "800", "name": "Aubres", "nametype": "Valid", "recclass": "Aubrite", "reclat": "44.383330", "reclong": "5.166670", "year": "1836-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.66667, 36.16667] }, "id": "4899", "mass": "50000", "name": "Aumale", "nametype": "Valid", "recclass": "L6", "reclat": "36.166670", "reclong": "3.666670", "year": "1865-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.23333, 44.33333] }, "id": "4900", "mass": "2000", "name": "Aumieres", "nametype": "Valid", "recclass": "L6", "reclat": "44.333330", "reclong": "3.233330", "year": "1842-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.58333, 43.08333] }, "id": "4903", "mass": "50000", "name": "Ausson", "nametype": "Valid", "recclass": "L5", "reclat": "43.083330", "reclong": "0.583330", "year": "1858-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-49.95083, -21.46028] }, "id": "4905", "mass": "9330", "name": "Avanhandava", "nametype": "Valid", "recclass": "H4", "reclat": "-21.460280", "reclong": "-49.950830", "year": "1952-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.5, 46] }, "id": "4906", "mass": "1230", "name": "Avce", "nametype": "Valid", "recclass": "Iron, IIAB", "reclat": "46.000000", "reclong": "13.500000", "year": "1908-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-103.5, 25] }, "id": "4907", "mass": "146", "name": "Avilez", "nametype": "Valid", "recclass": "H", "reclat": "25.000000", "reclong": "-103.500000", "year": "1855-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [32.83333, 2.71667] }, "id": "4910", "mass": "134", "name": "Awere", "nametype": "Valid", "recclass": "L4", "reclat": "2.716670", "reclong": "32.833330", "year": "1968-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "11", ":@computed_region_nnqa_25f4": "1989", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-108, 36.8] }, "id": "4913", "mass": "2830", "name": "Aztec", "nametype": "Valid", "recclass": "L6", "reclat": "36.800000", "reclong": "-108.000000", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [38, 48.6] }, "id": "4917", "mass": "18000", "name": "Bachmut", "nametype": "Valid", "recclass": "L6", "reclat": "48.600000", "reclong": "38.000000", "year": "1814-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.5, 28.48333] }, "id": "4922", "mass": "10322", "name": "Bahjoi", "nametype": "Valid", "recclass": "Iron, IAB-sLL", "reclat": "28.483330", "reclong": "78.500000", "year": "1934-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "2373", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-82.48333, 35.96667] }, "id": "4925", "mass": "3700", "name": "Bald Mountain", "nametype": "Valid", "recclass": "L4", "reclat": "35.966670", "reclong": "-82.483330", "year": "1929-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "32", ":@computed_region_nnqa_25f4": "495", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-88.66667, 34.5] }, "id": "4926", "mass": "345", "name": "Baldwyn", "nametype": "Valid", "recclass": "L6", "reclat": "34.500000", "reclong": "-88.666670", "year": "1922-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.38333, 5.38333] }, "id": "4928", "mass": "1000", "name": "Bali", "nametype": "Valid", "recclass": "CV3", "reclat": "5.383330", "reclong": "16.383330", "year": "1907-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [101.18333, 16.66667] }, "id": "4934", "mass": "16700", "name": "Ban Rong Du", "nametype": "Valid", "recclass": "Iron, ungrouped", "reclat": "16.666670", "reclong": "101.183330", "year": "1993-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [107.6, -6.91667] }, "id": "4935", "mass": "11500", "name": "Bandong", "nametype": "Valid", "recclass": "LL6", "reclat": "-6.916670", "reclong": "107.600000", "year": "1871-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.33333, 27.7] }, "id": "4936", "mass": "15000", "name": "Bansur", "nametype": "Valid", "recclass": "L6", "reclat": "27.700000", "reclong": "76.333330", "year": "1892-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.2, 30.4] }, "id": "4937", "mass": "14", "name": "Banswal", "nametype": "Valid", "recclass": "L5", "reclat": "30.400000", "reclong": "78.200000", "year": "1913-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [106, -6.33333] }, "id": "4938", "mass": "629", "name": "Banten", "nametype": "Valid", "recclass": "CM2", "reclat": "-6.333330", "reclong": "106.000000", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.05, 43.95] }, "id": "4942", "mass": "6400", "name": "Barbotan", "nametype": "Valid", "recclass": "H5", "reclat": "43.950000", "reclong": "-0.050000", "year": "1790-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [2.16667, 41.36667] }, "id": "4944", "name": "Barcelona (stone)", "nametype": "Valid", "recclass": "OC", "reclat": "41.366670", "reclong": "2.166670", "year": "1704-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-2.5, 42.38333] }, "id": "4946", "mass": "3200", "name": "Barea", "nametype": "Valid", "recclass": "Mesosiderite-A1", "reclat": "42.383330", "reclong": "-2.500000", "year": "1842-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.08333, 52.73333] }, "id": "4947", "mass": "23.2", "name": "Barnaul", "nametype": "Valid", "recclass": "H5", "reclat": "52.733330", "reclong": "84.083330", "year": "1904-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.1, 52] }, "id": "4948", "mass": "17", "name": "Barntrup", "nametype": "Valid", "recclass": "LL4", "reclat": "52.000000", "reclong": "9.100000", "year": "1886-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.8, 31.61667] }, "id": "4949", "mass": "4500", "name": "Baroti", "nametype": "Valid", "recclass": "L6", "reclat": "31.616670", "reclong": "76.800000", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.33972, 52.56528] }, "id": "4954", "mass": "44000", "name": "Barwell", "nametype": "Valid", "recclass": "L5", "reclat": "52.565280", "reclong": "-1.339720", "year": "1965-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-5.9, 15.78333] }, "id": "44876", "mass": "29560", "name": "Bassikounou", "nametype": "Valid", "recclass": "H5", "reclat": "15.783330", "reclong": "-5.900000", "year": "2006-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [20.93583, 52.03333] }, "id": "4957", "mass": "15500", "name": "Baszkówka", "nametype": "Valid", "recclass": "L5", "reclat": "52.033330", "reclong": "20.935830", "year": "1994-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "21", ":@computed_region_nnqa_25f4": "662", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-98.31667, 45.41667] }, "id": "4974", "mass": "21000", "name": "Bath", "nametype": "Valid", "recclass": "H4", "reclat": "45.416670", "reclong": "-98.316670", "year": "1892-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "36", ":@computed_region_nnqa_25f4": "1921", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-83.75, 38.25] }, "id": "4975", "mass": "86000", "name": "Bath Furnace", "nametype": "Valid", "recclass": "L6", "reclat": "38.250000", "reclong": "-83.750000", "year": "1902-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "10", ":@computed_region_nnqa_25f4": "2397", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-117.18913, 40.66813] }, "id": "56133", "mass": "2900", "name": "Battle Mountain", "nametype": "Valid", "recclass": "L6", "reclat": "40.668130", "reclong": "-117.189130", "year": "2012-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.18333, 11.08333] }, "id": "4976", "mass": "1557", "name": "Bawku", "nametype": "Valid", "recclass": "LL5", "reclat": "11.083330", "reclong": "-0.183330", "year": "1989-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "18", ":@computed_region_nnqa_25f4": "2216", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-93.5, 36.75] }, "id": "4977", "mass": "611", "name": "Baxter", "nametype": "Valid", "recclass": "L6", "reclat": "36.750000", "reclong": "-93.500000", "year": "1916-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "17", ":@computed_region_nnqa_25f4": "1285", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-101.2, 39.8] }, "id": "4984", "mass": "16000", "name": "Beardsley", "nametype": "Valid", "recclass": "H5", "reclat": "39.800000", "reclong": "-101.200000", "year": "1929-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-117.33333, 51.16667] }, "id": "4986", "mass": "14000", "name": "Beaver Creek", "nametype": "Valid", "recclass": "H5", "reclat": "51.166670", "reclong": "-117.333330", "year": "1893-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-4.1, 53.01667] }, "id": "4993", "mass": "794", "name": "Beddgelert", "nametype": "Valid", "recclass": "H5", "reclat": "53.016670", "reclong": "-4.100000", "year": "1949-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "1978", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-96.46667, 33.6] }, "id": "5005", "mass": "375", "name": "Bells", "nametype": "Valid", "recclass": "C2-ung", "reclat": "33.600000", "reclong": "-96.466670", "year": "1961-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-64.86667, -32.33333] }, "id": "5009", "name": "Belville", "nametype": "Valid", "recclass": "OC", "reclat": "-32.333330", "reclong": "-64.866670", "year": "1937-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.91667, 25.36667] }, "id": "5011", "mass": "3700", "name": "Benares (a)", "nametype": "Valid", "recclass": "LL4", "reclat": "25.366670", "reclong": "82.916670", "year": "1798-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-8.15, 32.25] }, "id": "30443", "mass": "25000", "name": "Benguerir", "nametype": "Valid", "recclass": "LL6", "reclat": "32.250000", "reclong": "-8.150000", "year": "2004-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.8, 32.86667] }, "id": "5018", "mass": "19000", "name": "Beni M'hira", "nametype": "Valid", "recclass": "L6", "reclat": "32.866670", "reclong": "10.800000", "year": "2001-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "34", ":@computed_region_nnqa_25f4": "1869", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-89.15, 39.08333] }, "id": "5021", "mass": "1770.5", "name": "Benld", "nametype": "Valid", "recclass": "H6", "reclat": "39.083330", "reclong": "-89.150000", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [28.41667, -26.16667] }, "id": "5023", "mass": "3880", "name": "Benoni", "nametype": "Valid", "recclass": "H6", "reclat": "-26.166670", "reclong": "28.416670", "year": "1943-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7, 30] }, "id": "5024", "mass": "45000", "name": "Bensour", "nametype": "Valid", "recclass": "LL6", "reclat": "30.000000", "reclong": "-7.000000", "year": "2002-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-67.55, 45.95] }, "id": "5026", "mass": "2840", "name": "Benton", "nametype": "Valid", "recclass": "LL6", "reclat": "45.950000", "reclong": "-67.550000", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-58.32833, -31.91] }, "id": "48975", "mass": "270", "name": "Berduc", "nametype": "Valid", "recclass": "L6", "reclat": "-31.910000", "reclong": "-58.328330", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.65, 11.65] }, "id": "5028", "mass": "18000", "name": "Béréba", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "11.650000", "reclong": "-3.650000", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.8, 41.68333] }, "id": "5029", "mass": "1440", "name": "Berlanguillas", "nametype": "Valid", "recclass": "L6", "reclat": "41.683330", "reclong": "-3.800000", "year": "1811-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "9", ":@computed_region_nnqa_25f4": "1072", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-105.02325, 40.30583] }, "id": "47355", "mass": "960", "name": "Berthoud", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "40.305830", "reclong": "-105.023250", "year": "2004-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "47", ":@computed_region_nnqa_25f4": "2030", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-73.83333, 42.53333] }, "id": "5032", "mass": "13.9", "name": "Bethlehem", "nametype": "Valid", "recclass": "H", "reclat": "42.533330", "reclong": "-73.833330", "year": "1859-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.23333, 43.21667] }, "id": "5034", "mass": "2000", "name": "Beuste", "nametype": "Valid", "recclass": "L5", "reclat": "43.216670", "reclong": "-0.233330", "year": "1859-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.5, 33.88333] }, "id": "5035", "mass": "1100", "name": "Beyrout", "nametype": "Valid", "recclass": "LL3.8", "reclat": "33.883330", "reclong": "35.500000", "year": "1921-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [74.83333, 20.88333] }, "id": "5037", "mass": "18", "name": "Bhagur", "nametype": "Valid", "recclass": "L6", "reclat": "20.883330", "reclong": "74.833330", "year": "1877-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [73.11528, 26.50833] }, "id": "36591", "mass": "678", "name": "Bhawad", "nametype": "Valid", "recclass": "LL6", "reclat": "26.508330", "reclong": "73.115280", "year": "2002-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [71.46667, 20.83333] }, "id": "5039", "mass": "100", "name": "Bherai", "nametype": "Valid", "recclass": "L6", "reclat": "20.833330", "reclong": "71.466670", "year": "1893-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [90.65, 22.68333] }, "id": "5040", "mass": "1047", "name": "Bhola", "nametype": "Valid", "recclass": "LL3-6", "reclat": "22.683330", "reclong": "90.650000", "year": "1940-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [86.9, 22.08333] }, "id": "5041", "mass": "2500", "name": "Bholghati", "nametype": "Valid", "recclass": "Howardite", "reclat": "22.083330", "reclong": "86.900000", "year": "1905-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [23.2, 53.1] }, "id": "5042", "mass": "4000", "name": "Bialystok", "nametype": "Valid", "recclass": "Eucrite-pmict", "reclat": "53.100000", "reclong": "23.200000", "year": "1827-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.16667, 50.13333] }, "id": "5043", "mass": "1900", "name": "Bielokrynitschie", "nametype": "Valid", "recclass": "H4", "reclat": "50.133330", "reclong": "27.166670", "year": "1887-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.08333, 12.45] }, "id": "5045", "mass": "25000", "name": "Bilanga", "nametype": "Valid", "recclass": "Diogenite", "reclat": "12.450000", "reclong": "-0.083330", "year": "1999-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.67639, -33.15639] }, "id": "5051", "mass": "488.1", "name": "Binningup", "nametype": "Valid", "recclass": "H5", "reclat": "-33.156390", "reclong": "115.676390", "year": "1984-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.3, 13.76667] }, "id": "5056", "mass": "560", "name": "Birni N'konni", "nametype": "Valid", "recclass": "H4", "reclat": "13.766670", "reclong": "5.300000", "year": "1923-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "33", ":@computed_region_nnqa_25f4": "657", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-80.28333, 34.16667] }, "id": "5059", "mass": "6000", "name": "Bishopville", "nametype": "Valid", "recclass": "Aubrite", "reclat": "34.166670", "reclong": "-80.283330", "year": "1843-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.6, 25.38333] }, "id": "5060", "mass": "1039", "name": "Bishunpur", "nametype": "Valid", "recclass": "LL3.15", "reclat": "25.383330", "reclong": "82.600000", "year": "1895-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.16667, 49.78333] }, "id": "5063", "mass": "1850", "name": "Bjelaja Zerkov", "nametype": "Valid", "recclass": "H6", "reclat": "49.783330", "reclong": "30.166670", "year": "1796-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25.8, 60.4] }, "id": "5064", "mass": "330000", "name": "Bjurböle", "nametype": "Valid", "recclass": "L/LL4", "reclat": "60.400000", "reclong": "25.800000", "year": "1899-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "48", ":@computed_region_nnqa_25f4": "2495", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-78.08333, 40.91667] }, "id": "5065", "mass": "705", "name": "Black Moshannan Park", "nametype": "Valid", "recclass": "L5", "reclat": "40.916670", "reclong": "-78.083330", "year": "1941-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "20", ":@computed_region_nnqa_25f4": "2164", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-97.33333, 36.83333] }, "id": "5068", "mass": "2381", "name": "Blackwell", "nametype": "Valid", "recclass": "L5", "reclat": "36.833330", "reclong": "-97.333330", "year": "1906-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "3063", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-98.83333, 31.83333] }, "id": "5071", "mass": "5100", "name": "Blanket", "nametype": "Valid", "recclass": "L6", "reclat": "31.833330", "reclong": "-98.833330", "year": "1909-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.63333, 49.36667] }, "id": "5072", "mass": "470", "name": "Blansko", "nametype": "Valid", "recclass": "H6", "reclat": "49.366670", "reclong": "16.633330", "year": "1833-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "34", ":@computed_region_nnqa_25f4": "1795", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-89.00417, 40.48] }, "id": "5076", "mass": "67.8", "name": "Bloomington", "nametype": "Valid", "recclass": "LL6", "reclat": "40.480000", "reclong": "-89.004170", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.83333, 33.83333] }, "id": "5090", "mass": "7500", "name": "Bo Xian", "nametype": "Valid", "recclass": "LL3.9", "reclat": "33.833330", "reclong": "115.833330", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-102, 23] }, "id": "5093", "mass": "56", "name": "Bocas", "nametype": "Valid", "recclass": "L6", "reclat": "23.000000", "reclong": "-102.000000", "year": "1804-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.7, 12.5] }, "id": "5097", "mass": "8800", "name": "Bogou", "nametype": "Valid", "recclass": "Iron, IAB-MG", "reclat": "12.500000", "reclong": "0.700000", "year": "1962-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [131.63333, 44.55] }, "id": "5098", "mass": "256000", "name": "Boguslavka", "nametype": "Valid", "recclass": "Iron, IIAB", "reclat": "44.550000", "reclong": "131.633330", "year": "1916-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.05, 44.86667] }, "id": "5110", "mass": "1676", "name": "Borgo San Donino", "nametype": "Valid", "recclass": "LL6", "reclat": "44.866670", "reclong": "10.050000", "year": "1808-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.03333, 21.95] }, "id": "5111", "mass": "8600", "name": "Bori", "nametype": "Valid", "recclass": "L6", "reclat": "21.950000", "reclong": "78.033330", "year": "1894-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [52.48333, 54.23333] }, "id": "5112", "mass": "1342", "name": "Boriskino", "nametype": "Valid", "recclass": "CM2", "reclat": "54.233330", "reclong": "52.483330", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [24.28333, 48.15] }, "id": "5113", "mass": "7000", "name": "Borkut", "nametype": "Valid", "recclass": "L5", "reclat": "48.150000", "reclong": "24.283330", "year": "1852-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.86667, 55.46667] }, "id": "5114", "mass": "500", "name": "Borodino", "nametype": "Valid", "recclass": "H5", "reclat": "55.466670", "reclong": "35.866670", "year": "1812-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.88333, 51.33333] }, "id": "5117", "mass": "614", "name": "Botschetschki", "nametype": "Valid", "recclass": "L4", "reclat": "51.333330", "reclong": "33.883330", "year": "1823-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-11.3715, 17.71067] }, "id": "57168", "mass": "190", "name": "Boumdeid (2003)", "nametype": "Valid", "recclass": "L6", "reclat": "17.710670", "reclong": "-11.371500", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-11.34133, 17.17493] }, "id": "57167", "mass": "3599", "name": "Boumdeid (2011)", "nametype": "Valid", "recclass": "L6", "reclat": "17.174930", "reclong": "-11.341330", "year": "2011-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6.33333, 54.56667] }, "id": "5121", "mass": "5460", "name": "Bovedy", "nametype": "Valid", "recclass": "L3", "reclat": "54.566670", "reclong": "-6.333330", "year": "1969-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "48", ":@computed_region_nnqa_25f4": "2455", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-80.08333, 40.5] }, "id": "5128", "mass": "762", "name": "Bradford Woods", "nametype": "Valid", "recclass": "L", "reclat": "40.500000", "reclong": "-80.083330", "year": "1886-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.3, 50.6] }, "id": "5133", "mass": "39000", "name": "Braunau", "nametype": "Valid", "recclass": "Iron, IIAB", "reclat": "50.600000", "reclong": "16.300000", "year": "1847-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.18361, 50.66694] }, "id": "5134", "mass": "1500", "name": "Breitscheid", "nametype": "Valid", "recclass": "H5", "reclat": "50.666940", "reclong": "8.183610", "year": "1956-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.1, 53.4] }, "id": "5135", "mass": "7250", "name": "Bremervörde", "nametype": "Valid", "recclass": "H/L3.9", "reclat": "53.400000", "reclong": "9.100000", "year": "1855-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [59.31667, 52.13333] }, "id": "5140", "mass": "219", "name": "Brient", "nametype": "Valid", "recclass": "Eucrite-pmict", "reclat": "52.133330", "reclong": "59.316670", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-112.88333, 53.9] }, "id": "5156", "mass": "303000", "name": "Bruderheim", "nametype": "Valid", "recclass": "L6", "reclat": "53.900000", "reclong": "-112.883330", "year": "1960-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [64.60035, 39.77978] }, "id": "30448", "mass": "5300", "name": "Bukhara", "nametype": "Valid", "recclass": "CV3", "reclat": "39.779780", "reclong": "64.600350", "year": "2001-01-01T00:00:00.000" }, { "fall": "Fell", "id": "5163", "mass": "2250", "name": "Bulls Run", "nametype": "Valid", "recclass": "Iron?", "year": "1964-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [129.19, -31.35] }, "id": "48653", "mass": "324", "name": "Bunburra Rockhole", "nametype": "Valid", "recclass": "Eucrite", "reclat": "-31.350000", "reclong": "129.190000", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.58333, 10.01667] }, "id": "5165", "mass": "357", "name": "Bununu", "nametype": "Valid", "recclass": "Howardite", "reclat": "10.016670", "reclong": "9.583330", "year": "1942-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [48, 5] }, "id": "5169", "mass": "120000", "name": "Bur-Gheluai", "nametype": "Valid", "recclass": "H5", "reclat": "5.000000", "reclong": "48.000000", "year": "1919-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "36", ":@computed_region_nnqa_25f4": "256", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-82.23722, 37.62194] }, "id": "5175", "mass": "1504", "name": "Burnwell", "nametype": "Valid", "recclass": "H4-an", "reclat": "37.621940", "reclong": "-82.237220", "year": "1990-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29.23333, 40.2] }, "id": "5177", "mass": "25000", "name": "Bursa", "nametype": "Valid", "recclass": "L6", "reclat": "40.200000", "reclong": "29.233330", "year": "1946-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25.78333, 46.45] }, "id": "5178", "mass": "5000", "name": "Buschhof", "nametype": "Valid", "recclass": "L6", "reclat": "46.450000", "reclong": "25.783330", "year": "1863-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.83333, 26.78333] }, "id": "5181", "mass": "1500", "name": "Bustee", "nametype": "Valid", "recclass": "Aubrite", "reclat": "26.783330", "reclong": "82.833330", "year": "1852-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.08333, 27.08333] }, "id": "5183", "mass": "29000", "name": "Butsura", "nametype": "Valid", "recclass": "H6", "reclat": "27.083330", "reclong": "84.083330", "year": "1861-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-109.84817, 52.996] }, "id": "48654", "mass": "41000", "name": "Buzzard Coulee", "nametype": "Valid", "recclass": "H4", "reclat": "52.996000", "reclong": "-109.848170", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.16667, 37.98333] }, "id": "5185", "mass": "25000", "name": "Cabezo de Mayo", "nametype": "Valid", "recclass": "L/LL6", "reclat": "37.983330", "reclong": "-1.166670", "year": "1870-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "15", ":@computed_region_nnqa_25f4": "1029", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-93.5, 35.5] }, "id": "5186", "mass": "48500", "name": "Cabin Creek", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "35.500000", "reclong": "-93.500000", "year": "1886-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [20.33333, 43.83889] }, "id": "5187", "mass": "212", "name": "Cacak", "nametype": "Valid", "recclass": "OC", "reclat": "43.838890", "reclong": "20.333330", "year": "1919-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-76.51, 3.405] }, "id": "45976", "mass": "478", "name": "Cali", "nametype": "Valid", "recclass": "H/L4", "reclat": "3.405000", "reclong": "-76.510000", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [122.33333, 11.75] }, "id": "5200", "mass": "2400", "name": "Calivo", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "11.750000", "reclong": "122.333330", "year": "1916-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-40.16667, -7.03333] }, "id": "5249", "mass": "23680", "name": "Campos Sales", "nametype": "Valid", "recclass": "L5", "reclat": "-7.033330", "reclong": "-40.166670", "year": "1991-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.6, 39.8] }, "id": "5250", "mass": "4000", "name": "Çanakkale", "nametype": "Valid", "recclass": "L6", "reclat": "39.800000", "reclong": "26.600000", "year": "1964-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.66667, 41.25] }, "id": "5251", "mass": "945", "name": "Cañellas", "nametype": "Valid", "recclass": "H4", "reclat": "41.250000", "reclong": "1.666670", "year": "1861-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-5.15, 43.38333] }, "id": "5252", "mass": "34000", "name": "Cangas de Onis", "nametype": "Valid", "recclass": "H5", "reclat": "43.383330", "reclong": "-5.150000", "year": "1866-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "9", ":@computed_region_nnqa_25f4": "1448", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-105.24139, 38.47028] }, "id": "5253", "mass": "1400", "name": "Canon City", "nametype": "Valid", "recclass": "H6", "reclat": "38.470280", "reclong": "-105.241390", "year": "1973-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "18", ":@computed_region_nnqa_25f4": "2695", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-89.58333, 37.26667] }, "id": "5260", "mass": "2300", "name": "Cape Girardeau", "nametype": "Valid", "recclass": "H6", "reclat": "37.266670", "reclong": "-89.583330", "year": "1846-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-64.55, -30.88333] }, "id": "5264", "mass": "750", "name": "Capilla del Monte", "nametype": "Valid", "recclass": "H6", "reclat": "-30.883330", "reclong": "-64.550000", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-69.04389, -16.66444] }, "id": "45817", "mass": "342", "name": "Carancas", "nametype": "Valid", "recclass": "H4-5", "reclat": "-16.664440", "reclong": "-69.043890", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27, 38.5] }, "id": "5265", "mass": "8", "name": "Caratash", "nametype": "Valid", "recclass": "LL6", "reclat": "38.500000", "reclong": "27.000000", "year": "1902-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "648", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-78.06667, 36.08333] }, "id": "5291", "mass": "7300", "name": "Castalia", "nametype": "Valid", "recclass": "H5", "reclat": "36.083330", "reclong": "-78.066670", "year": "1874-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.5, 43.35] }, "id": "5292", "name": "Castel Berardenga", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "43.350000", "reclong": "11.500000", "year": "1791-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "49", ":@computed_region_nnqa_25f4": "414", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-68.75, 44.38333] }, "id": "5293", "mass": "94", "name": "Castine", "nametype": "Valid", "recclass": "L6", "reclat": "44.383330", "reclong": "-68.750000", "year": "1848-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.2, 39.8] }, "id": "5295", "mass": "15000", "name": "Castrovillari", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "39.800000", "reclong": "16.200000", "year": "1583-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "637", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-79.25, 36.5] }, "id": "5296", "mass": "1360", "name": "Caswell County", "nametype": "Valid", "recclass": "OC", "reclat": "36.500000", "reclong": "-79.250000", "year": "1810-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-105.23333, 26.46667] }, "id": "5306", "mass": "1025", "name": "Ceniceros", "nametype": "Valid", "recclass": "L3.7", "reclat": "26.466670", "reclong": "-105.233330", "year": "1988-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "21", ":@computed_region_nnqa_25f4": "2684", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-96.91667, 43.2] }, "id": "5307", "mass": "45.6", "name": "Centerville", "nametype": "Valid", "recclass": "H5", "reclat": "43.200000", "reclong": "-96.916670", "year": "1956-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.3, 45.08333] }, "id": "5308", "mass": "6460", "name": "Cereseto", "nametype": "Valid", "recclass": "H5", "reclat": "45.083330", "reclong": "8.300000", "year": "1840-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [109.31667, 28.53333] }, "id": "5313", "mass": "3700", "name": "Chadong", "nametype": "Valid", "recclass": "L6", "reclat": "28.533330", "reclong": "109.316670", "year": "1998-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [81.66667, 25.36667] }, "id": "5314", "mass": "0.5", "name": "Chail", "nametype": "Valid", "recclass": "H6", "reclat": "25.366670", "reclong": "81.666670", "year": "1814-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [83.48333, 25.85] }, "id": "5315", "mass": "8200", "name": "Chainpur", "nametype": "Valid", "recclass": "LL3.4", "reclat": "25.850000", "reclong": "83.483330", "year": "1907-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-58.05, -30.78333] }, "id": "5316", "mass": "18300", "name": "Chajari", "nametype": "Valid", "recclass": "L5", "reclat": "-30.783330", "reclong": "-58.050000", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.01667, 20.26667] }, "id": "5320", "mass": "8800", "name": "Chandakapur", "nametype": "Valid", "recclass": "L5", "reclat": "20.266670", "reclong": "76.016670", "year": "1838-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [79.05, 27.28333] }, "id": "5321", "mass": "1100", "name": "Chandpur", "nametype": "Valid", "recclass": "L6", "reclat": "27.283330", "reclong": "79.050000", "year": "1885-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.75, 29.08333] }, "id": "5322", "mass": "1810", "name": "Changde", "nametype": "Valid", "recclass": "H5", "reclat": "29.083330", "reclong": "111.750000", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.05, 46.68333] }, "id": "5325", "mass": "31500", "name": "Chantonnay", "nametype": "Valid", "recclass": "L6", "reclat": "46.683330", "reclong": "1.050000", "year": "1812-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "39", ":@computed_region_nnqa_25f4": "2007", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-87.33333, 36.16667] }, "id": "5328", "mass": "4300", "name": "Charlotte", "nametype": "Valid", "recclass": "Iron, IVA", "reclat": "36.166670", "reclong": "-87.333330", "year": "1835-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.56667, 47.93333] }, "id": "5329", "mass": "27000", "name": "Charsonville", "nametype": "Valid", "recclass": "H6", "reclat": "47.933330", "reclong": "1.566670", "year": "1810-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.5, 29.48333] }, "id": "5330", "mass": "12000", "name": "Charwallas", "nametype": "Valid", "recclass": "H6", "reclat": "29.483330", "reclong": "75.500000", "year": "1834-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.36667, 47.71667] }, "id": "5331", "mass": "4000", "name": "Chassigny", "nametype": "Valid", "recclass": "Martian (chassignite)", "reclat": "47.716670", "reclong": "5.366670", "year": "1815-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [2.91667, 47.93333] }, "id": "5332", "mass": "30000", "name": "Château-Renard", "nametype": "Valid", "recclass": "L6", "reclat": "47.933330", "reclong": "2.916670", "year": "1841-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7.46667, 41.93333] }, "id": "5334", "mass": "2945", "name": "Chaves", "nametype": "Valid", "recclass": "Howardite", "reclat": "41.933330", "reclong": "-7.466670", "year": "1925-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [32.5, -3.66667] }, "id": "5338", "mass": "2936", "name": "Chela", "nametype": "Valid", "recclass": "H4", "reclat": "-3.666670", "reclong": "32.500000", "year": "1988-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [61.11667, 54.81667] }, "id": "57165", "mass": "100000", "name": "Chelyabinsk", "nametype": "Valid", "recclass": "LL5", "reclat": "54.816670", "reclong": "61.116670", "year": "2013-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-5.01472, 23.69639] }, "id": "47347", "mass": "100000", "name": "Chergach ", "nametype": "Valid", "recclass": "H5", "reclat": "23.696390", "reclong": "-5.014720", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.1, 53.7] }, "id": "5339", "mass": "6000", "name": "Chernyi Bor", "nametype": "Valid", "recclass": "H4", "reclat": "53.700000", "reclong": "30.100000", "year": "1964-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "33", ":@computed_region_nnqa_25f4": "2582", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-81.88333, 35.03333] }, "id": "5340", "mass": "8400", "name": "Cherokee Springs", "nametype": "Valid", "recclass": "LL6", "reclat": "35.033330", "reclong": "-81.883330", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.81667, 46.55] }, "id": "5341", "mass": "705", "name": "Chervettaz", "nametype": "Valid", "recclass": "L5", "reclat": "46.550000", "reclong": "6.816670", "year": "1901-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [34, 50.83333] }, "id": "5342", "mass": "1700", "name": "Chervony Kut", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "50.833330", "reclong": "34.000000", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.5, 14.5] }, "id": "5344", "mass": "72", "name": "Chetrinahatti", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "14.500000", "reclong": "76.500000", "year": "1880-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [101.63333, 17.9] }, "id": "5345", "mass": "367", "name": "Chiang Khan", "nametype": "Valid", "recclass": "H6", "reclat": "17.900000", "reclong": "101.633330", "year": "1981-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "48", ":@computed_region_nnqa_25f4": "2459", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-79.73333, 40.93333] }, "id": "5349", "mass": "303", "name": "Chicora", "nametype": "Valid", "recclass": "LL6", "reclat": "40.933330", "reclong": "-79.733330", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.395, -10.05944] }, "id": "5355", "mass": "3920", "name": "Chisenga", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "-10.059440", "reclong": "33.395000", "year": "1988-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.96667, -17.35] }, "id": "5356", "name": "Chitado", "nametype": "Valid", "recclass": "L6", "reclat": "-17.350000", "reclong": "13.966670", "year": "1966-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.97667, 47.47083] }, "id": "5357", "mass": "4000", "name": "Chitenay", "nametype": "Valid", "recclass": "L6", "reclat": "47.470830", "reclong": "0.976670", "year": "1978-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [108.1, -6.95] }, "id": "5364", "mass": "1600", "name": "Cilimus", "nametype": "Valid", "recclass": "L5", "reclat": "-6.950000", "reclong": "108.100000", "year": "1979-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "31", ":@computed_region_nnqa_25f4": "67", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-81.87278, 32.1025] }, "id": "5374", "mass": "1455", "name": "Claxton", "nametype": "Valid", "recclass": "L6", "reclat": "32.102500", "reclong": "-81.872780", "year": "1984-01-01T00:00:00.000" }, { "fall": "Fell", "id": "5383", "mass": "48.6", "name": "Clohars", "nametype": "Valid", "recclass": "L4", "year": "1822-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "41", ":@computed_region_nnqa_25f4": "877", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-90.28333, 44.9] }, "id": "5395", "mass": "104000", "name": "Colby (Wisconsin)", "nametype": "Valid", "recclass": "L6", "reclat": "44.900000", "reclong": "-90.283330", "year": "1917-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [19.38333, -33.13333] }, "id": "5397", "mass": "5200", "name": "Cold Bokkeveld", "nametype": "Valid", "recclass": "CM2", "reclat": "-33.133330", "reclong": "19.383330", "year": "1838-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "50", ":@computed_region_nnqa_25f4": "356", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-84.50778, 43.76111] }, "id": "5401", "mass": "469", "name": "Coleman", "nametype": "Valid", "recclass": "L6", "reclat": "43.761110", "reclong": "-84.507780", "year": "1994-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.61667, 42.53333] }, "id": "5403", "mass": "5000", "name": "Collescipoli", "nametype": "Valid", "recclass": "H5", "reclat": "42.533330", "reclong": "12.616670", "year": "1890-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-47.55, -19.85] }, "id": "5418", "mass": "20350", "name": "Conquista", "nametype": "Valid", "recclass": "H4", "reclat": "-19.850000", "reclong": "-47.550000", "year": "1965-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-100.86667, 21.16667] }, "id": "5451", "mass": "1200", "name": "Cosina", "nametype": "Valid", "recclass": "H5", "reclat": "21.166670", "reclong": "-100.866670", "year": "1844-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.26667, 10.2] }, "id": "5465", "mass": "1460", "name": "Cranganore", "nametype": "Valid", "recclass": "L6", "reclat": "10.200000", "reclong": "76.266670", "year": "1917-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "20", ":@computed_region_nnqa_25f4": "2201", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-97.58333, 35.95] }, "id": "5470", "mass": "78.400000000000006", "name": "Crescent", "nametype": "Valid", "recclass": "CM2", "reclat": "35.950000", "reclong": "-97.583330", "year": "1936-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.3, -27.7] }, "id": "5474", "mass": "3650", "name": "Cronstad", "nametype": "Valid", "recclass": "H5", "reclat": "-27.700000", "reclong": "27.300000", "year": "1877-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "2332", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-78.13333, 35.63333] }, "id": "5476", "mass": "167", "name": "Cross Roads", "nametype": "Valid", "recclass": "H5", "reclat": "35.633330", "reclong": "-78.133330", "year": "1892-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6.21667, 54.61667] }, "id": "5477", "mass": "4255", "name": "Crumlin", "nametype": "Valid", "recclass": "L5", "reclat": "54.616670", "reclong": "-6.216670", "year": "1902-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "36", ":@computed_region_nnqa_25f4": "1426", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-84.35, 36.83333] }, "id": "5496", "mass": "17000", "name": "Cumberland Falls", "nametype": "Valid", "recclass": "Aubrite", "reclat": "36.833330", "reclong": "-84.350000", "year": "1919-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "36", ":@computed_region_nnqa_25f4": "244", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-84.25, 38.4] }, "id": "5500", "mass": "6000", "name": "Cynthiana", "nametype": "Valid", "recclass": "L/LL4", "reclat": "38.400000", "reclong": "-84.250000", "year": "1877-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.83333, 35.61667] }, "id": "5504", "mass": "18000", "name": "Dahmani", "nametype": "Valid", "recclass": "LL6", "reclat": "35.616670", "reclong": "8.833330", "year": "1981-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [83.96667, 26.91667] }, "id": "5511", "mass": "5650", "name": "Dandapur", "nametype": "Valid", "recclass": "L6", "reclat": "26.916670", "reclong": "83.966670", "year": "1878-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [24.56667, -28.2] }, "id": "5513", "mass": "1064", "name": "Daniel's Kuil", "nametype": "Valid", "recclass": "EL6", "reclat": "-28.200000", "reclong": "24.566670", "year": "1868-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "29", ":@computed_region_nnqa_25f4": "103", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-87.06667, 34.4] }, "id": "5514", "mass": "2000", "name": "Danville", "nametype": "Valid", "recclass": "L6", "reclat": "34.400000", "reclong": "-87.066670", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.65, 49.86667] }, "id": "6603", "mass": "100", "name": "Darmstadt", "nametype": "Valid", "recclass": "H5", "reclat": "49.866670", "reclong": "8.650000", "year": "1804-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [59.685, 41.98444] }, "id": "6604", "mass": "7000", "name": "Dashoguz", "nametype": "Valid", "recclass": "H5", "reclat": "41.984440", "reclong": "59.685000", "year": "1998-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-79.95756, -1.87089] }, "id": "51559", "mass": "6580", "name": "Daule", "nametype": "Valid", "recclass": "L5", "reclat": "-1.870890", "reclong": "-79.957560", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-80, 43] }, "id": "6621", "mass": "340", "name": "De Cewsville", "nametype": "Valid", "recclass": "H6", "reclat": "43.000000", "reclong": "-80.000000", "year": "1887-01-01T00:00:00.000" }, { ":@computed_region_nnqa_25f4": "2491", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-74, 40.25] }, "id": "6634", "mass": "28", "name": "Deal", "nametype": "Valid", "recclass": "L6", "reclat": "40.250000", "reclong": "-74.000000", "year": "1829-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.25, 28.56667] }, "id": "6642", "mass": "0.8", "name": "Delhi", "nametype": "Valid", "recclass": "L5", "reclat": "28.566670", "reclong": "77.250000", "year": "1897-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.76667, 51.46667] }, "id": "6649", "mass": "16400", "name": "Demina", "nametype": "Valid", "recclass": "L6", "reclat": "51.466670", "reclong": "84.766670", "year": "1911-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "9", ":@computed_region_nnqa_25f4": "1444", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-104.93056, 39.7825] }, "id": "6660", "mass": "230", "name": "Denver", "nametype": "Valid", "recclass": "L6", "reclat": "39.782500", "reclong": "-104.930560", "year": "1967-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [93.86667, 26.68333] }, "id": "6664", "mass": "12500", "name": "Dergaon", "nametype": "Valid", "recclass": "H5", "reclat": "26.683330", "reclong": "93.866670", "year": "2001-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [73.61667, 25.73333] }, "id": "6693", "mass": "25400", "name": "Desuri", "nametype": "Valid", "recclass": "H6", "reclat": "25.733330", "reclong": "73.616670", "year": "1962-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [81, 19] }, "id": "6694", "mass": "12000", "name": "Devgaon", "nametype": "Valid", "recclass": "H3.8", "reclat": "19.000000", "reclong": "81.000000", "year": "2001-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.525, 24.225] }, "id": "6696", "mass": "1140", "name": "Devri-Khera", "nametype": "Valid", "recclass": "L6", "reclat": "24.225000", "reclong": "76.525000", "year": "1994-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [71.42722, 22.37778] }, "id": "6698", "mass": "45000", "name": "Dhajala", "nametype": "Valid", "recclass": "H3.8", "reclat": "22.377780", "reclong": "71.427220", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.6, 14.88333] }, "id": "6699", "mass": "1800", "name": "Dharwar", "nametype": "Valid", "recclass": "OC", "reclat": "14.883330", "reclong": "75.600000", "year": "1848-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.46667, 32.23333] }, "id": "7640", "mass": "32000", "name": "Dhurmsala", "nametype": "Valid", "recclass": "LL6", "reclat": "32.233330", "reclong": "76.466670", "year": "1860-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.32997, 37.35172] }, "id": "47350", "mass": "3396", "name": "Didim", "nametype": "Valid", "recclass": "H3-5", "reclat": "37.351720", "reclong": "27.329970", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [18.56667, -33.75] }, "id": "7642", "mass": "1000", "name": "Diep River", "nametype": "Valid", "recclass": "L6", "reclat": "-33.750000", "reclong": "18.566670", "year": "1906-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-60.46667, -31.88333] }, "id": "7649", "mass": "400", "name": "Distrito Quebracho", "nametype": "Valid", "recclass": "H4", "reclat": "-31.883330", "reclong": "-60.466670", "year": "1957-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.5, -7.5] }, "id": "7652", "mass": "166000", "name": "Djati-Pengilon", "nametype": "Valid", "recclass": "H6", "reclat": "-7.500000", "reclong": "111.500000", "year": "1884-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.05, 12.73333] }, "id": "7656", "mass": "3950", "name": "Djermaia", "nametype": "Valid", "recclass": "H", "reclat": "12.733330", "reclong": "15.050000", "year": "1961-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.55, 36.95] }, "id": "7657", "mass": "10000", "name": "Djoumine", "nametype": "Valid", "recclass": "H5-6", "reclat": "36.950000", "reclong": "9.550000", "year": "1999-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [90.33333, 23.5] }, "id": "7658", "mass": "3840", "name": "Dokachi", "nametype": "Valid", "recclass": "H5", "reclat": "23.500000", "reclong": "90.333330", "year": "1903-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25.3, 50.75] }, "id": "7659", "mass": "1600", "name": "Dolgovoli", "nametype": "Valid", "recclass": "L6", "reclat": "50.750000", "reclong": "25.300000", "year": "1864-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29, 40] }, "id": "7661", "mass": "438", "name": "Domanitch", "nametype": "Valid", "recclass": "L5", "reclat": "40.000000", "reclong": "29.000000", "year": "1907-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [119.03333, 45.5] }, "id": "7706", "mass": "128800", "name": "Dong Ujimqin Qi", "nametype": "Valid", "recclass": "Mesosiderite", "reclat": "45.500000", "reclong": "119.033330", "year": "1995-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.45, 21.86667] }, "id": "7707", "mass": "230", "name": "Donga Kohrod", "nametype": "Valid", "recclass": "H6", "reclat": "21.866670", "reclong": "82.450000", "year": "1899-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [120.78333, 32.91667] }, "id": "7708", "mass": "5500", "name": "Dongtai", "nametype": "Valid", "recclass": "LL6", "reclat": "32.916670", "reclong": "120.783330", "year": "1970-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [112.3, 51.2] }, "id": "7718", "mass": "3891", "name": "Doroninsk", "nametype": "Valid", "recclass": "H5-7", "reclat": "51.200000", "reclong": "112.300000", "year": "1805-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.16667, 13.05] }, "id": "7722", "mass": "1250", "name": "Dosso", "nametype": "Valid", "recclass": "L6", "reclat": "13.050000", "reclong": "3.166670", "year": "1962-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6.3, 32.33333] }, "id": "7723", "mass": "1161", "name": "Douar Mghila", "nametype": "Valid", "recclass": "LL6", "reclat": "32.333330", "reclong": "-6.300000", "year": "1932-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.91667, -13.66667] }, "id": "7725", "mass": "642", "name": "Dowa", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "-13.666670", "reclong": "33.916670", "year": "1976-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "39", ":@computed_region_nnqa_25f4": "2115", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-86.5, 36.4] }, "id": "7728", "mass": "5000", "name": "Drake Creek", "nametype": "Valid", "recclass": "L6", "reclat": "36.400000", "reclong": "-86.500000", "year": "1827-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-82.26, 42.52] }, "id": "7731", "mass": "47700", "name": "Dresden (Ontario)", "nametype": "Valid", "recclass": "H6", "reclat": "42.520000", "reclong": "-82.260000", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [18.44167, 42.45833] }, "id": "7736", "mass": "1900", "name": "Dubrovnik", "nametype": "Valid", "recclass": "L3-6", "reclat": "42.458330", "reclong": "18.441670", "year": "1951-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [152.83333, -31.66667] }, "id": "7743", "mass": "30", "name": "Dunbogan", "nametype": "Valid", "recclass": "L6", "reclat": "-31.666670", "reclong": "152.833330", "year": "1999-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-8.03333, 52.55] }, "id": "7745", "mass": "2270", "name": "Dundrum", "nametype": "Valid", "recclass": "H5", "reclat": "52.550000", "reclong": "-8.033330", "year": "1865-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [128.25, 43.33333] }, "id": "7749", "name": "Dunhua", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "43.333330", "reclong": "128.250000", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.63333, 30.3] }, "id": "7750", "mass": "13200", "name": "Durala", "nametype": "Valid", "recclass": "L6", "reclat": "30.300000", "reclong": "76.633330", "year": "1815-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [39.5, -4] }, "id": "7752", "mass": "577", "name": "Duruma", "nametype": "Valid", "recclass": "L6", "reclat": "-4.000000", "reclong": "39.500000", "year": "1853-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [127.26667, 33.43333] }, "id": "7754", "mass": "2117", "name": "Duwun", "nametype": "Valid", "recclass": "L6", "reclat": "33.433330", "reclong": "127.266670", "year": "1943-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.31667, -27.2] }, "id": "7755", "mass": "3230", "name": "Dwaleni", "nametype": "Valid", "recclass": "H4-6", "reclat": "-27.200000", "reclong": "31.316670", "year": "1970-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82, 26.25] }, "id": "7757", "mass": "300", "name": "Dyalpur", "nametype": "Valid", "recclass": "Ureilite", "reclat": "26.250000", "reclong": "82.000000", "year": "1872-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [151, -3] }, "id": "7758", "mass": "188", "name": "Dyarrl Island", "nametype": "Valid", "recclass": "Mesosiderite-A1", "reclat": "-3.000000", "reclong": "151.000000", "year": "1933-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "19", ":@computed_region_nnqa_25f4": "462", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-96.47167, 40.78167] }, "id": "7760", "mass": "10000", "name": "Eagle", "nametype": "Valid", "recclass": "EL6", "reclat": "40.781670", "reclong": "-96.471670", "year": "1947-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.83333, -17.3] }, "id": "7774", "mass": "2400", "name": "Ehole", "nametype": "Valid", "recclass": "H5", "reclat": "-17.300000", "reclong": "15.833330", "year": "1961-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.21667, 48.9] }, "id": "7775", "mass": "3000", "name": "Eichstädt", "nametype": "Valid", "recclass": "H5", "reclat": "48.900000", "reclong": "11.216670", "year": "1785-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13, 56.03333] }, "id": "7776", "mass": "3336", "name": "Ekeby", "nametype": "Valid", "recclass": "H4", "reclat": "56.033330", "reclong": "13.000000", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.78333, 28.26667] }, "id": "7777", "mass": "840", "name": "Ekh Khera", "nametype": "Valid", "recclass": "H6", "reclat": "28.266670", "reclong": "78.783330", "year": "1916-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.25, 34.41667] }, "id": "7807", "mass": "10000", "name": "El Idrissia", "nametype": "Valid", "recclass": "L6", "reclat": "34.416670", "reclong": "3.250000", "year": "1989-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-97.37, 25.37] }, "id": "45977", "mass": "17226", "name": "El Paso de Aguila", "nametype": "Valid", "recclass": "H5", "reclat": "25.370000", "reclong": "-97.370000", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-103.05167, 19.96722] }, "id": "7819", "mass": "5000", "name": "El Tigre", "nametype": "Valid", "recclass": "L6", "reclat": "19.967220", "reclong": "-103.051670", "year": "1993-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "9", ":@computed_region_nnqa_25f4": "88", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-104.58817, 39.24667] }, "id": "7822", "mass": "680.5", "name": "Elbert", "nametype": "Valid", "recclass": "LL6", "reclat": "39.246670", "reclong": "-104.588170", "year": "1998-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.73333, 50.18333] }, "id": "7823", "mass": "107000", "name": "Elbogen", "nametype": "Valid", "recclass": "Iron, IID", "reclat": "50.183330", "reclong": "12.733330", "year": "1400-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.66667, 47.83333] }, "id": "7824", "mass": "54640", "name": "Elenovka", "nametype": "Valid", "recclass": "L5", "reclat": "47.833330", "reclong": "37.666670", "year": "1951-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [4, 51.75] }, "id": "10019", "mass": "1470", "name": "Ellemeet", "nametype": "Valid", "recclass": "Diogenite", "reclat": "51.750000", "reclong": "4.000000", "year": "1925-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [151.61667, -29.46667] }, "id": "10033", "mass": "127", "name": "Emmaville", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "-29.466670", "reclong": "151.616670", "year": "1900-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [109.5, 30.3] }, "id": "10038", "mass": "8000", "name": "Enshi", "nametype": "Valid", "recclass": "H5", "reclat": "30.300000", "reclong": "109.500000", "year": "1974-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7.35, 47.86667] }, "id": "10039", "mass": "127000", "name": "Ensisheim", "nametype": "Valid", "recclass": "LL6", "reclat": "47.866670", "reclong": "7.350000", "year": "1492-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.46667, 48.18333] }, "id": "10041", "mass": "277", "name": "Épinal", "nametype": "Valid", "recclass": "H5", "reclat": "48.183330", "reclong": "6.466670", "year": "1822-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [81.89167, 19.03333] }, "id": "10042", "mass": "113", "name": "Erakot", "nametype": "Valid", "recclass": "CM2", "reclat": "19.033330", "reclong": "81.891670", "year": "1940-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [44.5, 40.3] }, "id": "10043", "mass": "107.2", "name": "Erevan", "nametype": "Valid", "recclass": "Howardite", "reclat": "40.300000", "reclong": "44.500000", "year": "1911-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [44.16667, 1.16667] }, "id": "10044", "mass": "20000", "name": "Ergheo", "nametype": "Valid", "recclass": "L5", "reclat": "1.166670", "reclong": "44.166670", "year": "1889-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.25, 52.21667] }, "id": "10049", "mass": "2250", "name": "Erxleben", "nametype": "Valid", "recclass": "H6", "reclat": "52.216670", "reclong": "11.250000", "year": "1812-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.1, 46.25] }, "id": "10051", "mass": "1500", "name": "Esnandes", "nametype": "Valid", "recclass": "L6", "reclat": "46.250000", "reclong": "-1.100000", "year": "1837-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.83333, 2.88333] }, "id": "10055", "mass": "500", "name": "Essebi", "nametype": "Valid", "recclass": "C2-ung", "reclat": "2.883330", "reclong": "30.833330", "year": "1957-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "16", ":@computed_region_nnqa_25f4": "277", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-94.83333, 43.41667] }, "id": "10059", "mass": "320000", "name": "Estherville", "nametype": "Valid", "recclass": "Mesosiderite-A3/4", "reclat": "43.416670", "reclong": "-94.833330", "year": "1879-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "17", ":@computed_region_nnqa_25f4": "1300", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-97.03333, 39.75] }, "id": "10074", "mass": "89400", "name": "Farmington", "nametype": "Valid", "recclass": "L5", "reclat": "39.750000", "reclong": "-97.033330", "year": "1890-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "2439", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-77.53333, 35.55] }, "id": "10075", "mass": "56000", "name": "Farmville", "nametype": "Valid", "recclass": "H4", "reclat": "35.550000", "reclong": "-77.533330", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [2.81667, 44.38333] }, "id": "10078", "mass": "1500", "name": "Favars", "nametype": "Valid", "recclass": "H5", "reclat": "44.383330", "reclong": "2.816670", "year": "1844-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "15", ":@computed_region_nnqa_25f4": "70", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-94.16667, 36.05] }, "id": "10079", "mass": "2360", "name": "Fayetteville", "nametype": "Valid", "recclass": "H4", "reclat": "36.050000", "reclong": "-94.166670", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.45, 36.88333] }, "id": "10080", "mass": "380", "name": "Feid Chair", "nametype": "Valid", "recclass": "H4", "reclat": "36.883330", "reclong": "8.450000", "year": "1875-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "29", ":@computed_region_nnqa_25f4": "1631", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-87.16667, 32.53333] }, "id": "10081", "mass": "3200", "name": "Felix", "nametype": "Valid", "recclass": "CO3.3", "reclat": "32.533330", "reclong": "-87.166670", "year": "1900-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [116.75, 34.6] }, "id": "10086", "mass": "82", "name": "Fenghsien-Ku", "nametype": "Valid", "recclass": "H5", "reclat": "34.600000", "reclong": "116.750000", "year": "1924-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "2331", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-81.41667, 36.1] }, "id": "10088", "mass": "220", "name": "Ferguson", "nametype": "Valid", "recclass": "OC", "reclat": "36.100000", "reclong": "-81.416670", "year": "1889-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.75333, 43.18111] }, "id": "10091", "mass": "10200", "name": "Fermo", "nametype": "Valid", "recclass": "H3-5", "reclat": "43.181110", "reclong": "13.753330", "year": "1996-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "1", ":@computed_region_nnqa_25f4": "385", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-96.85, 47.81667] }, "id": "10107", "mass": "17600", "name": "Fisher", "nametype": "Valid", "recclass": "L6", "reclat": "47.816670", "reclong": "-96.850000", "year": "1894-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "807", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-97.76667, 30.83333] }, "id": "10111", "mass": "3640", "name": "Florence", "nametype": "Valid", "recclass": "H3", "reclat": "30.833330", "reclong": "-97.766670", "year": "1922-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "16", ":@computed_region_nnqa_25f4": "1785", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-93.66667, 43.25] }, "id": "10119", "mass": "152000", "name": "Forest City", "nametype": "Valid", "recclass": "H5", "reclat": "43.250000", "reclong": "-93.666670", "year": "1890-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [146.85833, -33.35] }, "id": "10120", "mass": "26000", "name": "Forest Vale", "nametype": "Valid", "recclass": "H4", "reclat": "-33.350000", "reclong": "146.858330", "year": "1942-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "40", ":@computed_region_nnqa_25f4": "2839", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-78.08333, 36.78333] }, "id": "10123", "mass": "6067", "name": "Forksville", "nametype": "Valid", "recclass": "L6", "reclat": "36.783330", "reclong": "-78.083330", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7.31667, 50.95] }, "id": "10163", "mass": "240", "name": "Forsbach", "nametype": "Valid", "recclass": "H6", "reclat": "50.950000", "reclong": "7.316670", "year": "1900-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "31", ":@computed_region_nnqa_25f4": "1470", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-83.96667, 33.01667] }, "id": "10164", "mass": "16300", "name": "Forsyth", "nametype": "Valid", "recclass": "L6", "reclat": "33.016670", "reclong": "-83.966670", "year": "1829-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7, 28.25] }, "id": "10166", "name": "Fort Flatters", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "28.250000", "reclong": "7.000000", "year": "1944-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "29", ":@computed_region_nnqa_25f4": "99", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-87.83333, 34.48333] }, "id": "10177", "mass": "650", "name": "Frankfort (stone)", "nametype": "Valid", "recclass": "Howardite", "reclat": "34.483330", "reclong": "-87.833330", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [113.56694, 31.47556] }, "id": "52412", "mass": "23000", "name": "Fuhe", "nametype": "Valid", "recclass": "L5", "reclat": "31.475560", "reclong": "113.566940", "year": "1945-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [130.2, 33.18333] }, "id": "10836", "mass": "11620", "name": "Fukutomi", "nametype": "Valid", "recclass": "L5", "reclat": "33.183330", "reclong": "130.200000", "year": "1882-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.33333, 55.33333] }, "id": "10838", "name": "Fünen", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "55.333330", "reclong": "10.333330", "year": "1654-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [80.81667, 25.95] }, "id": "10839", "mass": "4000", "name": "Futtehpur", "nametype": "Valid", "recclass": "L6", "reclat": "25.950000", "reclong": "80.816670", "year": "1822-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.9, 32.9] }, "id": "10840", "mass": "2500", "name": "Fuyang", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "32.900000", "reclong": "115.900000", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.4, 44.3] }, "id": "10846", "mass": "132.69999999999999", "name": "Galapian", "nametype": "Valid", "recclass": "H6", "reclat": "44.300000", "reclong": "0.400000", "year": "1826-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.43333, 7.05] }, "id": "10848", "mass": "36.1", "name": "Galim (a)", "nametype": "Valid", "recclass": "LL6", "reclat": "7.050000", "reclong": "12.433330", "year": "1952-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.43333, 7.05] }, "id": "10849", "mass": "28", "name": "Galim (b)", "nametype": "Valid", "recclass": "EH3/4-an", "reclat": "7.050000", "reclong": "12.433330", "year": "1952-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.78333, 51.68333] }, "id": "10850", "mass": "5000", "name": "Galkiv", "nametype": "Valid", "recclass": "H4", "reclat": "51.683330", "reclong": "30.783330", "year": "1995-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [68.53333, 27.35] }, "id": "10851", "mass": "6400", "name": "Gambat", "nametype": "Valid", "recclass": "L6", "reclat": "27.350000", "reclong": "68.533330", "year": "1897-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-2.18333, 11.65] }, "id": "10854", "name": "Gao-Guenie", "nametype": "Valid", "recclass": "H5", "reclat": "11.650000", "reclong": "-2.183330", "year": "1960-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [68.53333, 27.88333] }, "id": "10860", "mass": "380", "name": "Garhi Yasin", "nametype": "Valid", "recclass": "Iron, IIE", "reclat": "27.883330", "reclong": "68.533330", "year": "1917-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "13", ":@computed_region_nnqa_25f4": "2985", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-112.13333, 41.68333] }, "id": "10861", "mass": "102", "name": "Garland", "nametype": "Valid", "recclass": "Diogenite-pm", "reclat": "41.683330", "reclong": "-112.133330", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.03333, 12.85] }, "id": "44882", "mass": "4162", "name": "Gashua", "nametype": "Valid", "recclass": "L6", "reclat": "12.850000", "reclong": "11.033330", "year": "1984-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-2.04167, 14.15083] }, "id": "10866", "name": "Gasseltepaoua", "nametype": "Valid", "recclass": "H5", "reclat": "14.150830", "reclong": "-2.041670", "year": "2000-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.91667, 12.91667] }, "id": "10870", "mass": "725", "name": "Geidam", "nametype": "Valid", "recclass": "H5", "reclat": "12.916670", "reclong": "11.916670", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [136.88333, 35.53333] }, "id": "10914", "mass": "14290", "name": "Gifu", "nametype": "Valid", "recclass": "L6", "reclat": "35.533330", "reclong": "136.883330", "year": "1909-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.56667, 37.31667] }, "id": "10917", "mass": "18000", "name": "Girgenti", "nametype": "Valid", "recclass": "L6", "reclat": "37.316670", "reclong": "13.566670", "year": "1853-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.91667, 9.6] }, "id": "10919", "mass": "480", "name": "Git-Git", "nametype": "Valid", "recclass": "L6", "reclat": "9.600000", "reclong": "9.916670", "year": "1947-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.86667, 52.2] }, "id": "10923", "mass": "670", "name": "Glanerbrug", "nametype": "Valid", "recclass": "L/LL5", "reclat": "52.200000", "reclong": "6.866670", "year": "1990-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [107.7, -7.25] }, "id": "10924", "mass": "1303", "name": "Glanggang", "nametype": "Valid", "recclass": "H5-6", "reclat": "-7.250000", "reclong": "107.700000", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.61667, 57.35] }, "id": "10926", "mass": "152000", "name": "Glasatovo", "nametype": "Valid", "recclass": "H4", "reclat": "57.350000", "reclong": "37.616670", "year": "1918-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.3, 52.45972] }, "id": "10930", "mass": "767", "name": "Glatton", "nametype": "Valid", "recclass": "L6", "reclat": "52.459720", "reclong": "-0.300000", "year": "1991-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.76667, 50.66667] }, "id": "10936", "mass": "1750", "name": "Gnadenfrei", "nametype": "Valid", "recclass": "H5", "reclat": "50.666670", "reclong": "16.766670", "year": "1879-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [89.05, 24.23333] }, "id": "10948", "mass": "1600", "name": "Gopalpur", "nametype": "Valid", "recclass": "H6", "reclat": "24.233330", "reclong": "89.050000", "year": "1865-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [38.08333, 48.28333] }, "id": "10949", "mass": "3618", "name": "Gorlovka", "nametype": "Valid", "recclass": "H3.7", "reclat": "48.283330", "reclong": "38.083330", "year": "1974-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [2.25, 42.9] }, "id": "10956", "mass": "9000", "name": "Granes", "nametype": "Valid", "recclass": "L6", "reclat": "42.900000", "reclong": "2.250000", "year": "1964-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11, 60.66667] }, "id": "11196", "mass": "45.5", "name": "Grefsheim", "nametype": "Valid", "recclass": "L5", "reclat": "60.666670", "reclong": "11.000000", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-79.61667, 43.2] }, "id": "50911", "mass": "215", "name": "Grimsby", "nametype": "Valid", "recclass": "H5", "reclat": "43.200000", "reclong": "-79.616670", "year": "2009-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [45.38333, 43.66667] }, "id": "11206", "mass": "3500", "name": "Grosnaja", "nametype": "Valid", "recclass": "CV3", "reclat": "43.666670", "reclong": "45.383330", "year": "1861-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [18.71667, 49.26667] }, "id": "11207", "mass": "10500", "name": "Gross-Divina", "nametype": "Valid", "recclass": "H5", "reclat": "49.266670", "reclong": "18.716670", "year": "1837-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.58333, 46.35] }, "id": "11208", "mass": "8000", "name": "Grossliebenthal", "nametype": "Valid", "recclass": "L6", "reclat": "46.350000", "reclong": "30.583330", "year": "1881-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.5, 51.93333] }, "id": "11426", "mass": "1000", "name": "Grüneberg", "nametype": "Valid", "recclass": "H4", "reclat": "51.933330", "reclong": "15.500000", "year": "1841-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.63333, 52.86667] }, "id": "11429", "mass": "690", "name": "Grzempach", "nametype": "Valid", "recclass": "H5", "reclat": "52.866670", "reclong": "16.633330", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-58.61667, -33] }, "id": "11432", "mass": "22000", "name": "Gualeguaychú", "nametype": "Valid", "recclass": "H6", "reclat": "-33.000000", "reclong": "-58.616670", "year": "1932-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [122.76389, 39.80417] }, "id": "11435", "mass": "2910", "name": "Guangmingshan", "nametype": "Valid", "recclass": "H5", "reclat": "39.804170", "reclong": "122.763890", "year": "1996-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [105, 24.1] }, "id": "11436", "name": "Guangnan", "nametype": "Valid", "recclass": "L6", "reclat": "24.100000", "reclong": "105.000000", "year": "1983-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [118.4, 37.1] }, "id": "11437", "mass": "1900", "name": "Guangrao", "nametype": "Valid", "recclass": "L6", "reclat": "37.100000", "reclong": "118.400000", "year": "1980-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6.01667, 38.73333] }, "id": "11439", "mass": "39000", "name": "Guareña", "nametype": "Valid", "recclass": "H6", "reclat": "38.733330", "reclong": "-6.016670", "year": "1892-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [20.23333, 43.76667] }, "id": "11440", "mass": "1915", "name": "Guêa", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "43.766670", "reclong": "20.233330", "year": "1891-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.68333, 13.5] }, "id": "11442", "mass": "288", "name": "Guibga", "nametype": "Valid", "recclass": "L5", "reclat": "13.500000", "reclong": "-0.683330", "year": "1972-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.98333, 9.91667] }, "id": "11443", "mass": "968", "name": "Guidder", "nametype": "Valid", "recclass": "LL5", "reclat": "9.916670", "reclong": "13.983330", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.05, 22.98333] }, "id": "11448", "mass": "2449", "name": "Gujargaon", "nametype": "Valid", "recclass": "H5", "reclat": "22.983330", "reclong": "76.050000", "year": "1982-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.65833, 11.49167] }, "id": "11449", "mass": "100000", "name": "Gujba", "nametype": "Valid", "recclass": "CBa", "reclat": "11.491670", "reclong": "11.658330", "year": "1984-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [24.7, 42.9] }, "id": "11450", "mass": "5700", "name": "Gumoschnik", "nametype": "Valid", "recclass": "H5", "reclat": "42.900000", "reclong": "24.700000", "year": "1904-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.56667, 13.78333] }, "id": "11464", "mass": "28", "name": "Gurram Konda", "nametype": "Valid", "recclass": "L6", "reclat": "13.783330", "reclong": "78.566670", "year": "1814-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [42.41667, 9.36667] }, "id": "11465", "mass": "34650", "name": "Gursum", "nametype": "Valid", "recclass": "H4/5", "reclat": "9.366670", "reclong": "42.416670", "year": "1981-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.38333, 51.91667] }, "id": "11466", "mass": "1000", "name": "Gütersloh", "nametype": "Valid", "recclass": "H3/4", "reclat": "51.916670", "reclong": "8.383330", "year": "1851-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [127.5, 35] }, "id": "11467", "mass": "1320", "name": "Gyokukei", "nametype": "Valid", "recclass": "OC", "reclat": "35.000000", "reclong": "127.500000", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [139.33333, 35.65] }, "id": "11468", "mass": "0.2", "name": "Hachi-oji", "nametype": "Valid", "recclass": "H?", "reclat": "35.650000", "reclong": "139.333330", "year": "1817-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.73333, 50.31667] }, "id": "11472", "mass": "9000", "name": "Hainaut", "nametype": "Valid", "recclass": "H3-6", "reclat": "50.316670", "reclong": "3.733330", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.23333, 57.81667] }, "id": "11479", "mass": "1456", "name": "Hallingeberg", "nametype": "Valid", "recclass": "L3.4", "reclat": "57.816670", "reclong": "16.233330", "year": "1944-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "35", ":@computed_region_nnqa_25f4": "1205", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-86.6, 41.38333] }, "id": "11485", "mass": "3710", "name": "Hamlet", "nametype": "Valid", "recclass": "LL4", "reclat": "41.383330", "reclong": "-86.600000", "year": "1959-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.53333, 26.8] }, "id": "11824", "mass": "1000", "name": "Haraiya", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "26.800000", "reclong": "82.533330", "year": "1878-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.78333, 28.38333] }, "id": "11829", "mass": "315", "name": "Haripura", "nametype": "Valid", "recclass": "CM2", "reclat": "28.383330", "reclong": "75.783330", "year": "1921-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "2025", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-94.51167, 32.675] }, "id": "11830", "mass": "8360", "name": "Harleton", "nametype": "Valid", "recclass": "L6", "reclat": "32.675000", "reclong": "-94.511670", "year": "1961-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "35", ":@computed_region_nnqa_25f4": "1855", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-86.16667, 38.25] }, "id": "11842", "mass": "680", "name": "Harrison County", "nametype": "Valid", "recclass": "L6", "reclat": "38.250000", "reclong": "-86.166670", "year": "1859-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [136.70033, 35.2945] }, "id": "11848", "mass": "1110.5999999999999", "name": "Hashima", "nametype": "Valid", "recclass": "H4", "reclat": "35.294500", "reclong": "136.700330", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.81667, 28.95] }, "id": "11852", "mass": "1250", "name": "Hassi-Jekna", "nametype": "Valid", "recclass": "Iron, IAB-sHL", "reclat": "28.950000", "reclong": "0.816670", "year": "1890-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.51667, 51.65] }, "id": "11855", "mass": "29000", "name": "Hatford", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "51.650000", "reclong": "-1.516670", "year": "1628-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.06194, 60.24556] }, "id": "11859", "mass": "1544", "name": "Haverö", "nametype": "Valid", "recclass": "Ureilite", "reclat": "60.245560", "reclong": "22.061940", "year": "1971-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.78333, 55.46667] }, "id": "11869", "mass": "3500", "name": "Hedeskoga", "nametype": "Valid", "recclass": "H5", "reclat": "55.466670", "reclong": "13.783330", "year": "1922-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.66667, 27.33333] }, "id": "11870", "mass": "6100", "name": "Hedjaz", "nametype": "Valid", "recclass": "L3.7-6", "reclat": "27.333330", "reclong": "35.666670", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-84.1, 10] }, "id": "11875", "mass": "1000", "name": "Heredia", "nametype": "Valid", "recclass": "H5", "reclat": "10.000000", "reclong": "-84.100000", "year": "1857-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [17.66667, 59.85] }, "id": "11878", "mass": "20000", "name": "Hessle", "nametype": "Valid", "recclass": "H5", "reclat": "59.850000", "reclong": "17.666670", "year": "1869-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [130.43333, 33.6] }, "id": "11883", "mass": "750", "name": "Higashi-koen", "nametype": "Valid", "recclass": "H5", "reclat": "33.600000", "reclong": "130.433330", "year": "1897-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-4.23333, 55.9] }, "id": "11884", "mass": "4500", "name": "High Possil", "nametype": "Valid", "recclass": "L6", "reclat": "55.900000", "reclong": "-4.233330", "year": "1804-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [132.38333, 34.45] }, "id": "11889", "mass": "414", "name": "Hiroshima", "nametype": "Valid", "recclass": "H5", "reclat": "34.450000", "reclong": "132.383330", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.47278, 1.345] }, "id": "44714", "mass": "167.7", "name": "Hoima", "nametype": "Valid", "recclass": "H6", "reclat": "1.345000", "reclong": "31.472780", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.2, 64.43333] }, "id": "11893", "mass": "305.5", "name": "Hökmark", "nametype": "Valid", "recclass": "L4", "reclat": "64.433330", "reclong": "21.200000", "year": "1954-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "7", ":@computed_region_nnqa_25f4": "990", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-110.18333, 34.9] }, "id": "11894", "mass": "220000", "name": "Holbrook", "nametype": "Valid", "recclass": "L/LL6", "reclat": "34.900000", "reclong": "-110.183330", "year": "1912-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [38.41667, 9.06667] }, "id": "11895", "mass": "1415", "name": "Holetta", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "9.066670", "reclong": "38.416670", "year": "1923-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "16", ":@computed_region_nnqa_25f4": "284", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-91.86667, 41.8] }, "id": "11901", "mass": "230000", "name": "Homestead", "nametype": "Valid", "recclass": "L5", "reclat": "41.800000", "reclong": "-91.866670", "year": "1875-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "4", ":@computed_region_nnqa_25f4": "1657", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-157.86667, 21.3] }, "id": "11904", "mass": "2420", "name": "Honolulu", "nametype": "Valid", "recclass": "L5", "reclat": "21.300000", "reclong": "-157.866670", "year": "1825-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.5, 35.66667] }, "id": "11913", "mass": "180", "name": "Hotse", "nametype": "Valid", "recclass": "L6", "reclat": "35.666670", "reclong": "115.500000", "year": "1956-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "17", ":@computed_region_nnqa_25f4": "1293", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-100.45, 39.35] }, "id": "11915", "mass": "266.10000000000002", "name": "Hoxie", "nametype": "Valid", "recclass": "OC", "reclat": "39.350000", "reclong": "-100.450000", "year": "1963-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.33333, 46.1] }, "id": "11916", "mass": "49000", "name": "Hraschina", "nametype": "Valid", "recclass": "Iron, IID", "reclat": "46.100000", "reclong": "16.333330", "year": "1751-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [106.63241, 26.46469] }, "id": "54719", "mass": "1600", "name": "Huaxi", "nametype": "Valid", "recclass": "H5", "reclat": "26.464690", "reclong": "106.632410", "year": "2010-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.91667, 50.3] }, "id": "11986", "mass": "112", "name": "Hungen", "nametype": "Valid", "recclass": "H6", "reclat": "50.300000", "reclong": "8.916670", "year": "1877-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.68333, 61.18333] }, "id": "11989", "mass": "14000", "name": "Hvittis", "nametype": "Valid", "recclass": "EL6", "reclat": "61.183330", "reclong": "22.683330", "year": "1901-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7.7, 52.28333] }, "id": "11992", "mass": "2000", "name": "Ibbenbüren", "nametype": "Valid", "recclass": "Diogenite", "reclat": "52.283330", "reclong": "7.700000", "year": "1870-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-45, -20] }, "id": "11993", "mass": "2500", "name": "Ibitira", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "-20.000000", "reclong": "-45.000000", "year": "1957-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35, 38] }, "id": "11994", "name": "Ibrisim", "nametype": "Valid", "recclass": "OC", "reclat": "38.000000", "reclong": "35.000000", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.93333, 58.2] }, "id": "11995", "mass": "3973", "name": "Ichkala", "nametype": "Valid", "recclass": "H6", "reclat": "58.200000", "reclong": "82.933330", "year": "1936-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [28.33333, -32.1] }, "id": "12000", "mass": "3457", "name": "Idutywa", "nametype": "Valid", "recclass": "H5", "reclat": "-32.100000", "reclong": "28.333330", "year": "1956-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-51.83333, -23.2] }, "id": "12003", "mass": "1200", "name": "Iguaracu", "nametype": "Valid", "recclass": "H5", "reclat": "-23.200000", "reclong": "-51.833330", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [145.36667, -6.03333] }, "id": "12004", "mass": "7330", "name": "Ijopega", "nametype": "Valid", "recclass": "H6", "reclat": "-6.033330", "reclong": "145.366670", "year": "1975-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [46.66667, 39.75] }, "id": "12027", "mass": "27000", "name": "Indarch", "nametype": "Valid", "recclass": "EH4", "reclat": "39.750000", "reclong": "46.666670", "year": "1891-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "18", ":@computed_region_nnqa_25f4": "525", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-94.4, 39.08333] }, "id": "12028", "mass": "880", "name": "Independence", "nametype": "Valid", "recclass": "L6", "reclat": "39.083330", "reclong": "-94.400000", "year": "1917-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [112, 41] }, "id": "12037", "mass": "3000", "name": "Inner Mongolia", "nametype": "Valid", "recclass": "L6", "reclat": "41.000000", "reclong": "112.000000", "year": "1963-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-111.3375, 53.415] }, "id": "12039", "mass": "4576", "name": "Innisfree", "nametype": "Valid", "recclass": "L5", "reclat": "53.415000", "reclong": "-111.337500", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-54.5, -25.5] }, "id": "12043", "mass": "7000", "name": "Ipiranga", "nametype": "Valid", "recclass": "H6", "reclat": "-25.500000", "reclong": "-54.500000", "year": "1972-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.8, -8.93333] }, "id": "12049", "mass": "1300", "name": "Ishinga", "nametype": "Valid", "recclass": "H", "reclat": "-8.933330", "reclong": "33.800000", "year": "1954-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-57.95, -31.18333] }, "id": "12053", "mass": "3050", "name": "Isthilart", "nametype": "Valid", "recclass": "H5", "reclat": "-31.183330", "reclong": "-57.950000", "year": "1928-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-44.33333, -3.4] }, "id": "12056", "mass": "2024", "name": "Itapicuru-Mirim", "nametype": "Valid", "recclass": "H5", "reclat": "-3.400000", "reclong": "-44.333330", "year": "1879-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-12.95217, 26.59083] }, "id": "12058", "mass": "4720", "name": "Itqiy", "nametype": "Valid", "recclass": "EH7-an", "reclat": "26.590830", "reclong": "-12.952170", "year": "1990-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [32.43333, -8.41667] }, "id": "12063", "mass": "704.5", "name": "Ivuna", "nametype": "Valid", "recclass": "CI1", "reclat": "-8.416670", "reclong": "32.433330", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.9, -32.5] }, "id": "12065", "mass": "48000", "name": "Jackalsfontein", "nametype": "Valid", "recclass": "L6", "reclat": "-32.500000", "reclong": "21.900000", "year": "1903-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [68.41667, 26.75] }, "id": "12067", "mass": "973", "name": "Jajh deh Kot Lalu", "nametype": "Valid", "recclass": "EL6", "reclat": "26.750000", "reclong": "68.416670", "year": "1926-01-01T00:00:00.000" }, { "fall": "Fell", "id": "12068", "mass": "700", "name": "Jalanash", "nametype": "Valid", "recclass": "Ureilite", "year": "1990-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75, 31] }, "id": "12069", "mass": "1967", "name": "Jalandhar", "nametype": "Valid", "recclass": "Iron", "reclat": "31.000000", "reclong": "75.000000", "year": "1621-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.33333, 18.75] }, "id": "12072", "mass": "22", "name": "Jamkheir", "nametype": "Valid", "recclass": "H6", "reclat": "18.750000", "reclong": "75.333330", "year": "1866-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [105.8, 39.7] }, "id": "12074", "mass": "20500", "name": "Jartai", "nametype": "Valid", "recclass": "L6", "reclat": "39.700000", "reclong": "105.800000", "year": "1979-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [20.44167, 43.83333] }, "id": "12078", "mass": "34000", "name": "Jelica", "nametype": "Valid", "recclass": "LL6", "reclat": "43.833330", "reclong": "20.441670", "year": "1889-01-01T00:00:00.000" }, { "fall": "Fell", "id": "12079", "mass": "450", "name": "Jemlapur", "nametype": "Valid", "recclass": "L6", "year": "1901-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.05217, 46.42137] }, "id": "51589", "mass": "3667", "name": "Jesenice", "nametype": "Valid", "recclass": "L6", "reclat": "46.421370", "reclong": "14.052170", "year": "2009-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [72.38333, 31.3] }, "id": "12085", "mass": "5900", "name": "Jhung", "nametype": "Valid", "recclass": "L5", "reclat": "31.300000", "reclong": "72.383330", "year": "1873-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [104.91667, 31.91667] }, "id": "12086", "mass": "222", "name": "Jiange", "nametype": "Valid", "recclass": "H5", "reclat": "31.916670", "reclong": "104.916670", "year": "1964-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [109.5, 30.80833] }, "id": "12087", "mass": "600000", "name": "Jianshi", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "30.808330", "reclong": "109.500000", "year": "1890-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [126.16667, 44.05] }, "id": "12171", "mass": "4000000", "name": "Jilin", "nametype": "Valid", "recclass": "H5", "reclat": "44.050000", "reclong": "126.166670", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [70.31333, 22.68] }, "id": "47362", "mass": "100", "name": "Jodiya", "nametype": "Valid", "recclass": "L5", "reclat": "22.680000", "reclong": "70.313330", "year": "2006-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [24.4, 55.7] }, "id": "12173", "mass": "30", "name": "Jodzie", "nametype": "Valid", "recclass": "Howardite", "reclat": "55.700000", "reclong": "24.400000", "year": "1877-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "9", ":@computed_region_nnqa_25f4": "1072", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-104.9, 40.35] }, "id": "12198", "mass": "40300", "name": "Johnstown", "nametype": "Valid", "recclass": "Diogenite", "reclat": "40.350000", "reclong": "-104.900000", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.83333, -11.85] }, "id": "12199", "mass": "483", "name": "Jolomba", "nametype": "Valid", "recclass": "LL6", "reclat": "-11.850000", "reclong": "15.833330", "year": "1974-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.45, 45.43333] }, "id": "12202", "mass": "5000", "name": "Jonzac", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "45.433330", "reclong": "-0.450000", "year": "1819-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.41667, 35.5] }, "id": "12203", "mass": "100000", "name": "Juancheng", "nametype": "Valid", "recclass": "H5", "reclat": "35.500000", "reclong": "115.416670", "year": "1997-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.8, 12.85] }, "id": "12207", "mass": "680", "name": "Judesegeri", "nametype": "Valid", "recclass": "H6", "reclat": "12.850000", "reclong": "76.800000", "year": "1876-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.2, -7.71667] }, "id": "12209", "mass": "32490", "name": "Jumapalo", "nametype": "Valid", "recclass": "L6", "reclat": "-7.716670", "reclong": "111.200000", "year": "1984-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [118.8, 35.2] }, "id": "12210", "mass": "950", "name": "Junan", "nametype": "Valid", "recclass": "L6", "reclat": "35.200000", "reclong": "118.800000", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7.27, 38.74028] }, "id": "12213", "mass": "25250", "name": "Juromenha", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "38.740280", "reclong": "-7.270000", "year": "1968-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [4.3, 44.71667] }, "id": "12214", "mass": "91000", "name": "Juvinas", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "44.716670", "reclong": "4.300000", "year": "1821-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.3, 47.35] }, "id": "12218", "mass": "3000", "name": "Kaba", "nametype": "Valid", "recclass": "CV3", "reclat": "47.350000", "reclong": "21.300000", "year": "1857-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.21667, 11.85] }, "id": "12220", "mass": "13400", "name": "Kabo", "nametype": "Valid", "recclass": "H4", "reclat": "11.850000", "reclong": "8.216670", "year": "1971-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.33333, 27.08333] }, "id": "12221", "mass": "89", "name": "Kadonah", "nametype": "Valid", "recclass": "H6", "reclat": "27.083330", "reclong": "78.333330", "year": "1822-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [79.96667, 27.25] }, "id": "12222", "mass": "230", "name": "Kaee", "nametype": "Valid", "recclass": "H5", "reclat": "27.250000", "reclong": "79.966670", "year": "1838-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.83333, 49.86667] }, "id": "12227", "mass": "1900", "name": "Kagarlyk", "nametype": "Valid", "recclass": "L6", "reclat": "49.866670", "reclong": "30.833330", "year": "1908-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [48.3, 15] }, "id": "12228", "mass": "2000", "name": "Kaidun", "nametype": "Valid", "recclass": "CR2", "reclat": "15.000000", "reclong": "48.300000", "year": "1980-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [53.25, 55.43333] }, "id": "12229", "mass": "200000", "name": "Kainsaz", "nametype": "Valid", "recclass": "CO3.2", "reclat": "55.433330", "reclong": "53.250000", "year": "1937-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.51667, 12.38333] }, "id": "12230", "mass": "350", "name": "Kakangari", "nametype": "Valid", "recclass": "K3", "reclat": "12.383330", "reclong": "78.516670", "year": "1890-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.66667, 45.13333] }, "id": "12231", "mass": "577", "name": "Kakowa", "nametype": "Valid", "recclass": "L6", "reclat": "45.133330", "reclong": "21.666670", "year": "1858-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29.5, -6.83333] }, "id": "12232", "mass": "950", "name": "Kalaba", "nametype": "Valid", "recclass": "H4", "reclat": "-6.833330", "reclong": "29.500000", "year": "1951-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [73.98333, 17.83333] }, "id": "12236", "mass": "4500", "name": "Kalumbi", "nametype": "Valid", "recclass": "L6", "reclat": "17.833330", "reclong": "73.983330", "year": "1879-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [81.46667, 26.03333] }, "id": "12238", "mass": "2770", "name": "Kamalpur", "nametype": "Valid", "recclass": "L6", "reclat": "26.033330", "reclong": "81.466670", "year": "1942-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [139.95667, 36.04167] }, "id": "12240", "mass": "448", "name": "Kamiomi", "nametype": "Valid", "recclass": "H5", "reclat": "36.041670", "reclong": "139.956670", "year": "1913-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.8, 14.18333] }, "id": "12241", "mass": "1293", "name": "Kamsagar", "nametype": "Valid", "recclass": "L6", "reclat": "14.183330", "reclong": "75.800000", "year": "1902-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [65.78333, 31.6] }, "id": "12243", "mass": "299", "name": "Kandahar (Afghanistan)", "nametype": "Valid", "recclass": "L6", "reclat": "31.600000", "reclong": "65.783330", "year": "1959-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.5, -7] }, "id": "12245", "mass": "1630", "name": "Kangean", "nametype": "Valid", "recclass": "H5", "reclat": "-7.000000", "reclong": "115.500000", "year": "1908-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.3, 32.08333] }, "id": "12246", "mass": "400", "name": "Kangra Valley", "nametype": "Valid", "recclass": "H5", "reclat": "32.083330", "reclong": "76.300000", "year": "1897-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.63333, 4.7] }, "id": "12251", "mass": "11355", "name": "Kapoeta", "nametype": "Valid", "recclass": "Howardite", "reclat": "4.700000", "reclong": "33.633330", "year": "1942-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [73.22329, 20.33916] }, "id": "47357", "mass": "1600", "name": "Kaprada", "nametype": "Valid", "recclass": "L5/6", "reclat": "20.339160", "reclong": "73.223290", "year": "2004-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [73.36667, 42.45] }, "id": "12253", "mass": "3500", "name": "Kaptal-Aryk", "nametype": "Valid", "recclass": "L6", "reclat": "42.450000", "reclong": "73.366670", "year": "1937-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [81.01667, 47.21667] }, "id": "12256", "mass": "3000", "name": "Karakol", "nametype": "Valid", "recclass": "LL6", "reclat": "47.216670", "reclong": "81.016670", "year": "1840-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.58333, -3.5] }, "id": "12258", "mass": "2220", "name": "Karatu", "nametype": "Valid", "recclass": "LL6", "reclat": "-3.500000", "reclong": "35.583330", "year": "1963-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7.15, 12.9] }, "id": "12260", "mass": "180", "name": "Karewar", "nametype": "Valid", "recclass": "L6", "reclat": "12.900000", "reclong": "7.150000", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [67.16667, 27.8] }, "id": "12262", "mass": "22000", "name": "Karkh", "nametype": "Valid", "recclass": "L6", "reclat": "27.800000", "reclong": "67.166670", "year": "1905-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [71.6, 31.58333] }, "id": "12263", "mass": "2950", "name": "Karloowala", "nametype": "Valid", "recclass": "L6", "reclat": "31.583330", "reclong": "71.600000", "year": "1955-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [139.91667, -35.08333] }, "id": "12264", "mass": "41730", "name": "Karoonda", "nametype": "Valid", "recclass": "CK4", "reclat": "-35.083330", "reclong": "139.916670", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [136.76667, 35.36667] }, "id": "12266", "mass": "710", "name": "Kasamatsu", "nametype": "Valid", "recclass": "H", "reclat": "35.366670", "reclong": "136.766670", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.58333, 29.58333] }, "id": "30740", "mass": "16820", "name": "Kasauli", "nametype": "Valid", "recclass": "H4", "reclat": "29.583330", "reclong": "77.583330", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.08333, 11.33333] }, "id": "35465", "mass": "1500", "name": "Katagum", "nametype": "Valid", "recclass": "L6", "reclat": "11.333330", "reclong": "10.083330", "year": "1999-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.81333, 25.14333] }, "id": "47351", "mass": "6800", "name": "Kavarpura", "nametype": "Valid", "recclass": "Iron, IIE-an", "reclat": "25.143330", "reclong": "75.813330", "year": "2006-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.78, 39.26333] }, "id": "12268", "mass": "85000", "name": "Kayakent", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "39.263330", "reclong": "31.780000", "year": "1961-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [112.01667, -7.75] }, "id": "12270", "mass": "3300", "name": "Kediri", "nametype": "Valid", "recclass": "L4", "reclat": "-7.750000", "reclong": "112.016670", "year": "1940-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29.41822, 36.54194] }, "id": "53654", "mass": "5760", "name": "Kemer", "nametype": "Valid", "recclass": "L4", "reclat": "36.541940", "reclong": "29.418220", "year": "2008-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "3190", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-96, 29.45] }, "id": "12275", "mass": "6937", "name": "Kendleton", "nametype": "Valid", "recclass": "L4", "reclat": "29.450000", "reclong": "-96.000000", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [86.70278, 20.4625] }, "id": "12276", "mass": "6669.2", "name": "Kendrapara", "nametype": "Valid", "recclass": "H4-5", "reclat": "20.462500", "reclong": "86.702780", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.3, 48.4] }, "id": "12282", "mass": "5000", "name": "Kerilis", "nametype": "Valid", "recclass": "H5", "reclat": "48.400000", "reclong": "-3.300000", "year": "1874-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.08333, 48.11667] }, "id": "12284", "mass": "80000", "name": "Kernouve", "nametype": "Valid", "recclass": "H6", "reclat": "48.116670", "reclong": "-3.083330", "year": "1869-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [141.61667, 38.98333] }, "id": "12286", "mass": "135000", "name": "Kesen", "nametype": "Valid", "recclass": "H4", "reclat": "38.983330", "reclong": "141.616670", "year": "1850-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [72.3, 29.53333] }, "id": "12288", "mass": "13600", "name": "Khairpur", "nametype": "Valid", "recclass": "EL6", "reclat": "29.533330", "reclong": "72.300000", "year": "1873-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [83.11667, 25.55] }, "id": "12289", "mass": "3698", "name": "Khanpur", "nametype": "Valid", "recclass": "LL5", "reclat": "25.550000", "reclong": "83.116670", "year": "1932-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.075, 50.625] }, "id": "12291", "mass": "1500", "name": "Kharkov", "nametype": "Valid", "recclass": "L6", "reclat": "50.625000", "reclong": "35.075000", "year": "1787-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.88333, 26.95] }, "id": "12294", "mass": "450", "name": "Kheragur", "nametype": "Valid", "recclass": "L6", "reclat": "26.950000", "reclong": "77.883330", "year": "1860-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.81667, 28.01667] }, "id": "12296", "mass": "100", "name": "Khetri", "nametype": "Valid", "recclass": "H6", "reclat": "28.016670", "reclong": "75.816670", "year": "1867-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.33333, 56.75] }, "id": "12297", "mass": "6109", "name": "Khmelevka", "nametype": "Valid", "recclass": "L5", "reclat": "56.750000", "reclong": "75.333330", "year": "1929-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [81.53333, 25.1] }, "id": "12298", "mass": "9700", "name": "Khohar", "nametype": "Valid", "recclass": "L3.6", "reclat": "25.100000", "reclong": "81.533330", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [36, 16] }, "id": "12299", "mass": "3200", "name": "Khor Temiki", "nametype": "Valid", "recclass": "Aubrite", "reclat": "16.000000", "reclong": "36.000000", "year": "1932-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [28, 14] }, "id": "12300", "mass": "100000", "name": "Kidairat", "nametype": "Valid", "recclass": "H6", "reclat": "14.000000", "reclong": "28.000000", "year": "1983-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.15, 54.4] }, "id": "12301", "mass": "737.6", "name": "Kiel", "nametype": "Valid", "recclass": "L6", "reclat": "54.400000", "reclong": "10.150000", "year": "1962-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-11.33333, 16.58333] }, "id": "12303", "mass": "1500", "name": "Kiffa", "nametype": "Valid", "recclass": "H5", "reclat": "16.583330", "reclong": "-11.333330", "year": "1970-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [138.38333, 36.85] }, "id": "12305", "mass": "331", "name": "Kijima (1906)", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "36.850000", "reclong": "138.383330", "year": "1906-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [34, 55] }, "id": "12306", "mass": "195", "name": "Kikino", "nametype": "Valid", "recclass": "H6", "reclat": "55.000000", "reclong": "34.000000", "year": "1809-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.8, 12.76667] }, "id": "12307", "mass": "19000", "name": "Kilabo", "nametype": "Valid", "recclass": "LL6", "reclat": "12.766670", "reclong": "9.800000", "year": "2002-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "41", ":@computed_region_nnqa_25f4": "2971", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-89.6, 43.58333] }, "id": "12308", "mass": "772", "name": "Kilbourn", "nametype": "Valid", "recclass": "H5", "reclat": "43.583330", "reclong": "-89.600000", "year": "1911-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7.66667, 54.66667] }, "id": "12309", "mass": "140", "name": "Killeter", "nametype": "Valid", "recclass": "H6", "reclat": "54.666670", "reclong": "-7.666670", "year": "1844-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [24.68333, 11.63333] }, "id": "12316", "mass": "67.400000000000006", "name": "Kingai", "nametype": "Valid", "recclass": "H6", "reclat": "11.633330", "reclong": "24.683330", "year": "1967-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "2018", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-95.95, 30.75] }, "id": "12321", "mass": "97.7", "name": "Kirbyville", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "30.750000", "reclong": "-95.950000", "year": "1906-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.30833, 48.16667] }, "id": "12325", "mass": "1550", "name": "Kisvarsány", "nametype": "Valid", "recclass": "L6", "reclat": "48.166670", "reclong": "22.308330", "year": "1914-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-80.38333, 43.38333] }, "id": "12326", "mass": "202.6", "name": "Kitchener", "nametype": "Valid", "recclass": "L6", "reclat": "43.383330", "reclong": "-80.383330", "year": "1998-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.8, 51.6] }, "id": "12332", "mass": "3250", "name": "Klein-Wenden", "nametype": "Valid", "recclass": "H6", "reclat": "51.600000", "reclong": "10.800000", "year": "1843-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.4, 48.9] }, "id": "12335", "mass": "500000", "name": "Knyahinya", "nametype": "Valid", "recclass": "L/LL5", "reclat": "48.900000", "reclong": "22.400000", "year": "1866-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [135.16667, 34.73333] }, "id": "12336", "mass": "136", "name": "Kobe", "nametype": "Valid", "recclass": "CK4", "reclat": "34.733330", "reclong": "135.166670", "year": "1999-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [133.95, 34.3] }, "id": "12342", "mass": "11510", "name": "Kokubunji", "nametype": "Valid", "recclass": "L6", "reclat": "34.300000", "reclong": "133.950000", "year": "1986-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [139.75, 35.73333] }, "id": "12343", "mass": "238", "name": "Komagome", "nametype": "Valid", "recclass": "Iron", "reclat": "35.733330", "reclong": "139.750000", "year": "1926-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.16667, 42.51667] }, "id": "12344", "mass": "90", "name": "Konovo", "nametype": "Valid", "recclass": "LL5", "reclat": "42.516670", "reclong": "26.166670", "year": "1931-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.17633, 48.76367] }, "id": "53810", "mass": "4300", "name": "Košice", "nametype": "Valid", "recclass": "H5", "reclat": "48.763670", "reclong": "21.176330", "year": "2010-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7.46472, 49.32694] }, "id": "12353", "mass": "16500", "name": "Krähenberg", "nametype": "Valid", "recclass": "LL5", "reclat": "49.326940", "reclong": "7.464720", "year": "1869-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [40.9, 54.03333] }, "id": "12355", "mass": "2440", "name": "Krasnoi-Ugol", "nametype": "Valid", "recclass": "L6", "reclat": "54.033330", "reclong": "40.900000", "year": "1829-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [56.08333, 54.33333] }, "id": "12357", "mass": "4000", "name": "Krasnyi Klyuch", "nametype": "Valid", "recclass": "H5", "reclat": "54.333330", "reclong": "56.083330", "year": "1946-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77, 56.8] }, "id": "12363", "mass": "845.2", "name": "Krutikha", "nametype": "Valid", "recclass": "OC", "reclat": "56.800000", "reclong": "77.000000", "year": "1906-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.76667, 47.83333] }, "id": "12364", "mass": "50000", "name": "Krymka", "nametype": "Valid", "recclass": "LL3.2", "reclat": "47.833330", "reclong": "30.766670", "year": "1946-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.7, 51.15] }, "id": "12368", "mass": "2250", "name": "Kukschin", "nametype": "Valid", "recclass": "L6", "reclat": "51.150000", "reclong": "31.700000", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [66.80222, 30.73111] }, "id": "12369", "mass": "453.6", "name": "Kulak", "nametype": "Valid", "recclass": "L5", "reclat": "30.731110", "reclong": "66.802220", "year": "1961-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.5, 50.75] }, "id": "12370", "mass": "6000", "name": "Kuleschovka", "nametype": "Valid", "recclass": "L6", "reclat": "50.750000", "reclong": "33.500000", "year": "1811-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [45, 41.11667] }, "id": "12373", "mass": "3719", "name": "Kulp", "nametype": "Valid", "recclass": "H6", "reclat": "41.116670", "reclong": "45.000000", "year": "1906-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [61.36667, 55.78333] }, "id": "12377", "mass": "200000", "name": "Kunashak", "nametype": "Valid", "recclass": "L6", "reclat": "55.783330", "reclong": "61.366670", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [59.2, 42.25] }, "id": "12379", "mass": "1100000", "name": "Kunya-Urgench", "nametype": "Valid", "recclass": "H5", "reclat": "42.250000", "reclong": "59.200000", "year": "1998-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [138.38333, 37.05] }, "id": "12381", "mass": "4460", "name": "Kushiike", "nametype": "Valid", "recclass": "OC", "reclat": "37.050000", "reclong": "138.383330", "year": "1920-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.38333, 29.68333] }, "id": "12382", "mass": "5", "name": "Kusiali", "nametype": "Valid", "recclass": "L6", "reclat": "29.683330", "reclong": "78.383330", "year": "1860-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [39.3, 44.51667] }, "id": "12383", "mass": "23", "name": "Kutais", "nametype": "Valid", "recclass": "H5", "reclat": "44.516670", "reclong": "39.300000", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.03333, 10.83333] }, "id": "12384", "mass": "45000", "name": "Kuttippuram", "nametype": "Valid", "recclass": "L6", "reclat": "10.833330", "reclong": "76.033330", "year": "1914-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.33333, 55.2] }, "id": "12385", "mass": "4047", "name": "Kuznetzovo", "nametype": "Valid", "recclass": "L6", "reclat": "55.200000", "reclong": "75.333330", "year": "1932-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [130.63333, 32.03333] }, "id": "12390", "mass": "45000", "name": "Kyushu", "nametype": "Valid", "recclass": "L6", "reclat": "32.033330", "reclong": "130.633330", "year": "1886-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.75, 47.08333] }, "id": "12392", "mass": "2800", "name": "La Bécasse", "nametype": "Valid", "recclass": "L6", "reclat": "47.083330", "reclong": "1.750000", "year": "1879-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-101.28333, 20.66667] }, "id": "12394", "mass": "399", "name": "La Charca", "nametype": "Valid", "recclass": "OC", "reclat": "20.666670", "reclong": "-101.283330", "year": "1878-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-61.53333, -37.33333] }, "id": "12395", "mass": "2000", "name": "La Colina", "nametype": "Valid", "recclass": "H5", "reclat": "-37.333330", "reclong": "-61.533330", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-58.16667, -31.23333] }, "id": "12396", "mass": "45000", "name": "La Criolla", "nametype": "Valid", "recclass": "L6", "reclat": "-31.233330", "reclong": "-58.166670", "year": "1985-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.58333, 44.28333] }, "id": "12408", "mass": "3833", "name": "Laborel", "nametype": "Valid", "recclass": "H5", "reclat": "44.283330", "reclong": "5.583330", "year": "1871-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.71667, 26.78333] }, "id": "12433", "mass": "900", "name": "Lahrauli", "nametype": "Valid", "recclass": "Ureilite", "reclat": "26.783330", "reclong": "82.716670", "year": "1955-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.63333, 48.76667] }, "id": "12434", "mass": "37000", "name": "L'Aigle", "nametype": "Valid", "recclass": "L6", "reclat": "48.766670", "reclong": "0.633330", "year": "1803-01-01T00:00:00.000" }, { "fall": "Found", "id": "32531", "mass": "9.6", "name": "Cumulus Hills 04075", "nametype": "Valid", "recclass": "Pallasite", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.03333, 21.86667] }, "id": "12435", "mass": "212.5", "name": "Lakangaon", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "21.866670", "reclong": "76.033330", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.56667, 24.45] }, "id": "12451", "mass": "372", "name": "Lalitpur", "nametype": "Valid", "recclass": "L6", "reclat": "24.450000", "reclong": "78.566670", "year": "1887-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.06667, 47.7] }, "id": "12455", "mass": "51700", "name": "Lancé", "nametype": "Valid", "recclass": "CO3.5", "reclat": "47.700000", "reclong": "1.066670", "year": "1872-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.11667, 43.75] }, "id": "12456", "mass": "7000", "name": "Lancon", "nametype": "Valid", "recclass": "H6", "reclat": "43.750000", "reclong": "5.116670", "year": "1897-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.73333, 58.85] }, "id": "12461", "mass": "2300", "name": "Långhalsen", "nametype": "Valid", "recclass": "L6", "reclat": "58.850000", "reclong": "16.733330", "year": "1947-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [126.19611, 46.24167] }, "id": "12464", "mass": "1282", "name": "Lanxi", "nametype": "Valid", "recclass": "L6", "reclat": "46.241670", "reclong": "126.196110", "year": "1986-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.23333, 47.75] }, "id": "12465", "mass": "7000", "name": "Lanzenkirchen", "nametype": "Valid", "recclass": "L4", "reclat": "47.750000", "reclong": "16.233330", "year": "1925-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.16667, 33.13333] }, "id": "12466", "mass": "14250", "name": "Laochenzhen", "nametype": "Valid", "recclass": "H5", "reclat": "33.133330", "reclong": "115.166670", "year": "1987-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.11667, 51.9] }, "id": "12740", "mass": "1060", "name": "Launton", "nametype": "Valid", "recclass": "L6", "reclat": "51.900000", "reclong": "-1.116670", "year": "1830-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [51.56667, 52.45] }, "id": "12743", "mass": "800", "name": "Lavrentievka", "nametype": "Valid", "recclass": "L6", "reclat": "52.450000", "reclong": "51.566670", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.43333, 47.16667] }, "id": "12748", "mass": "3000", "name": "Le Pressoir", "nametype": "Valid", "recclass": "H5", "reclat": "47.166670", "reclong": "0.433330", "year": "1845-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.86667, 48.53333] }, "id": "12749", "mass": "780", "name": "Le Teilleul", "nametype": "Valid", "recclass": "Howardite", "reclat": "48.533330", "reclong": "-0.866670", "year": "1845-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "20", ":@computed_region_nnqa_25f4": "608", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.33333, 35.88333] }, "id": "12755", "mass": "51500", "name": "Leedey", "nametype": "Valid", "recclass": "L6", "reclat": "35.883330", "reclong": "-99.333330", "year": "1943-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [28.36667, -25.66667] }, "id": "12756", "mass": "460", "name": "Leeuwfontein", "nametype": "Valid", "recclass": "L6", "reclat": "-25.666670", "reclong": "28.366670", "year": "1912-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6.96667, 52.66667] }, "id": "12759", "mass": "271.39999999999998", "name": "Leighlinbridge", "nametype": "Valid", "recclass": "L6", "reclat": "52.666670", "reclong": "-6.966670", "year": "1999-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "29", ":@computed_region_nnqa_25f4": "1585", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-87.5, 34.58333] }, "id": "12760", "mass": "877", "name": "Leighton", "nametype": "Valid", "recclass": "H5", "reclat": "34.583330", "reclong": "-87.500000", "year": "1907-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [32.85, 52.26667] }, "id": "12765", "mass": "700", "name": "Leonovka", "nametype": "Valid", "recclass": "L6", "reclat": "52.266670", "reclong": "32.850000", "year": "1900-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.25, 48.35] }, "id": "12769", "mass": "125", "name": "Les Ormes", "nametype": "Valid", "recclass": "L6", "reclat": "48.350000", "reclong": "3.250000", "year": "1857-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [4.73333, 50.36667] }, "id": "12772", "mass": "2000", "name": "Lesves", "nametype": "Valid", "recclass": "L6", "reclat": "50.366670", "reclong": "4.733330", "year": "1896-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.18333, -26.15] }, "id": "14646", "mass": "4000", "name": "Lichtenberg", "nametype": "Valid", "recclass": "H6", "reclat": "-26.150000", "reclong": "26.183330", "year": "1973-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.86667, 56.65] }, "id": "14650", "mass": "6862", "name": "Lillaverke", "nametype": "Valid", "recclass": "H5", "reclat": "56.650000", "reclong": "15.866670", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-8.78333, 52.56667] }, "id": "14652", "mass": "50000", "name": "Limerick", "nametype": "Valid", "recclass": "H5", "reclat": "52.566670", "reclong": "-8.783330", "year": "1813-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.9, 52.75] }, "id": "14655", "mass": "1862", "name": "Linum", "nametype": "Valid", "recclass": "L6", "reclat": "52.750000", "reclong": "12.900000", "year": "1854-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [118.98333, 31.63333] }, "id": "14659", "mass": "498", "name": "Lishui", "nametype": "Valid", "recclass": "L5", "reclat": "31.633330", "reclong": "118.983330", "year": "1978-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.85, 50.2] }, "id": "14661", "mass": "12800", "name": "Lissa", "nametype": "Valid", "recclass": "L6", "reclat": "50.200000", "reclong": "14.850000", "year": "1808-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "18", ":@computed_region_nnqa_25f4": "2171", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-92.08333, 37.91667] }, "id": "14664", "mass": "491", "name": "Little Piney", "nametype": "Valid", "recclass": "L5", "reclat": "37.916670", "reclong": "-92.083330", "year": "1839-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.43333, 56] }, "id": "14670", "mass": "5213", "name": "Lixna", "nametype": "Valid", "recclass": "H4", "reclat": "56.000000", "reclong": "26.433330", "year": "1820-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [71.8, 29.53333] }, "id": "14675", "mass": "1000", "name": "Lodran", "nametype": "Valid", "recclass": "Lodranite", "reclat": "29.533330", "reclong": "71.800000", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [72.62667, 26.96556] }, "id": "14678", "mass": "40000", "name": "Lohawat", "nametype": "Valid", "recclass": "Howardite", "reclat": "26.965560", "reclong": "72.626670", "year": "1994-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "40", ":@computed_region_nnqa_25f4": "2770", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-77.21163, 38.70066] }, "id": "52843", "mass": "329.7", "name": "Lorton", "nametype": "Valid", "recclass": "L6", "reclat": "38.700660", "reclong": "-77.211630", "year": "2010-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.83333, 38] }, "id": "14708", "mass": "25", "name": "Los Martinez", "nametype": "Valid", "recclass": "L6", "reclat": "38.000000", "reclong": "-0.833330", "year": "1894-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "20", ":@computed_region_nnqa_25f4": "2711", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-95.15, 36.00833] }, "id": "14711", "mass": "17000", "name": "Lost City", "nametype": "Valid", "recclass": "H5", "reclat": "36.008330", "reclong": "-95.150000", "year": "1970-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "36", ":@computed_region_nnqa_25f4": "1327", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-85.75, 38.25] }, "id": "14716", "mass": "1300", "name": "Louisville", "nametype": "Valid", "recclass": "L6", "reclat": "38.250000", "reclong": "-85.750000", "year": "1977-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [19.91667, 52] }, "id": "14718", "mass": "59000", "name": "Łowicz", "nametype": "Valid", "recclass": "Mesosiderite-A3", "reclat": "52.000000", "reclong": "19.916670", "year": "1935-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.15, 24.95] }, "id": "14721", "mass": "9241", "name": "Lua", "nametype": "Valid", "recclass": "L5", "reclat": "24.950000", "reclong": "75.150000", "year": "1926-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.48333, 47.85] }, "id": "14724", "mass": "3500", "name": "Lucé", "nametype": "Valid", "recclass": "L6", "reclat": "47.850000", "reclong": "0.483330", "year": "1768-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "31", ":@computed_region_nnqa_25f4": "1567", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-84.76667, 32.03333] }, "id": "14753", "mass": "340", "name": "Lumpkin", "nametype": "Valid", "recclass": "L6", "reclat": "32.033330", "reclong": "-84.766670", "year": "1869-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [103.3, 24.8] }, "id": "14754", "mass": "2520", "name": "Lunan", "nametype": "Valid", "recclass": "H6", "reclat": "24.800000", "reclong": "103.300000", "year": "1980-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.03333, 56.21667] }, "id": "14755", "mass": "11000", "name": "Lundsgård", "nametype": "Valid", "recclass": "L6", "reclat": "56.216670", "reclong": "13.033330", "year": "1889-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.7, 61.2] }, "id": "14756", "mass": "885", "name": "Luotolax", "nametype": "Valid", "recclass": "Howardite", "reclat": "61.200000", "reclong": "27.700000", "year": "1813-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5, 46.21667] }, "id": "14757", "mass": "14000", "name": "Luponnas", "nametype": "Valid", "recclass": "H3-5", "reclat": "46.216670", "reclong": "5.000000", "year": "1753-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29.43333, -7.21667] }, "id": "14759", "name": "Lusaka", "nametype": "Valid", "recclass": "Unknown", "reclat": "-7.216670", "reclong": "29.433330", "year": "1951-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [97, 19] }, "id": "14764", "mass": "540", "name": "Mabwe-Khoywa", "nametype": "Valid", "recclass": "L5", "reclat": "19.000000", "reclong": "97.000000", "year": "1937-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-36.66667, -5.2] }, "id": "15370", "mass": "1500", "name": "Macau", "nametype": "Valid", "recclass": "H5", "reclat": "-5.200000", "reclong": "-36.666670", "year": "1836-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.24222, -15.21222] }, "id": "15371", "mass": "93200", "name": "Machinga", "nametype": "Valid", "recclass": "L6", "reclat": "-15.212220", "reclong": "35.242220", "year": "1981-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.95, -28.83333] }, "id": "15372", "mass": "1995", "name": "Macibini", "nametype": "Valid", "recclass": "Eucrite-pmict", "reclat": "-28.833330", "reclong": "31.950000", "year": "1936-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [86.36667, 25.91667] }, "id": "15379", "mass": "1000", "name": "Madhipura", "nametype": "Valid", "recclass": "L", "reclat": "25.916670", "reclong": "86.366670", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.53333, -7.75] }, "id": "15380", "mass": "400", "name": "Madiun", "nametype": "Valid", "recclass": "L6", "reclat": "-7.750000", "reclong": "111.533330", "year": "1935-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.71667, 40.41667] }, "id": "15382", "mass": "400", "name": "Madrid", "nametype": "Valid", "recclass": "L6", "reclat": "40.416670", "reclong": "-3.716670", "year": "1896-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-49.93333, -26.16667] }, "id": "15383", "mass": "600", "name": "Mafra", "nametype": "Valid", "recclass": "L3-4", "reclat": "-26.166670", "reclong": "-49.933330", "year": "1941-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.51667, 37.86667] }, "id": "15386", "mass": "5000", "name": "Magnesia", "nametype": "Valid", "recclass": "Iron, IAB-sHL", "reclat": "37.866670", "reclong": "27.516670", "year": "1899-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.65, -19.48333] }, "id": "15387", "mass": "666.6", "name": "Magombedze", "nametype": "Valid", "recclass": "H3-5", "reclat": "-19.483330", "reclong": "31.650000", "year": "1990-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [95.78333, 27.66667] }, "id": "47361", "mass": "70500", "name": "Mahadevpur", "nametype": "Valid", "recclass": "H4/5", "reclat": "27.666670", "reclong": "95.783330", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.38333, 12.83333] }, "id": "30751", "mass": "4629", "name": "Maigatari-Danduma", "nametype": "Valid", "recclass": "H5/6", "reclat": "12.833330", "reclong": "9.383330", "year": "2004-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "11", ":@computed_region_nnqa_25f4": "611", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-104, 32.21667] }, "id": "15393", "mass": "150", "name": "Malaga", "nametype": "Valid", "recclass": "OC", "reclat": "32.216670", "reclong": "-104.000000", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.75, 9.5] }, "id": "15394", "mass": "2000", "name": "Malakal", "nametype": "Valid", "recclass": "L5", "reclat": "9.500000", "reclong": "31.750000", "year": "1970-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.51667, -3.13333] }, "id": "15395", "mass": "470", "name": "Malampaka", "nametype": "Valid", "recclass": "H", "reclat": "-3.133330", "reclong": "33.516670", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-63.23333, -28.93333] }, "id": "15397", "name": "Malotas", "nametype": "Valid", "recclass": "H5", "reclat": "-28.933330", "reclong": "-63.233330", "year": "1931-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.76667, -29.45] }, "id": "15400", "mass": "807", "name": "Malvern", "nametype": "Valid", "recclass": "Eucrite-pmict", "reclat": "-29.450000", "reclong": "26.766670", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [62.08333, 45.21667] }, "id": "15401", "mass": "1000", "name": "Mamra Springs", "nametype": "Valid", "recclass": "L6", "reclat": "45.216670", "reclong": "62.083330", "year": "1927-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [86.7, 23.05] }, "id": "15402", "mass": "1700", "name": "Manbhoom", "nametype": "Valid", "recclass": "LL6", "reclat": "23.050000", "reclong": "86.700000", "year": "1863-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.1, 20.96667] }, "id": "15403", "mass": "50", "name": "Manegaon", "nametype": "Valid", "recclass": "Diogenite", "reclat": "20.966670", "reclong": "76.100000", "year": "1843-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.6, -17.65] }, "id": "15405", "mass": "22300", "name": "Mangwendi", "nametype": "Valid", "recclass": "LL6", "reclat": "-17.650000", "reclong": "31.600000", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [44.63333, 45.81667] }, "id": "15409", "mass": "3555", "name": "Manych", "nametype": "Valid", "recclass": "LL3.4", "reclat": "45.816670", "reclong": "44.633330", "year": "1951-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [72.08333, 34.23333] }, "id": "15414", "mass": "4500", "name": "Mardan", "nametype": "Valid", "recclass": "H5", "reclat": "34.233330", "reclong": "72.083330", "year": "1948-01-01T00:00:00.000" }, { "fall": "Fell", "id": "15418", "mass": "114", "name": "Maria Linden", "nametype": "Valid", "recclass": "L4", "year": "1925-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "19", ":@computed_region_nnqa_25f4": "471", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.38333, 42.71667] }, "id": "15419", "mass": "340", "name": "Mariaville", "nametype": "Valid", "recclass": "Iron", "reclat": "42.716670", "reclong": "-99.383330", "year": "1898-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.46745, 54.76183] }, "id": "48973", "mass": "25.81", "name": "Maribo", "nametype": "Valid", "recclass": "CM2", "reclat": "54.761830", "reclong": "11.467450", "year": "2009-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29.25, 4.66667] }, "id": "15421", "mass": "3200", "name": "Maridi", "nametype": "Valid", "recclass": "H6", "reclat": "4.666670", "reclong": "29.250000", "year": "1941-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-49.93333, -22.25] }, "id": "15422", "mass": "2500", "name": "Marilia", "nametype": "Valid", "recclass": "H4", "reclat": "-22.250000", "reclong": "-49.933330", "year": "1971-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "16", ":@computed_region_nnqa_25f4": "287", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-91.6, 41.9] }, "id": "15424", "mass": "28400", "name": "Marion (Iowa)", "nametype": "Valid", "recclass": "L6", "reclat": "41.900000", "reclong": "-91.600000", "year": "1847-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.5, 61.5] }, "id": "15426", "mass": "45000", "name": "Marjalahti", "nametype": "Valid", "recclass": "Pallasite, PMG", "reclat": "61.500000", "reclong": "30.500000", "year": "1902-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.15, 44.5] }, "id": "15429", "mass": "3000", "name": "Marmande", "nametype": "Valid", "recclass": "L5", "reclat": "44.500000", "reclong": "0.150000", "year": "1848-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [48.1, -14.2] }, "id": "15430", "mass": "6000", "name": "Maromandia", "nametype": "Valid", "recclass": "L6", "reclat": "-14.200000", "reclong": "48.100000", "year": "2002-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "39", ":@computed_region_nnqa_25f4": "2740", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-84.1, 35.8] }, "id": "15436", "mass": "1443", "name": "Maryville", "nametype": "Valid", "recclass": "L6", "reclat": "35.800000", "reclong": "-84.100000", "year": "1983-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.86667, 45.36667] }, "id": "15438", "mass": "1000", "name": "Mascombes", "nametype": "Valid", "recclass": "L6", "reclat": "45.366670", "reclong": "1.866670", "year": "1836-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0, 0] }, "id": "53653", "mass": "24.54", "name": "Mason Gully", "nametype": "Valid", "recclass": "H5", "reclat": "0.000000", "reclong": "0.000000", "year": "2010-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.61667, 48.13333] }, "id": "15443", "mass": "1600", "name": "Mässing", "nametype": "Valid", "recclass": "Howardite", "reclat": "48.133330", "reclong": "12.616670", "year": "1803-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.13333, 48.18333] }, "id": "15446", "mass": "19000", "name": "Mauerkirchen", "nametype": "Valid", "recclass": "L6", "reclat": "48.183330", "reclong": "13.133330", "year": "1768-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [57, -20] }, "id": "15447", "mass": "220", "name": "Mauritius", "nametype": "Valid", "recclass": "L6", "reclat": "-20.000000", "reclong": "57.000000", "year": "1801-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.08333, 8.96667] }, "id": "15451", "mass": "4850", "name": "Mayo Belwa", "nametype": "Valid", "recclass": "Aubrite", "reclat": "8.966670", "reclong": "12.083330", "year": "1974-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-101.68333, 24.68333] }, "id": "15453", "mass": "4000", "name": "Mazapil", "nametype": "Valid", "recclass": "Iron, IAB-sLL", "reclat": "24.683330", "reclong": "-101.683330", "year": "1885-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30, -1.21667] }, "id": "15454", "mass": "4975", "name": "Maziba", "nametype": "Valid", "recclass": "L6", "reclat": "-1.216670", "reclong": "30.000000", "year": "1942-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [34.16667, 1.06667] }, "id": "15455", "mass": "150000", "name": "Mbale", "nametype": "Valid", "recclass": "L5/6", "reclat": "1.066670", "reclong": "34.166670", "year": "1992-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-67.5, -27.25] }, "id": "15467", "mass": "31", "name": "Medanitos", "nametype": "Valid", "recclass": "Eucrite-cm", "reclat": "-27.250000", "reclong": "-67.500000", "year": "1953-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.8, 29.01667] }, "id": "15469", "mass": "22", "name": "Meerut", "nametype": "Valid", "recclass": "H5", "reclat": "29.016670", "reclong": "77.800000", "year": "1861-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [106.88333, -6.23333] }, "id": "15470", "mass": "24750", "name": "Meester-Cornelis", "nametype": "Valid", "recclass": "H5", "reclat": "-6.233330", "reclong": "106.883330", "year": "1915-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.15, 53.18333] }, "id": "15485", "mass": "10500", "name": "Menow", "nametype": "Valid", "recclass": "H4", "reclat": "53.183330", "reclong": "13.150000", "year": "1862-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7.21817, 46.81867] }, "id": "15486", "mass": "28.9", "name": "Menziswyl", "nametype": "Valid", "recclass": "L5", "reclat": "46.818670", "reclong": "7.218170", "year": "1903-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.06667, 55.05] }, "id": "15489", "mass": "4000", "name": "Mern", "nametype": "Valid", "recclass": "L6", "reclat": "55.050000", "reclong": "12.066670", "year": "1878-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.66667, 0] }, "id": "15491", "mass": "6000", "name": "Meru", "nametype": "Valid", "recclass": "LL6", "reclat": "0.000000", "reclong": "37.666670", "year": "1945-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [81.98333, 25.48333] }, "id": "15492", "mass": "71400", "name": "Merua", "nametype": "Valid", "recclass": "H5", "reclat": "25.483330", "reclong": "81.983330", "year": "1920-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.56667, 38.18333] }, "id": "15495", "mass": "2405", "name": "Messina", "nametype": "Valid", "recclass": "L5", "reclat": "38.183330", "reclong": "15.566670", "year": "1955-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.1, 50.58333] }, "id": "16626", "mass": "870", "name": "Meuselbach", "nametype": "Valid", "recclass": "L6", "reclat": "50.583330", "reclong": "11.100000", "year": "1897-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.25, 45.76667] }, "id": "16627", "mass": "1300", "name": "Mezel", "nametype": "Valid", "recclass": "L6", "reclat": "45.766670", "reclong": "3.250000", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25.73333, 46.5] }, "id": "16628", "mass": "22700", "name": "Mezö-Madaras", "nametype": "Valid", "recclass": "L3.7", "reclat": "46.500000", "reclong": "25.733330", "year": "1852-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [83.61667, 25.9] }, "id": "16629", "mass": "350", "name": "Mhow", "nametype": "Valid", "recclass": "L6", "reclat": "25.900000", "reclong": "83.616670", "year": "1827-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.7, 34.8] }, "id": "16631", "mass": "1100", "name": "Mianchi", "nametype": "Valid", "recclass": "H5", "reclat": "34.800000", "reclong": "111.700000", "year": "1980-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.16667, 54.56667] }, "id": "16632", "mass": "1600", "name": "Middlesbrough", "nametype": "Valid", "recclass": "L6", "reclat": "54.566670", "reclong": "-1.166670", "year": "1881-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "41", ":@computed_region_nnqa_25f4": "2996", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-90.36556, 42.9075] }, "id": "52090", "mass": "3584", "name": "Mifflin", "nametype": "Valid", "recclass": "L5", "reclat": "42.907500", "reclong": "-90.365560", "year": "2010-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.96667, 48.06667] }, "id": "16634", "mass": "8000", "name": "Mighei", "nametype": "Valid", "recclass": "CM2", "reclat": "48.066670", "reclong": "30.966670", "year": "1889-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [133.22, 35.56833] }, "id": "16635", "mass": "6380", "name": "Mihonoseki", "nametype": "Valid", "recclass": "L6", "reclat": "35.568330", "reclong": "133.220000", "year": "1992-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [17.53333, 46.23333] }, "id": "16636", "mass": "224.2", "name": "Mike", "nametype": "Valid", "recclass": "L6", "reclat": "46.233330", "reclong": "17.533330", "year": "1944-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.1, 46.18333] }, "id": "16640", "mass": "10000", "name": "Milena", "nametype": "Valid", "recclass": "L6", "reclat": "46.183330", "reclong": "16.100000", "year": "1842-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [120.36667, -26.45] }, "id": "16643", "mass": "330000", "name": "Millbillillie", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "-26.450000", "reclong": "120.366670", "year": "1960-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "15", ":@computed_region_nnqa_25f4": "11", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-92.05, 35.4] }, "id": "16645", "mass": "16700", "name": "Miller (Arkansas)", "nametype": "Valid", "recclass": "H5", "reclat": "35.400000", "reclong": "-92.050000", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [136.93333, 35.07833] }, "id": "16692", "mass": "1040", "name": "Minamino", "nametype": "Valid", "recclass": "L", "reclat": "35.078330", "reclong": "136.933330", "year": "1632-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.7, 37.28333] }, "id": "16696", "mass": "42", "name": "Mineo", "nametype": "Valid", "recclass": "Pallasite", "reclat": "37.283330", "reclong": "14.700000", "year": "1826-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [120.66667, 32.33333] }, "id": "16697", "mass": "5500", "name": "Min-Fan-Zhun", "nametype": "Valid", "recclass": "LL6", "reclat": "32.333330", "reclong": "120.666670", "year": "1952-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.6, 47.7] }, "id": "16700", "mass": "550", "name": "Minnichhof", "nametype": "Valid", "recclass": "OC", "reclat": "47.700000", "reclong": "16.600000", "year": "1905-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [83.25, 25.68333] }, "id": "16701", "mass": "8510", "name": "Mirzapur", "nametype": "Valid", "recclass": "L5", "reclat": "25.683330", "reclong": "83.250000", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [23, 56.66667] }, "id": "16703", "mass": "5800", "name": "Misshof", "nametype": "Valid", "recclass": "H5", "reclat": "56.666670", "reclong": "23.000000", "year": "1890-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.93333, 61.73333] }, "id": "16707", "mass": "100.7", "name": "Mjelleim", "nametype": "Valid", "recclass": "H", "reclat": "61.733330", "reclong": "5.933330", "year": "1898-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [24.03333, 46.8] }, "id": "16709", "mass": "300000", "name": "Mocs", "nametype": "Valid", "recclass": "L5-6", "reclat": "46.800000", "reclong": "24.033330", "year": "1882-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "17", ":@computed_region_nnqa_25f4": "1290", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-101.1, 38.5] }, "id": "16711", "mass": "35000", "name": "Modoc (1905)", "nametype": "Valid", "recclass": "L6", "reclat": "38.500000", "reclong": "-101.100000", "year": "1905-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [174.4, -39.63333] }, "id": "16713", "mass": "4500", "name": "Mokoia", "nametype": "Valid", "recclass": "CV3", "reclat": "-39.633330", "reclong": "174.400000", "year": "1908-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.16667, 38.11667] }, "id": "16715", "mass": "144000", "name": "Molina", "nametype": "Valid", "recclass": "H5", "reclat": "38.116670", "reclong": "-1.166670", "year": "1858-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.46667, -31.25] }, "id": "16717", "mass": "150", "name": "Molteno", "nametype": "Valid", "recclass": "Howardite", "reclat": "-31.250000", "reclong": "26.466670", "year": "1953-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "2957", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-102.85833, 31.60833] }, "id": "16719", "mass": "2587", "name": "Monahans (1998)", "nametype": "Valid", "recclass": "H5", "reclat": "31.608330", "reclong": "-102.858330", "year": "1998-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "636", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-80.5, 35.25] }, "id": "16720", "mass": "8600", "name": "Monroe", "nametype": "Valid", "recclass": "H4", "reclat": "35.250000", "reclong": "-80.500000", "year": "1849-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-8.25, 38.01667] }, "id": "16725", "mass": "4885", "name": "Monte das Fortes", "nametype": "Valid", "recclass": "L5", "reclat": "38.016670", "reclong": "-8.250000", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.35, 43.26667] }, "id": "16726", "mass": "3130", "name": "Monte Milone", "nametype": "Valid", "recclass": "L5", "reclat": "43.266670", "reclong": "13.350000", "year": "1846-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.9625, 43.39056] }, "id": "16727", "mass": "149000", "name": "Montferré", "nametype": "Valid", "recclass": "H5", "reclat": "43.390560", "reclong": "1.962500", "year": "1923-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.58333, 47.63333] }, "id": "16729", "mass": "500", "name": "Montlivault", "nametype": "Valid", "recclass": "L6", "reclat": "47.633330", "reclong": "1.583330", "year": "1838-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.35, -15.96667] }, "id": "16733", "name": "Monze", "nametype": "Valid", "recclass": "L6", "reclat": "-15.966670", "reclong": "27.350000", "year": "1950-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "2431", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-79.38333, 35.41667] }, "id": "16736", "mass": "1880", "name": "Moore County", "nametype": "Valid", "recclass": "Eucrite-cm", "reclat": "35.416670", "reclong": "-79.383330", "year": "1913-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-8.33333, 52.45] }, "id": "16737", "mass": "3520", "name": "Mooresfort", "nametype": "Valid", "recclass": "H5", "reclat": "52.450000", "reclong": "-8.333330", "year": "1810-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [145.6, -40.975] }, "id": "16738", "mass": "8887.5", "name": "Moorleah", "nametype": "Valid", "recclass": "L6", "reclat": "-40.975000", "reclong": "145.600000", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.83333, 28.78333] }, "id": "16740", "mass": "70", "name": "Moradabad", "nametype": "Valid", "recclass": "L6", "reclat": "28.783330", "reclong": "78.833330", "year": "1808-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [18.53333, 49.6] }, "id": "16742", "mass": "633", "name": "Morávka", "nametype": "Valid", "recclass": "H5", "reclat": "49.600000", "reclong": "18.533330", "year": "2000-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.13333, 44.6] }, "id": "16747", "mass": "1300", "name": "Mornans", "nametype": "Valid", "recclass": "H5", "reclat": "44.600000", "reclong": "5.133330", "year": "1875-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.7, 59.43333] }, "id": "36592", "mass": "3763", "name": "Moss", "nametype": "Valid", "recclass": "CO3.6", "reclat": "59.433330", "reclong": "10.700000", "year": "2006-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.33333, 26.83333] }, "id": "16759", "mass": "1500", "name": "Moti-ka-nagla", "nametype": "Valid", "recclass": "H6", "reclat": "26.833330", "reclong": "77.333330", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.5, 45.2] }, "id": "16762", "mass": "9150", "name": "Motta di Conti", "nametype": "Valid", "recclass": "H4", "reclat": "45.200000", "reclong": "8.500000", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [141.7, -29.8] }, "id": "16766", "mass": "11300", "name": "Mount Browne", "nametype": "Valid", "recclass": "H6", "reclat": "-29.800000", "reclong": "141.700000", "year": "1902-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [4.8, 18.7] }, "id": "16804", "mass": "110000", "name": "Mount Tazerzait", "nametype": "Valid", "recclass": "L5", "reclat": "18.700000", "reclong": "4.800000", "year": "1991-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.86667, 44.08333] }, "id": "16805", "mass": "17000", "name": "Mount Vaisi", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "44.083330", "reclong": "6.866670", "year": "1637-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.5, -11.5] }, "id": "16820", "mass": "1100", "name": "Mtola", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "-11.500000", "reclong": "33.500000", "year": "1944-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.01667, 12.63333] }, "id": "16841", "mass": "4400", "name": "Muddoor", "nametype": "Valid", "recclass": "L5", "reclat": "12.633330", "reclong": "77.016670", "year": "1865-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [80.83333, 9.33333] }, "id": "16851", "mass": "25.5", "name": "Mulletiwu", "nametype": "Valid", "recclass": "L", "reclat": "9.333330", "reclong": "80.833330", "year": "1795-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [90.21667, 24.5] }, "id": "16874", "mass": "4703", "name": "Muraid", "nametype": "Valid", "recclass": "L6", "reclat": "24.500000", "reclong": "90.216670", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [145.2, -36.61667] }, "id": "16875", "mass": "100000", "name": "Murchison", "nametype": "Valid", "recclass": "CM2", "reclat": "-36.616670", "reclong": "145.200000", "year": "1969-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "36", ":@computed_region_nnqa_25f4": "237", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-88.1, 36.6] }, "id": "16882", "mass": "12600", "name": "Murray", "nametype": "Valid", "recclass": "CM2", "reclat": "36.600000", "reclong": "-88.100000", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [85.53333, 26.13333] }, "id": "16885", "mass": "1245", "name": "Muzaffarpur", "nametype": "Valid", "recclass": "Iron, IAB-sHL", "reclat": "26.133330", "reclong": "85.533330", "year": "1964-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [72.63333, 23.05] }, "id": "16887", "name": "Myhee Caunta", "nametype": "Valid", "recclass": "OC", "reclat": "23.050000", "reclong": "72.633330", "year": "1842-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1, 12] }, "id": "16889", "mass": "8165", "name": "Nadiabondi", "nametype": "Valid", "recclass": "H5", "reclat": "12.000000", "reclong": "1.000000", "year": "1956-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [140.06167, 38.12167] }, "id": "16890", "mass": "1810", "name": "Nagai", "nametype": "Valid", "recclass": "L6", "reclat": "38.121670", "reclong": "140.061670", "year": "1922-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.21667, 26.98333] }, "id": "16892", "mass": "20", "name": "Nagaria", "nametype": "Valid", "recclass": "Eucrite-cm", "reclat": "26.983330", "reclong": "78.216670", "year": "1875-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [19.5, 49.16667] }, "id": "16893", "mass": "6100", "name": "Nagy-Borové", "nametype": "Valid", "recclass": "L5", "reclat": "49.166670", "reclong": "19.500000", "year": "1895-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.35, 31.31667] }, "id": "16898", "mass": "10000", "name": "Nakhla", "nametype": "Valid", "recclass": "Martian (nakhlite)", "reclat": "31.316670", "reclong": "30.350000", "year": "1911-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [100.08333, 13.73333] }, "id": "16899", "mass": "23200", "name": "Nakhon Pathom", "nametype": "Valid", "recclass": "L6", "reclat": "13.733330", "reclong": "100.083330", "year": "1923-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [79.2, 12.28333] }, "id": "16902", "mass": "4500", "name": "Nammianthal", "nametype": "Valid", "recclass": "H5", "reclat": "12.283330", "reclong": "79.200000", "year": "1886-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [103.5, 35.66667] }, "id": "16903", "mass": "52900", "name": "Nan Yang Pao", "nametype": "Valid", "recclass": "L6", "reclat": "35.666670", "reclong": "103.500000", "year": "1917-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "45", ":@computed_region_nnqa_25f4": "419", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-77.16667, 38.41667] }, "id": "16904", "mass": "7500", "name": "Nanjemoy", "nametype": "Valid", "recclass": "H6", "reclat": "38.416670", "reclong": "-77.166670", "year": "1825-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [121.8, 32.11667] }, "id": "16907", "mass": "529", "name": "Nantong", "nametype": "Valid", "recclass": "H6", "reclat": "32.116670", "reclong": "121.800000", "year": "1984-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77, 19.25] }, "id": "16908", "mass": "17000", "name": "Naoki", "nametype": "Valid", "recclass": "H6", "reclat": "19.250000", "reclong": "77.000000", "year": "1928-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [51.5, 33.75] }, "id": "16909", "mass": "2700", "name": "Naragh", "nametype": "Valid", "recclass": "H6", "reclat": "33.750000", "reclong": "51.500000", "year": "1974-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [150.68889, -34.05] }, "id": "16912", "mass": "367.5", "name": "Narellan", "nametype": "Valid", "recclass": "L6", "reclat": "-34.050000", "reclong": "150.688890", "year": "1928-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.51667, 42.51667] }, "id": "16914", "name": "Narni", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "42.516670", "reclong": "12.516670", "year": "0921-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [165.9, -21.73333] }, "id": "16922", "mass": "347", "name": "Nassirah", "nametype": "Valid", "recclass": "H4", "reclat": "-21.733330", "reclong": "165.900000", "year": "1936-01-01T00:00:00.000" }, { "fall": "Fell", "id": "16923", "mass": "1.4", "name": "Natal", "nametype": "Valid", "recclass": "Stone-uncl", "year": "1973-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [83.66667, 21.25] }, "id": "16927", "mass": "105", "name": "Nawapali", "nametype": "Valid", "recclass": "CM2", "reclat": "21.250000", "reclong": "83.666670", "year": "1890-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [136.46528, 36.44917] }, "id": "16934", "mass": "420", "name": "Neagari", "nametype": "Valid", "recclass": "L6", "reclat": "36.449170", "reclong": "136.465280", "year": "1995-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [83.48333, 18.68333] }, "id": "16935", "mass": "4500", "name": "Nedagolla", "nametype": "Valid", "recclass": "Iron, ungrouped", "reclat": "18.683330", "reclong": "83.483330", "year": "1870-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.33333, 9.5] }, "id": "16941", "mass": "2450", "name": "Nejo", "nametype": "Valid", "recclass": "L6", "reclat": "9.500000", "reclong": "35.333330", "year": "1970-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.5, 56.5] }, "id": "16945", "mass": "10250", "name": "Nerft", "nametype": "Valid", "recclass": "L6", "reclat": "56.500000", "reclong": "21.500000", "year": "1864-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.80833, 47.525] }, "id": "16950", "mass": "6189", "name": "Neuschwanstein", "nametype": "Valid", "recclass": "EL6", "reclat": "47.525000", "reclong": "10.808330", "year": "2002-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "38", ":@computed_region_nnqa_25f4": "2615", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-81.76667, 40] }, "id": "16953", "mass": "230000", "name": "New Concord", "nametype": "Valid", "recclass": "L6", "reclat": "40.000000", "reclong": "-81.766670", "year": "1860-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.68333, 15.36667] }, "id": "16954", "mass": "12000", "name": "New Halfa", "nametype": "Valid", "recclass": "L4", "reclat": "15.366670", "reclong": "35.683330", "year": "1994-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "22", ":@computed_region_nnqa_25f4": "1667", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-90.10976, 29.94718] }, "id": "16960", "mass": "19256", "name": "New Orleans", "nametype": "Valid", "recclass": "H5", "reclat": "29.947180", "reclong": "-90.109760", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.41667, -7.45] }, "id": "16966", "mass": "1393", "name": "Ngawi", "nametype": "Valid", "recclass": "LL3.6", "reclat": "-7.450000", "reclong": "111.416670", "year": "1883-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-4.38333, 13.85] }, "id": "16968", "mass": "37500", "name": "N'Goureyma", "nametype": "Valid", "recclass": "Iron, ungrouped", "reclat": "13.850000", "reclong": "-4.383330", "year": "1900-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.43333, 49.03333] }, "id": "16970", "name": "Nicorps", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "49.033330", "reclong": "-1.433330", "year": "1750-01-01T00:00:00.000" }, { "fall": "Fell", "id": "16974", "mass": "3.3", "name": "Niger (L6)", "nametype": "Valid", "recclass": "L6", "year": "1967-01-01T00:00:00.000" }, { "fall": "Fell", "id": "16975", "mass": "3.3", "name": "Niger (LL6)", "nametype": "Valid", "recclass": "LL6", "year": "1967-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.63333, 52.45] }, "id": "16976", "mass": "3996", "name": "Nikolaevka", "nametype": "Valid", "recclass": "H4", "reclat": "52.450000", "reclong": "78.633330", "year": "1935-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.33333, 56.11667] }, "id": "16977", "mass": "6000", "name": "Nikolskoe", "nametype": "Valid", "recclass": "L4", "reclat": "56.116670", "reclong": "37.333330", "year": "1954-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [121.48333, 29.86667] }, "id": "16980", "mass": "14250", "name": "Ningbo", "nametype": "Valid", "recclass": "Iron, IVA", "reclat": "29.866670", "reclong": "121.483330", "year": "1975-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [105.90667, 32.925] }, "id": "16981", "mass": "4610", "name": "Ningqiang", "nametype": "Valid", "recclass": "C3-ung", "reclat": "32.925000", "reclong": "105.906670", "year": "1983-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [131.56667, 34.2] }, "id": "16982", "mass": "467", "name": "Nio", "nametype": "Valid", "recclass": "H3-4", "reclat": "34.200000", "reclong": "131.566670", "year": "1897-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [30.7, -28.56667] }, "id": "16983", "mass": "17200", "name": "N'Kandhla", "nametype": "Valid", "recclass": "Iron, IID", "reclat": "-28.566670", "reclong": "30.700000", "year": "1912-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "49", ":@computed_region_nnqa_25f4": "1683", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-69.48333, 44.08333] }, "id": "16984", "mass": "2300", "name": "Nobleborough", "nametype": "Valid", "recclass": "Eucrite-pmict", "reclat": "44.083330", "reclong": "-69.483330", "year": "1823-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "35", ":@computed_region_nnqa_25f4": "2238", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-86.055, 40.08528] }, "id": "16985", "mass": "483.7", "name": "Noblesville", "nametype": "Valid", "recclass": "H4-6", "reclat": "40.085280", "reclong": "-86.055000", "year": "1991-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [130.75, 33.725] }, "id": "16988", "mass": "472", "name": "Nogata", "nametype": "Valid", "recclass": "L6", "reclat": "33.725000", "reclong": "130.750000", "year": "0861-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-59.83333, -32.36667] }, "id": "16989", "mass": "4000", "name": "Nogoya", "nametype": "Valid", "recclass": "CM2", "reclat": "-32.366670", "reclong": "-59.833330", "year": "1879-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "15", ":@computed_region_nnqa_25f4": "10", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-92.26667, 36.21667] }, "id": "16994", "mass": "1050", "name": "Norfork", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "36.216670", "reclong": "-92.266670", "year": "1918-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "17", ":@computed_region_nnqa_25f4": "1252", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.86667, 39.68333] }, "id": "17922", "mass": "1100000", "name": "Norton County", "nametype": "Valid", "recclass": "Aubrite", "reclat": "39.683330", "reclong": "-99.866670", "year": "1948-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.52722, 45.29167] }, "id": "17930", "mass": "177", "name": "Noventa Vicentina", "nametype": "Valid", "recclass": "H4", "reclat": "45.291670", "reclong": "11.527220", "year": "1971-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [46, 54.81667] }, "id": "17933", "mass": "1900", "name": "Novo-Urei", "nametype": "Valid", "recclass": "Ureilite", "reclat": "54.816670", "reclong": "46.000000", "year": "1886-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [31.33333, 58.55] }, "id": "17934", "name": "Novy-Ergi", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "58.550000", "reclong": "31.333330", "year": "1662-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22, 56] }, "id": "17935", "mass": "1001", "name": "Novy-Projekt", "nametype": "Valid", "recclass": "OC", "reclat": "56.000000", "reclong": "22.000000", "year": "1908-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [102.46667, 42.91667] }, "id": "17936", "mass": "250", "name": "Noyan-Bogdo", "nametype": "Valid", "recclass": "L6", "reclat": "42.916670", "reclong": "102.466670", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-102.13333, 24.3] }, "id": "17938", "mass": "50000", "name": "Nuevo Mercurio", "nametype": "Valid", "recclass": "H5", "reclat": "24.300000", "reclong": "-102.133330", "year": "1978-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.75, 41.63333] }, "id": "17959", "mass": "5000", "name": "Nulles", "nametype": "Valid", "recclass": "H6", "reclat": "41.633330", "reclong": "0.750000", "year": "1851-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [141.86667, 43.33333] }, "id": "17960", "mass": "363", "name": "Numakai", "nametype": "Valid", "recclass": "H4", "reclat": "43.333330", "reclong": "141.866670", "year": "1925-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [94.91667, 21.20833] }, "id": "17969", "mass": "737.6", "name": "Nyaung", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "21.208330", "reclong": "94.916670", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.025, 47.55] }, "id": "17970", "mass": "1100", "name": "Nyirábrany", "nametype": "Valid", "recclass": "LL5", "reclat": "47.550000", "reclong": "22.025000", "year": "1914-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [55.26667, 57.78333] }, "id": "17979", "mass": "500000", "name": "Ochansk", "nametype": "Valid", "recclass": "H4", "reclat": "57.783330", "reclong": "55.266670", "year": "1887-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.05, 52.28333] }, "id": "17988", "mass": "1400", "name": "Oesede", "nametype": "Valid", "recclass": "H5", "reclat": "52.283330", "reclong": "8.050000", "year": "1927-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [23, 58.5] }, "id": "17989", "mass": "6000", "name": "Oesel", "nametype": "Valid", "recclass": "L6", "reclat": "58.500000", "reclong": "23.000000", "year": "1855-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.03333, 47.88333] }, "id": "17990", "mass": "3750", "name": "Ofehértó", "nametype": "Valid", "recclass": "L6", "reclat": "47.883330", "reclong": "22.033330", "year": "1900-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [130.2, 33.28333] }, "id": "17994", "mass": "14360", "name": "Ogi", "nametype": "Valid", "recclass": "H6", "reclat": "33.283330", "reclong": "130.200000", "year": "1741-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [23.58333, 46.06667] }, "id": "17995", "mass": "16250", "name": "Ohaba", "nametype": "Valid", "recclass": "H5", "reclat": "46.066670", "reclong": "23.583330", "year": "1857-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.5, 6.75] }, "id": "17996", "mass": "7700", "name": "Ohuma", "nametype": "Valid", "recclass": "L5", "reclat": "6.750000", "reclong": "8.500000", "year": "1963-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-5.4, 38.18333] }, "id": "17997", "mass": "5850", "name": "Ojuelos Altos", "nametype": "Valid", "recclass": "L6", "reclat": "38.183330", "reclong": "-5.400000", "year": "1926-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [139.21667, 36.18333] }, "id": "17998", "mass": "194", "name": "Okabe", "nametype": "Valid", "recclass": "H5", "reclat": "36.183330", "reclong": "139.216670", "year": "1958-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [135.2, 35.08333] }, "id": "18000", "mass": "4742", "name": "Okano", "nametype": "Valid", "recclass": "Iron, IIAB", "reclat": "35.083330", "reclong": "135.200000", "year": "1904-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25.5, 50.83333] }, "id": "18002", "mass": "12000", "name": "Okniny", "nametype": "Valid", "recclass": "LL6", "reclat": "50.833330", "reclong": "25.500000", "year": "1834-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8.16667, 52.95] }, "id": "18009", "mass": "16570", "name": "Oldenburg (1930)", "nametype": "Valid", "recclass": "L6", "reclat": "52.950000", "reclong": "8.166670", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.03333, 39] }, "id": "18012", "name": "Oliva-Gandia", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "39.000000", "reclong": "-0.033330", "year": "1520-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7.06667, 38.71667] }, "id": "18013", "mass": "150000", "name": "Olivenza", "nametype": "Valid", "recclass": "LL5", "reclat": "38.716670", "reclong": "-7.066670", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-2.1, 39.56667] }, "id": "18015", "mass": "40000", "name": "Olmedilla de Alarcón", "nametype": "Valid", "recclass": "H5", "reclat": "39.566670", "reclong": "-2.100000", "year": "1929-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [161.80833, 64.02] }, "id": "18019", "mass": "250000", "name": "Omolon", "nametype": "Valid", "recclass": "Pallasite, PMG", "reclat": "64.020000", "reclong": "161.808330", "year": "1981-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.38333, 43.88333] }, "id": "18026", "mass": "14000", "name": "Orgueil", "nametype": "Valid", "recclass": "CI1", "reclat": "43.883330", "reclong": "1.383330", "year": "1864-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "30", ":@computed_region_nnqa_25f4": "1078", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-81.36222, 28.5475] }, "id": "34489", "mass": "180", "name": "Orlando", "nametype": "Valid", "recclass": "Eucrite", "reclat": "28.547500", "reclong": "-81.362220", "year": "2004-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.15, 47.11667] }, "id": "18030", "mass": "6000", "name": "Ornans", "nametype": "Valid", "recclass": "CO3.4", "reclat": "47.116670", "reclong": "6.150000", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [8, 48.5] }, "id": "18033", "mass": "4500", "name": "Ortenau", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "48.500000", "reclong": "8.000000", "year": "1671-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.93333, 42.13333] }, "id": "18034", "mass": "3400", "name": "Orvinio", "nametype": "Valid", "recclass": "H6", "reclat": "42.133330", "reclong": "12.933330", "year": "1872-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.4, 58.88333] }, "id": "18042", "mass": "246", "name": "Oterøy", "nametype": "Valid", "recclass": "L6", "reclat": "58.883330", "reclong": "9.400000", "year": "1928-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [140.35, 38.4] }, "id": "18045", "mass": "6510", "name": "Otomi", "nametype": "Valid", "recclass": "H", "reclat": "38.400000", "reclong": "140.350000", "year": "1867-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "17", ":@computed_region_nnqa_25f4": "1947", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-95.21667, 38.6] }, "id": "18046", "mass": "840", "name": "Ottawa", "nametype": "Valid", "recclass": "LL6", "reclat": "38.600000", "reclong": "-95.216670", "year": "1896-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.08, 12.9] }, "id": "56729", "mass": "4440", "name": "Ouadangou", "nametype": "Valid", "recclass": "L5", "reclat": "12.900000", "reclong": "0.080000", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6.57717, 30.18] }, "id": "18050", "mass": "1215.5", "name": "Oued el Hadjar", "nametype": "Valid", "recclass": "LL6", "reclat": "30.180000", "reclong": "-6.577170", "year": "1986-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-13.1, 24.3] }, "id": "31282", "mass": "17000", "name": "Oum Dreyga", "nametype": "Valid", "recclass": "H3-5", "reclat": "24.300000", "reclong": "-13.100000", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-8.28, 37.60833] }, "id": "18052", "mass": "20000", "name": "Ourique", "nametype": "Valid", "recclass": "H4", "reclat": "37.608330", "reclong": "-8.280000", "year": "1998-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16, -18] }, "id": "18055", "mass": "121.5", "name": "Ovambo", "nametype": "Valid", "recclass": "L6", "reclat": "-18.000000", "reclong": "16.000000", "year": "1900-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-5.86667, 43.4] }, "id": "18058", "mass": "205", "name": "Oviedo", "nametype": "Valid", "recclass": "H5", "reclat": "43.400000", "reclong": "-5.866670", "year": "1856-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [28.83333, 51.33333] }, "id": "18062", "name": "Owrucz", "nametype": "Valid", "recclass": "OC", "reclat": "51.333330", "reclong": "28.833330", "year": "1775-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.3, 21.05] }, "id": "18068", "mass": "3400", "name": "Pacula", "nametype": "Valid", "recclass": "L6", "reclat": "21.050000", "reclong": "-99.300000", "year": "1881-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25, 55.66667] }, "id": "18069", "mass": "3858", "name": "Padvarninkai", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "55.666670", "reclong": "25.000000", "year": "1929-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [120.45583, 17.74333] }, "id": "18072", "mass": "515", "name": "Paitan", "nametype": "Valid", "recclass": "H6", "reclat": "17.743330", "reclong": "120.455830", "year": "1910-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "32", ":@computed_region_nnqa_25f4": "503", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-89.71667, 32.31667] }, "id": "18073", "name": "Palahatchie", "nametype": "Valid", "recclass": "OC", "reclat": "32.316670", "reclong": "-89.716670", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-65.1, -23.11667] }, "id": "18074", "mass": "1430", "name": "Palca de Aparzo", "nametype": "Valid", "recclass": "L5", "reclat": "-23.116670", "reclong": "-65.100000", "year": "1988-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [118.61667, 43.48333] }, "id": "18077", "mass": "18000", "name": "Palinshih", "nametype": "Valid", "recclass": "Iron", "reclat": "43.483330", "reclong": "118.616670", "year": "1914-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "18", ":@computed_region_nnqa_25f4": "2122", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-91.5, 39.8] }, "id": "18079", "mass": "135", "name": "Palmyra", "nametype": "Valid", "recclass": "L3", "reclat": "39.800000", "reclong": "-91.500000", "year": "1926-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "4", ":@computed_region_nnqa_25f4": "1657", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-157.78333, 21.3] }, "id": "18082", "mass": "682", "name": "Palolo Valley", "nametype": "Valid", "recclass": "H5", "reclat": "21.300000", "reclong": "-157.783330", "year": "1949-01-01T00:00:00.000" }, { "fall": "Found", "id": "32591", "mass": "69.5", "name": "Dominion Range 03239", "nametype": "Valid", "recclass": "L6", "year": "2002-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [120.7, 15.08333] }, "id": "18093", "mass": "10500", "name": "Pampanga", "nametype": "Valid", "recclass": "L5", "reclat": "15.083330", "reclong": "120.700000", "year": "1859-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [124.28333, 8.06667] }, "id": "18098", "mass": "2130", "name": "Pantar", "nametype": "Valid", "recclass": "H5", "reclat": "8.066670", "reclong": "124.283330", "year": "1938-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "15", ":@computed_region_nnqa_25f4": "1023", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-90.5, 36.06667] }, "id": "18101", "mass": "408000", "name": "Paragould", "nametype": "Valid", "recclass": "LL5", "reclat": "36.066670", "reclong": "-90.500000", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-40.7, -6.23333] }, "id": "18102", "mass": "2000", "name": "Parambu", "nametype": "Valid", "recclass": "LL5", "reclat": "-6.233330", "reclong": "-40.700000", "year": "1967-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-51.66667, -19.13333] }, "id": "18103", "mass": "100000", "name": "Paranaiba", "nametype": "Valid", "recclass": "L6", "reclat": "-19.133330", "reclong": "-51.666670", "year": "1956-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "34", ":@computed_region_nnqa_25f4": "1863", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-87.67917, 41.48472] }, "id": "18106", "mass": "18000", "name": "Park Forest", "nametype": "Valid", "recclass": "L5", "reclat": "41.484720", "reclong": "-87.679170", "year": "2003-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.35, 9.23333] }, "id": "18108", "mass": "77600", "name": "Parnallee", "nametype": "Valid", "recclass": "LL3.6", "reclat": "9.233330", "reclong": "78.350000", "year": "1857-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [85.4, 26.2] }, "id": "18109", "mass": "800", "name": "Parsa", "nametype": "Valid", "recclass": "EH3", "reclat": "26.200000", "reclong": "85.400000", "year": "1942-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "11", ":@computed_region_nnqa_25f4": "1994", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-103.4, 36.21667] }, "id": "18110", "mass": "5100", "name": "Pasamonte", "nametype": "Valid", "recclass": "Eucrite-pmict", "reclat": "36.216670", "reclong": "-103.400000", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.05, 20.93694] }, "id": "18112", "mass": "4375", "name": "Patora", "nametype": "Valid", "recclass": "H6", "reclat": "20.936940", "reclong": "82.050000", "year": "1969-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-48.56667, -19.53333] }, "id": "18116", "mass": "2121", "name": "Patrimonio", "nametype": "Valid", "recclass": "L6", "reclat": "-19.533330", "reclong": "-48.566670", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.96667, 38.13333] }, "id": "18118", "mass": "12", "name": "Patti", "nametype": "Valid", "recclass": "Iron", "reclat": "38.133330", "reclong": "14.966670", "year": "1922-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [91.18333, 23.15] }, "id": "18171", "mass": "37350", "name": "Patwar", "nametype": "Valid", "recclass": "Mesosiderite-A1", "reclat": "23.150000", "reclong": "91.183330", "year": "1935-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25.51667, 43.46667] }, "id": "18173", "mass": "2968", "name": "Pavel", "nametype": "Valid", "recclass": "H5", "reclat": "43.466670", "reclong": "25.516670", "year": "1966-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [77.03333, 52.3] }, "id": "18175", "mass": "142.5", "name": "Pavlodar (stone)", "nametype": "Valid", "recclass": "H5", "reclat": "52.300000", "reclong": "77.033330", "year": "1938-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.98333, 48.53333] }, "id": "18176", "mass": "40000", "name": "Pavlograd", "nametype": "Valid", "recclass": "L6", "reclat": "48.533330", "reclong": "35.983330", "year": "1826-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [43, 52.03333] }, "id": "18177", "mass": "2000", "name": "Pavlovka", "nametype": "Valid", "recclass": "Howardite", "reclat": "52.033330", "reclong": "43.000000", "year": "1882-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.54217, 11.33367] }, "id": "18179", "name": "Pê", "nametype": "Valid", "recclass": "L6", "reclat": "11.333670", "reclong": "-3.542170", "year": "1989-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-117.93333, 56.13333] }, "id": "18180", "mass": "45760", "name": "Peace River", "nametype": "Valid", "recclass": "L6", "reclat": "56.133330", "reclong": "-117.933330", "year": "1963-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.25, 51.66667] }, "id": "18181", "mass": "117.8", "name": "Peckelsheim", "nametype": "Valid", "recclass": "Diogenite-pm", "reclat": "51.666670", "reclong": "9.250000", "year": "1953-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "47", ":@computed_region_nnqa_25f4": "2185", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-73.91667, 41.28333] }, "id": "18782", "mass": "12570", "name": "Peekskill", "nametype": "Valid", "recclass": "H6", "reclat": "41.283330", "reclong": "-73.916670", "year": "1992-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "3062", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-103.11667, 30.125] }, "id": "18786", "mass": "70000", "name": "Peña Blanca Spring", "nametype": "Valid", "recclass": "Aubrite", "reclat": "30.125000", "reclong": "-103.116670", "year": "1946-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.5, -10.66667] }, "id": "18792", "mass": "165", "name": "Peramiho", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "-10.666670", "reclong": "35.500000", "year": "1899-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [91, 23.325] }, "id": "18793", "mass": "23474", "name": "Perpeti", "nametype": "Valid", "recclass": "L6", "reclat": "23.325000", "reclong": "91.000000", "year": "1935-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.43333, 56.4] }, "id": "18797", "mass": "2", "name": "Perth", "nametype": "Valid", "recclass": "LL5", "reclat": "56.400000", "reclong": "-3.433330", "year": "1830-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [39.43333, 56.63333] }, "id": "18798", "mass": "66000", "name": "Pervomaisky", "nametype": "Valid", "recclass": "L6", "reclat": "56.633330", "reclong": "39.433330", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [66.08333, 55.5] }, "id": "18799", "mass": "3393", "name": "Pesyanoe", "nametype": "Valid", "recclass": "Aubrite", "reclat": "55.500000", "reclong": "66.083330", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.42, 14.052] }, "id": "18800", "mass": "189", "name": "Pétèlkolé", "nametype": "Valid", "recclass": "H5", "reclat": "14.052000", "reclong": "0.420000", "year": "1995-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "39", ":@computed_region_nnqa_25f4": "2017", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-86.63333, 35.3] }, "id": "18801", "mass": "1800", "name": "Petersburg", "nametype": "Valid", "recclass": "Eucrite-pmict", "reclat": "35.300000", "reclong": "-86.633330", "year": "1855-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7.33333, 53.53333] }, "id": "18804", "name": "Pettiswood", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "53.533330", "reclong": "-7.333330", "year": "1779-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "17", ":@computed_region_nnqa_25f4": "1255", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.25, 40] }, "id": "18808", "mass": "57900", "name": "Phillips County (stone)", "nametype": "Valid", "recclass": "L6", "reclat": "40.000000", "reclong": "-99.250000", "year": "1901-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [108.58333, 11.25] }, "id": "18809", "mass": "500", "name": "Phu Hong", "nametype": "Valid", "recclass": "H4", "reclat": "11.250000", "reclong": "108.583330", "year": "1887-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [105.48333, 12] }, "id": "18811", "mass": "7800", "name": "Phum Sambo", "nametype": "Valid", "recclass": "H4", "reclat": "12.000000", "reclong": "105.483330", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [108.1, 15.71667] }, "id": "18812", "mass": "11000", "name": "Phuoc-Binh", "nametype": "Valid", "recclass": "L5", "reclat": "15.716670", "reclong": "108.100000", "year": "1941-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.50222, 44.24417] }, "id": "18813", "mass": "13.1", "name": "Piancaldoli", "nametype": "Valid", "recclass": "LL3.4", "reclat": "44.244170", "reclong": "11.502220", "year": "1968-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6.23333, 41.36667] }, "id": "18816", "name": "Picote", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "41.366670", "reclong": "-6.233330", "year": "1843-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [25.73333, 58.66667] }, "id": "18822", "mass": "23250", "name": "Pillistfer", "nametype": "Valid", "recclass": "EL6", "reclat": "58.666670", "reclong": "25.733330", "year": "1863-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [73.94167, 26.03472] }, "id": "18831", "mass": "42000", "name": "Piplia Kalan", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "26.034720", "reclong": "73.941670", "year": "1996-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [18.71667, -32.86667] }, "id": "18832", "mass": "37", "name": "Piquetberg", "nametype": "Valid", "recclass": "H", "reclat": "-32.866670", "reclong": "18.716670", "year": "1881-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [88.45, 25.8] }, "id": "18834", "mass": "842", "name": "Pirgunje", "nametype": "Valid", "recclass": "L6", "reclat": "25.800000", "reclong": "88.450000", "year": "1882-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76, 29.58333] }, "id": "18835", "mass": "1161", "name": "Pirthalla", "nametype": "Valid", "recclass": "H6", "reclat": "29.583330", "reclong": "76.000000", "year": "1884-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "31", ":@computed_region_nnqa_25f4": "207", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-83.51667, 31.95] }, "id": "18837", "mass": "3760", "name": "Pitts", "nametype": "Valid", "recclass": "Iron, IAB-ung", "reclat": "31.950000", "reclong": "-83.516670", "year": "1921-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "2018", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-96.11667, 30.7] }, "id": "18846", "mass": "2085", "name": "Plantersville", "nametype": "Valid", "recclass": "H6", "reclat": "30.700000", "reclong": "-96.116670", "year": "1930-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.70972, 45.275] }, "id": "51706", "mass": "6913", "name": "Pleşcoi", "nametype": "Valid", "recclass": "L5-6", "reclat": "45.275000", "reclong": "26.709720", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.11667, 50.53333] }, "id": "18849", "mass": "39", "name": "Ploschkovitz", "nametype": "Valid", "recclass": "L5", "reclat": "50.533330", "reclong": "14.116670", "year": "1723-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [104.91667, 11.58333] }, "id": "18851", "mass": "96", "name": "Pnompehn", "nametype": "Valid", "recclass": "L6", "reclat": "11.583330", "reclong": "104.916670", "year": "1868-01-01T00:00:00.000" }, { "fall": "Found", "id": "32592", "mass": "290.89999999999998", "name": "Dominion Range 03240", "nametype": "Valid", "recclass": "LL5", "year": "2002-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [12.13333, 50.93333] }, "id": "18853", "mass": "3000", "name": "Pohlitz", "nametype": "Valid", "recclass": "L5", "reclat": "50.933330", "reclong": "12.133330", "year": "1819-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.66667, 26.71667] }, "id": "18858", "mass": "350", "name": "Pokhra", "nametype": "Valid", "recclass": "H5", "reclat": "26.716670", "reclong": "82.666670", "year": "1866-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.015, 66.34833] }, "id": "18860", "mass": "253.6", "name": "Pollen", "nametype": "Valid", "recclass": "CM2", "reclat": "66.348330", "reclong": "14.015000", "year": "1942-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-4.31944, 53.03639] }, "id": "18865", "mass": "157", "name": "Pontlyfni", "nametype": "Valid", "recclass": "Winonaite", "reclat": "53.036390", "reclong": "-4.319440", "year": "1931-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "11", ":@computed_region_nnqa_25f4": "1987", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-103.295, 34.175] }, "id": "18874", "mass": "71400", "name": "Portales Valley", "nametype": "Valid", "recclass": "H6", "reclat": "34.175000", "reclong": "-103.295000", "year": "1998-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-8, 38.5] }, "id": "18876", "mass": "4500", "name": "Portugal", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "38.500000", "reclong": "-8.000000", "year": "1796-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [118.5, 31.41667] }, "id": "18879", "mass": "665", "name": "Po-wang Chen", "nametype": "Valid", "recclass": "LL", "reclat": "31.416670", "reclong": "118.500000", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13.94083, 48.3025] }, "id": "18883", "mass": "2125", "name": "Prambachkirchen", "nametype": "Valid", "recclass": "L6", "reclat": "48.302500", "reclong": "13.940830", "year": "1932-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.03333, 49.66667] }, "id": "18887", "mass": "5555", "name": "Pribram", "nametype": "Valid", "recclass": "H5", "reclat": "49.666670", "reclong": "14.033330", "year": "1959-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "38", ":@computed_region_nnqa_25f4": "2566", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-83.85, 39.11667] }, "id": "18888", "mass": "900", "name": "Pricetown", "nametype": "Valid", "recclass": "L6", "reclat": "39.116670", "reclong": "-83.850000", "year": "1893-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.51667, 39.35] }, "id": "45984", "mass": "500", "name": "Puerto Lápice", "nametype": "Valid", "recclass": "Eucrite-br", "reclat": "39.350000", "reclong": "-3.516670", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [75.18333, 23.36667] }, "id": "18899", "mass": "560", "name": "Pulsora", "nametype": "Valid", "recclass": "H5", "reclat": "23.366670", "reclong": "75.183330", "year": "1863-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.26667, 52.76667] }, "id": "18901", "mass": "250000", "name": "Pultusk", "nametype": "Valid", "recclass": "H5", "reclat": "52.766670", "reclong": "21.266670", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.95, 13.33333] }, "id": "18902", "mass": "100", "name": "Punganaru", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "13.333330", "reclong": "78.950000", "year": "1811-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-53.05, -29.03333] }, "id": "18905", "mass": "300000", "name": "Putinga", "nametype": "Valid", "recclass": "L6", "reclat": "-29.033330", "reclong": "-53.050000", "year": "1937-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [121.5, 32.08333] }, "id": "18907", "mass": "1275", "name": "Qidong", "nametype": "Valid", "recclass": "L/LL5", "reclat": "32.083330", "reclong": "121.500000", "year": "1982-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [106.46667, 26.53333] }, "id": "18908", "mass": "2600", "name": "Qingzhen", "nametype": "Valid", "recclass": "EH3", "reclat": "26.533330", "reclong": "106.466670", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [28.7, -30.11667] }, "id": "22357", "mass": "7000", "name": "Queen's Mercy", "nametype": "Valid", "recclass": "H6", "reclat": "-30.116670", "reclong": "28.700000", "year": "1925-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [95.18333, 17.76667] }, "id": "22358", "mass": "6045", "name": "Quenggouk", "nametype": "Valid", "recclass": "H4", "reclat": "17.766670", "reclong": "95.183330", "year": "1857-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.66667, 39] }, "id": "22360", "mass": "10750", "name": "Quesa", "nametype": "Valid", "recclass": "Iron, IAB-ung", "reclat": "39.000000", "reclong": "-0.666670", "year": "1898-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [126.13333, 44.61667] }, "id": "22361", "mass": "17450", "name": "Quija", "nametype": "Valid", "recclass": "H", "reclat": "44.616670", "reclong": "126.133330", "year": "1990-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.25, 46.6] }, "id": "22363", "mass": "65", "name": "Quincay", "nametype": "Valid", "recclass": "L6", "reclat": "46.600000", "reclong": "0.250000", "year": "1851-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-65.45, -26.66667] }, "id": "22368", "mass": "5000", "name": "Raco", "nametype": "Valid", "recclass": "H5", "reclat": "-26.666670", "reclong": "-65.450000", "year": "1957-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.465, 27.72528] }, "id": "22371", "mass": "10200", "name": "Raghunathpura", "nametype": "Valid", "recclass": "Iron, IIAB", "reclat": "27.725280", "reclong": "76.465000", "year": "1986-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [70.2, 28.225] }, "id": "31302", "mass": "67225", "name": "Rahimyar Khan", "nametype": "Valid", "recclass": "L5", "reclat": "28.225000", "reclong": "70.200000", "year": "1983-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.03333, 52.98333] }, "id": "22376", "mass": "9000", "name": "Rakovka", "nametype": "Valid", "recclass": "L6", "reclat": "52.983330", "reclong": "37.033330", "year": "1878-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.9, 26.45] }, "id": "22384", "mass": "3766", "name": "Ramnagar", "nametype": "Valid", "recclass": "L6", "reclat": "26.450000", "reclong": "82.900000", "year": "1940-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [87.76667, 24.16667] }, "id": "22385", "mass": "100", "name": "Rampurhat", "nametype": "Valid", "recclass": "LL", "reclat": "24.166670", "reclong": "87.766670", "year": "1916-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [6.93333, 51.88333] }, "id": "22386", "mass": "4682", "name": "Ramsdorf", "nametype": "Valid", "recclass": "L6", "reclat": "51.883330", "reclong": "6.933330", "year": "1958-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [87.08333, 23.98333] }, "id": "22387", "mass": "290.39999999999998", "name": "Ranchapur", "nametype": "Valid", "recclass": "H4", "reclat": "23.983330", "reclong": "87.083330", "year": "1917-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-100.81667, 19.86667] }, "id": "22390", "mass": "300", "name": "Rancho de la Presa", "nametype": "Valid", "recclass": "H5", "reclat": "19.866670", "reclong": "-100.816670", "year": "1899-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [72.01667, 25.38333] }, "id": "22392", "mass": "3224.5", "name": "Rangala", "nametype": "Valid", "recclass": "L6", "reclat": "25.383330", "reclong": "72.016670", "year": "1937-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [115.7, 38.2] }, "id": "22394", "mass": "4910", "name": "Raoyang", "nametype": "Valid", "recclass": "L6", "reclat": "38.200000", "reclong": "115.700000", "year": "1919-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [50.15, 26.66667] }, "id": "22395", "mass": "6.1", "name": "Ras Tanura", "nametype": "Valid", "recclass": "H6", "reclat": "26.666670", "reclong": "50.150000", "year": "1961-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.53333, 43.5] }, "id": "22396", "mass": "24700", "name": "Rasgrad", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "43.500000", "reclong": "26.533330", "year": "1740-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [17.98333, 52.2] }, "id": "22398", "mass": "910", "name": "Ratyn", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "52.200000", "reclong": "17.983330", "year": "1880-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "8", ":@computed_region_nnqa_25f4": "1391", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-119.75812, 38.13742] }, "id": "53502", "mass": "18.41", "name": "Red Canyon Lake", "nametype": "Valid", "recclass": "H5", "reclat": "38.137420", "reclong": "-119.758120", "year": "2007-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-5.33333, 42.475] }, "id": "22584", "mass": "17300", "name": "Reliegos", "nametype": "Valid", "recclass": "L5", "reclat": "42.475000", "reclong": "-5.333330", "year": "1947-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.36667, -6.73333] }, "id": "22585", "mass": "10000", "name": "Rembang", "nametype": "Valid", "recclass": "Iron, IVA", "reclat": "-6.733330", "reclong": "111.366670", "year": "1919-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.28333, 44.76667] }, "id": "22586", "mass": "1000", "name": "Renazzo", "nametype": "Valid", "recclass": "CR2", "reclat": "44.766670", "reclong": "11.283330", "year": "1824-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-65.28333, -32.75] }, "id": "22587", "mass": "300", "name": "Renca", "nametype": "Valid", "recclass": "L5", "reclat": "-32.750000", "reclong": "-65.283330", "year": "1925-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [116.13333, 38.66667] }, "id": "22589", "mass": "355", "name": "Renqiu", "nametype": "Valid", "recclass": "L6", "reclat": "38.666670", "reclong": "116.133330", "year": "1916-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [45.66667, 48.6] }, "id": "22590", "mass": "7000", "name": "Repeev Khutor", "nametype": "Valid", "recclass": "Iron, IIF", "reclat": "48.600000", "reclong": "45.666670", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-118.95, 51.33333] }, "id": "22592", "mass": "1", "name": "Revelstoke", "nametype": "Valid", "recclass": "CI1", "reclat": "51.333330", "reclong": "-118.950000", "year": "1965-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [76.66667, 28.2] }, "id": "22593", "mass": "3332", "name": "Rewari", "nametype": "Valid", "recclass": "L6", "reclat": "28.200000", "reclong": "76.666670", "year": "1929-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "37", ":@computed_region_nnqa_25f4": "2388", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-83.03333, 35.03333] }, "id": "22597", "mass": "668", "name": "Rich Mountain", "nametype": "Valid", "recclass": "L6", "reclat": "35.033330", "reclong": "-83.033330", "year": "1903-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-66.15, -44.11667] }, "id": "24140", "mass": "20000", "name": "Uzcudun", "nametype": "Valid", "recclass": "L", "reclat": "-44.116670", "reclong": "-66.150000", "year": "1948-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "3", ":@computed_region_nnqa_25f4": "569", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-102.31667, 46.88333] }, "id": "22599", "mass": "90000", "name": "Richardton", "nametype": "Valid", "recclass": "H5", "reclat": "46.883330", "reclong": "-102.316670", "year": "1918-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "23", ":@computed_region_nnqa_25f4": "2885", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.03333, 31.25] }, "id": "22602", "mass": "1900", "name": "Richland Springs", "nametype": "Valid", "recclass": "OC", "reclat": "31.250000", "reclong": "-99.033330", "year": "1980-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "40", ":@computed_region_nnqa_25f4": "2764", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-77.5, 37.46667] }, "id": "22603", "mass": "1800", "name": "Richmond", "nametype": "Valid", "recclass": "LL5", "reclat": "37.466670", "reclong": "-77.500000", "year": "1828-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-49.8, -26.1] }, "id": "22611", "mass": "1310", "name": "Rio Negro", "nametype": "Valid", "recclass": "L4", "reclat": "-26.100000", "reclong": "-49.800000", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.51667, 45.48333] }, "id": "22614", "mass": "103.3", "name": "Rivolta de Bassi", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "45.483330", "reclong": "9.516670", "year": "1491-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "35", ":@computed_region_nnqa_25f4": "150", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-86.28333, 41.08333] }, "id": "22637", "mass": "340", "name": "Rochester", "nametype": "Valid", "recclass": "H6", "reclat": "41.083330", "reclong": "-86.283330", "year": "1876-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [150.51667, -23.38333] }, "id": "22640", "mass": "1641", "name": "Rockhampton", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "-23.383330", "reclong": "150.516670", "year": "1895-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.55, 42.3] }, "id": "22641", "mass": "400", "name": "Roda", "nametype": "Valid", "recclass": "Diogenite", "reclat": "42.300000", "reclong": "0.550000", "year": "1871-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.8, 50.35] }, "id": "22642", "mass": "2900", "name": "Rodach", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "50.350000", "reclong": "10.800000", "year": "1775-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "50", ":@computed_region_nnqa_25f4": "361", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-83.95, 44.51667] }, "id": "22766", "mass": "10600", "name": "Rose City", "nametype": "Valid", "recclass": "H5", "reclat": "44.516670", "reclong": "-83.950000", "year": "1921-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-2.51667, 52.76667] }, "id": "22773", "mass": "3500", "name": "Rowton", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "52.766670", "reclong": "-2.516670", "year": "1876-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29.83333, -1.45] }, "id": "22780", "mass": "465.5", "name": "Ruhobobo", "nametype": "Valid", "recclass": "L6", "reclat": "-1.450000", "reclong": "29.833330", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [36.53333, 0.26667] }, "id": "22782", "mass": "67", "name": "Rumuruti", "nametype": "Valid", "recclass": "R3.8-6", "reclat": "0.266670", "reclong": "36.533330", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [38.76667, -10.26667] }, "id": "22783", "mass": "6000", "name": "Rupota", "nametype": "Valid", "recclass": "L4-6", "reclat": "-10.266670", "reclong": "38.766670", "year": "1949-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [34.5, 51.13333] }, "id": "22791", "mass": "13000", "name": "Ryechki", "nametype": "Valid", "recclass": "L5", "reclat": "51.133330", "reclong": "34.500000", "year": "1914-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.08333, 27.43333] }, "id": "22792", "mass": "1250", "name": "Sabetmahet", "nametype": "Valid", "recclass": "H5", "reclat": "27.433330", "reclong": "82.083330", "year": "1855-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [91.66667, 23.08333] }, "id": "22793", "mass": "478", "name": "Sabrum", "nametype": "Valid", "recclass": "LL6", "reclat": "23.083330", "reclong": "91.666670", "year": "1999-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.88333, 51.53333] }, "id": "22796", "name": "Sagan", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "51.533330", "reclong": "14.883330", "year": "1636-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.38333, 43.73333] }, "id": "23101", "mass": "14000", "name": "Saint-Sauveur", "nametype": "Valid", "recclass": "EH5", "reclat": "43.733330", "reclong": "1.383330", "year": "1914-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.23333, 45.3] }, "id": "23102", "mass": "271000", "name": "Saint-Séverin", "nametype": "Valid", "recclass": "LL6", "reclat": "45.300000", "reclong": "0.233330", "year": "1966-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [136.3, 35.66667] }, "id": "23103", "mass": "4180", "name": "Sakauchi", "nametype": "Valid", "recclass": "Iron", "reclat": "35.666670", "reclong": "136.300000", "year": "1913-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "12", ":@computed_region_nnqa_25f4": "2409", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-122.96944, 44.97917] }, "id": "23107", "mass": "61.4", "name": "Salem", "nametype": "Valid", "recclass": "L6", "reclat": "44.979170", "reclong": "-122.969440", "year": "1981-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [4.63333, 46.05] }, "id": "23111", "mass": "9000", "name": "Salles", "nametype": "Valid", "recclass": "L5", "reclat": "46.050000", "reclong": "4.633330", "year": "1798-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.05, 52.75] }, "id": "23114", "mass": "43", "name": "Salzwedel", "nametype": "Valid", "recclass": "LL5", "reclat": "52.750000", "reclong": "11.050000", "year": "1985-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [74.86667, 25.66667] }, "id": "23115", "mass": "2462", "name": "Samelia", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "25.666670", "reclong": "74.866670", "year": "1921-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "8", ":@computed_region_nnqa_25f4": "1174", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-117.6625, 33.48472] }, "id": "23128", "mass": "56", "name": "San Juan Capistrano", "nametype": "Valid", "recclass": "H6", "reclat": "33.484720", "reclong": "-117.662500", "year": "1973-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [13, 43.66667] }, "id": "31315", "mass": "237", "name": "San Michele", "nametype": "Valid", "recclass": "L6", "reclat": "43.666670", "reclong": "13.000000", "year": "2002-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-71.4, -31.01667] }, "id": "23130", "mass": "282", "name": "San Pedro de Quiles", "nametype": "Valid", "recclass": "L6", "reclat": "-31.016670", "reclong": "-71.400000", "year": "1956-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-100.65, 19.76667] }, "id": "34063", "mass": "460", "name": "San Pedro Jacuaro", "nametype": "Valid", "recclass": "LL6", "reclat": "19.766670", "reclong": "-100.650000", "year": "1968-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-51.86667, -29.2] }, "id": "23161", "mass": "400", "name": "Santa Barbara", "nametype": "Valid", "recclass": "L4", "reclat": "-29.200000", "reclong": "-51.866670", "year": "1873-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-99.33333, 24.16667] }, "id": "23164", "mass": "60", "name": "Santa Cruz", "nametype": "Valid", "recclass": "CM2", "reclat": "24.166670", "reclong": "-99.333330", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-61.7, -33.9] }, "id": "23165", "mass": "5500", "name": "Santa Isabel", "nametype": "Valid", "recclass": "L6", "reclat": "-33.900000", "reclong": "-61.700000", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-68.489444, -31.535556] }, "id": "50909", "mass": "4000", "name": "Santa Lucia (2008)", "nametype": "Valid", "recclass": "L6", "reclat": "-31.535556", "reclong": "-68.489444", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-49.38056, -20.81] }, "id": "23171", "mass": "927", "name": "São Jose do Rio Preto", "nametype": "Valid", "recclass": "H4", "reclat": "-20.810000", "reclong": "-49.380560", "year": "1962-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [46.55, 52.55] }, "id": "23176", "mass": "200000", "name": "Saratov", "nametype": "Valid", "recclass": "L4", "reclat": "52.550000", "reclong": "46.550000", "year": "1918-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [137.78333, 34.71667] }, "id": "23187", "mass": "695", "name": "Sasagase", "nametype": "Valid", "recclass": "H", "reclat": "34.716670", "reclong": "137.783330", "year": "1688-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.85, 43.15] }, "id": "23188", "mass": "4000", "name": "Sauguis", "nametype": "Valid", "recclass": "L6", "reclat": "43.150000", "reclong": "-0.850000", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [29.86667, 47.21667] }, "id": "23190", "mass": "2500", "name": "Savtschenskoje", "nametype": "Valid", "recclass": "LL4", "reclat": "47.216670", "reclong": "29.866670", "year": "1894-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [139.4, 35.86667] }, "id": "23192", "mass": "430", "name": "Sayama", "nametype": "Valid", "recclass": "CM2", "reclat": "35.866670", "reclong": "139.400000", "year": "1986-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [17.56667, 49.23333] }, "id": "23455", "mass": "412", "name": "Sazovice", "nametype": "Valid", "recclass": "L5", "reclat": "49.233330", "reclong": "17.566670", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.05, 53.35] }, "id": "23457", "mass": "7000", "name": "Schellin", "nametype": "Valid", "recclass": "L", "reclat": "53.350000", "reclong": "15.050000", "year": "1715-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "47", ":@computed_region_nnqa_25f4": "2142", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-73.95028, 42.86083] }, "id": "23458", "mass": "283.3", "name": "Schenectady", "nametype": "Valid", "recclass": "H5", "reclat": "42.860830", "reclong": "-73.950280", "year": "1968-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.46667, 48.11667] }, "id": "23460", "mass": "8000", "name": "Schönenberg", "nametype": "Valid", "recclass": "L6", "reclat": "48.116670", "reclong": "10.466670", "year": "1846-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "49", ":@computed_region_nnqa_25f4": "1727", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-69.2, 44.36667] }, "id": "23472", "mass": "5400", "name": "Searsmont", "nametype": "Valid", "recclass": "H5", "reclat": "44.366670", "reclong": "-69.200000", "year": "1871-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.13333, 38.3] }, "id": "23473", "mass": "240", "name": "Sediköy", "nametype": "Valid", "recclass": "L6", "reclat": "38.300000", "reclong": "27.133330", "year": "1917-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.78333, 26.75] }, "id": "23476", "mass": "6930", "name": "Segowlie", "nametype": "Valid", "recclass": "LL6", "reclat": "26.750000", "reclong": "84.783330", "year": "1853-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [107.33333, -7.23333] }, "id": "23481", "mass": "1590", "name": "Selakopi", "nametype": "Valid", "recclass": "H5", "reclat": "-7.233330", "reclong": "107.333330", "year": "1939-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [4.98333, 22.83333] }, "id": "23483", "mass": "150", "name": "Seldebourak", "nametype": "Valid", "recclass": "H5", "reclat": "22.833330", "reclong": "4.983330", "year": "1947-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [79, 22.25] }, "id": "23487", "mass": "691", "name": "Semarkona", "nametype": "Valid", "recclass": "LL3.00", "reclat": "22.250000", "reclong": "79.000000", "year": "1940-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-0.05, 41.71667] }, "id": "23495", "mass": "4000", "name": "Sena", "nametype": "Valid", "recclass": "H4", "reclat": "41.716670", "reclong": "-0.050000", "year": "1773-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [140.51167, 39.43833] }, "id": "23496", "mass": "866", "name": "Senboku", "nametype": "Valid", "recclass": "H6", "reclat": "39.438330", "reclong": "140.511670", "year": "1993-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [79.50083, 21.68389] }, "id": "23500", "mass": "20000", "name": "Seoni", "nametype": "Valid", "recclass": "H6", "reclat": "21.683890", "reclong": "79.500830", "year": "1966-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [23.56667, 41.05] }, "id": "23501", "mass": "8500", "name": "Seres", "nametype": "Valid", "recclass": "H4", "reclat": "41.050000", "reclong": "23.566670", "year": "1818-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-36.76667, -8.38333] }, "id": "23502", "mass": "1800", "name": "Serra de Magé", "nametype": "Valid", "recclass": "Eucrite-cm", "reclat": "-8.383330", "reclong": "-36.766670", "year": "1923-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-44.21667, -19.46667] }, "id": "23504", "mass": "350", "name": "Sete Lagoas", "nametype": "Valid", "recclass": "H4", "reclat": "-19.466670", "reclong": "-44.216670", "year": "1908-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-6, 37.41667] }, "id": "23508", "mass": "180", "name": "Sevilla", "nametype": "Valid", "recclass": "LL4", "reclat": "37.416670", "reclong": "-6.000000", "year": "1862-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [36.6, 50.61667] }, "id": "23509", "mass": "101000", "name": "Sevrukovo", "nametype": "Valid", "recclass": "L5", "reclat": "50.616670", "reclong": "36.600000", "year": "1874-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.71667, 34.75] }, "id": "23512", "mass": "7000", "name": "Sfax", "nametype": "Valid", "recclass": "L6", "reclat": "34.750000", "reclong": "10.716670", "year": "1989-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [87.3, 23.1] }, "id": "23521", "mass": "4000", "name": "Shalka", "nametype": "Valid", "recclass": "Diogenite", "reclat": "23.100000", "reclong": "87.300000", "year": "1850-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "40", ":@computed_region_nnqa_25f4": "921", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-76.7, 37.83333] }, "id": "23525", "mass": "1265", "name": "Sharps", "nametype": "Valid", "recclass": "H3.4", "reclat": "37.833330", "reclong": "-76.700000", "year": "1921-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-80.16667, 44.05] }, "id": "23529", "mass": "18600", "name": "Shelburne", "nametype": "Valid", "recclass": "L5", "reclat": "44.050000", "reclong": "-80.166670", "year": "1904-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.83333, 24.55] }, "id": "23530", "mass": "5000", "name": "Shergotty", "nametype": "Valid", "recclass": "Martian (shergottite)", "reclat": "24.550000", "reclong": "84.833330", "year": "1865-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [120.06667, 33.65] }, "id": "23531", "mass": "605", "name": "Sheyang", "nametype": "Valid", "recclass": "L6", "reclat": "33.650000", "reclong": "120.066670", "year": "1976-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [87.5775, 25.85] }, "id": "23534", "mass": "3679.7", "name": "Shikarpur", "nametype": "Valid", "recclass": "L6", "reclat": "25.850000", "reclong": "87.577500", "year": "1921-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [125.66667, 43.5] }, "id": "23582", "mass": "3900", "name": "Shuangyang", "nametype": "Valid", "recclass": "H5", "reclat": "43.500000", "reclong": "125.666670", "year": "1971-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [74.83333, 33.71667] }, "id": "23583", "mass": "5000", "name": "Shupiyan", "nametype": "Valid", "recclass": "H6", "reclat": "33.716670", "reclong": "74.833330", "year": "1912-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [90.16667, 24.33333] }, "id": "23584", "mass": "3200", "name": "Shytal", "nametype": "Valid", "recclass": "L6", "reclat": "24.333330", "reclong": "90.166670", "year": "1863-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [11.6, 43.11667] }, "id": "23586", "mass": "3700", "name": "Siena", "nametype": "Valid", "recclass": "LL5", "reclat": "43.116670", "reclong": "11.600000", "year": "1794-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [134.65333, 46.16] }, "id": "23593", "mass": "23000000", "name": "Sikhote-Alin", "nametype": "Valid", "recclass": "Iron, IIAB", "reclat": "46.160000", "reclong": "134.653330", "year": "1947-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-101.38333, 20.93333] }, "id": "23594", "mass": "1710", "name": "Silao", "nametype": "Valid", "recclass": "H5", "reclat": "20.933330", "reclong": "-101.383330", "year": "1995-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.26667, 44.11667] }, "id": "55584", "mass": "0.15", "name": "Silistra", "nametype": "Valid", "recclass": "Achondrite-ung", "reclat": "44.116670", "reclong": "27.266670", "year": "1917-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [7.53333, 49.98333] }, "id": "23603", "mass": "1222", "name": "Simmern", "nametype": "Valid", "recclass": "H5", "reclat": "49.983330", "reclong": "7.533330", "year": "1920-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [32.48333, 30.9] }, "id": "23606", "mass": "1455", "name": "Sinai", "nametype": "Valid", "recclass": "L6", "reclat": "30.900000", "reclong": "32.483330", "year": "1916-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [69.55, 26.21667] }, "id": "23611", "mass": "8400", "name": "Sindhri", "nametype": "Valid", "recclass": "H5", "reclat": "26.216670", "reclong": "69.550000", "year": "1901-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.2, 39.3] }, "id": "23613", "mass": "2000", "name": "Sinnai", "nametype": "Valid", "recclass": "H6", "reclat": "39.300000", "reclong": "9.200000", "year": "1956-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "19", ":@computed_region_nnqa_25f4": "2351", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-103.66667, 42.58333] }, "id": "23614", "mass": "4100", "name": "Sioux County", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "42.583330", "reclong": "-103.666670", "year": "1933-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [82.58333, 20.91667] }, "id": "23616", "mass": "1600", "name": "Sitathali", "nametype": "Valid", "recclass": "H5", "reclat": "20.916670", "reclong": "82.583330", "year": "1875-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [36.13583, 39.82467] }, "id": "23617", "mass": "40000", "name": "Sivas", "nametype": "Valid", "recclass": "H6", "reclat": "39.824670", "reclong": "36.135830", "year": "1989-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [119.86667, 32.43333] }, "id": "23619", "mass": "630", "name": "Sixiangkou", "nametype": "Valid", "recclass": "L5", "reclat": "32.433330", "reclong": "119.866670", "year": "1989-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.86667, 59.73333] }, "id": "23621", "mass": "850", "name": "Ski", "nametype": "Valid", "recclass": "L6", "reclat": "59.733330", "reclong": "10.866670", "year": "1848-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.6, 45.68333] }, "id": "23626", "mass": "1708", "name": "Slavetic", "nametype": "Valid", "recclass": "H5", "reclat": "45.683330", "reclong": "15.600000", "year": "1868-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35, 55] }, "id": "23645", "mass": "2750", "name": "Slobodka", "nametype": "Valid", "recclass": "L4", "reclat": "55.000000", "reclong": "35.000000", "year": "1818-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.06667, 27.13333] }, "id": "23660", "mass": "72.900000000000006", "name": "Soheria", "nametype": "Valid", "recclass": "OC", "reclat": "27.133330", "reclong": "84.066670", "year": "1960-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [21.86667, 43.66667] }, "id": "23661", "mass": "80000", "name": "Soko-Banja", "nametype": "Valid", "recclass": "LL4", "reclat": "43.666670", "reclong": "21.866670", "year": "1877-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.73333, 47.36667] }, "id": "23663", "mass": "54", "name": "Sologne", "nametype": "Valid", "recclass": "H5", "reclat": "47.366670", "reclong": "1.733330", "year": "1860-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [22.005, 54.00883] }, "id": "53829", "mass": "1066", "name": "Sołtmany", "nametype": "Valid", "recclass": "L6", "reclat": "54.008830", "reclong": "22.005000", "year": "2011-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [135.33333, 35.16667] }, "id": "23667", "mass": "17100", "name": "Sone", "nametype": "Valid", "recclass": "H5", "reclat": "35.166670", "reclong": "135.333330", "year": "1866-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [125, 45.25] }, "id": "23668", "mass": "36900", "name": "Songyuan", "nametype": "Valid", "recclass": "L6", "reclat": "45.250000", "reclong": "125.000000", "year": "1993-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [23.5, 44.41667] }, "id": "23670", "mass": "958", "name": "Sopot", "nametype": "Valid", "recclass": "OC", "reclat": "44.416670", "reclong": "23.500000", "year": "1927-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [33.63333, 1.7] }, "id": "23671", "mass": "2050", "name": "Soroti", "nametype": "Valid", "recclass": "Iron, ungrouped", "reclat": "1.700000", "reclong": "33.633330", "year": "1945-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [0.05, 44.75] }, "id": "23081", "mass": "360", "name": "St. Caprais-de-Quinsac", "nametype": "Valid", "recclass": "L6", "reclat": "44.750000", "reclong": "0.050000", "year": "1883-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.5, 46.95] }, "id": "23082", "mass": "5500", "name": "St. Christophe-la-Chartreuse", "nametype": "Valid", "recclass": "L6", "reclat": "46.950000", "reclong": "-1.500000", "year": "1841-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.75, 51.05] }, "id": "23083", "mass": "700", "name": "St. Denis Westrem", "nametype": "Valid", "recclass": "L6", "reclat": "51.050000", "reclong": "3.750000", "year": "1855-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-1.15, 48.01667] }, "id": "23087", "mass": "4000", "name": "St. Germain-du-Pinel", "nametype": "Valid", "recclass": "H6", "reclat": "48.016670", "reclong": "-1.150000", "year": "1890-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "18", ":@computed_region_nnqa_25f4": "2223", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-90.23333, 38.7] }, "id": "23089", "mass": "1000", "name": "St. Louis", "nametype": "Valid", "recclass": "H4", "reclat": "38.700000", "reclong": "-90.233330", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.41667, -32.01667] }, "id": "23090", "mass": "13780", "name": "St. Mark's", "nametype": "Valid", "recclass": "EH5", "reclat": "-32.016670", "reclong": "27.416670", "year": "1903-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "45", ":@computed_region_nnqa_25f4": "424", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-76.38333, 38.16667] }, "id": "23091", "mass": "24.3", "name": "St. Mary's County", "nametype": "Valid", "recclass": "LL3.3", "reclat": "38.166670", "reclong": "-76.383330", "year": "1919-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3.93333, 48.45] }, "id": "23092", "mass": "8300", "name": "St. Mesmin", "nametype": "Valid", "recclass": "LL6", "reclat": "48.450000", "reclong": "3.933330", "year": "1866-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.2, 61.65] }, "id": "23093", "mass": "17000", "name": "St. Michel", "nametype": "Valid", "recclass": "L6", "reclat": "61.650000", "reclong": "27.200000", "year": "1910-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [2.95, 43.43333] }, "id": "23097", "mass": "134.30000000000001", "name": "St.-Chinian", "nametype": "Valid", "recclass": "L6", "reclat": "43.433330", "reclong": "2.950000", "year": "1959-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.95, 59.93333] }, "id": "23712", "mass": "34000", "name": "Ställdalen", "nametype": "Valid", "recclass": "H5", "reclat": "59.933330", "reclong": "14.950000", "year": "1876-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [15.56667, 49.28333] }, "id": "23713", "mass": "52000", "name": "Stannern", "nametype": "Valid", "recclass": "Eucrite-mmict", "reclat": "49.283330", "reclong": "15.566670", "year": "1808-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [41.98333, 45.05] }, "id": "23717", "mass": "1500", "name": "Stavropol", "nametype": "Valid", "recclass": "L6", "reclat": "45.050000", "reclong": "41.983330", "year": "1857-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [3, 50.76667] }, "id": "23099", "mass": "4960", "name": "Ste. Marguerite", "nametype": "Valid", "recclass": "H4", "reclat": "50.766670", "reclong": "3.000000", "year": "1962-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [55.98333, 53.66667] }, "id": "23724", "mass": "325000", "name": "Sterlitamak", "nametype": "Valid", "recclass": "Iron, IIIAB", "reclat": "53.666670", "reclong": "55.983330", "year": "1990-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [9.05, 52.53333] }, "id": "23726", "name": "Stolzenau", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "52.533330", "reclong": "9.050000", "year": "1647-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "24", ":@computed_region_nnqa_25f4": "1040", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-73.13333, 41.2] }, "id": "23728", "mass": "50", "name": "Stratford", "nametype": "Valid", "recclass": "L6", "reclat": "41.200000", "reclong": "-73.133330", "year": "1974-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.25, 56.58333] }, "id": "23729", "mass": "13400", "name": "Strathmore", "nametype": "Valid", "recclass": "L6", "reclat": "56.583330", "reclong": "-3.250000", "year": "1917-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-3.95, 50.38333] }, "id": "23732", "mass": "10400", "name": "Stretchleigh", "nametype": "Valid", "recclass": "Stone-uncl", "reclat": "50.383330", "reclong": "-3.950000", "year": "1623-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-72.97806, 45.96861] }, "id": "23733", "mass": "25400", "name": "St-Robert", "nametype": "Valid", "recclass": "H5", "reclat": "45.968610", "reclong": "-72.978060", "year": "1994-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "15", ":@computed_region_nnqa_25f4": "955", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-90.66667, 36.48333] }, "id": "23736", "mass": "3500", "name": "Success", "nametype": "Valid", "recclass": "L6", "reclat": "36.483330", "reclong": "-90.666670", "year": "1924-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [16.26333, 50.53806] }, "id": "23737", "mass": "815.3", "name": "Suchy Dul", "nametype": "Valid", "recclass": "L6", "reclat": "50.538060", "reclong": "16.263330", "year": "1969-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [113.46667, 31.61667] }, "id": "23738", "mass": "260000", "name": "Suizhou", "nametype": "Valid", "recclass": "L6", "reclat": "31.616670", "reclong": "113.466670", "year": "1986-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [78.03333, 12.66667] }, "id": "48951", "mass": "110000", "name": "Sulagiri", "nametype": "Valid", "recclass": "LL6", "reclat": "12.666670", "reclong": "78.033330", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.28333, 25.93333] }, "id": "23741", "mass": "1710.5", "name": "Sultanpur", "nametype": "Valid", "recclass": "L/LL6", "reclat": "25.933330", "reclong": "84.283330", "year": "1916-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [133.16667, 44.86667] }, "id": "23745", "mass": "637", "name": "Sungach", "nametype": "Valid", "recclass": "H5", "reclat": "44.866670", "reclong": "133.166670", "year": "1935-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [84.21667, 26.71667] }, "id": "23760", "mass": "7235", "name": "Supuhee", "nametype": "Valid", "recclass": "H6", "reclat": "26.716670", "reclong": "84.216670", "year": "1865-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "8", ":@computed_region_nnqa_25f4": "1187", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-120.90806, 38.80389] }, "id": "55529", "mass": "992.5", "name": "Sutter's Mill", "nametype": "Valid", "recclass": "C", "reclat": "38.803890", "reclong": "-120.908060", "year": "2012-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "29", ":@computed_region_nnqa_25f4": "1637", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-86.2945, 33.18836] }, "id": "23773", "mass": "5560", "name": "Sylacauga", "nametype": "Valid", "recclass": "H4", "reclat": "33.188360", "reclong": "-86.294500", "year": "1954-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [14.65, 49.4] }, "id": "23776", "mass": "7540", "name": "Tabor", "nametype": "Valid", "recclass": "H5", "reclat": "49.400000", "reclong": "14.650000", "year": "1753-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [5.41667, 36.18333] }, "id": "23778", "mass": "9000", "name": "Tadjera", "nametype": "Valid", "recclass": "L5", "reclat": "36.183330", "reclong": "5.416670", "year": "1867-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-134.20139, 59.70444] }, "id": "23782", "mass": "10000", "name": "Tagish Lake", "nametype": "Valid", "recclass": "C2-ung", "reclat": "59.704440", "reclong": "-134.201390", "year": "2000-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [137.305, 34.72] }, "id": "23784", "mass": "1000", "name": "Tahara", "nametype": "Valid", "recclass": "H4/5", "reclat": "34.720000", "reclong": "137.305000", "year": "1991-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [134.9, 35.38333] }, "id": "23789", "mass": "720", "name": "Takenouchi", "nametype": "Valid", "recclass": "H5", "reclat": "35.383330", "reclong": "134.900000", "year": "1880-01-01T00:00:00.000" }, { "fall": "Fell", "id": "23791", "mass": "1421", "name": "Talampaya", "nametype": "Valid", "recclass": "Eucrite-cm", "year": "1995-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [112.76667, -7.75] }, "id": "23795", "mass": "10500", "name": "Tambakwatu", "nametype": "Valid", "recclass": "L6", "reclat": "-7.750000", "reclong": "112.766670", "year": "1975-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7.015, 31.16333] }, "id": "48691", "mass": "100000", "name": "Tamdakht", "nametype": "Valid", "recclass": "H5", "reclat": "31.163330", "reclong": "-7.015000", "year": "2008-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [136.23333, 35.43333] }, "id": "23801", "mass": "905", "name": "Tané", "nametype": "Valid", "recclass": "L5", "reclat": "35.433330", "reclong": "136.233330", "year": "1918-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [122.9, 45.4] }, "id": "23873", "mass": "3850", "name": "Taonan", "nametype": "Valid", "recclass": "L5", "reclat": "45.400000", "reclong": "122.900000", "year": "1965-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [10.41667, 32.95] }, "id": "23884", "mass": "12000", "name": "Tatahouine", "nametype": "Valid", "recclass": "Diogenite", "reclat": "32.950000", "reclong": "10.416670", "year": "1931-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [43.73333, 19.38333] }, "id": "23885", "mass": "2500", "name": "Tathlith", "nametype": "Valid", "recclass": "L6", "reclat": "19.383330", "reclong": "43.733330", "year": "1967-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [44.45, 35.13333] }, "id": "23887", "mass": "6000", "name": "Tauk", "nametype": "Valid", "recclass": "L6", "reclat": "35.133330", "reclong": "44.450000", "year": "1929-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [23.5, 46.71667] }, "id": "23888", "mass": "21000", "name": "Tauti", "nametype": "Valid", "recclass": "L6", "reclat": "46.716670", "reclong": "23.500000", "year": "1937-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [142.95, -25.73333] }, "id": "23897", "mass": "160000", "name": "Tenham", "nametype": "Valid", "recclass": "L6", "reclat": "-25.733330", "reclong": "142.950000", "year": "1879-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [26.95, 58.03333] }, "id": "23898", "mass": "28500", "name": "Tennasilm", "nametype": "Valid", "recclass": "L4", "reclat": "58.033330", "reclong": "26.950000", "year": "1872-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [70.6, 33.4] }, "id": "23908", "mass": "342", "name": "Thal", "nametype": "Valid", "recclass": "H6", "reclat": "33.400000", "reclong": "70.600000", "year": "1950-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [37.15028, -1.00278] }, "id": "54493", "mass": "14200", "name": "Thika", "nametype": "Valid", "recclass": "L6", "reclat": "-1.002780", "reclong": "37.150280", "year": "2011-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [27.58333, -29.33333] }, "id": "23976", "mass": "45300", "name": "Thuathe", "nametype": "Valid", "recclass": "H4/5", "reclat": "-29.333330", "reclong": "27.583330", "year": "2002-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [118.99, 32.94667] }, "id": "23984", "mass": "2232", "name": "Tianzhang", "nametype": "Valid", "recclass": "H5", "reclat": "32.946670", "reclong": "118.990000", "year": "1986-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [17.11667, 49.6] }, "id": "23989", "mass": "28000", "name": "Tieschitz", "nametype": "Valid", "recclass": "H/L3.6", "reclat": "49.600000", "reclong": "17.116670", "year": "1878-01-01T00:00:00.000" }, { ":@computed_region_cbhk_fwbd": "34", ":@computed_region_nnqa_25f4": "1762", "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-89.68333, 38.2] }, "id": "23998", "mass": "74800", "name": "Tilden", "nametype": "Valid", "recclass": "L6", "reclat": "38.200000", "reclong": "-89.683330", "year": "1927-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [1.53333, 14.25] }, "id": "23999", "mass": "3000", "name": "Tillaberi", "nametype": "Valid", "recclass": "L6", "reclat": "14.250000", "reclong": "1.533330", "year": "1970-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [35.2, 54.5] }, "id": "24004", "mass": "65500", "name": "Timochin", "nametype": "Valid", "recclass": "H5", "reclat": "54.500000", "reclong": "35.200000", "year": "1807-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [79.41667, 13.63333] }, "id": "24009", "mass": "230", "name": "Tirupati", "nametype": "Valid", "recclass": "H6", "reclat": "13.633330", "reclong": "79.416670", "year": "1934-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [-7.61123, 29.48195] }, "id": "54823", "mass": "7000", "name": "Tissint", "nametype": "Valid", "recclass": "Martian (shergottite)", "reclat": "29.481950", "reclong": "-7.611230", "year": "2011-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [111.53333, -7.08333] }, "id": "24011", "mass": "20000", "name": "Tjabe", "nametype": "Valid", "recclass": "H6", "reclat": "-7.083330", "reclong": "111.533330", "year": "1869-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [106.58333, -6.66667] }, "id": "24012", "mass": "16500", "name": "Tjerebon", "nametype": "Valid", "recclass": "L5", "reclat": "-6.666670", "reclong": "106.583330", "year": "1922-01-01T00:00:00.000" }, { "fall": "Fell", "geolocation": { "type": "Point", "coordinates": [34.76667, 47.85] }, "id": "24019", "mass": "600", "name": "Tomakovka", "nametype": "Valid", "recclass": "LL6", "reclat": "47.850000", "reclong": "34.766670", "year": "1905-01-01T00:00:00.000" }];
/* harmony export (immutable) */ __webpack_exports__["a"] = DATA;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var svg;

  // Save off default references
  var d3 = window.d3, topojson = window.topojson;

  var defaultOptions = {
    scope: 'world',
    responsive: false,
    aspectRatio: 0.5625,
    setProjection: setProjection,
    projection: 'equirectangular',
    dataType: 'json',
    data: {},
    done: function() {},
    fills: {
      defaultFill: '#ABDDA4'
    },
    filters: {},
    geographyConfig: {
        dataUrl: null,
        hideAntarctica: true,
        hideHawaiiAndAlaska : false,
        borderWidth: 1,
        borderOpacity: 1,
        borderColor: '#FDFDFD',
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        popupOnHover: true,
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1
    },
    projectionConfig: {
      rotation: [97, 0]
    },
    bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupOnHover: true,
        radius: null,
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
        },
        fillOpacity: 0.75,
        animate: true,
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        highlightFillOpacity: 0.85,
        exitDelay: 100,
        key: JSON.stringify
    },
    arcConfig: {
      strokeColor: '#DD1C77',
      strokeWidth: 1,
      arcSharpness: 1,
      animationSpeed: 600,
      popupOnHover: false,
      popupTemplate: function(geography, data) {
        // Case with latitude and longitude
        if ( ( data.origin && data.destination ) && data.origin.latitude && data.origin.longitude && data.destination.latitude && data.destination.longitude ) {
          return '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' + JSON.stringify(data.origin) + '<br>Destination: ' + JSON.stringify(data.destination) + '</div>';
        }
        // Case with only country name
        else if ( data.origin && data.destination ) {
          return '<div class="hoverinfo"><strong>Arc</strong><br>' + data.origin + ' -> ' + data.destination + '</div>';
        }
        // Missing information
        else {
          return '';
        }
      }
    }
  };

  /*
    Getter for value. If not declared on datumValue, look up the chain into optionsValue
  */
  function val( datumValue, optionsValue, context ) {
    if ( typeof context === 'undefined' ) {
      context = optionsValue;
      optionsValues = undefined;
    }
    var value = typeof datumValue !== 'undefined' ? datumValue : optionsValue;

    if (typeof value === 'undefined') {
      return  null;
    }

    if ( typeof value === 'function' ) {
      var fnContext = [context];
      if ( context.geography ) {
        fnContext = [context.geography, context.data];
      }
      return value.apply(null, fnContext);
    }
    else {
      return value;
    }
  }

  function addContainer( element, height, width ) {
    this.svg = d3.select( element ).append('svg')
      .attr('width', width || element.offsetWidth)
      .attr('data-width', width || element.offsetWidth)
      .attr('class', 'datamap')
      .attr('height', height || element.offsetHeight)
      .style('overflow', 'hidden'); // IE10+ doesn't respect height/width when map is zoomed in

    if (this.options.responsive) {
      d3.select(this.options.element).style({'position': 'relative', 'padding-bottom': (this.options.aspectRatio*100) + '%'});
      d3.select(this.options.element).select('svg').style({'position': 'absolute', 'width': '100%', 'height': '100%'});
      d3.select(this.options.element).select('svg').select('g').selectAll('path').style('vector-effect', 'non-scaling-stroke');

    }

    return this.svg;
  }

  // setProjection takes the svg element and options
  function setProjection( element, options ) {
    var width = options.width || element.offsetWidth;
    var height = options.height || element.offsetHeight;
    var projection, path;
    var svg = this.svg;

    if ( options && typeof options.scope === 'undefined') {
      options.scope = 'world';
    }

    if ( options.scope === 'usa' ) {
      projection = d3.geo.albersUsa()
        .scale(width)
        .translate([width / 2, height / 2]);
    }
    else if ( options.scope === 'world' ) {
      projection = d3.geo[options.projection]()
        .scale((width + 1) / 2 / Math.PI)
        .translate([width / 2, height / (options.projection === "mercator" ? 1.45 : 1.8)]);
    }

    if ( options.projection === 'orthographic' ) {

      svg.append("defs").append("path")
        .datum({type: "Sphere"})
        .attr("id", "sphere")
        .attr("d", path);

      svg.append("use")
          .attr("class", "stroke")
          .attr("xlink:href", "#sphere");

      svg.append("use")
          .attr("class", "fill")
          .attr("xlink:href", "#sphere");
      projection.scale(250).clipAngle(90).rotate(options.projectionConfig.rotation)
    }

    path = d3.geo.path()
      .projection( projection );

    return {path: path, projection: projection};
  }

  function addStyleBlock() {
    if ( d3.select('.datamaps-style-block').empty() ) {
      d3.select('head').append('style').attr('class', 'datamaps-style-block')
      .html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path:not(.datamaps-arc), .datamap circle, .datamap line {stroke: #FFFFFF; vector-effect: non-scaling-stroke; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }');
    }
  }

  function drawSubunits( data ) {
    var fillData = this.options.fills,
        colorCodeData = this.options.data || {},
        geoConfig = this.options.geographyConfig;

    var subunits = this.svg.select('g.datamaps-subunits');
    if ( subunits.empty() ) {
      subunits = this.addLayer('datamaps-subunits', null, true);
    }

    var geoData = topojson.feature( data, data.objects[ this.options.scope ] ).features;
    if ( geoConfig.hideAntarctica ) {
      geoData = geoData.filter(function(feature) {
        return feature.id !== "ATA";
      });
    }

    if ( geoConfig.hideHawaiiAndAlaska ) {
      geoData = geoData.filter(function(feature) {
        return feature.id !== "HI" && feature.id !== 'AK';
      });
    }

    var geo = subunits.selectAll('path.datamaps-subunit').data( geoData );

    geo.enter()
      .append('path')
      .attr('d', this.path)
      .attr('class', function(d) {
        return 'datamaps-subunit ' + d.id;
      })
      .attr('data-info', function(d) {
        return JSON.stringify( colorCodeData[d.id]);
      })
      .style('fill', function(d) {
        // If fillKey - use that
        // Otherwise check 'fill'
        // Otherwise check 'defaultFill'
        var fillColor;

        var datum = colorCodeData[d.id];
        if ( datum && datum.fillKey ) {
          fillColor = fillData[ val(datum.fillKey, {data: colorCodeData[d.id], geography: d}) ];
        }

        if ( typeof fillColor === 'undefined' ) {
          fillColor = val(datum && datum.fillColor, fillData.defaultFill, {data: colorCodeData[d.id], geography: d});
        }

        return fillColor;
      })
      .style('stroke-width', geoConfig.borderWidth)
      .style('stroke-opacity', geoConfig.borderOpacity)
      .style('stroke', geoConfig.borderColor);
  }

  function handleGeographyConfig () {
    var hoverover;
    var svg = this.svg;
    var self = this;
    var options = this.options.geographyConfig;

    if ( options.highlightOnHover || options.popupOnHover ) {
      svg.selectAll('.datamaps-subunit')
        .on('mouseover', function(d) {
          var $this = d3.select(this);
          var datum = self.options.data[d.id] || {};
          if ( options.highlightOnHover ) {
            var previousAttributes = {
              'fill':  $this.style('fill'),
              'stroke': $this.style('stroke'),
              'stroke-width': $this.style('stroke-width'),
              'fill-opacity': $this.style('fill-opacity')
            };

            $this
              .style('fill', val(datum.highlightFillColor, options.highlightFillColor, datum))
              .style('stroke', val(datum.highlightBorderColor, options.highlightBorderColor, datum))
              .style('stroke-width', val(datum.highlightBorderWidth, options.highlightBorderWidth, datum))
              .style('stroke-opacity', val(datum.highlightBorderOpacity, options.highlightBorderOpacity, datum))
              .style('fill-opacity', val(datum.highlightFillOpacity, options.highlightFillOpacity, datum))
              .attr('data-previousAttributes', JSON.stringify(previousAttributes));

            // As per discussion on https://github.com/markmarkoh/datamaps/issues/19
            if ( ! /((MSIE)|(Trident))/.test(navigator.userAgent) ) {
             moveToFront.call(this);
            }
          }

          if ( options.popupOnHover ) {
            self.updatePopup($this, d, options, svg);
          }
        })
        .on('mouseout', function() {
          var $this = d3.select(this);

          if (options.highlightOnHover) {
            // Reapply previous attributes
            var previousAttributes = JSON.parse( $this.attr('data-previousAttributes') );
            for ( var attr in previousAttributes ) {
              $this.style(attr, previousAttributes[attr]);
            }
          }
          $this.on('mousemove', null);
          d3.selectAll('.datamaps-hoverover').style('display', 'none');
        });
    }

    function moveToFront() {
      this.parentNode.appendChild(this);
    }
  }

  // Plugin to add a simple map legend
  function addLegend(layer, data, options) {
    data = data || {};
    if ( !this.options.fills ) {
      return;
    }

    var html = '<dl>';
    var label = '';
    if ( data.legendTitle ) {
      html = '<h2>' + data.legendTitle + '</h2>' + html;
    }
    for ( var fillKey in this.options.fills ) {

      if ( fillKey === 'defaultFill') {
        if (! data.defaultFillName ) {
          continue;
        }
        label = data.defaultFillName;
      } else {
        if (data.labels && data.labels[fillKey]) {
          label = data.labels[fillKey];
        } else {
          label= fillKey + ': ';
        }
      }
      html += '<dt>' + label + '</dt>';
      html += '<dd style="background-color:' +  this.options.fills[fillKey] + '">&nbsp;</dd>';
    }
    html += '</dl>';

    var hoverover = d3.select( this.options.element ).append('div')
      .attr('class', 'datamaps-legend')
      .html(html);
  }

    function addGraticule ( layer, options ) {
      var graticule = d3.geo.graticule();
      this.svg.insert("path", '.datamaps-subunits')
        .datum(graticule)
        .attr("class", "datamaps-graticule")
        .attr("d", this.path);
  }

  function handleArcs (layer, data, options) {
    var self = this,
        svg = this.svg;

    if ( !data || (data && !data.slice) ) {
      throw "Datamaps Error - arcs must be an array";
    }

    // For some reason arc options were put in an `options` object instead of the parent arc
    // I don't like this, so to match bubbles and other plugins I'm moving it
    // This is to keep backwards compatability
    for ( var i = 0; i < data.length; i++ ) {
      data[i] = defaults(data[i], data[i].options);
      delete data[i].options;
    }

    if ( typeof options === "undefined" ) {
      options = defaultOptions.arcConfig;
    }

    var arcs = layer.selectAll('path.datamaps-arc').data( data, JSON.stringify );

    var path = d3.geo.path()
        .projection(self.projection);

    arcs
      .enter()
        .append('svg:path')
        .attr('class', 'datamaps-arc')
        .style('stroke-linecap', 'round')
        .style('stroke', function(datum) {
          return val(datum.strokeColor, options.strokeColor, datum);
        })
        .style('fill', 'none')
        .style('stroke-width', function(datum) {
            return val(datum.strokeWidth, options.strokeWidth, datum);
        })
        .attr('d', function(datum) {

            var originXY, destXY;

            if (typeof datum.origin === "string") {
              switch (datum.origin) {
                   case "CAN":
                       originXY = self.latLngToXY(56.624472, -114.665293);
                       break;
                   case "CHL":
                       originXY = self.latLngToXY(-33.448890, -70.669265);
                       break;
                   case "IDN":
                       originXY = self.latLngToXY(-6.208763, 106.845599);
                       break;
                   case "JPN":
                       originXY = self.latLngToXY(35.689487, 139.691706);
                       break;
                   case "MYS":
                       originXY = self.latLngToXY(3.139003, 101.686855);
                       break;
                   case "NOR":
                       originXY = self.latLngToXY(59.913869, 10.752245);
                       break;
                   case "USA":
                       originXY = self.latLngToXY(41.140276, -100.760145);
                       break;
                   case "VNM":
                       originXY = self.latLngToXY(21.027764, 105.834160);
                       break;
                   default:
                       originXY = self.path.centroid(svg.select('path.' + datum.origin).data()[0]);
               }
            } else {
              originXY = self.latLngToXY(val(datum.origin.latitude, datum), val(datum.origin.longitude, datum))
            }

            if (typeof datum.destination === 'string') {
              switch (datum.destination) {
                     case "CAN":
                        destXY = self.latLngToXY(56.624472, -114.665293);
                        break;
                    case "CHL":
                        destXY = self.latLngToXY(-33.448890, -70.669265);
                        break;
                    case "IDN":
                        destXY = self.latLngToXY(-6.208763, 106.845599);
                        break;
                    case "JPN":
                        destXY = self.latLngToXY(35.689487, 139.691706);
                        break;
                    case "MYS":
                        destXY = self.latLngToXY(3.139003, 101.686855);
                        break;
                    case "NOR":
                        destXY = self.latLngToXY(59.913869, 10.752245);
                        break;
                    case "USA":
                        destXY = self.latLngToXY(41.140276, -100.760145);
                        break;
                    case "VNM":
                        destXY = self.latLngToXY(21.027764, 105.834160);
                        break;
                    default:
                        destXY = self.path.centroid(svg.select('path.' + datum.destination).data()[0]);
              }
            } else {
              destXY = self.latLngToXY(val(datum.destination.latitude, datum), val(datum.destination.longitude, datum));
            }
            var midXY = [ (originXY[0] + destXY[0]) / 2, (originXY[1] + destXY[1]) / 2];
            if (options.greatArc) {
                  // TODO: Move this to inside `if` clause when setting attr `d`
              var greatArc = d3.geo.greatArc()
                  .source(function(d) { return [val(d.origin.longitude, d), val(d.origin.latitude, d)]; })
                  .target(function(d) { return [val(d.destination.longitude, d), val(d.destination.latitude, d)]; });

              return path(greatArc(datum))
            }
            var sharpness = val(datum.arcSharpness, options.arcSharpness, datum);
            return "M" + originXY[0] + ',' + originXY[1] + "S" + (midXY[0] + (50 * sharpness)) + "," + (midXY[1] - (75 * sharpness)) + "," + destXY[0] + "," + destXY[1];
        })
        .attr('data-info', function(datum) {
          return JSON.stringify(datum);
        })
        .on('mouseover', function ( datum ) {
          var $this = d3.select(this);

          if (options.popupOnHover) {
            self.updatePopup($this, datum, options, svg);
          }
        })
        .on('mouseout', function ( datum ) {
          var $this = d3.select(this);

          d3.selectAll('.datamaps-hoverover').style('display', 'none');
        })
        .transition()
          .delay(100)
          .style('fill', function(datum) {
            /*
              Thank you Jake Archibald, this is awesome.
              Source: http://jakearchibald.com/2013/animated-line-drawing-svg/
            */
            var length = this.getTotalLength();
            this.style.transition = this.style.WebkitTransition = 'none';
            this.style.strokeDasharray = length + ' ' + length;
            this.style.strokeDashoffset = length;
            this.getBoundingClientRect();
            this.style.transition = this.style.WebkitTransition = 'stroke-dashoffset ' + val(datum.animationSpeed, options.animationSpeed, datum) + 'ms ease-out';
            this.style.strokeDashoffset = '0';
            return 'none';
          })

    arcs.exit()
      .transition()
      .style('opacity', 0)
      .remove();
  }

  function handleLabels ( layer, options ) {
    var self = this;
    options = options || {};
    var labelStartCoodinates = this.projection([-67.707617, 42.722131]);
    this.svg.selectAll(".datamaps-subunit")
      .attr("data-foo", function(d) {
        var center = self.path.centroid(d);
        var xOffset = 7.5, yOffset = 5;

        if ( ["FL", "KY", "MI"].indexOf(d.id) > -1 ) xOffset = -2.5;
        if ( d.id === "NY" ) xOffset = -1;
        if ( d.id === "MI" ) yOffset = 18;
        if ( d.id === "LA" ) xOffset = 13;

        var x,y;

        x = center[0] - xOffset;
        y = center[1] + yOffset;

        var smallStateIndex = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"].indexOf(d.id);
        if ( smallStateIndex > -1) {
          var yStart = labelStartCoodinates[1];
          x = labelStartCoodinates[0];
          y = yStart + (smallStateIndex * (2+ (options.fontSize || 12)));
          layer.append("line")
            .attr("x1", x - 3)
            .attr("y1", y - 5)
            .attr("x2", center[0])
            .attr("y2", center[1])
            .style("stroke", options.labelColor || "#000")
            .style("stroke-width", options.lineWidth || 1)
        }

          layer.append("text")
              .attr("x", x)
              .attr("y", y)
              .style("font-size", (options.fontSize || 10) + 'px')
              .style("font-family", options.fontFamily || "Verdana")
              .style("fill", options.labelColor || "#000")
              .text(function() {
                  if (options.customLabelText && options.customLabelText[d.id]) {
                      return options.customLabelText[d.id]
                  } else {
                      return d.id
                  }
              });

        return "bar";
      });
  }


  function handleBubbles (layer, data, options ) {
    var self = this,
        fillData = this.options.fills,
        filterData = this.options.filters,
        svg = this.svg;

    if ( !data || (data && !data.slice) ) {
      throw "Datamaps Error - bubbles must be an array";
    }

    var bubbles = layer.selectAll('circle.datamaps-bubble').data( data, options.key );

    bubbles
      .enter()
        .append('svg:circle')
        .attr('class', 'datamaps-bubble')
        .attr('cx', function ( datum ) {
          var latLng;
          if ( datumHasCoords(datum) ) {
            latLng = self.latLngToXY(datum.latitude, datum.longitude);
          }
          else if ( datum.centered ) {
            if ( datum.centered === 'USA' ) {
              latLng = self.projection([-98.58333, 39.83333])
            } else {
              latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
            }
          }
          if ( latLng ) return latLng[0];
        })
        .attr('cy', function ( datum ) {
          var latLng;
          if ( datumHasCoords(datum) ) {
            latLng = self.latLngToXY(datum.latitude, datum.longitude);
          }
          else if ( datum.centered ) {
            if ( datum.centered === 'USA' ) {
              latLng = self.projection([-98.58333, 39.83333])
            } else {
              latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
            }
          }
          if ( latLng ) return latLng[1];
        })
        .attr('r', function(datum) {
          // If animation enabled start with radius 0, otherwise use full size.
          return options.animate ? 0 : val(datum.radius, options.radius, datum);
        })
        .attr('data-info', function(datum) {
          return JSON.stringify(datum);
        })
        .attr('filter', function (datum) {
          var filterKey = filterData[ val(datum.filterKey, options.filterKey, datum) ];

          if (filterKey) {
            return filterKey;
          }
        })
        .style('stroke', function ( datum ) {
          return val(datum.borderColor, options.borderColor, datum);
        })
        .style('stroke-width', function ( datum ) {
          return val(datum.borderWidth, options.borderWidth, datum);
        })
        .style('stroke-opacity', function ( datum ) {
          return val(datum.borderOpacity, options.borderOpacity, datum);
        })
        .style('fill-opacity', function ( datum ) {
          return val(datum.fillOpacity, options.fillOpacity, datum);
        })
        .style('fill', function ( datum ) {
          var fillColor = fillData[ val(datum.fillKey, options.fillKey, datum) ];
          return fillColor || fillData.defaultFill;
        })
        .on('mouseover', function ( datum ) {
          var $this = d3.select(this);

          if (options.highlightOnHover) {
            // Save all previous attributes for mouseout
            var previousAttributes = {
              'fill':  $this.style('fill'),
              'stroke': $this.style('stroke'),
              'stroke-width': $this.style('stroke-width'),
              'fill-opacity': $this.style('fill-opacity')
            };

            $this
              .style('fill', val(datum.highlightFillColor, options.highlightFillColor, datum))
              .style('stroke', val(datum.highlightBorderColor, options.highlightBorderColor, datum))
              .style('stroke-width', val(datum.highlightBorderWidth, options.highlightBorderWidth, datum))
              .style('stroke-opacity', val(datum.highlightBorderOpacity, options.highlightBorderOpacity, datum))
              .style('fill-opacity', val(datum.highlightFillOpacity, options.highlightFillOpacity, datum))
              .attr('data-previousAttributes', JSON.stringify(previousAttributes));
          }

          if (options.popupOnHover) {
            self.updatePopup($this, datum, options, svg);
          }
        })
        .on('mouseout', function ( datum ) {
          var $this = d3.select(this);

          if (options.highlightOnHover) {
            // Reapply previous attributes
            var previousAttributes = JSON.parse( $this.attr('data-previousAttributes') );
            for ( var attr in previousAttributes ) {
              $this.style(attr, previousAttributes[attr]);
            }
          }

          d3.selectAll('.datamaps-hoverover').style('display', 'none');
        })

    bubbles.transition()
      .duration(400)
      .attr('r', function ( datum ) {
        return val(datum.radius, options.radius, datum);
      })
    .transition()
      .duration(0)
      .attr('data-info', function(d) {
        return JSON.stringify(d);
      });

    bubbles.exit()
      .transition()
        .delay(options.exitDelay)
        .attr("r", 0)
        .remove();

    function datumHasCoords (datum) {
      return typeof datum !== 'undefined' && typeof datum.latitude !== 'undefined' && typeof datum.longitude !== 'undefined';
    }
  }

  function defaults(obj) {
    Array.prototype.slice.call(arguments, 1).forEach(function(source) {
      if (source) {
        for (var prop in source) {
          // Deep copy if property not set
          if (obj[prop] == null) {
            if (typeof source[prop] == 'function') {
              obj[prop] = source[prop];
            }
            else {
              obj[prop] = JSON.parse(JSON.stringify(source[prop]));
            }
          }
        }
      }
    });
    return obj;
  }
  /**************************************
             Public Functions
  ***************************************/

  function Datamap( options ) {

    if ( typeof d3 === 'undefined' || typeof topojson === 'undefined' ) {
      throw new Error('Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map');
   }
    // Set options for global use
    this.options = defaults(options, defaultOptions);
    this.options.geographyConfig = defaults(options.geographyConfig, defaultOptions.geographyConfig);
    this.options.projectionConfig = defaults(options.projectionConfig, defaultOptions.projectionConfig);
    this.options.bubblesConfig = defaults(options.bubblesConfig, defaultOptions.bubblesConfig);
    this.options.arcConfig = defaults(options.arcConfig, defaultOptions.arcConfig);

    // Add the SVG container
    if ( d3.select( this.options.element ).select('svg').length > 0 ) {
      addContainer.call(this, this.options.element, this.options.height, this.options.width );
    }

    // Add core plugins to this instance
    this.addPlugin('bubbles', handleBubbles);
    this.addPlugin('legend', addLegend);
    this.addPlugin('arc', handleArcs);
    this.addPlugin('labels', handleLabels);
    this.addPlugin('graticule', addGraticule);

    // Append style block with basic hoverover styles
    if ( ! this.options.disableDefaultStyles ) {
      addStyleBlock();
    }

    return this.draw();
  }

  // Resize map
  Datamap.prototype.resize = function () {

    var self = this;
    var options = self.options;

    if (options.responsive) {
      var newsize = options.element.clientWidth,
          oldsize = d3.select( options.element).select('svg').attr('data-width');

      d3.select(options.element).select('svg').selectAll('g').attr('transform', 'scale(' + (newsize / oldsize) + ')');
    }
  }

  // Actually draw the features(states & countries)
  Datamap.prototype.draw = function() {
    // Save off in a closure
    var self = this;
    var options = self.options;

    // Set projections and paths based on scope
    var pathAndProjection = options.setProjection.apply(this, [options.element, options] );

    this.path = pathAndProjection.path;
    this.projection = pathAndProjection.projection;

    // If custom URL for topojson data, retrieve it and render
    if ( options.geographyConfig.dataUrl ) {
      d3.json( options.geographyConfig.dataUrl, function(error, results) {
        if ( error ) throw new Error(error);
        self.customTopo = results;
        draw( results );
      });
    }
    else {
      draw( this[options.scope + 'Topo'] || options.geographyConfig.dataJson);
    }

    return this;

      function draw (data) {
        // If fetching remote data, draw the map first then call `updateChoropleth`
        if ( self.options.dataUrl ) {
          // Allow for csv or json data types
          d3[self.options.dataType](self.options.dataUrl, function(data) {
            // In the case of csv, transform data to object
            if ( self.options.dataType === 'csv' && (data && data.slice) ) {
              var tmpData = {};
              for(var i = 0; i < data.length; i++) {
                tmpData[data[i].id] = data[i];
              }
              data = tmpData;
            }
            Datamaps.prototype.updateChoropleth.call(self, data);
          });
        }
        drawSubunits.call(self, data);
        handleGeographyConfig.call(self);

        if ( self.options.geographyConfig.popupOnHover || self.options.bubblesConfig.popupOnHover) {
          hoverover = d3.select( self.options.element ).append('div')
            .attr('class', 'datamaps-hoverover')
            .style('z-index', 10001)
            .style('position', 'absolute');
        }

        // Fire off finished callback
        self.options.done(self);
      }
  };
  /**************************************
                TopoJSON
  ***************************************/
  Datamap.prototype.worldTopo = {
    "type": "Topology",
    "objects": {
        "world": {
            "type": "GeometryCollection",
            "geometries": [{
                "type": "Polygon",
                "properties": {
                    "name": "Afghanistan"
                },
                "id": "AFG",
                "arcs": [
                    [0, 1, 2, 3, 4, 5]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Angola"
                },
                "id": "AGO",
                "arcs": [
                    [
                        [6, 7, 8, 9]
                    ],
                    [
                        [10, 11, 12]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Albania"
                },
                "id": "ALB",
                "arcs": [
                    [13, 14, 15, 16, 17]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "United Arab Emirates"
                },
                "id": "ARE",
                "arcs": [
                    [18, 19, 20, 21, 22]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Argentina"
                },
                "id": "ARG",
                "arcs": [
                    [
                        [23, 24]
                    ],
                    [
                        [25, 26, 27, 28, 29, 30]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Armenia"
                },
                "id": "ARM",
                "arcs": [
                    [31, 32, 33, 34, 35]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Antarctica"
                },
                "id": "ATA",
                "arcs": [
                    [
                        [36]
                    ],
                    [
                        [37]
                    ],
                    [
                        [38]
                    ],
                    [
                        [39]
                    ],
                    [
                        [40]
                    ],
                    [
                        [41]
                    ],
                    [
                        [42]
                    ],
                    [
                        [43]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "French Southern and Antarctic Lands"
                },
                "id": "ATF",
                "arcs": [
                    [44]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Australia"
                },
                "id": "AUS",
                "arcs": [
                    [
                        [45]
                    ],
                    [
                        [46]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Austria"
                },
                "id": "AUT",
                "arcs": [
                    [47, 48, 49, 50, 51, 52, 53]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Azerbaijan"
                },
                "id": "AZE",
                "arcs": [
                    [
                        [54, -35]
                    ],
                    [
                        [55, 56, -33, 57, 58]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Burundi"
                },
                "id": "BDI",
                "arcs": [
                    [59, 60, 61]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Belgium"
                },
                "id": "BEL",
                "arcs": [
                    [62, 63, 64, 65, 66]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Benin"
                },
                "id": "BEN",
                "arcs": [
                    [67, 68, 69, 70, 71]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Burkina Faso"
                },
                "id": "BFA",
                "arcs": [
                    [72, 73, 74, -70, 75, 76]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bangladesh"
                },
                "id": "BGD",
                "arcs": [
                    [77, 78, 79]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bulgaria"
                },
                "id": "BGR",
                "arcs": [
                    [80, 81, 82, 83, 84, 85]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "The Bahamas"
                },
                "id": "BHS",
                "arcs": [
                    [
                        [86]
                    ],
                    [
                        [87]
                    ],
                    [
                        [88]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bosnia and Herzegovina"
                },
                "id": "BIH",
                "arcs": [
                    [89, 90, 91]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Belarus"
                },
                "id": "BLR",
                "arcs": [
                    [92, 93, 94, 95, 96]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Belize"
                },
                "id": "BLZ",
                "arcs": [
                    [97, 98, 99]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bolivia"
                },
                "id": "BOL",
                "arcs": [
                    [100, 101, 102, 103, -31]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Brazil"
                },
                "id": "BRA",
                "arcs": [
                    [-27, 104, -103, 105, 106, 107, 108, 109, 110, 111, 112]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Brunei"
                },
                "id": "BRN",
                "arcs": [
                    [113, 114]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bhutan"
                },
                "id": "BTN",
                "arcs": [
                    [115, 116]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Botswana"
                },
                "id": "BWA",
                "arcs": [
                    [117, 118, 119, 120]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Central African Republic"
                },
                "id": "CAF",
                "arcs": [
                    [121, 122, 123, 124, 125, 126, 127]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Canada"
                },
                "id": "CAN",
                "arcs": [
                    [
                        [128]
                    ],
                    [
                        [129]
                    ],
                    [
                        [130]
                    ],
                    [
                        [131]
                    ],
                    [
                        [132]
                    ],
                    [
                        [133]
                    ],
                    [
                        [134]
                    ],
                    [
                        [135]
                    ],
                    [
                        [136]
                    ],
                    [
                        [137]
                    ],
                    [
                        [138, 139, 140, 141]
                    ],
                    [
                        [142]
                    ],
                    [
                        [143]
                    ],
                    [
                        [144]
                    ],
                    [
                        [145]
                    ],
                    [
                        [146]
                    ],
                    [
                        [147]
                    ],
                    [
                        [148]
                    ],
                    [
                        [149]
                    ],
                    [
                        [150]
                    ],
                    [
                        [151]
                    ],
                    [
                        [152]
                    ],
                    [
                        [153]
                    ],
                    [
                        [154]
                    ],
                    [
                        [155]
                    ],
                    [
                        [156]
                    ],
                    [
                        [157]
                    ],
                    [
                        [158]
                    ],
                    [
                        [159]
                    ],
                    [
                        [160]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Switzerland"
                },
                "id": "CHE",
                "arcs": [
                    [-51, 161, 162, 163]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Chile"
                },
                "id": "CHL",
                "arcs": [
                    [
                        [-24, 164]
                    ],
                    [
                        [-30, 165, 166, -101]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "China"
                },
                "id": "CHN",
                "arcs": [
                    [
                        [167]
                    ],
                    [
                        [168, 169, 170, 171, 172, 173, -117, 174, 175, 176, 177, -4, 178, 179, 180, 181, 182, 183]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ivory Coast"
                },
                "id": "CIV",
                "arcs": [
                    [184, 185, 186, 187, -73, 188]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cameroon"
                },
                "id": "CMR",
                "arcs": [
                    [189, 190, 191, 192, 193, 194, -128, 195]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Democratic Republic of the Congo"
                },
                "id": "COD",
                "arcs": [
                    [196, 197, -60, 198, 199, -10, 200, -13, 201, -126, 202]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Republic of the Congo"
                },
                "id": "COG",
                "arcs": [
                    [-12, 203, 204, -196, -127, -202]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Colombia"
                },
                "id": "COL",
                "arcs": [
                    [205, 206, 207, 208, 209, -107, 210]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Costa Rica"
                },
                "id": "CRI",
                "arcs": [
                    [211, 212, 213, 214]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cuba"
                },
                "id": "CUB",
                "arcs": [
                    [215]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Northern Cyprus"
                },
                "id": "-99",
                "arcs": [
                    [216, 217]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cyprus"
                },
                "id": "CYP",
                "arcs": [
                    [218, -218]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Czech Republic"
                },
                "id": "CZE",
                "arcs": [
                    [-53, 219, 220, 221]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Germany"
                },
                "id": "DEU",
                "arcs": [
                    [222, 223, -220, -52, -164, 224, 225, -64, 226, 227, 228]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Djibouti"
                },
                "id": "DJI",
                "arcs": [
                    [229, 230, 231, 232]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Denmark"
                },
                "id": "DNK",
                "arcs": [
                    [
                        [233]
                    ],
                    [
                        [-229, 234]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Dominican Republic"
                },
                "id": "DOM",
                "arcs": [
                    [235, 236]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Algeria"
                },
                "id": "DZA",
                "arcs": [
                    [237, 238, 239, 240, 241, 242, 243, 244]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ecuador"
                },
                "id": "ECU",
                "arcs": [
                    [245, -206, 246]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Egypt"
                },
                "id": "EGY",
                "arcs": [
                    [247, 248, 249, 250, 251]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Eritrea"
                },
                "id": "ERI",
                "arcs": [
                    [252, 253, 254, -233]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Spain"
                },
                "id": "ESP",
                "arcs": [
                    [255, 256, 257, 258]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Estonia"
                },
                "id": "EST",
                "arcs": [
                    [259, 260, 261]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ethiopia"
                },
                "id": "ETH",
                "arcs": [
                    [-232, 262, 263, 264, 265, 266, 267, -253]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Finland"
                },
                "id": "FIN",
                "arcs": [
                    [268, 269, 270, 271]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Fiji"
                },
                "id": "FJI",
                "arcs": [
                    [
                        [272]
                    ],
                    [
                        [273, 274]
                    ],
                    [
                        [275, -275]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Falkland Islands"
                },
                "id": "FLK",
                "arcs": [
                    [276]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "France"
                },
                "id": "FRA",
                "arcs": [
                    [
                        [277]
                    ],
                    [
                        [278, -225, -163, 279, 280, -257, 281, -66]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "French Guiana"
                },
                "id": "GUF",
                "arcs": [
                    [282, 283, 284, 285, -111]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Gabon"
                },
                "id": "GAB",
                "arcs": [
                    [286, 287, -190, -205]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "United Kingdom"
                },
                "id": "GBR",
                "arcs": [
                    [
                        [288, 289]
                    ],
                    [
                        [290]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Georgia"
                },
                "id": "GEO",
                "arcs": [
                    [291, 292, -58, -32, 293]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ghana"
                },
                "id": "GHA",
                "arcs": [
                    [294, -189, -77, 295]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guinea"
                },
                "id": "GIN",
                "arcs": [
                    [296, 297, 298, 299, 300, 301, -187]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Gambia"
                },
                "id": "GMB",
                "arcs": [
                    [302, 303]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guinea Bissau"
                },
                "id": "GNB",
                "arcs": [
                    [304, 305, -300]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Equatorial Guinea"
                },
                "id": "GNQ",
                "arcs": [
                    [306, -191, -288]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Greece"
                },
                "id": "GRC",
                "arcs": [
                    [
                        [307]
                    ],
                    [
                        [308, -15, 309, -84, 310]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Greenland"
                },
                "id": "GRL",
                "arcs": [
                    [311]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guatemala"
                },
                "id": "GTM",
                "arcs": [
                    [312, 313, -100, 314, 315, 316]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guyana"
                },
                "id": "GUY",
                "arcs": [
                    [317, 318, -109, 319]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Honduras"
                },
                "id": "HND",
                "arcs": [
                    [320, 321, -316, 322, 323]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Croatia"
                },
                "id": "HRV",
                "arcs": [
                    [324, -92, 325, 326, 327, 328]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Haiti"
                },
                "id": "HTI",
                "arcs": [
                    [-237, 329]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Hungary"
                },
                "id": "HUN",
                "arcs": [
                    [-48, 330, 331, 332, 333, -329, 334]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Indonesia"
                },
                "id": "IDN",
                "arcs": [
                    [
                        [335]
                    ],
                    [
                        [336, 337]
                    ],
                    [
                        [338]
                    ],
                    [
                        [339]
                    ],
                    [
                        [340]
                    ],
                    [
                        [341]
                    ],
                    [
                        [342]
                    ],
                    [
                        [343]
                    ],
                    [
                        [344, 345]
                    ],
                    [
                        [346]
                    ],
                    [
                        [347]
                    ],
                    [
                        [348, 349]
                    ],
                    [
                        [350]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "India"
                },
                "id": "IND",
                "arcs": [
                    [-177, 351, -175, -116, -174, 352, -80, 353, 354]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ireland"
                },
                "id": "IRL",
                "arcs": [
                    [355, -289]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Iran"
                },
                "id": "IRN",
                "arcs": [
                    [356, -6, 357, 358, 359, 360, -55, -34, -57, 361]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Iraq"
                },
                "id": "IRQ",
                "arcs": [
                    [362, 363, 364, 365, 366, 367, -360]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Iceland"
                },
                "id": "ISL",
                "arcs": [
                    [368]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Israel"
                },
                "id": "ISR",
                "arcs": [
                    [369, 370, 371, -252, 372, 373, 374]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Italy"
                },
                "id": "ITA",
                "arcs": [
                    [
                        [375]
                    ],
                    [
                        [376]
                    ],
                    [
                        [377, 378, -280, -162, -50]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Jamaica"
                },
                "id": "JAM",
                "arcs": [
                    [379]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Jordan"
                },
                "id": "JOR",
                "arcs": [
                    [-370, 380, -366, 381, 382, -372, 383]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Japan"
                },
                "id": "JPN",
                "arcs": [
                    [
                        [384]
                    ],
                    [
                        [385]
                    ],
                    [
                        [386]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kazakhstan"
                },
                "id": "KAZ",
                "arcs": [
                    [387, 388, 389, 390, -181, 391]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kenya"
                },
                "id": "KEN",
                "arcs": [
                    [392, 393, 394, 395, -265, 396]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kyrgyzstan"
                },
                "id": "KGZ",
                "arcs": [
                    [-392, -180, 397, 398]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cambodia"
                },
                "id": "KHM",
                "arcs": [
                    [399, 400, 401, 402]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "South Korea"
                },
                "id": "KOR",
                "arcs": [
                    [403, 404]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kosovo"
                },
                "id": "-99",
                "arcs": [
                    [-18, 405, 406, 407]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kuwait"
                },
                "id": "KWT",
                "arcs": [
                    [408, 409, -364]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Laos"
                },
                "id": "LAO",
                "arcs": [
                    [410, 411, -172, 412, -401]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Lebanon"
                },
                "id": "LBN",
                "arcs": [
                    [-374, 413, 414]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Liberia"
                },
                "id": "LBR",
                "arcs": [
                    [415, 416, -297, -186]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Libya"
                },
                "id": "LBY",
                "arcs": [
                    [417, -245, 418, 419, -250, 420, 421]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sri Lanka"
                },
                "id": "LKA",
                "arcs": [
                    [422]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Lesotho"
                },
                "id": "LSO",
                "arcs": [
                    [423]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Lithuania"
                },
                "id": "LTU",
                "arcs": [
                    [424, 425, 426, -93, 427]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Luxembourg"
                },
                "id": "LUX",
                "arcs": [
                    [-226, -279, -65]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Latvia"
                },
                "id": "LVA",
                "arcs": [
                    [428, -262, 429, -94, -427]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Morocco"
                },
                "id": "MAR",
                "arcs": [
                    [-242, 430, 431]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Moldova"
                },
                "id": "MDA",
                "arcs": [
                    [432, 433]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Madagascar"
                },
                "id": "MDG",
                "arcs": [
                    [434]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mexico"
                },
                "id": "MEX",
                "arcs": [
                    [435, -98, -314, 436, 437]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Macedonia"
                },
                "id": "MKD",
                "arcs": [
                    [-408, 438, -85, -310, -14]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mali"
                },
                "id": "MLI",
                "arcs": [
                    [439, -239, 440, -74, -188, -302, 441]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Myanmar"
                },
                "id": "MMR",
                "arcs": [
                    [442, -78, -353, -173, -412, 443]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Montenegro"
                },
                "id": "MNE",
                "arcs": [
                    [444, -326, -91, 445, -406, -17]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mongolia"
                },
                "id": "MNG",
                "arcs": [
                    [446, -183]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mozambique"
                },
                "id": "MOZ",
                "arcs": [
                    [447, 448, 449, 450, 451, 452, 453, 454]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mauritania"
                },
                "id": "MRT",
                "arcs": [
                    [455, 456, 457, -240, -440]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Malawi"
                },
                "id": "MWI",
                "arcs": [
                    [-455, 458, 459]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Malaysia"
                },
                "id": "MYS",
                "arcs": [
                    [
                        [460, 461]
                    ],
                    [
                        [-349, 462, -115, 463]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Namibia"
                },
                "id": "NAM",
                "arcs": [
                    [464, -8, 465, -119, 466]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "New Caledonia"
                },
                "id": "NCL",
                "arcs": [
                    [467]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Niger"
                },
                "id": "NER",
                "arcs": [
                    [-75, -441, -238, -418, 468, -194, 469, -71]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Nigeria"
                },
                "id": "NGA",
                "arcs": [
                    [470, -72, -470, -193]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Nicaragua"
                },
                "id": "NIC",
                "arcs": [
                    [471, -324, 472, -213]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Netherlands"
                },
                "id": "NLD",
                "arcs": [
                    [-227, -63, 473]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Norway"
                },
                "id": "NOR",
                "arcs": [
                    [
                        [474, -272, 475, 476]
                    ],
                    [
                        [477]
                    ],
                    [
                        [478]
                    ],
                    [
                        [479]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Nepal"
                },
                "id": "NPL",
                "arcs": [
                    [-352, -176]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "New Zealand"
                },
                "id": "NZL",
                "arcs": [
                    [
                        [480]
                    ],
                    [
                        [481]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Oman"
                },
                "id": "OMN",
                "arcs": [
                    [
                        [482, 483, -22, 484]
                    ],
                    [
                        [-20, 485]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Pakistan"
                },
                "id": "PAK",
                "arcs": [
                    [-178, -355, 486, -358, -5]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Panama"
                },
                "id": "PAN",
                "arcs": [
                    [487, -215, 488, -208]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Peru"
                },
                "id": "PER",
                "arcs": [
                    [-167, 489, -247, -211, -106, -102]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Philippines"
                },
                "id": "PHL",
                "arcs": [
                    [
                        [490]
                    ],
                    [
                        [491]
                    ],
                    [
                        [492]
                    ],
                    [
                        [493]
                    ],
                    [
                        [494]
                    ],
                    [
                        [495]
                    ],
                    [
                        [496]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Papua New Guinea"
                },
                "id": "PNG",
                "arcs": [
                    [
                        [497]
                    ],
                    [
                        [498]
                    ],
                    [
                        [-345, 499]
                    ],
                    [
                        [500]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Poland"
                },
                "id": "POL",
                "arcs": [
                    [-224, 501, 502, -428, -97, 503, 504, -221]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Puerto Rico"
                },
                "id": "PRI",
                "arcs": [
                    [505]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "North Korea"
                },
                "id": "PRK",
                "arcs": [
                    [506, 507, -405, 508, -169]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Portugal"
                },
                "id": "PRT",
                "arcs": [
                    [-259, 509]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Paraguay"
                },
                "id": "PRY",
                "arcs": [
                    [-104, -105, -26]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Qatar"
                },
                "id": "QAT",
                "arcs": [
                    [510, 511]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Romania"
                },
                "id": "ROU",
                "arcs": [
                    [512, -434, 513, 514, -81, 515, -333]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Russia"
                },
                "id": "RUS",
                "arcs": [
                    [
                        [516]
                    ],
                    [
                        [-503, 517, -425]
                    ],
                    [
                        [518, 519]
                    ],
                    [
                        [520]
                    ],
                    [
                        [521]
                    ],
                    [
                        [522]
                    ],
                    [
                        [523]
                    ],
                    [
                        [524]
                    ],
                    [
                        [525]
                    ],
                    [
                        [526, -507, -184, -447, -182, -391, 527, -59, -293, 528, 529, -95, -430, -261, 530, -269, -475, 531, -520]
                    ],
                    [
                        [532]
                    ],
                    [
                        [533]
                    ],
                    [
                        [534]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Rwanda"
                },
                "id": "RWA",
                "arcs": [
                    [535, -61, -198, 536]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Western Sahara"
                },
                "id": "ESH",
                "arcs": [
                    [-241, -458, 537, -431]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Saudi Arabia"
                },
                "id": "SAU",
                "arcs": [
                    [538, -382, -365, -410, 539, -512, 540, -23, -484, 541]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sudan"
                },
                "id": "SDN",
                "arcs": [
                    [542, 543, -123, 544, -421, -249, 545, -254, -268, 546]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "South Sudan"
                },
                "id": "SSD",
                "arcs": [
                    [547, -266, -396, 548, -203, -125, 549, -543]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Senegal"
                },
                "id": "SEN",
                "arcs": [
                    [550, -456, -442, -301, -306, 551, -304]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Solomon Islands"
                },
                "id": "SLB",
                "arcs": [
                    [
                        [552]
                    ],
                    [
                        [553]
                    ],
                    [
                        [554]
                    ],
                    [
                        [555]
                    ],
                    [
                        [556]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sierra Leone"
                },
                "id": "SLE",
                "arcs": [
                    [557, -298, -417]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "El Salvador"
                },
                "id": "SLV",
                "arcs": [
                    [558, -317, -322]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Somaliland"
                },
                "id": "-99",
                "arcs": [
                    [-263, -231, 559, 560]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Somalia"
                },
                "id": "SOM",
                "arcs": [
                    [-397, -264, -561, 561]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Republic of Serbia"
                },
                "id": "SRB",
                "arcs": [
                    [-86, -439, -407, -446, -90, -325, -334, -516]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Suriname"
                },
                "id": "SUR",
                "arcs": [
                    [562, -285, 563, -283, -110, -319]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Slovakia"
                },
                "id": "SVK",
                "arcs": [
                    [-505, 564, -331, -54, -222]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Slovenia"
                },
                "id": "SVN",
                "arcs": [
                    [-49, -335, -328, 565, -378]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sweden"
                },
                "id": "SWE",
                "arcs": [
                    [-476, -271, 566]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Swaziland"
                },
                "id": "SWZ",
                "arcs": [
                    [567, -451]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Syria"
                },
                "id": "SYR",
                "arcs": [
                    [-381, -375, -415, 568, 569, -367]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Chad"
                },
                "id": "TCD",
                "arcs": [
                    [-469, -422, -545, -122, -195]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Togo"
                },
                "id": "TGO",
                "arcs": [
                    [570, -296, -76, -69]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Thailand"
                },
                "id": "THA",
                "arcs": [
                    [571, -462, 572, -444, -411, -400]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Tajikistan"
                },
                "id": "TJK",
                "arcs": [
                    [-398, -179, -3, 573]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Turkmenistan"
                },
                "id": "TKM",
                "arcs": [
                    [-357, 574, -389, 575, -1]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "East Timor"
                },
                "id": "TLS",
                "arcs": [
                    [576, -337]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Trinidad and Tobago"
                },
                "id": "TTO",
                "arcs": [
                    [577]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Tunisia"
                },
                "id": "TUN",
                "arcs": [
                    [-244, 578, -419]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Turkey"
                },
                "id": "TUR",
                "arcs": [
                    [
                        [-294, -36, -361, -368, -570, 579]
                    ],
                    [
                        [-311, -83, 580]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Taiwan"
                },
                "id": "TWN",
                "arcs": [
                    [581]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "United Republic of Tanzania"
                },
                "id": "TZA",
                "arcs": [
                    [-394, 582, -448, -460, 583, -199, -62, -536, 584]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Uganda"
                },
                "id": "UGA",
                "arcs": [
                    [-537, -197, -549, -395, -585]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ukraine"
                },
                "id": "UKR",
                "arcs": [
                    [-530, 585, -514, -433, -513, -332, -565, -504, -96]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Uruguay"
                },
                "id": "URY",
                "arcs": [
                    [-113, 586, -28]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "United States of America"
                },
                "id": "USA",
                "arcs": [
                    [
                        [587]
                    ],
                    [
                        [588]
                    ],
                    [
                        [589]
                    ],
                    [
                        [590]
                    ],
                    [
                        [591]
                    ],
                    [
                        [592, -438, 593, -139]
                    ],
                    [
                        [594]
                    ],
                    [
                        [595]
                    ],
                    [
                        [596]
                    ],
                    [
                        [-141, 597]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Uzbekistan"
                },
                "id": "UZB",
                "arcs": [
                    [-576, -388, -399, -574, -2]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Venezuela"
                },
                "id": "VEN",
                "arcs": [
                    [598, -320, -108, -210]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Vietnam"
                },
                "id": "VNM",
                "arcs": [
                    [599, -402, -413, -171]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Vanuatu"
                },
                "id": "VUT",
                "arcs": [
                    [
                        [600]
                    ],
                    [
                        [601]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "West Bank"
                },
                "id": "PSE",
                "arcs": [
                    [-384, -371]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Yemen"
                },
                "id": "YEM",
                "arcs": [
                    [602, -542, -483]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "South Africa"
                },
                "id": "ZAF",
                "arcs": [
                    [-467, -118, 603, -452, -568, -450, 604],
                    [-424]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Zambia"
                },
                "id": "ZMB",
                "arcs": [
                    [-459, -454, 605, -120, -466, -7, -200, -584]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Zimbabwe"
                },
                "id": "ZWE",
                "arcs": [
                    [-604, -121, -606, -453]
                ]
            }]
        }
    },
    "arcs": [
        [
            [6700, 7164],
            [28, -23],
            [21, 8],
            [6, 27],
            [22, 9],
            [15, 18],
            [6, 47],
            [23, 11],
            [5, 21],
            [13, -15],
            [8, -2]
        ],
        [
            [6847, 7265],
            [16, -1],
            [20, -12]
        ],
        [
            [6883, 7252],
            [9, -7],
            [20, 19],
            [9, -12],
            [9, 27],
            [17, -1],
            [4, 9],
            [3, 24],
            [12, 20],
            [15, -13],
            [-3, -18],
            [9, -3],
            [-3, -50],
            [11, -19],
            [10, 12],
            [12, 6],
            [17, 27],
            [19, -5],
            [29, 0]
        ],
        [
            [7082, 7268],
            [5, -17]
        ],
        [
            [7087, 7251],
            [-16, -6],
            [-14, -11],
            [-32, -7],
            [-30, -13],
            [-16, -25],
            [6, -25],
            [4, -30],
            [-14, -25],
            [1, -22],
            [-8, -22],
            [-26, 2],
            [11, -39],
            [-18, -15],
            [-12, -35],
            [2, -36],
            [-11, -16],
            [-10, 5],
            [-22, -8],
            [-3, -16],
            [-20, 0],
            [-16, -34],
            [-1, -50],
            [-36, -24],
            [-19, 5],
            [-6, -13],
            [-16, 7],
            [-28, -8],
            [-47, 30]
        ],
        [
            [6690, 6820],
            [25, 53],
            [-2, 38],
            [-21, 10],
            [-2, 38],
            [-9, 47],
            [12, 32],
            [-12, 9],
            [7, 43],
            [12, 74]
        ],
        [
            [5664, 4412],
            [3, -18],
            [-4, -29],
            [5, -28],
            [-4, -22],
            [3, -20],
            [-58, 1],
            [-2, -188],
            [19, -49],
            [18, -37]
        ],
        [
            [5644, 4022],
            [-51, -24],
            [-67, 9],
            [-19, 28],
            [-113, -3],
            [-4, -4],
            [-17, 27],
            [-18, 2],
            [-16, -10],
            [-14, -12]
        ],
        [
            [5325, 4035],
            [-2, 38],
            [4, 51],
            [9, 55],
            [2, 25],
            [9, 53],
            [6, 24],
            [16, 39],
            [9, 26],
            [3, 44],
            [-1, 34],
            [-9, 21],
            [-7, 36],
            [-7, 35],
            [2, 12],
            [8, 24],
            [-8, 57],
            [-6, 39],
            [-14, 38],
            [3, 11]
        ],
        [
            [5342, 4697],
            [11, 8],
            [8, -1],
            [10, 7],
            [82, -1],
            [7, -44],
            [8, -35],
            [6, -19],
            [11, -31],
            [18, 5],
            [9, 8],
            [16, -8],
            [4, 14],
            [7, 35],
            [17, 2],
            [2, 10],
            [14, 1],
            [-3, -22],
            [34, 1],
            [1, -37],
            [5, -23],
            [-4, -36],
            [2, -36],
            [9, -22],
            [-1, -70],
            [7, 5],
            [12, -1],
            [17, 8],
            [13, -3]
        ],
        [
            [5338, 4715],
            [-8, 45]
        ],
        [
            [5330, 4760],
            [12, 25],
            [8, 10],
            [10, -20]
        ],
        [
            [5360, 4775],
            [-10, -12],
            [-4, -16],
            [-1, -25],
            [-7, -7]
        ],
        [
            [5571, 7530],
            [-3, -20],
            [4, -25],
            [11, -15]
        ],
        [
            [5583, 7470],
            [0, -15],
            [-9, -9],
            [-2, -19],
            [-13, -29]
        ],
        [
            [5559, 7398],
            [-5, 5],
            [0, 13],
            [-15, 19],
            [-3, 29],
            [2, 40],
            [4, 18],
            [-4, 10]
        ],
        [
            [5538, 7532],
            [-2, 18],
            [12, 29],
            [1, -11],
            [8, 6]
        ],
        [
            [5557, 7574],
            [6, -16],
            [7, -6],
            [1, -22]
        ],
        [
            [6432, 6490],
            [5, 3],
            [1, -16],
            [22, 9],
            [23, -2],
            [17, -1],
            [19, 39],
            [20, 38],
            [18, 37]
        ],
        [
            [6557, 6597],
            [5, -20]
        ],
        [
            [6562, 6577],
            [4, -47]
        ],
        [
            [6566, 6530],
            [-14, 0],
            [-3, -39],
            [5, -8],
            [-12, -12],
            [0, -24],
            [-8, -24],
            [-1, -24]
        ],
        [
            [6533, 6399],
            [-6, -12],
            [-83, 29],
            [-11, 60],
            [-1, 14]
        ],
        [
            [3140, 1814],
            [-17, 2],
            [-30, 0],
            [0, 132]
        ],
        [
            [3093, 1948],
            [11, -27],
            [14, -45],
            [36, -35],
            [39, -15],
            [-13, -30],
            [-26, -2],
            [-14, 20]
        ],
        [
            [3258, 3743],
            [51, -96],
            [23, -9],
            [34, -44],
            [29, -23],
            [4, -26],
            [-28, -90],
            [28, -16],
            [32, -9],
            [22, 10],
            [25, 45],
            [4, 52]
        ],
        [
            [3482, 3537],
            [14, 11],
            [14, -34],
            [-1, -47],
            [-23, -33],
            [-19, -24],
            [-31, -57],
            [-37, -81]
        ],
        [
            [3399, 3272],
            [-7, -47],
            [-7, -61],
            [0, -58],
            [-6, -14],
            [-2, -38]
        ],
        [
            [3377, 3054],
            [-2, -31],
            [35, -50],
            [-4, -41],
            [18, -26],
            [-2, -29],
            [-26, -75],
            [-42, -32],
            [-55, -12],
            [-31, 6],
            [6, -36],
            [-6, -44],
            [5, -30],
            [-16, -20],
            [-29, -8],
            [-26, 21],
            [-11, -15],
            [4, -59],
            [18, -18],
            [16, 19],
            [8, -31],
            [-26, -18],
            [-22, -37],
            [-4, -59],
            [-7, -32],
            [-26, 0],
            [-22, -31],
            [-8, -44],
            [28, -43],
            [26, -12],
            [-9, -53],
            [-33, -33],
            [-18, -70],
            [-25, -23],
            [-12, -28],
            [9, -61],
            [19, -34],
            [-12, 3]
        ],
        [
            [3095, 1968],
            [-26, 9],
            [-67, 8],
            [-11, 34],
            [0, 45],
            [-18, -4],
            [-10, 21],
            [-3, 63],
            [22, 26],
            [9, 37],
            [-4, 30],
            [15, 51],
            [10, 78],
            [-3, 35],
            [12, 11],
            [-3, 22],
            [-13, 12],
            [10, 25],
            [-13, 22],
            [-6, 68],
            [11, 12],
            [-5, 72],
            [7, 61],
            [7, 52],
            [17, 22],
            [-9, 58],
            [0, 54],
            [21, 38],
            [-1, 50],
            [16, 57],
            [0, 55],
            [-7, 11],
            [-13, 102],
            [17, 60],
            [-2, 58],
            [10, 53],
            [18, 56],
            [20, 36],
            [-9, 24],
            [6, 19],
            [-1, 98],
            [30, 29],
            [10, 62],
            [-3, 14]
        ],
        [
            [3136, 3714],
            [23, 54],
            [36, -15],
            [16, -42],
            [11, 47],
            [32, -2],
            [4, -13]
        ],
        [
            [6210, 7485],
            [39, 9]
        ],
        [
            [6249, 7494],
            [5, -15],
            [11, -10],
            [-6, -15],
            [15, -21],
            [-8, -18],
            [12, -16],
            [13, -10],
            [0, -41]
        ],
        [
            [6291, 7348],
            [-10, -2]
        ],
        [
            [6281, 7346],
            [-11, 34],
            [0, 10],
            [-12, -1],
            [-9, 16],
            [-5, -1]
        ],
        [
            [6244, 7404],
            [-11, 17],
            [-21, 15],
            [3, 28],
            [-5, 21]
        ],
        [
            [3345, 329],
            [-8, -30],
            [-8, -27],
            [-59, 8],
            [-62, -3],
            [-34, 20],
            [0, 2],
            [-16, 17],
            [63, -2],
            [60, -6],
            [20, 24],
            [15, 21],
            [29, -24]
        ],
        [
            [577, 361],
            [-53, -8],
            [-36, 21],
            [-17, 21],
            [-1, 3],
            [-18, 16],
            [17, 22],
            [52, -9],
            [28, -18],
            [21, -21],
            [7, -27]
        ],
        [
            [3745, 447],
            [35, -26],
            [12, -36],
            [3, -25],
            [1, -30],
            [-43, -19],
            [-45, -15],
            [-52, -14],
            [-59, -11],
            [-65, 3],
            [-37, 20],
            [5, 24],
            [59, 16],
            [24, 20],
            [18, 26],
            [12, 22],
            [17, 20],
            [18, 25],
            [14, 0],
            [41, 12],
            [42, -12]
        ],
        [
            [1633, 715],
            [36, -9],
            [33, 10],
            [-16, -20],
            [-26, -15],
            [-39, 4],
            [-27, 21],
            [6, 20],
            [33, -11]
        ],
        [
            [1512, 716],
            [43, -23],
            [-17, 3],
            [-36, 5],
            [-38, 17],
            [20, 12],
            [28, -14]
        ],
        [
            [2250, 808],
            [31, -8],
            [30, 7],
            [17, -34],
            [-22, 5],
            [-34, -2],
            [-34, 2],
            [-38, -4],
            [-28, 12],
            [-15, 24],
            [18, 11],
            [35, -8],
            [40, -5]
        ],
        [
            [3098, 866],
            [4, -27],
            [-5, -23],
            [-8, -22],
            [-33, -8],
            [-31, -12],
            [-36, 1],
            [14, 24],
            [-33, -9],
            [-31, -8],
            [-21, 18],
            [-2, 24],
            [30, 23],
            [20, 7],
            [32, -2],
            [8, 30],
            [1, 22],
            [0, 47],
            [16, 28],
            [25, 9],
            [15, -22],
            [6, -22],
            [12, -26],
            [10, -26],
            [7, -26]
        ],
        [
            [3371, 1268],
            [-11, -13],
            [-21, 9],
            [-23, -6],
            [-19, -14],
            [-20, -15],
            [-14, -17],
            [-4, -23],
            [2, -22],
            [13, -20],
            [-19, -14],
            [-26, -4],
            [-15, -20],
            [-17, -19],
            [-17, -25],
            [-4, -22],
            [9, -24],
            [15, -19],
            [23, -14],
            [21, -18],
            [12, -23],
            [6, -22],
            [8, -24],
            [13, -19],
            [8, -22],
            [4, -55],
            [8, -22],
            [2, -23],
            [9, -23],
            [-4, -31],
            [-15, -24],
            [-17, -20],
            [-37, -8],
            [-12, -21],
            [-17, -20],
            [-42, -22],
            [-37, -9],
            [-35, -13],
            [-37, -13],
            [-22, -24],
            [-45, -2],
            [-49, 2],
            [-44, -4],
            [-47, 0],
            [9, -24],
            [42, -10],
            [31, -16],
            [18, -21],
            [-31, -19],
            [-48, 6],
            [-40, -15],
            [-2, -24],
            [-1, -23],
            [33, -20],
            [6, -22],
            [35, -22],
            [59, -9],
            [50, -16],
            [40, -19],
            [50, -18],
            [70, -10],
            [68, -16],
            [47, -17],
            [52, -20],
            [27, -28],
            [13, -22],
            [34, 21],
            [46, 17],
            [48, 19],
            [58, 15],
            [49, 16],
            [69, 1],
            [68, -8],
            [56, -14],
            [18, 26],
            [39, 17],
            [70, 1],
            [55, 13],
            [52, 13],
            [58, 8],
            [62, 10],
            [43, 15],
            [-20, 21],
            [-12, 21],
            [0, 22],
            [-54, -2],
            [-57, -10],
            [-54, 0],
            [-8, 22],
            [4, 44],
            [12, 13],
            [40, 14],
            [47, 14],
            [34, 17],
            [33, 18],
            [25, 23],
            [38, 10],
            [38, 8],
            [19, 5],
            [43, 2],
            [41, 8],
            [34, 12],
            [34, 14],
            [30, 14],
            [39, 18],
            [24, 20],
            [26, 17],
            [9, 24],
            [-30, 13],
            [10, 25],
            [18, 18],
            [29, 12],
            [31, 14],
            [28, 18],
            [22, 23],
            [13, 28],
            [21, 16],
            [33, -3],
            [13, -20],
            [34, -2],
            [1, 22],
            [14, 23],
            [30, -6],
            [7, -22],
            [33, -3],
            [36, 10],
            [35, 7],
            [31, -3],
            [12, -25],
            [31, 20],
            [28, 10],
            [31, 9],
            [31, 8],
            [29, 14],
            [31, 9],
            [24, 13],
            [17, 20],
            [20, -15],
            [29, 8],
            [20, -27],
            [16, -21],
            [32, 11],
            [12, 24],
            [28, 16],
            [37, -4],
            [11, -22],
            [22, 22],
            [30, 7],
            [33, 3],
            [29, -2],
            [31, -7],
            [30, -3],
            [13, -20],
            [18, -17],
            [31, 10],
            [32, 3],
            [32, 0],
            [31, 1],
            [28, 8],
            [29, 7],
            [25, 16],
            [26, 11],
            [28, 5],
            [21, 17],
            [15, 32],
            [16, 20],
            [29, -10],
            [11, -21],
            [24, -13],
            [29, 4],
            [19, -21],
            [21, -15],
            [28, 14],
            [10, 26],
            [25, 10],
            [29, 20],
            [27, 8],
            [33, 11],
            [22, 13],
            [22, 14],
            [22, 13],
            [26, -7],
            [25, 21],
            [18, 16],
            [26, -1],
            [23, 14],
            [6, 21],
            [23, 16],
            [23, 11],
            [28, 10],
            [25, 4],
            [25, -3],
            [26, -6],
            [22, -16],
            [3, -26],
            [24, -19],
            [17, -17],
            [33, -7],
            [19, -16],
            [23, -16],
            [26, -3],
            [23, 11],
            [24, 24],
            [26, -12],
            [27, -7],
            [26, -7],
            [27, -5],
            [28, 0],
            [23, -61],
            [-1, -15],
            [-4, -27],
            [-26, -15],
            [-22, -22],
            [4, -23],
            [31, 1],
            [-4, -23],
            [-14, -22],
            [-13, -24],
            [21, -19],
            [32, -6],
            [32, 11],
            [15, 23],
            [10, 22],
            [15, 18],
            [17, 18],
            [7, 21],
            [15, 29],
            [18, 5],
            [31, 3],
            [28, 7],
            [28, 9],
            [14, 23],
            [8, 22],
            [19, 22],
            [27, 15],
            [23, 12],
            [16, 19],
            [15, 11],
            [21, 9],
            [27, -6],
            [25, 6],
            [28, 7],
            [30, -4],
            [20, 17],
            [14, 39],
            [11, -16],
            [13, -28],
            [23, -12],
            [27, -4],
            [26, 7],
            [29, -5],
            [26, -1],
            [17, 6],
            [24, -4],
            [21, -12],
            [25, 8],
            [30, 0],
            [25, 8],
            [29, -8],
            [19, 19],
            [14, 20],
            [19, 16],
            [35, 44],
            [18, -8],
            [21, -16],
            [18, -21],
            [36, -36],
            [27, -1],
            [25, 0],
            [30, 7],
            [30, 8],
            [23, 16],
            [19, 18],
            [31, 2],
            [21, 13],
            [22, -12],
            [14, -18],
            [19, -19],
            [31, 2],
            [19, -15],
            [33, -15],
            [35, -5],
            [29, 4],
            [21, 19],
            [19, 18],
            [25, 5],
            [25, -8],
            [29, -6],
            [26, 9],
            [25, 0],
            [24, -6],
            [26, -5],
            [25, 10],
            [30, 9],
            [28, 3],
            [32, 0],
            [25, 5],
            [25, 5],
            [8, 29],
            [1, 24],
            [17, -16],
            [5, -27],
            [10, -24],
            [11, -20],
            [23, -10],
            [32, 4],
            [36, 1],
            [25, 3],
            [37, 0],
            [26, 1],
            [36, -2],
            [31, -5],
            [20, -18],
            [-5, -22],
            [18, -18],
            [30, -13],
            [31, -15],
            [35, -11],
            [38, -9],
            [28, -9],
            [32, -2],
            [18, 20],
            [24, -16],
            [21, -19],
            [25, -13],
            [34, -6],
            [32, -7],
            [13, -23],
            [32, -14],
            [21, -21],
            [31, -9],
            [32, 1],
            [30, -4],
            [33, 1],
            [34, -4],
            [31, -8],
            [28, -14],
            [29, -12],
            [20, -17],
            [-3, -23],
            [-15, -21],
            [-13, -27],
            [-9, -21],
            [-14, -24],
            [-36, -9],
            [-16, -21],
            [-36, -13],
            [-13, -23],
            [-19, -22],
            [-20, -18],
            [-11, -25],
            [-7, -22],
            [-3, -26],
            [0, -22],
            [16, -23],
            [6, -22],
            [13, -21],
            [52, -8],
            [11, -26],
            [-50, -9],
            [-43, -13],
            [-52, -2],
            [-24, -34],
            [-5, -27],
            [-12, -22],
            [-14, -22],
            [37, -20],
            [14, -24],
            [24, -22],
            [33, -20],
            [39, -19],
            [42, -18],
            [64, -19],
            [14, -29],
            [80, -12],
            [5, -5],
            [21, -17],
            [77, 15],
            [63, -19],
            [48, -14],
            [-9997, -1],
            [24, 35],
            [50, -19],
            [3, 2],
            [30, 19],
            [4, 0],
            [3, -1],
            [40, -25],
            [35, 25],
            [7, 3],
            [81, 11],
            [27, -14],
            [13, -7],
            [41, -20],
            [79, -15],
            [63, -18],
            [107, -14],
            [80, 16],
            [118, -11],
            [67, -19],
            [73, 17],
            [78, 17],
            [6, 27],
            [-110, 3],
            [-89, 14],
            [-24, 23],
            [-74, 12],
            [5, 27],
            [10, 24],
            [10, 22],
            [-5, 25],
            [-46, 16],
            [-22, 21],
            [-43, 18],
            [68, -3],
            [64, 9],
            [40, -20],
            [50, 18],
            [45, 22],
            [23, 19],
            [-10, 25],
            [-36, 16],
            [-41, 17],
            [-57, 4],
            [-50, 8],
            [-54, 6],
            [-18, 22],
            [-36, 18],
            [-21, 21],
            [-9, 67],
            [14, -6],
            [25, -18],
            [45, 6],
            [44, 8],
            [23, -26],
            [44, 6],
            [37, 13],
            [35, 16],
            [32, 20],
            [41, 5],
            [-1, 22],
            [-9, 22],
            [8, 21],
            [36, 11],
            [16, -20],
            [42, 12],
            [32, 15],
            [40, 1],
            [38, 6],
            [37, 13],
            [30, 13],
            [34, 13],
            [22, -4],
            [19, -4],
            [41, 8],
            [37, -10],
            [38, 1],
            [37, 8],
            [37, -6],
            [41, -6],
            [39, 3],
            [40, -2],
            [42, -1],
            [38, 3],
            [28, 17],
            [34, 9],
            [35, -13],
            [33, 11],
            [30, 21],
            [18, -19],
            [9, -21],
            [18, -19],
            [29, 17],
            [33, -22],
            [38, -7],
            [32, -16],
            [39, 3],
            [36, 11],
            [41, -3],
            [38, -8],
            [38, -10],
            [15, 25],
            [-18, 20],
            [-14, 21],
            [-36, 5],
            [-15, 22],
            [-6, 22],
            [-10, 43],
            [21, -8],
            [36, -3],
            [36, 3],
            [33, -9],
            [28, -17],
            [12, -21],
            [38, -4],
            [36, 9],
            [38, 11],
            [34, 7],
            [28, -14],
            [37, 5],
            [24, 45],
            [23, -27],
            [32, -10],
            [34, 6],
            [23, -23],
            [37, -3],
            [33, -7],
            [34, -12],
            [21, 22],
            [11, 20],
            [28, -23],
            [38, 6],
            [28, -13],
            [19, -19],
            [37, 5],
            [29, 13],
            [29, 15],
            [33, 8],
            [39, 7],
            [36, 8],
            [27, 13],
            [16, 19],
            [7, 25],
            [-3, 24],
            [-9, 24],
            [-10, 23],
            [-9, 23],
            [-7, 21],
            [-1, 23],
            [2, 23],
            [13, 22],
            [11, 24],
            [5, 23],
            [-6, 26],
            [-3, 23],
            [14, 27],
            [15, 17],
            [18, 22],
            [19, 19],
            [22, 17],
            [11, 25],
            [15, 17],
            [18, 15],
            [26, 3],
            [18, 19],
            [19, 11],
            [23, 7],
            [20, 15],
            [16, 19],
            [22, 7],
            [16, -15],
            [-10, -20],
            [-29, -17]
        ],
        [
            [6914, 2185],
            [18, -19],
            [26, -7],
            [1, -11],
            [-7, -27],
            [-43, -4],
            [-1, 31],
            [4, 25],
            [2, 12]
        ],
        [
            [9038, 2648],
            [27, -21],
            [15, 8],
            [22, 12],
            [16, -4],
            [2, -70],
            [-9, -21],
            [-3, -47],
            [-10, 16],
            [-19, -41],
            [-6, 3],
            [-17, 2],
            [-17, 50],
            [-4, 39],
            [-16, 52],
            [1, 27],
            [18, -5]
        ],
        [
            [8987, 4244],
            [10, -46],
            [18, 22],
            [9, -25],
            [13, -23],
            [-3, -26],
            [6, -51],
            [5, -29],
            [7, -7],
            [7, -51],
            [-3, -30],
            [9, -40],
            [31, -31],
            [19, -28],
            [19, -26],
            [-4, -14],
            [16, -37],
            [11, -64],
            [11, 13],
            [11, -26],
            [7, 9],
            [5, -63],
            [19, -36],
            [13, -22],
            [22, -48],
            [8, -48],
            [1, -33],
            [-2, -37],
            [13, -50],
            [-2, -52],
            [-5, -28],
            [-7, -52],
            [1, -34],
            [-6, -43],
            [-12, -53],
            [-21, -29],
            [-10, -46],
            [-9, -29],
            [-8, -51],
            [-11, -30],
            [-7, -44],
            [-4, -41],
            [2, -18],
            [-16, -21],
            [-31, -2],
            [-26, -24],
            [-13, -23],
            [-17, -26],
            [-23, 27],
            [-17, 10],
            [5, 31],
            [-15, -11],
            [-25, -43],
            [-24, 16],
            [-15, 9],
            [-16, 4],
            [-27, 17],
            [-18, 37],
            [-5, 45],
            [-7, 30],
            [-13, 24],
            [-27, 7],
            [9, 28],
            [-7, 44],
            [-13, -41],
            [-25, -11],
            [14, 33],
            [5, 34],
            [10, 29],
            [-2, 44],
            [-22, -50],
            [-18, -21],
            [-10, -47],
            [-22, 25],
            [1, 31],
            [-18, 43],
            [-14, 22],
            [5, 14],
            [-36, 35],
            [-19, 2],
            [-27, 29],
            [-50, -6],
            [-36, -21],
            [-31, -20],
            [-27, 4],
            [-29, -30],
            [-24, -14],
            [-6, -31],
            [-10, -24],
            [-23, -1],
            [-18, -5],
            [-24, 10],
            [-20, -6],
            [-19, -3],
            [-17, -31],
            [-8, 2],
            [-14, -16],
            [-13, -19],
            [-21, 2],
            [-18, 0],
            [-30, 38],
            [-15, 11],
            [1, 34],
            [14, 8],
            [4, 14],
            [-1, 21],
            [4, 41],
            [-3, 35],
            [-15, 60],
            [-4, 33],
            [1, 34],
            [-11, 38],
            [-1, 18],
            [-12, 23],
            [-4, 47],
            [-16, 46],
            [-4, 26],
            [13, -26],
            [-10, 55],
            [14, -17],
            [8, -23],
            [0, 30],
            [-14, 47],
            [-3, 18],
            [-6, 18],
            [3, 34],
            [6, 15],
            [4, 29],
            [-3, 35],
            [11, 42],
            [2, -45],
            [12, 41],
            [22, 20],
            [14, 25],
            [21, 22],
            [13, 4],
            [7, -7],
            [22, 22],
            [17, 6],
            [4, 13],
            [8, 6],
            [15, -2],
            [29, 18],
            [15, 26],
            [7, 31],
            [17, 30],
            [1, 24],
            [1, 32],
            [19, 50],
            [12, -51],
            [12, 12],
            [-10, 28],
            [9, 29],
            [12, -13],
            [3, 45],
            [15, 29],
            [7, 23],
            [14, 10],
            [0, 17],
            [13, -7],
            [0, 15],
            [12, 8],
            [14, 8],
            [20, -27],
            [16, -35],
            [17, 0],
            [18, -6],
            [-6, 33],
            [13, 47],
            [13, 15],
            [-5, 15],
            [12, 34],
            [17, 21],
            [14, -7],
            [24, 11],
            [-1, 30],
            [-20, 19],
            [15, 9],
            [18, -15],
            [15, -24],
            [23, -15],
            [8, 6],
            [17, -18],
            [17, 17],
            [10, -5],
            [7, 11],
            [12, -29],
            [-7, -32],
            [-11, -24],
            [-9, -2],
            [3, -23],
            [-8, -30],
            [-10, -29],
            [2, -17],
            [22, -32],
            [21, -19],
            [15, -20],
            [20, -35],
            [8, 0],
            [14, -15],
            [4, -19],
            [27, -20],
            [18, 20],
            [6, 32],
            [5, 26],
            [4, 33],
            [8, 47],
            [-4, 28],
            [2, 17],
            [-3, 34],
            [4, 45],
            [5, 12],
            [-4, 20],
            [7, 31],
            [5, 32],
            [1, 17],
            [10, 22],
            [8, -29],
            [2, -37],
            [7, -7],
            [1, -25],
            [10, -30],
            [2, -33],
            [-1, -22]
        ],
        [
            [5471, 7900],
            [-2, -24],
            [-16, 0],
            [6, -13],
            [-9, -38]
        ],
        [
            [5450, 7825],
            [-6, -10],
            [-24, -1],
            [-14, -13],
            [-23, 4]
        ],
        [
            [5383, 7805],
            [-40, 15],
            [-6, 21],
            [-27, -10],
            [-4, -12],
            [-16, 9]
        ],
        [
            [5290, 7828],
            [-15, 1],
            [-12, 11],
            [4, 15],
            [-1, 10]
        ],
        [
            [5266, 7865],
            [8, 3],
            [14, -16],
            [4, 16],
            [25, -3],
            [20, 11],
            [13, -2],
            [9, -12],
            [2, 10],
            [-4, 38],
            [10, 8],
            [10, 27]
        ],
        [
            [5377, 7945],
            [21, -19],
            [15, 24],
            [10, 5],
            [22, -18],
            [13, 3],
            [13, -12]
        ],
        [
            [5471, 7928],
            [-3, -7],
            [3, -21]
        ],
        [
            [6281, 7346],
            [-19, 8],
            [-14, 27],
            [-4, 23]
        ],
        [
            [6349, 7527],
            [15, -31],
            [14, -42],
            [13, -2],
            [8, -16],
            [-23, -5],
            [-5, -46],
            [-4, -21],
            [-11, -13],
            [1, -30]
        ],
        [
            [6357, 7321],
            [-7, -3],
            [-17, 31],
            [10, 30],
            [-9, 17],
            [-10, -4],
            [-33, -44]
        ],
        [
            [6249, 7494],
            [6, 10],
            [21, -17],
            [15, -4],
            [4, 7],
            [-14, 32],
            [7, 9]
        ],
        [
            [6288, 7531],
            [8, -2],
            [19, -36],
            [13, -4],
            [4, 15],
            [17, 23]
        ],
        [
            [5814, 4792],
            [-1, 71],
            [-7, 27]
        ],
        [
            [5806, 4890],
            [17, -5],
            [8, 34],
            [15, -4]
        ],
        [
            [5846, 4915],
            [1, -23],
            [6, -14],
            [1, -19],
            [-7, -12],
            [-11, -31],
            [-10, -22],
            [-12, -2]
        ],
        [
            [5092, 8091],
            [20, -5],
            [26, 12],
            [17, -25],
            [16, -14]
        ],
        [
            [5171, 8059],
            [-4, -40]
        ],
        [
            [5167, 8019],
            [-7, -2],
            [-3, -33]
        ],
        [
            [5157, 7984],
            [-24, 26],
            [-14, -4],
            [-20, 28],
            [-13, 23],
            [-13, 1],
            [-4, 21]
        ],
        [
            [5069, 8079],
            [23, 12]
        ],
        [
            [5074, 5427],
            [-23, -7]
        ],
        [
            [5051, 5420],
            [-7, 41],
            [2, 136],
            [-6, 12],
            [-1, 29],
            [-10, 21],
            [-8, 17],
            [3, 31]
        ],
        [
            [5024, 5707],
            [10, 7],
            [6, 26],
            [13, 5],
            [6, 18]
        ],
        [
            [5059, 5763],
            [10, 17],
            [10, 0],
            [21, -34]
        ],
        [
            [5100, 5746],
            [-1, -19],
            [6, -35],
            [-6, -24],
            [3, -16],
            [-13, -37],
            [-9, -18],
            [-5, -37],
            [1, -38],
            [-2, -95]
        ],
        [
            [4921, 5627],
            [-19, 15],
            [-13, -2],
            [-10, -15],
            [-12, 13],
            [-5, 19],
            [-13, 13]
        ],
        [
            [4849, 5670],
            [-1, 34],
            [7, 26],
            [-1, 20],
            [23, 48],
            [4, 41],
            [7, 14],
            [14, -8],
            [11, 12],
            [4, 16],
            [22, 26],
            [5, 19],
            [26, 24],
            [15, 9],
            [7, -12],
            [18, 0]
        ],
        [
            [5010, 5939],
            [-2, -28],
            [3, -27],
            [16, -39],
            [1, -28],
            [32, -14],
            [-1, -40]
        ],
        [
            [5024, 5707],
            [-24, 1]
        ],
        [
            [5000, 5708],
            [-13, 5],
            [-9, -9],
            [-12, 4],
            [-48, -3],
            [-1, -33],
            [4, -45]
        ],
        [
            [7573, 6360],
            [0, -43],
            [-10, 9],
            [2, -47]
        ],
        [
            [7565, 6279],
            [-8, 30],
            [-1, 31],
            [-6, 28],
            [-11, 34],
            [-26, 3],
            [3, -25],
            [-9, -32],
            [-12, 12],
            [-4, -11],
            [-8, 6],
            [-11, 5]
        ],
        [
            [7472, 6360],
            [-4, 49],
            [-10, 45],
            [5, 35],
            [-17, 16],
            [6, 22],
            [18, 22],
            [-20, 31],
            [9, 40],
            [22, -26],
            [14, -3],
            [2, -41],
            [26, -8],
            [26, 1],
            [16, -10],
            [-13, -50],
            [-12, -3],
            [-9, -34],
            [16, -31],
            [4, 38],
            [8, 0],
            [14, -93]
        ],
        [
            [5629, 7671],
            [8, -25],
            [11, 5],
            [21, -9],
            [41, -4],
            [13, 16],
            [33, 13],
            [20, -21],
            [17, -6]
        ],
        [
            [5793, 7640],
            [-15, -25],
            [-10, -42],
            [9, -34]
        ],
        [
            [5777, 7539],
            [-24, 8],
            [-28, -18]
        ],
        [
            [5725, 7529],
            [0, -30],
            [-26, -5],
            [-19, 20],
            [-22, -16],
            [-21, 2]
        ],
        [
            [5637, 7500],
            [-2, 39],
            [-14, 19]
        ],
        [
            [5621, 7558],
            [5, 8],
            [-3, 7],
            [4, 19],
            [11, 18],
            [-14, 26],
            [-2, 21],
            [7, 14]
        ],
        [
            [2846, 6461],
            [-7, -3],
            [-7, 34],
            [-10, 17],
            [6, 38],
            [8, -3],
            [10, -49],
            [0, -34]
        ],
        [
            [2838, 6628],
            [-30, -10],
            [-2, 22],
            [13, 5],
            [18, -2],
            [1, -15]
        ],
        [
            [2861, 6628],
            [-5, -42],
            [-5, 8],
            [0, 31],
            [-12, 23],
            [0, 7],
            [22, -27]
        ],
        [
            [5527, 7708],
            [10, 0],
            [-7, -26],
            [14, -23],
            [-4, -28],
            [-7, -2]
        ],
        [
            [5533, 7629],
            [-5, -6],
            [-9, -13],
            [-4, -33]
        ],
        [
            [5515, 7577],
            [-25, 23],
            [-10, 24],
            [-11, 13],
            [-12, 22],
            [-6, 19],
            [-14, 27],
            [6, 25],
            [10, -14],
            [6, 12],
            [13, 2],
            [24, -10],
            [19, 1],
            [12, -13]
        ],
        [
            [5652, 8242],
            [27, 0],
            [30, 22],
            [6, 34],
            [23, 19],
            [-3, 26]
        ],
        [
            [5735, 8343],
            [17, 10],
            [30, 23]
        ],
        [
            [5782, 8376],
            [29, -15],
            [4, -15],
            [15, 7],
            [27, -14],
            [3, -27],
            [-6, -16],
            [17, -39],
            [12, -11],
            [-2, -11],
            [19, -10],
            [8, -16],
            [-11, -13],
            [-23, 2],
            [-5, -5],
            [7, -20],
            [6, -37]
        ],
        [
            [5882, 8136],
            [-23, -4],
            [-9, -13],
            [-2, -30],
            [-11, 6],
            [-25, -3],
            [-7, 14],
            [-11, -10],
            [-10, 8],
            [-22, 1],
            [-31, 15],
            [-28, 4],
            [-22, -1],
            [-15, -16],
            [-13, -2]
        ],
        [
            [5653, 8105],
            [-1, 26],
            [-8, 27],
            [17, 12],
            [0, 24],
            [-8, 22],
            [-1, 26]
        ],
        [
            [2524, 6110],
            [-1, 8],
            [4, 3],
            [5, -7],
            [10, 36],
            [5, 0]
        ],
        [
            [2547, 6150],
            [0, -8],
            [5, -1],
            [0, -16],
            [-5, -25],
            [3, -9],
            [-3, -21],
            [2, -6],
            [-4, -30],
            [-5, -16],
            [-5, -1],
            [-6, -21]
        ],
        [
            [2529, 5996],
            [-8, 0],
            [2, 67],
            [1, 47]
        ],
        [
            [3136, 3714],
            [-20, -8],
            [-11, 82],
            [-15, 66],
            [9, 57],
            [-15, 25],
            [-4, 43],
            [-13, 40]
        ],
        [
            [3067, 4019],
            [17, 64],
            [-12, 49],
            [7, 20],
            [-5, 22],
            [10, 30],
            [1, 50],
            [1, 41],
            [6, 20],
            [-24, 96]
        ],
        [
            [3068, 4411],
            [21, -5],
            [14, 1],
            [6, 18],
            [25, 24],
            [14, 22],
            [37, 10],
            [-3, -44],
            [3, -23],
            [-2, -40],
            [30, -53],
            [31, -9],
            [11, -23],
            [19, -11],
            [11, -17],
            [18, 0],
            [16, -17],
            [1, -34],
            [6, -18],
            [0, -25],
            [-8, -1],
            [11, -69],
            [53, -2],
            [-4, -35],
            [3, -23],
            [15, -16],
            [6, -37],
            [-4, -47],
            [-8, -26],
            [3, -33],
            [-9, -12]
        ],
        [
            [3384, 3866],
            [-1, 18],
            [-25, 30],
            [-26, 1],
            [-49, -17],
            [-13, -52],
            [-1, -32],
            [-11, -71]
        ],
        [
            [3482, 3537],
            [6, 34],
            [3, 35],
            [1, 32],
            [-10, 11],
            [-11, -9],
            [-10, 2],
            [-4, 23],
            [-2, 54],
            [-5, 18],
            [-19, 16],
            [-11, -12],
            [-30, 11],
            [2, 81],
            [-8, 33]
        ],
        [
            [3068, 4411],
            [-15, -11],
            [-13, 7],
            [2, 90],
            [-23, -35],
            [-24, 2],
            [-11, 31],
            [-18, 4],
            [5, 25],
            [-15, 36],
            [-11, 53],
            [7, 11],
            [0, 25],
            [17, 17],
            [-3, 32],
            [7, 20],
            [2, 28],
            [32, 40],
            [22, 11],
            [4, 9],
            [25, -2]
        ],
        [
            [3058, 4804],
            [13, 162],
            [0, 25],
            [-4, 34],
            [-12, 22],
            [0, 42],
            [15, 10],
            [6, -6],
            [1, 23],
            [-16, 6],
            [-1, 37],
            [54, -2],
            [10, 21],
            [7, -19],
            [6, -35],
            [5, 8]
        ],
        [
            [3142, 5132],
            [15, -32],
            [22, 4],
            [5, 18],
            [21, 14],
            [11, 10],
            [4, 25],
            [19, 17],
            [-1, 12],
            [-24, 5],
            [-3, 37],
            [1, 40],
            [-13, 15],
            [5, 6],
            [21, -8],
            [22, -15],
            [8, 14],
            [20, 9],
            [31, 23],
            [10, 22],
            [-3, 17]
        ],
        [
            [3313, 5365],
            [14, 2],
            [7, -13],
            [-4, -26],
            [9, -9],
            [7, -28],
            [-8, -20],
            [-4, -51],
            [7, -30],
            [2, -27],
            [17, -28],
            [14, -3],
            [3, 12],
            [8, 3],
            [13, 10],
            [9, 16],
            [15, -5],
            [7, 2]
        ],
        [
            [3429, 5170],
            [15, -5],
            [3, 12],
            [-5, 12],
            [3, 17],
            [11, -5],
            [13, 6],
            [16, -13]
        ],
        [
            [3485, 5194],
            [12, -12],
            [9, 16],
            [6, -3],
            [4, -16],
            [13, 4],
            [11, 22],
            [8, 44],
            [17, 54]
        ],
        [
            [3565, 5303],
            [9, 3],
            [7, -33],
            [16, -103],
            [14, -10],
            [1, -41],
            [-21, -48],
            [9, -18],
            [49, -9],
            [1, -60],
            [21, 39],
            [35, -21],
            [46, -36],
            [14, -35],
            [-5, -32],
            [33, 18],
            [54, -32],
            [41, 3],
            [41, -49],
            [36, -66],
            [21, -17],
            [24, -3],
            [10, -18],
            [9, -76],
            [5, -35],
            [-11, -98],
            [-14, -39],
            [-39, -82],
            [-18, -67],
            [-21, -51],
            [-7, -1],
            [-7, -43],
            [2, -111],
            [-8, -91],
            [-3, -39],
            [-9, -23],
            [-5, -79],
            [-28, -77],
            [-5, -61],
            [-22, -26],
            [-7, -35],
            [-30, 0],
            [-44, -23],
            [-19, -26],
            [-31, -18],
            [-33, -47],
            [-23, -58],
            [-5, -44],
            [5, -33],
            [-5, -60],
            [-6, -28],
            [-20, -33],
            [-31, -104],
            [-24, -47],
            [-19, -27],
            [-13, -57],
            [-18, -33]
        ],
        [
            [3517, 3063],
            [-8, 33],
            [13, 28],
            [-16, 40],
            [-22, 33],
            [-29, 38],
            [-10, -2],
            [-28, 46],
            [-18, -7]
        ],
        [
            [8172, 5325],
            [11, 22],
            [23, 32]
        ],
        [
            [8206, 5379],
            [-1, -29],
            [-2, -37],
            [-13, 1],
            [-6, -20],
            [-12, 31]
        ],
        [
            [7546, 6698],
            [12, -19],
            [-2, -36],
            [-23, -2],
            [-23, 4],
            [-18, -9],
            [-25, 22],
            [-1, 12]
        ],
        [
            [7466, 6670],
            [19, 44],
            [15, 15],
            [20, -14],
            [14, -1],
            [12, -16]
        ],
        [
            [5817, 3752],
            [-39, -43],
            [-25, -44],
            [-10, -40],
            [-8, -22],
            [-15, -4],
            [-5, -29],
            [-3, -18],
            [-17, -14],
            [-23, 3],
            [-13, 17],
            [-12, 7],
            [-14, -14],
            [-6, -28],
            [-14, -18],
            [-13, -26],
            [-20, -6],
            [-6, 20],
            [2, 36],
            [-16, 56],
            [-8, 9]
        ],
        [
            [5552, 3594],
            [0, 173],
            [27, 2],
            [1, 210],
            [21, 2],
            [43, 21],
            [10, -24],
            [18, 23],
            [9, 0],
            [15, 13]
        ],
        [
            [5696, 4014],
            [5, -4]
        ],
        [
            [5701, 4010],
            [11, -48],
            [5, -10],
            [9, -34],
            [32, -65],
            [12, -7],
            [0, -20],
            [8, -38],
            [21, -9],
            [18, -27]
        ],
        [
            [5424, 5496],
            [23, 4],
            [5, 16],
            [5, -2],
            [7, -13],
            [34, 23],
            [12, 23],
            [15, 20],
            [-3, 21],
            [8, 6],
            [27, -4],
            [26, 27],
            [20, 65],
            [14, 24],
            [18, 10]
        ],
        [
            [5635, 5716],
            [3, -26],
            [16, -36],
            [0, -25],
            [-5, -24],
            [2, -18],
            [10, -18]
        ],
        [
            [5661, 5569],
            [21, -25]
        ],
        [
            [5682, 5544],
            [15, -24],
            [0, -19],
            [19, -31],
            [12, -26],
            [7, -35],
            [20, -24],
            [5, -18]
        ],
        [
            [5760, 5367],
            [-9, -7],
            [-18, 2],
            [-21, 6],
            [-10, -5],
            [-5, -14],
            [-9, -2],
            [-10, 12],
            [-31, -29],
            [-13, 6],
            [-4, -5],
            [-8, -35],
            [-21, 11],
            [-20, 6],
            [-18, 22],
            [-23, 20],
            [-15, -19],
            [-10, -30],
            [-3, -41]
        ],
        [
            [5512, 5265],
            [-18, 3],
            [-19, 10],
            [-16, -32],
            [-15, -55]
        ],
        [
            [5444, 5191],
            [-3, 18],
            [-1, 27],
            [-13, 19],
            [-10, 30],
            [-2, 21],
            [-13, 31],
            [2, 18],
            [-3, 25],
            [2, 45],
            [7, 11],
            [14, 60]
        ],
        [
            [3231, 7808],
            [20, -8],
            [26, 1],
            [-14, -24],
            [-10, -4],
            [-35, 25],
            [-7, 20],
            [10, 18],
            [10, -28]
        ],
        [
            [3283, 7958],
            [-14, -1],
            [-36, 19],
            [-26, 28],
            [10, 5],
            [37, -15],
            [28, -25],
            [1, -11]
        ],
        [
            [1569, 7923],
            [-14, -8],
            [-46, 27],
            [-8, 21],
            [-25, 21],
            [-5, 16],
            [-28, 11],
            [-11, 32],
            [2, 14],
            [30, -13],
            [17, -9],
            [26, -6],
            [9, -21],
            [14, -28],
            [28, -24],
            [11, -33]
        ],
        [
            [3440, 8052],
            [-18, -52],
            [18, 20],
            [19, -12],
            [-10, -21],
            [25, -16],
            [12, 14],
            [28, -18],
            [-8, -43],
            [19, 10],
            [4, -32],
            [8, -36],
            [-11, -52],
            [-13, -2],
            [-18, 11],
            [6, 48],
            [-8, 8],
            [-32, -52],
            [-17, 2],
            [20, 28],
            [-27, 14],
            [-30, -3],
            [-54, 2],
            [-4, 17],
            [17, 21],
            [-12, 16],
            [24, 36],
            [28, 94],
            [18, 33],
            [24, 21],
            [13, -3],
            [-6, -16],
            [-15, -37]
        ],
        [
            [1313, 8250],
            [27, 5],
            [-8, -67],
            [24, -48],
            [-11, 0],
            [-17, 27],
            [-10, 27],
            [-14, 19],
            [-5, 26],
            [1, 19],
            [13, -8]
        ],
        [
            [2798, 8730],
            [-11, -31],
            [-12, 5],
            [-8, 17],
            [2, 4],
            [10, 18],
            [12, -1],
            [7, -12]
        ],
        [
            [2725, 8762],
            [-33, -32],
            [-19, 1],
            [-6, 16],
            [20, 27],
            [38, 0],
            [0, -12]
        ],
        [
            [2634, 8936],
            [5, -26],
            [15, 9],
            [16, -15],
            [30, -20],
            [32, -19],
            [2, -28],
            [21, 5],
            [20, -20],
            [-25, -18],
            [-43, 14],
            [-16, 26],
            [-27, -31],
            [-40, -31],
            [-9, 35],
            [-38, -6],
            [24, 30],
            [4, 46],
            [9, 54],
            [20, -5]
        ],
        [
            [2892, 9024],
            [-31, -3],
            [-7, 29],
            [12, 34],
            [26, 8],
            [21, -17],
            [1, -25],
            [-4, -8],
            [-18, -18]
        ],
        [
            [2343, 9140],
            [-17, -21],
            [-38, 18],
            [-22, -6],
            [-38, 26],
            [24, 19],
            [19, 25],
            [30, -16],
            [17, -11],
            [8, -11],
            [17, -23]
        ],
        [
            [3135, 7724],
            [-18, 33],
            [0, 81],
            [-13, 17],
            [-18, -10],
            [-10, 16],
            [-21, -45],
            [-8, -46],
            [-10, -27],
            [-12, -9],
            [-9, -3],
            [-3, -15],
            [-51, 0],
            [-42, 0],
            [-12, -11],
            [-30, -42],
            [-3, -5],
            [-9, -23],
            [-26, 0],
            [-27, 0],
            [-12, -10],
            [4, -11],
            [2, -18],
            [0, -6],
            [-36, -30],
            [-29, -9],
            [-32, -31],
            [-7, 0],
            [-10, 9],
            [-3, 8],
            [1, 6],
            [6, 21],
            [13, 33],
            [8, 35],
            [-5, 51],
            [-6, 53],
            [-29, 28],
            [3, 11],
            [-4, 7],
            [-8, 0],
            [-5, 9],
            [-2, 14],
            [-5, -6],
            [-7, 2],
            [1, 6],
            [-6, 6],
            [-3, 15],
            [-21, 19],
            [-23, 20],
            [-27, 23],
            [-26, 21],
            [-25, -17],
            [-9, 0],
            [-34, 15],
            [-23, -8],
            [-27, 19],
            [-28, 9],
            [-19, 4],
            [-9, 10],
            [-5, 32],
            [-9, 0],
            [-1, -23],
            [-57, 0],
            [-95, 0],
            [-94, 0],
            [-84, 0],
            [-83, 0],
            [-82, 0],
            [-85, 0],
            [-27, 0],
            [-82, 0],
            [-79, 0]
        ],
        [
            [1588, 7952],
            [-4, 0],
            [-54, 58],
            [-20, 26],
            [-50, 24],
            [-15, 53],
            [3, 36],
            [-35, 25],
            [-5, 48],
            [-34, 43],
            [0, 30]
        ],
        [
            [1374, 8295],
            [15, 29],
            [0, 37],
            [-48, 37],
            [-28, 68],
            [-17, 42],
            [-26, 27],
            [-19, 24],
            [-14, 31],
            [-28, -20],
            [-27, -33],
            [-25, 39],
            [-19, 26],
            [-27, 16],
            [-28, 2],
            [0, 337],
            [1, 219]
        ],
        [
            [1084, 9176],
            [51, -14],
            [44, -29],
            [29, -5],
            [24, 24],
            [34, 19],
            [41, -7],
            [42, 26],
            [45, 14],
            [20, -24],
            [20, 14],
            [6, 27],
            [20, -6],
            [47, -53],
            [37, 40],
            [3, -45],
            [34, 10],
            [11, 17],
            [34, -3],
            [42, -25],
            [65, -22],
            [38, -10],
            [28, 4],
            [37, -30],
            [-39, -29],
            [50, -13],
            [75, 7],
            [24, 11],
            [29, -36],
            [31, 30],
            [-29, 25],
            [18, 20],
            [34, 3],
            [22, 6],
            [23, -14],
            [28, -32],
            [31, 5],
            [49, -27],
            [43, 9],
            [40, -1],
            [-3, 37],
            [25, 10],
            [43, -20],
            [0, -56],
            [17, 47],
            [23, -1],
            [12, 59],
            [-30, 36],
            [-32, 24],
            [2, 65],
            [33, 43],
            [37, -9],
            [28, -26],
            [38, -67],
            [-25, -29],
            [52, -12],
            [-1, -60],
            [38, 46],
            [33, -38],
            [-9, -44],
            [27, -40],
            [29, 43],
            [21, 51],
            [1, 65],
            [40, -5],
            [41, -8],
            [37, -30],
            [2, -29],
            [-21, -31],
            [20, -32],
            [-4, -29],
            [-54, -41],
            [-39, -9],
            [-29, 18],
            [-8, -30],
            [-27, -50],
            [-8, -26],
            [-32, -40],
            [-40, -4],
            [-22, -25],
            [-2, -38],
            [-32, -7],
            [-34, -48],
            [-30, -67],
            [-11, -46],
            [-1, -69],
            [40, -10],
            [13, -55],
            [13, -45],
            [39, 12],
            [51, -26],
            [28, -22],
            [20, -28],
            [35, -17],
            [29, -24],
            [46, -4],
            [30, -6],
            [-4, -51],
            [8, -59],
            [21, -66],
            [41, -56],
            [21, 19],
            [15, 61],
            [-14, 93],
            [-20, 31],
            [45, 28],
            [31, 41],
            [16, 41],
            [-3, 40],
            [-19, 50],
            [-33, 44],
            [32, 62],
            [-12, 54],
            [-9, 92],
            [19, 14],
            [48, -16],
            [29, -6],
            [23, 15],
            [25, -20],
            [35, -34],
            [8, -23],
            [50, -4],
            [-1, -50],
            [9, -74],
            [25, -10],
            [21, -35],
            [40, 33],
            [26, 65],
            [19, 28],
            [21, -53],
            [36, -75],
            [31, -71],
            [-11, -37],
            [37, -33],
            [25, -34],
            [44, -15],
            [18, -19],
            [11, -50],
            [22, -8],
            [11, -22],
            [2, -67],
            [-20, -22],
            [-20, -21],
            [-46, -21],
            [-35, -48],
            [-47, -10],
            [-59, 13],
            [-42, 0],
            [-29, -4],
            [-23, -43],
            [-35, -26],
            [-40, -78],
            [-32, -54],
            [23, 9],
            [45, 78],
            [58, 49],
            [42, 6],
            [24, -29],
            [-26, -40],
            [9, -63],
            [9, -45],
            [36, -29],
            [46, 8],
            [28, 67],
            [2, -43],
            [17, -22],
            [-34, -38],
            [-61, -36],
            [-28, -23],
            [-31, -43],
            [-21, 4],
            [-1, 50],
            [48, 49],
            [-44, -2],
            [-31, -7]
        ],
        [
            [1829, 9377],
            [-14, -27],
            [61, 17],
            [39, -29],
            [31, 30],
            [26, -20],
            [23, -58],
            [14, 25],
            [-20, 60],
            [24, 9],
            [28, -9],
            [31, -24],
            [17, -58],
            [9, -41],
            [47, -30],
            [50, -28],
            [-3, -26],
            [-46, -4],
            [18, -23],
            [-9, -22],
            [-51, 9],
            [-48, 16],
            [-32, -3],
            [-52, -20],
            [-70, -9],
            [-50, -6],
            [-15, 28],
            [-38, 16],
            [-24, -6],
            [-35, 47],
            [19, 6],
            [43, 10],
            [39, -3],
            [36, 11],
            [-54, 13],
            [-59, -4],
            [-39, 1],
            [-15, 22],
            [64, 23],
            [-42, -1],
            [-49, 16],
            [23, 44],
            [20, 24],
            [74, 36],
            [29, -12]
        ],
        [
            [2097, 9395],
            [-24, -39],
            [-44, 41],
            [10, 9],
            [37, 2],
            [21, -13]
        ],
        [
            [2879, 9376],
            [3, -16],
            [-30, 2],
            [-30, 1],
            [-30, -8],
            [-8, 3],
            [-31, 32],
            [1, 21],
            [14, 4],
            [63, -6],
            [48, -33]
        ],
        [
            [2595, 9379],
            [22, -36],
            [26, 47],
            [70, 24],
            [48, -61],
            [-4, -38],
            [55, 17],
            [26, 23],
            [62, -30],
            [38, -28],
            [3, -25],
            [52, 13],
            [29, -38],
            [67, -23],
            [24, -24],
            [26, -55],
            [-51, -28],
            [66, -38],
            [44, -13],
            [40, -55],
            [44, -3],
            [-9, -42],
            [-49, -69],
            [-34, 26],
            [-44, 57],
            [-36, -8],
            [-3, -34],
            [29, -34],
            [38, -27],
            [11, -16],
            [18, -58],
            [-9, -43],
            [-35, 16],
            [-70, 47],
            [39, -51],
            [29, -35],
            [5, -21],
            [-76, 24],
            [-59, 34],
            [-34, 29],
            [10, 17],
            [-42, 30],
            [-40, 29],
            [0, -18],
            [-80, -9],
            [-23, 20],
            [18, 44],
            [52, 1],
            [57, 7],
            [-9, 21],
            [10, 30],
            [36, 57],
            [-8, 27],
            [-11, 20],
            [-42, 29],
            [-57, 20],
            [18, 15],
            [-29, 36],
            [-25, 4],
            [-22, 20],
            [-14, -18],
            [-51, -7],
            [-101, 13],
            [-59, 17],
            [-45, 9],
            [-23, 21],
            [29, 27],
            [-39, 0],
            [-9, 60],
            [21, 53],
            [29, 24],
            [72, 16],
            [-21, -39]
        ],
        [
            [2212, 9420],
            [33, -12],
            [50, 7],
            [7, -17],
            [-26, -28],
            [42, -26],
            [-5, -53],
            [-45, -23],
            [-27, 5],
            [-19, 23],
            [-69, 45],
            [0, 19],
            [57, -7],
            [-31, 38],
            [33, 29]
        ],
        [
            [2411, 9357],
            [-30, -45],
            [-32, 3],
            [-17, 52],
            [1, 29],
            [14, 25],
            [28, 16],
            [58, -2],
            [53, -14],
            [-42, -53],
            [-33, -11]
        ],
        [
            [1654, 9275],
            [-73, -29],
            [-15, 26],
            [-64, 31],
            [12, 25],
            [19, 43],
            [24, 39],
            [-27, 36],
            [94, 10],
            [39, -13],
            [71, -3],
            [27, -17],
            [30, -25],
            [-35, -15],
            [-68, -41],
            [-34, -42],
            [0, -25]
        ],
        [
            [2399, 9487],
            [-15, -23],
            [-40, 5],
            [-34, 15],
            [15, 27],
            [40, 16],
            [24, -21],
            [10, -19]
        ],
        [
            [2264, 9590],
            [21, -27],
            [1, -31],
            [-13, -44],
            [-46, -6],
            [-30, 10],
            [1, 34],
            [-45, -4],
            [-2, 45],
            [30, -2],
            [41, 21],
            [40, -4],
            [2, 8]
        ],
        [
            [1994, 9559],
            [11, -21],
            [25, 10],
            [29, -2],
            [5, -29],
            [-17, -28],
            [-94, -10],
            [-70, -25],
            [-43, -2],
            [-3, 20],
            [57, 26],
            [-125, -7],
            [-39, 10],
            [38, 58],
            [26, 17],
            [78, -20],
            [50, -35],
            [48, -5],
            [-40, 57],
            [26, 21],
            [29, -7],
            [9, -28]
        ],
        [
            [2370, 9612],
            [30, -19],
            [55, 0],
            [24, -19],
            [-6, -22],
            [32, -14],
            [17, -14],
            [38, -2],
            [40, -5],
            [44, 13],
            [57, 5],
            [45, -5],
            [30, -22],
            [6, -24],
            [-17, -16],
            [-42, -13],
            [-35, 8],
            [-80, -10],
            [-57, -1],
            [-45, 8],
            [-74, 19],
            [-9, 32],
            [-4, 29],
            [-27, 26],
            [-58, 7],
            [-32, 19],
            [10, 24],
            [58, -4]
        ],
        [
            [1772, 9645],
            [-4, -46],
            [-21, -20],
            [-26, -3],
            [-52, -26],
            [-44, -9],
            [-38, 13],
            [47, 44],
            [57, 39],
            [43, -1],
            [38, 9]
        ],
        [
            [2393, 9637],
            [-13, -2],
            [-52, 4],
            [-7, 17],
            [56, -1],
            [19, -11],
            [-3, -7]
        ],
        [
            [1939, 9648],
            [-52, -17],
            [-41, 19],
            [23, 19],
            [40, 6],
            [39, -10],
            [-9, -17]
        ],
        [
            [1954, 9701],
            [-34, -11],
            [-46, 0],
            [0, 8],
            [29, 18],
            [14, -3],
            [37, -12]
        ],
        [
            [2338, 9669],
            [-41, -12],
            [-23, 13],
            [-12, 23],
            [-2, 24],
            [36, -2],
            [16, -4],
            [33, -21],
            [-7, -21]
        ],
        [
            [2220, 9685],
            [11, -25],
            [-45, 7],
            [-46, 19],
            [-62, 2],
            [27, 18],
            [-34, 14],
            [-2, 22],
            [55, -8],
            [75, -21],
            [21, -28]
        ],
        [
            [2583, 9764],
            [33, -20],
            [-38, -17],
            [-51, -45],
            [-50, -4],
            [-57, 8],
            [-30, 24],
            [0, 21],
            [22, 16],
            [-50, 0],
            [-31, 19],
            [-18, 27],
            [20, 26],
            [19, 18],
            [28, 4],
            [-12, 14],
            [65, 3],
            [35, -32],
            [47, -12],
            [46, -11],
            [22, -39]
        ],
        [
            [3097, 9967],
            [74, -4],
            [60, -8],
            [51, -16],
            [-2, -16],
            [-67, -25],
            [-68, -12],
            [-25, -14],
            [61, 1],
            [-66, -36],
            [-45, -17],
            [-48, -48],
            [-57, -10],
            [-18, -12],
            [-84, -6],
            [39, -8],
            [-20, -10],
            [23, -29],
            [-26, -21],
            [-43, -16],
            [-13, -24],
            [-39, -17],
            [4, -14],
            [48, 3],
            [0, -15],
            [-74, -35],
            [-73, 16],
            [-81, -9],
            [-42, 7],
            [-52, 3],
            [-4, 29],
            [52, 13],
            [-14, 43],
            [17, 4],
            [74, -26],
            [-38, 38],
            [-45, 11],
            [23, 23],
            [49, 14],
            [8, 21],
            [-39, 23],
            [-12, 31],
            [76, -3],
            [22, -6],
            [43, 21],
            [-62, 7],
            [-98, -4],
            [-49, 20],
            [-23, 24],
            [-32, 17],
            [-6, 21],
            [41, 11],
            [32, 2],
            [55, 9],
            [41, 22],
            [34, -3],
            [30, -16],
            [21, 32],
            [37, 9],
            [50, 7],
            [85, 2],
            [14, -6],
            [81, 10],
            [60, -4],
            [60, -4]
        ],
        [
            [5290, 7828],
            [-3, -24],
            [-12, -10],
            [-20, 7],
            [-6, -24],
            [-14, -2],
            [-5, 10],
            [-15, -20],
            [-13, -3],
            [-12, 13]
        ],
        [
            [5190, 7775],
            [-10, 25],
            [-13, -9],
            [0, 27],
            [21, 33],
            [-1, 15],
            [12, -5],
            [8, 10]
        ],
        [
            [5207, 7871],
            [24, -1],
            [5, 13],
            [30, -18]
        ],
        [
            [3140, 1814],
            [-10, -24],
            [-23, -18],
            [-14, 2],
            [-16, 5],
            [-21, 18],
            [-29, 8],
            [-35, 33],
            [-28, 32],
            [-38, 66],
            [23, -12],
            [39, -40],
            [36, -21],
            [15, 27],
            [9, 41],
            [25, 24],
            [20, -7]
        ],
        [
            [3095, 1968],
            [-25, 0],
            [-13, -14],
            [-25, -22],
            [-5, -55],
            [-11, -1],
            [-32, 19],
            [-32, 41],
            [-34, 34],
            [-9, 37],
            [8, 35],
            [-14, 39],
            [-4, 101],
            [12, 57],
            [30, 45],
            [-43, 18],
            [27, 52],
            [9, 98],
            [31, -21],
            [15, 123],
            [-19, 15],
            [-9, -73],
            [-17, 8],
            [9, 84],
            [9, 110],
            [13, 40],
            [-8, 58],
            [-2, 66],
            [11, 2],
            [17, 96],
            [20, 94],
            [11, 88],
            [-6, 89],
            [8, 49],
            [-3, 72],
            [16, 73],
            [5, 114],
            [9, 123],
            [9, 132],
            [-2, 96],
            [-6, 84]
        ],
        [
            [3045, 3974],
            [14, 15],
            [8, 30]
        ],
        [
            [8064, 6161],
            [-24, -28],
            [-23, 18],
            [0, 51],
            [13, 26],
            [31, 17],
            [16, -1],
            [6, -23],
            [-12, -26],
            [-7, -34]
        ],
        [
            [8628, 7562],
            [-18, 35],
            [-11, -33],
            [-43, -26],
            [4, -31],
            [-24, 2],
            [-13, 19],
            [-19, -42],
            [-30, -32],
            [-23, -38]
        ],
        [
            [8451, 7416],
            [-39, -17],
            [-20, -27],
            [-30, -17],
            [15, 28],
            [-6, 23],
            [22, 40],
            [-15, 30],
            [-24, -20],
            [-32, -41],
            [-17, -39],
            [-27, -2],
            [-14, -28],
            [15, -40],
            [22, -10],
            [1, -26],
            [22, -17],
            [31, 42],
            [25, -23],
            [18, -2],
            [4, -31],
            [-39, -16],
            [-13, -32],
            [-27, -30],
            [-14, -41],
            [30, -33],
            [11, -58],
            [17, -54],
            [18, -45],
            [0, -44],
            [-17, -16],
            [6, -32],
            [17, -18],
            [-5, -48],
            [-7, -47],
            [-15, -5],
            [-21, -64],
            [-22, -78],
            [-26, -70],
            [-38, -55],
            [-39, -50],
            [-31, -6],
            [-17, -27],
            [-10, 20],
            [-15, -30],
            [-39, -29],
            [-29, -9],
            [-10, -63],
            [-15, -3],
            [-8, 43],
            [7, 22],
            [-37, 19],
            [-13, -9]
        ],
        [
            [8001, 6331],
            [-28, 15],
            [-14, 24],
            [5, 34],
            [-26, 11],
            [-13, 22],
            [-24, -31],
            [-27, -7],
            [-22, 0],
            [-15, -14]
        ],
        [
            [7837, 6385],
            [-14, -9],
            [4, -68],
            [-15, 2],
            [-2, 14]
        ],
        [
            [7810, 6324],
            [-1, 24],
            [-20, -17],
            [-12, 11],
            [-21, 22],
            [8, 49],
            [-18, 12],
            [-6, 54],
            [-30, -10],
            [4, 70],
            [26, 50],
            [1, 48],
            [-1, 46],
            [-12, 14],
            [-9, 35],
            [-16, -5]
        ],
        [
            [7703, 6727],
            [-30, 9],
            [9, 25],
            [-13, 36],
            [-20, -24],
            [-23, 14],
            [-32, -37],
            [-25, -44],
            [-23, -8]
        ],
        [
            [7466, 6670],
            [-2, 47],
            [-17, -13]
        ],
        [
            [7447, 6704],
            [-32, 6],
            [-32, 14],
            [-22, 26],
            [-22, 11],
            [-9, 29],
            [-16, 8],
            [-28, 39],
            [-22, 18],
            [-12, -14]
        ],
        [
            [7252, 6841],
            [-38, 41],
            [-28, 37],
            [-7, 65],
            [20, -7],
            [1, 30],
            [-12, 30],
            [3, 48],
            [-30, 69]
        ],
        [
            [7161, 7154],
            [-45, 24],
            [-8, 46],
            [-21, 27]
        ],
        [
            [7082, 7268],
            [-4, 34],
            [1, 23],
            [-17, 13],
            [-9, -6],
            [-7, 55]
        ],
        [
            [7046, 7387],
            [8, 13],
            [-4, 14],
            [26, 28],
            [20, 12],
            [29, -8],
            [11, 38],
            [35, 7],
            [10, 23],
            [44, 32],
            [4, 13]
        ],
        [
            [7229, 7559],
            [-2, 34],
            [19, 15],
            [-25, 103],
            [55, 24],
            [14, 13],
            [20, 106],
            [55, -20],
            [15, 27],
            [2, 59],
            [23, 6],
            [21, 39]
        ],
        [
            [7426, 7965],
            [11, 5]
        ],
        [
            [7437, 7970],
            [7, -41],
            [23, -32],
            [40, -22],
            [19, -47],
            [-10, -70],
            [10, -25],
            [33, -10],
            [37, -8],
            [33, -37],
            [18, -7],
            [12, -54],
            [17, -35],
            [30, 1],
            [58, -13],
            [36, 8],
            [28, -9],
            [41, -36],
            [34, 0],
            [12, -18],
            [32, 32],
            [45, 20],
            [42, 2],
            [32, 21],
            [20, 32],
            [20, 20],
            [-5, 19],
            [-9, 23],
            [15, 38],
            [15, -5],
            [29, -12],
            [28, 31],
            [42, 23],
            [20, 39],
            [20, 17],
            [40, 8],
            [22, -7],
            [3, 21],
            [-25, 41],
            [-22, 19],
            [-22, -22],
            [-27, 10],
            [-16, -8],
            [-7, 24],
            [20, 59],
            [13, 45]
        ],
        [
            [8240, 8005],
            [34, -23],
            [39, 38],
            [-1, 26],
            [26, 62],
            [15, 19],
            [0, 33],
            [-16, 14],
            [23, 29],
            [35, 11],
            [37, 2],
            [41, -18],
            [25, -22],
            [17, -59],
            [10, -26],
            [10, -36],
            [10, -58],
            [49, -19],
            [32, -42],
            [12, -55],
            [42, 0],
            [24, 23],
            [46, 17],
            [-15, -53],
            [-11, -21],
            [-9, -65],
            [-19, -58],
            [-33, 11],
            [-24, -21],
            [7, -51],
            [-4, -69],
            [-14, -2],
            [0, -30]
        ],
        [
            [4920, 5353],
            [-12, -1],
            [-20, 12],
            [-18, -1],
            [-33, -10],
            [-19, -18],
            [-27, -21],
            [-6, 1]
        ],
        [
            [4785, 5315],
            [2, 49],
            [3, 7],
            [-1, 24],
            [-12, 24],
            [-8, 4],
            [-8, 17],
            [6, 26],
            [-3, 28],
            [1, 18]
        ],
        [
            [4765, 5512],
            [5, 0],
            [1, 25],
            [-2, 12],
            [3, 8],
            [10, 7],
            [-7, 47],
            [-6, 25],
            [2, 20],
            [5, 4]
        ],
        [
            [4776, 5660],
            [4, 6],
            [8, -9],
            [21, -1],
            [5, 18],
            [5, -1],
            [8, 6],
            [4, -25],
            [7, 7],
            [11, 9]
        ],
        [
            [4921, 5627],
            [7, -84],
            [-11, -50],
            [-8, -66],
            [12, -51],
            [-1, -23]
        ],
        [
            [5363, 5191],
            [-4, 4],
            [-16, -8],
            [-17, 8],
            [-13, -4]
        ],
        [
            [5313, 5191],
            [-45, 1]
        ],
        [
            [5268, 5192],
            [4, 47],
            [-11, 39],
            [-13, 10],
            [-6, 27],
            [-7, 8],
            [1, 16]
        ],
        [
            [5236, 5339],
            [7, 42],
            [13, 57],
            [8, 1],
            [17, 34],
            [10, 1],
            [16, -24],
            [19, 20],
            [2, 25],
            [7, 23],
            [4, 30],
            [15, 25],
            [5, 41],
            [6, 13],
            [4, 31],
            [7, 37],
            [24, 46],
            [1, 20],
            [3, 10],
            [-11, 24]
        ],
        [
            [5393, 5795],
            [1, 19],
            [8, 3]
        ],
        [
            [5402, 5817],
            [11, -38],
            [2, -39],
            [-1, -39],
            [15, -54],
            [-15, 1],
            [-8, -4],
            [-13, 6],
            [-6, -28],
            [16, -35],
            [13, -10],
            [3, -24],
            [9, -41],
            [-4, -16]
        ],
        [
            [5444, 5191],
            [-2, -31],
            [-22, 14],
            [-22, 15],
            [-35, 2]
        ],
        [
            [5856, 5265],
            [-2, -69],
            [11, -8],
            [-9, -21],
            [-10, -16],
            [-11, -31],
            [-6, -27],
            [-1, -48],
            [-7, -22],
            [0, -45]
        ],
        [
            [5821, 4978],
            [-8, -16],
            [-1, -35],
            [-4, -5],
            [-2, -32]
        ],
        [
            [5814, 4792],
            [5, -55],
            [-2, -30],
            [5, -35],
            [16, -33],
            [15, -74]
        ],
        [
            [5853, 4565],
            [-11, 6],
            [-37, -10],
            [-7, -7],
            [-8, -38],
            [6, -26],
            [-5, -70],
            [-3, -59],
            [7, -11],
            [19, -23],
            [8, 11],
            [2, -64],
            [-21, 1],
            [-11, 32],
            [-10, 25],
            [-22, 9],
            [-6, 31],
            [-17, -19],
            [-22, 8],
            [-10, 27],
            [-17, 6],
            [-13, -2],
            [-2, 19],
            [-9, 1]
        ],
        [
            [5342, 4697],
            [-4, 18]
        ],
        [
            [5360, 4775],
            [8, -6],
            [9, 23],
            [15, -1],
            [2, -17],
            [11, -10],
            [16, 37],
            [16, 29],
            [7, 19],
            [-1, 48],
            [12, 58],
            [13, 30],
            [18, 29],
            [3, 18],
            [1, 22],
            [5, 21],
            [-2, 33],
            [4, 52],
            [5, 37],
            [8, 32],
            [2, 36]
        ],
        [
            [5760, 5367],
            [17, -49],
            [12, -7],
            [8, 10],
            [12, -4],
            [16, 12],
            [6, -25],
            [25, -39]
        ],
        [
            [5330, 4760],
            [-22, 62]
        ],
        [
            [5308, 4822],
            [21, 33],
            [-11, 39],
            [10, 15],
            [19, 7],
            [2, 26],
            [15, -28],
            [24, -2],
            [9, 27],
            [3, 40],
            [-3, 46],
            [-13, 35],
            [12, 68],
            [-7, 12],
            [-21, -5],
            [-7, 31],
            [2, 25]
        ],
        [
            [2906, 5049],
            [-12, 14],
            [-14, 19],
            [-7, -9],
            [-24, 8],
            [-7, 25],
            [-5, -1],
            [-28, 34]
        ],
        [
            [2809, 5139],
            [-3, 18],
            [10, 5],
            [-1, 29],
            [6, 22],
            [14, 4],
            [12, 37],
            [10, 31],
            [-10, 14],
            [5, 34],
            [-6, 54],
            [6, 16],
            [-4, 50],
            [-12, 31]
        ],
        [
            [2836, 5484],
            [4, 29],
            [9, -4],
            [5, 17],
            [-6, 35],
            [3, 9]
        ],
        [
            [2851, 5570],
            [14, -2],
            [21, 41],
            [12, 6],
            [0, 20],
            [5, 50],
            [16, 27],
            [17, 1],
            [3, 13],
            [21, -5],
            [22, 30],
            [11, 13],
            [14, 28],
            [9, -3],
            [8, -16],
            [-6, -20]
        ],
        [
            [3018, 5753],
            [-18, -10],
            [-7, -29],
            [-10, -17],
            [-8, -22],
            [-4, -42],
            [-8, -35],
            [15, -4],
            [3, -27],
            [6, -13],
            [3, -24],
            [-4, -22],
            [1, -12],
            [7, -5],
            [7, -20],
            [36, 5],
            [16, -7],
            [19, -51],
            [11, 6],
            [20, -3],
            [16, 7],
            [10, -10],
            [-5, -32],
            [-6, -20],
            [-2, -42],
            [5, -40],
            [8, -17],
            [1, -13],
            [-14, -30],
            [10, -13],
            [8, -21],
            [8, -58]
        ],
        [
            [3058, 4804],
            [-14, 31],
            [-8, 1],
            [18, 61],
            [-21, 27],
            [-17, -5],
            [-10, 10],
            [-15, -15],
            [-21, 7],
            [-16, 62],
            [-13, 15],
            [-9, 28],
            [-19, 28],
            [-7, -5]
        ],
        [
            [2695, 5543],
            [-15, 14],
            [-6, 12],
            [4, 10],
            [-1, 13],
            [-8, 14],
            [-11, 12],
            [-10, 8],
            [-1, 17],
            [-8, 10],
            [2, -17],
            [-5, -14],
            [-7, 17],
            [-9, 5],
            [-4, 12],
            [1, 18],
            [3, 19],
            [-8, 8],
            [7, 12]
        ],
        [
            [2619, 5713],
            [4, 7],
            [18, -15],
            [7, 7],
            [9, -5],
            [4, -12],
            [8, -4],
            [7, 13]
        ],
        [
            [2676, 5704],
            [7, -32],
            [11, -24],
            [13, -25]
        ],
        [
            [2707, 5623],
            [-11, -6],
            [0, -23],
            [6, -9],
            [-4, -7],
            [1, -11],
            [-2, -12],
            [-2, -12]
        ],
        [
            [2715, 6427],
            [23, -4],
            [22, 0],
            [26, -21],
            [11, -21],
            [26, 6],
            [10, -13],
            [24, -37],
            [17, -27],
            [9, 1],
            [17, -12],
            [-2, -17],
            [20, -2],
            [21, -24],
            [-3, -14],
            [-19, -7],
            [-18, -3],
            [-19, 4],
            [-40, -5],
            [18, 32],
            [-11, 16],
            [-18, 4],
            [-9, 17],
            [-7, 33],
            [-16, -2],
            [-26, 16],
            [-8, 12],
            [-36, 10],
            [-10, 11],
            [11, 15],
            [-28, 3],
            [-20, -31],
            [-11, -1],
            [-4, -14],
            [-14, -7],
            [-12, 6],
            [15, 18],
            [6, 22],
            [13, 13],
            [14, 11],
            [21, 6],
            [7, 6]
        ],
        [
            [5909, 7133],
            [2, 1],
            [4, 14],
            [20, -1],
            [25, 18],
            [-19, -25],
            [2, -11]
        ],
        [
            [5943, 7129],
            [-3, 2],
            [-5, -5],
            [-4, 1],
            [-2, -2],
            [0, 6],
            [-2, 4],
            [-6, 0],
            [-7, -5],
            [-5, 3]
        ],
        [
            [5943, 7129],
            [1, -5],
            [-28, -24],
            [-14, 8],
            [-7, 23],
            [14, 2]
        ],
        [
            [5377, 7945],
            [-16, 25],
            [-14, 15],
            [-3, 25],
            [-5, 17],
            [21, 13],
            [10, 15],
            [20, 11],
            [7, 11],
            [7, -6],
            [13, 6]
        ],
        [
            [5417, 8077],
            [13, -19],
            [21, -5],
            [-2, -17],
            [15, -12],
            [4, 15],
            [19, -6],
            [3, -19],
            [20, -3],
            [13, -29]
        ],
        [
            [5523, 7982],
            [-8, 0],
            [-4, -11],
            [-7, -3],
            [-2, -13],
            [-5, -3],
            [-1, -5],
            [-9, -7],
            [-12, 1],
            [-4, -13]
        ],
        [
            [5275, 8306],
            [1, -23],
            [28, -14],
            [-1, -21],
            [29, 11],
            [15, 16],
            [32, -23],
            [13, -19]
        ],
        [
            [5392, 8233],
            [6, -30],
            [-8, -16],
            [11, -21],
            [6, -31],
            [-2, -21],
            [12, -37]
        ],
        [
            [5207, 7871],
            [3, 42],
            [14, 40],
            [-40, 11],
            [-13, 16]
        ],
        [
            [5171, 7980],
            [2, 26],
            [-6, 13]
        ],
        [
            [5171, 8059],
            [-5, 62],
            [17, 0],
            [7, 22],
            [6, 54],
            [-5, 20]
        ],
        [
            [5191, 8217],
            [6, 13],
            [23, 3],
            [5, -13],
            [19, 29],
            [-6, 22],
            [-2, 34]
        ],
        [
            [5236, 8305],
            [21, -8],
            [18, 9]
        ],
        [
            [6196, 5808],
            [7, -19],
            [-1, -24],
            [-16, -14],
            [12, -16]
        ],
        [
            [6198, 5735],
            [-10, -32]
        ],
        [
            [6188, 5703],
            [-7, 11],
            [-6, -5],
            [-16, 1],
            [0, 18],
            [-2, 17],
            [9, 27],
            [10, 26]
        ],
        [
            [6176, 5798],
            [12, -5],
            [8, 15]
        ],
        [
            [5352, 8343],
            [-17, -48],
            [-29, 33],
            [-4, 25],
            [41, 19],
            [9, -29]
        ],
        [
            [5236, 8305],
            [-11, 32],
            [-1, 61],
            [5, 16],
            [8, 17],
            [24, 4],
            [10, 16],
            [22, 17],
            [-1, -30],
            [-8, -20],
            [4, -16],
            [15, -9],
            [-7, -22],
            [-8, 6],
            [-20, -42],
            [7, -29]
        ],
        [
            [3008, 6222],
            [3, 10],
            [22, 0],
            [16, -15],
            [8, 1],
            [5, -21],
            [15, 1],
            [-1, -17],
            [12, -2],
            [14, -22],
            [-10, -24],
            [-14, 13],
            [-12, -3],
            [-9, 3],
            [-5, -11],
            [-11, -3],
            [-4, 14],
            [-10, -8],
            [-11, -41],
            [-7, 10],
            [-1, 17]
        ],
        [
            [3008, 6124],
            [0, 16],
            [-7, 17],
            [7, 10],
            [2, 23],
            [-2, 32]
        ],
        [
            [5333, 6444],
            [-95, -112],
            [-81, -117],
            [-39, -26]
        ],
        [
            [5118, 6189],
            [-31, -6],
            [0, 38],
            [-13, 10],
            [-17, 16],
            [-7, 28],
            [-94, 129],
            [-93, 129]
        ],
        [
            [4863, 6533],
            [-105, 143]
        ],
        [
            [4758, 6676],
            [1, 11],
            [0, 4]
        ],
        [
            [4759, 6691],
            [0, 70],
            [44, 44],
            [28, 9],
            [23, 16],
            [11, 29],
            [32, 24],
            [1, 44],
            [16, 5],
            [13, 22],
            [36, 9],
            [5, 23],
            [-7, 13],
            [-10, 62],
            [-1, 36],
            [-11, 38]
        ],
        [
            [4939, 7135],
            [27, 32],
            [30, 11],
            [17, 24],
            [27, 18],
            [47, 11],
            [46, 4],
            [14, -8],
            [26, 23],
            [30, 0],
            [11, -13],
            [19, 3]
        ],
        [
            [5233, 7240],
            [-5, -30],
            [4, -56],
            [-6, -49],
            [-18, -33],
            [3, -45],
            [23, -35],
            [0, -14],
            [17, -24],
            [12, -106]
        ],
        [
            [5263, 6848],
            [9, -52],
            [1, -28],
            [-5, -48],
            [2, -27],
            [-3, -32],
            [2, -37],
            [-11, -25],
            [17, -43],
            [1, -25],
            [10, -33],
            [13, 11],
            [22, -28],
            [12, -37]
        ],
        [
            [2769, 4856],
            [15, 45],
            [-6, 25],
            [-11, -27],
            [-16, 26],
            [5, 16],
            [-4, 54],
            [9, 9],
            [5, 37],
            [11, 38],
            [-2, 24],
            [15, 13],
            [19, 23]
        ],
        [
            [2906, 5049],
            [4, -45],
            [-9, -39],
            [-30, -62],
            [-33, -23],
            [-17, -51],
            [-6, -40],
            [-15, -24],
            [-12, 29],
            [-11, 7],
            [-12, -5],
            [-1, 22],
            [8, 14],
            [-3, 24]
        ],
        [
            [5969, 6800],
            [-7, -23],
            [-6, -45],
            [-8, -31],
            [-6, -10],
            [-10, 19],
            [-12, 26],
            [-20, 85],
            [-3, -5],
            [12, -63],
            [17, -59],
            [21, -92],
            [10, -32],
            [9, -34],
            [25, -65],
            [-6, -10],
            [1, -39],
            [33, -53],
            [4, -12]
        ],
        [
            [6023, 6357],
            [-110, 0],
            [-107, 0],
            [-112, 0]
        ],
        [
            [5694, 6357],
            [0, 218],
            [0, 210],
            [-8, 47],
            [7, 37],
            [-5, 25],
            [10, 29]
        ],
        [
            [5698, 6923],
            [37, 0],
            [27, -15],
            [28, -18],
            [13, -9],
            [21, 19],
            [11, 17],
            [25, 5],
            [20, -8],
            [7, -29],
            [7, 19],
            [22, -14],
            [22, -3],
            [13, 15]
        ],
        [
            [5951, 6902],
            [18, -102]
        ],
        [
            [6176, 5798],
            [-10, 20],
            [-11, 34],
            [-12, 19],
            [-8, 21],
            [-24, 23],
            [-19, 1],
            [-7, 12],
            [-16, -14],
            [-17, 27],
            [-8, -44],
            [-33, 13]
        ],
        [
            [6011, 5910],
            [-3, 23],
            [12, 87],
            [3, 39],
            [9, 18],
            [20, 10],
            [14, 34]
        ],
        [
            [6066, 6121],
            [16, -69],
            [8, -54],
            [15, -29],
            [38, -55],
            [16, -34],
            [15, -34],
            [8, -20],
            [14, -18]
        ],
        [
            [4749, 7532],
            [1, 42],
            [-11, 25],
            [39, 43],
            [34, -11],
            [37, 1],
            [30, -10],
            [23, 3],
            [45, -2]
        ],
        [
            [4947, 7623],
            [11, -23],
            [51, -27],
            [10, 13],
            [31, -27],
            [32, 8]
        ],
        [
            [5082, 7567],
            [2, -35],
            [-26, -39],
            [-36, -12],
            [-2, -20],
            [-18, -33],
            [-10, -48],
            [11, -34],
            [-16, -26],
            [-6, -39],
            [-21, -11],
            [-20, -46],
            [-35, -1],
            [-27, 1],
            [-17, -21],
            [-11, -22],
            [-13, 5],
            [-11, 20],
            [-8, 34],
            [-26, 9]
        ],
        [
            [4792, 7249],
            [-2, 20],
            [10, 22],
            [4, 16],
            [-9, 17],
            [7, 39],
            [-11, 36],
            [12, 5],
            [1, 27],
            [5, 9],
            [0, 46],
            [13, 16],
            [-8, 30],
            [-16, 2],
            [-5, -8],
            [-16, 0],
            [-7, 29],
            [-11, -8],
            [-10, -15]
        ],
        [
            [5675, 8472],
            [3, 35],
            [-10, -8],
            [-18, 21],
            [-2, 34],
            [35, 17],
            [35, 8],
            [30, -10],
            [29, 2]
        ],
        [
            [5777, 8571],
            [4, -10],
            [-20, -34],
            [8, -55],
            [-12, -19]
        ],
        [
            [5757, 8453],
            [-22, 0],
            [-24, 22],
            [-13, 7],
            [-23, -10]
        ],
        [
            [6188, 5703],
            [-6, -21],
            [10, -32],
            [10, -29],
            [11, -21],
            [90, -70],
            [24, 0]
        ],
        [
            [6327, 5530],
            [-79, -177],
            [-36, -3],
            [-25, -41],
            [-17, -1],
            [-8, -19]
        ],
        [
            [6162, 5289],
            [-19, 0],
            [-11, 20],
            [-26, -25],
            [-8, -24],
            [-18, 4],
            [-6, 7],
            [-7, -1],
            [-9, 0],
            [-35, 50],
            [-19, 0],
            [-10, 20],
            [0, 33],
            [-14, 10]
        ],
        [
            [5980, 5383],
            [-17, 64],
            [-12, 14],
            [-5, 23],
            [-14, 29],
            [-17, 4],
            [9, 34],
            [15, 2],
            [4, 18]
        ],
        [
            [5943, 5571],
            [0, 53]
        ],
        [
            [5943, 5624],
            [8, 62],
            [13, 16],
            [3, 24],
            [12, 45],
            [17, 30],
            [11, 58],
            [4, 51]
        ],
        [
            [5794, 9138],
            [-4, -42],
            [42, -39],
            [-26, -45],
            [33, -67],
            [-19, -51],
            [25, -43],
            [-11, -39],
            [41, -40],
            [-11, -31],
            [-25, -34],
            [-60, -75]
        ],
        [
            [5779, 8632],
            [-50, -5],
            [-49, -21],
            [-45, -13],
            [-16, 32],
            [-27, 20],
            [6, 58],
            [-14, 53],
            [14, 35],
            [25, 37],
            [63, 64],
            [19, 12],
            [-3, 25],
            [-39, 28]
        ],
        [
            [5663, 8957],
            [-9, 23],
            [-1, 91],
            [-43, 40],
            [-37, 29]
        ],
        [
            [5573, 9140],
            [17, 16],
            [30, -32],
            [37, 3],
            [30, -14],
            [26, 26],
            [14, 44],
            [43, 20],
            [35, -24],
            [-11, -41]
        ],
        [
            [9954, 4033],
            [9, -17],
            [-4, -31],
            [-17, -8],
            [-16, 7],
            [-2, 26],
            [10, 21],
            [13, -8],
            [7, 10]
        ],
        [
            [0, 4079],
            [9981, -14],
            [-17, -13],
            [-4, 23],
            [14, 12],
            [9, 3],
            [-9983, 18]
        ],
        [
            [0, 4108],
            [0, -29]
        ],
        [
            [0, 4108],
            [6, 3],
            [-4, -28],
            [-2, -4]
        ],
        [
            [3300, 1994],
            [33, 36],
            [24, -15],
            [16, 24],
            [22, -27],
            [-8, -21],
            [-37, -17],
            [-13, 20],
            [-23, -26],
            [-14, 26]
        ],
        [
            [5265, 7548],
            [-9, -46],
            [-13, 12],
            [-6, 40],
            [5, 22],
            [18, 22],
            [5, -50]
        ],
        [
            [5157, 7984],
            [6, -6],
            [8, 2]
        ],
        [
            [5190, 7775],
            [-2, -17],
            [9, -22],
            [-10, -18],
            [7, -46],
            [15, -8],
            [-3, -25]
        ],
        [
            [5206, 7639],
            [-25, -34],
            [-55, 16],
            [-40, -19],
            [-4, -35]
        ],
        [
            [4947, 7623],
            [14, 35],
            [5, 118],
            [-28, 62],
            [-21, 30],
            [-42, 23],
            [-3, 43],
            [36, 12],
            [47, -15],
            [-9, 67],
            [26, -25],
            [65, 46],
            [8, 48],
            [24, 12]
        ],
        [
            [3485, 5194],
            [7, 25],
            [3, 27]
        ],
        [
            [3495, 5246],
            [4, 26],
            [-10, 34]
        ],
        [
            [3489, 5306],
            [-3, 41],
            [15, 51]
        ],
        [
            [3501, 5398],
            [9, -7],
            [21, -14],
            [29, -50],
            [5, -24]
        ],
        [
            [5308, 4822],
            [-29, 60],
            [-18, 49],
            [-17, 61],
            [1, 19],
            [6, 19],
            [7, 43],
            [5, 44]
        ],
        [
            [5263, 5117],
            [10, 4],
            [40, -1],
            [0, 71]
        ],
        [
            [4827, 8240],
            [-21, 12],
            [-17, -1],
            [6, 32],
            [-6, 32]
        ],
        [
            [4789, 8315],
            [23, 2],
            [30, -37],
            [-15, -40]
        ],
        [
            [4916, 8521],
            [-30, -63],
            [29, 8],
            [30, -1],
            [-7, -48],
            [-25, -53],
            [29, -4],
            [2, -6],
            [25, -69],
            [19, -10],
            [17, -67],
            [8, -24],
            [33, -11],
            [-3, -38],
            [-14, -17],
            [11, -30],
            [-25, -31],
            [-37, 0],
            [-48, -16],
            [-13, 12],
            [-18, -28],
            [-26, 7],
            [-19, -23],
            [-15, 12],
            [41, 62],
            [25, 13],
            [-1, 0],
            [-43, 9],
            [-8, 24],
            [29, 18],
            [-15, 32],
            [5, 39],
            [42, -6],
            [4, 35],
            [-19, 36],
            [0, 1],
            [-34, 10],
            [-7, 16],
            [10, 27],
            [-9, 16],
            [-15, -28],
            [-1, 57],
            [-14, 30],
            [10, 61],
            [21, 48],
            [23, -4],
            [33, 4]
        ],
        [
            [6154, 7511],
            [4, 26],
            [-7, 40],
            [-16, 22],
            [-16, 6],
            [-10, 19]
        ],
        [
            [6109, 7624],
            [4, 6],
            [23, -10],
            [41, -9],
            [38, -28],
            [5, -11],
            [17, 9],
            [25, -13],
            [9, -24],
            [17, -13]
        ],
        [
            [6210, 7485],
            [-27, 29],
            [-29, -3]
        ],
        [
            [5029, 5408],
            [-44, -35],
            [-15, -20],
            [-25, -17],
            [-25, 17]
        ],
        [
            [5000, 5708],
            [-2, -18],
            [12, -30],
            [0, -43],
            [2, -47],
            [7, -21],
            [-6, -54],
            [2, -29],
            [8, -37],
            [6, -21]
        ],
        [
            [4765, 5512],
            [-8, 1],
            [-5, -24],
            [-8, 1],
            [-6, 12],
            [2, 24],
            [-11, 36],
            [-8, -7],
            [-6, -1]
        ],
        [
            [4715, 5554],
            [-7, -3],
            [0, 21],
            [-4, 16],
            [0, 17],
            [-6, 25],
            [-7, 21],
            [-23, 0],
            [-6, -11],
            [-8, -1],
            [-4, -13],
            [-4, -17],
            [-14, -26]
        ],
        [
            [4632, 5583],
            [-13, 35],
            [-10, 24],
            [-8, 7],
            [-6, 12],
            [-4, 26],
            [-4, 13],
            [-8, 10]
        ],
        [
            [4579, 5710],
            [13, 29],
            [8, -2],
            [7, 10],
            [6, 0],
            [5, 8],
            [-3, 20],
            [3, 6],
            [1, 20]
        ],
        [
            [4619, 5801],
            [13, -1],
            [20, -14],
            [6, 1],
            [3, 7],
            [15, -5],
            [4, 4]
        ],
        [
            [4680, 5793],
            [1, -22],
            [5, 0],
            [7, 8],
            [5, -2],
            [7, -15],
            [12, -5],
            [8, 13],
            [9, 8],
            [6, 8],
            [6, -1],
            [6, -13],
            [3, -17],
            [12, -24],
            [-6, -16],
            [-1, -19],
            [6, 6],
            [3, -7],
            [-1, -17],
            [8, -18]
        ],
        [
            [4532, 5834],
            [3, 27]
        ],
        [
            [4535, 5861],
            [31, 1],
            [6, 14],
            [9, 1],
            [11, -14],
            [8, -1],
            [9, 10],
            [6, -17],
            [-12, -13],
            [-12, 1],
            [-12, 13],
            [-10, -14],
            [-5, -1],
            [-7, -8],
            [-25, 1]
        ],
        [
            [4579, 5710],
            [-15, 24],
            [-11, 4],
            [-7, 17],
            [1, 9],
            [-9, 13],
            [-2, 12]
        ],
        [
            [4536, 5789],
            [15, 10],
            [9, -2],
            [8, 7],
            [51, -3]
        ],
        [
            [5263, 5117],
            [-5, 9],
            [10, 66]
        ],
        [
            [5658, 7167],
            [15, -20],
            [22, 3],
            [20, -4],
            [0, -10],
            [15, 7],
            [-4, -18],
            [-40, -5],
            [1, 10],
            [-34, 12],
            [5, 25]
        ],
        [
            [5723, 7469],
            [-17, 2],
            [-14, 6],
            [-34, -16],
            [19, -33],
            [-14, -10],
            [-15, 0],
            [-15, 31],
            [-5, -13],
            [6, -36],
            [14, -27],
            [-10, -13],
            [15, -27],
            [14, -18],
            [0, -33],
            [-25, 16],
            [8, -30],
            [-18, -7],
            [11, -52],
            [-19, -1],
            [-23, 26],
            [-10, 47],
            [-5, 40],
            [-11, 27],
            [-14, 34],
            [-2, 16]
        ],
        [
            [5583, 7470],
            [18, 6],
            [11, 13],
            [15, -2],
            [5, 11],
            [5, 2]
        ],
        [
            [5725, 7529],
            [13, -16],
            [-8, -37],
            [-7, -7]
        ],
        [
            [3701, 9939],
            [93, 35],
            [97, -2],
            [36, 21],
            [98, 6],
            [222, -7],
            [174, -47],
            [-52, -23],
            [-106, -3],
            [-150, -5],
            [14, -11],
            [99, 7],
            [83, -21],
            [54, 18],
            [23, -21],
            [-30, -34],
            [71, 22],
            [135, 23],
            [83, -12],
            [15, -25],
            [-113, -42],
            [-16, -14],
            [-88, -10],
            [64, -3],
            [-32, -43],
            [-23, -38],
            [1, -66],
            [33, -38],
            [-43, -3],
            [-46, -19],
            [52, -31],
            [6, -50],
            [-30, -6],
            [36, -50],
            [-61, -5],
            [32, -24],
            [-9, -20],
            [-39, -10],
            [-39, 0],
            [35, -40],
            [0, -26],
            [-55, 24],
            [-14, -15],
            [37, -15],
            [37, -36],
            [10, -48],
            [-49, -11],
            [-22, 22],
            [-34, 34],
            [10, -40],
            [-33, -31],
            [73, -2],
            [39, -3],
            [-75, -52],
            [-75, -46],
            [-81, -21],
            [-31, 0],
            [-29, -23],
            [-38, -62],
            [-60, -42],
            [-19, -2],
            [-37, -15],
            [-40, -13],
            [-24, -37],
            [0, -41],
            [-15, -39],
            [-45, -47],
            [11, -47],
            [-12, -48],
            [-14, -58],
            [-39, -4],
            [-41, 49],
            [-56, 0],
            [-27, 32],
            [-18, 58],
            [-49, 73],
            [-14, 39],
            [-3, 53],
            [-39, 54],
            [10, 44],
            [-18, 21],
            [27, 69],
            [42, 22],
            [11, 25],
            [6, 46],
            [-32, -21],
            [-15, -9],
            [-25, -8],
            [-34, 19],
            [-2, 40],
            [11, 31],
            [25, 1],
            [57, -15],
            [-48, 37],
            [-24, 20],
            [-28, -8],
            [-23, 15],
            [31, 55],
            [-17, 22],
            [-22, 41],
            [-34, 62],
            [-35, 23],
            [0, 25],
            [-74, 34],
            [-59, 5],
            [-74, -3],
            [-68, -4],
            [-32, 19],
            [-49, 37],
            [73, 19],
            [56, 3],
            [-119, 15],
            [-62, 24],
            [3, 23],
            [106, 28],
            [101, 29],
            [11, 21],
            [-75, 22],
            [24, 23],
            [97, 41],
            [40, 7],
            [-12, 26],
            [66, 16],
            [86, 9],
            [85, 1],
            [30, -19],
            [74, 33],
            [66, -22],
            [39, -5],
            [58, -19],
            [-66, 32],
            [4, 25]
        ],
        [
            [2497, 5869],
            [-14, 10],
            [-17, 1],
            [-13, 12],
            [-15, 24]
        ],
        [
            [2438, 5916],
            [1, 18],
            [3, 13],
            [-4, 12],
            [13, 48],
            [36, 0],
            [1, 20],
            [-5, 4],
            [-3, 12],
            [-10, 14],
            [-11, 20],
            [13, 0],
            [0, 33],
            [26, 0],
            [26, 0]
        ],
        [
            [2529, 5996],
            [10, -11],
            [2, 9],
            [8, -7]
        ],
        [
            [2549, 5987],
            [-13, -23],
            [-13, -16],
            [-2, -12],
            [2, -11],
            [-5, -15]
        ],
        [
            [2518, 5910],
            [-7, -4],
            [2, -7],
            [-6, -6],
            [-9, -15],
            [-1, -9]
        ],
        [
            [3340, 5552],
            [18, -22],
            [17, -38],
            [1, -31],
            [10, -1],
            [15, -29],
            [11, -21]
        ],
        [
            [3412, 5410],
            [-4, -53],
            [-17, -15],
            [1, -14],
            [-5, -31],
            [13, -42],
            [9, -1],
            [3, -33],
            [17, -51]
        ],
        [
            [3313, 5365],
            [-19, 45],
            [7, 16],
            [0, 27],
            [17, 10],
            [7, 11],
            [-10, 22],
            [3, 21],
            [22, 35]
        ],
        [
            [2574, 5825],
            [-5, 18],
            [-8, 5]
        ],
        [
            [2561, 5848],
            [2, 24],
            [-4, 6],
            [-6, 4],
            [-12, -7],
            [-1, 8],
            [-8, 10],
            [-6, 12],
            [-8, 5]
        ],
        [
            [2549, 5987],
            [3, -3],
            [6, 11],
            [8, 1],
            [3, -5],
            [4, 3],
            [13, -6],
            [13, 2],
            [9, 6],
            [3, 7],
            [9, -3],
            [6, -4],
            [8, 1],
            [5, 5],
            [13, -8],
            [4, -1],
            [9, -11],
            [8, -13],
            [10, -9],
            [7, -17]
        ],
        [
            [2690, 5943],
            [-9, 2],
            [-4, -8],
            [-10, -8],
            [-7, 0],
            [-6, -8],
            [-6, 3],
            [-4, 9],
            [-3, -2],
            [-4, -14],
            [-3, 1],
            [0, -12],
            [-10, -17],
            [-5, -7],
            [-3, -7],
            [-8, 12],
            [-6, -16],
            [-6, 1],
            [-6, -2],
            [0, -29],
            [-4, 0],
            [-3, -14],
            [-9, -2]
        ],
        [
            [5522, 7770],
            [7, -23],
            [9, -17],
            [-11, -22]
        ],
        [
            [5515, 7577],
            [-3, -10]
        ],
        [
            [5512, 7567],
            [-26, 22],
            [-16, 21],
            [-26, 18],
            [-23, 43],
            [6, 5],
            [-13, 25],
            [-1, 19],
            [-17, 10],
            [-9, -26],
            [-8, 20],
            [0, 21],
            [1, 1]
        ],
        [
            [5380, 7746],
            [20, -2],
            [5, 9],
            [9, -9],
            [11, -1],
            [0, 16],
            [10, 6],
            [2, 24],
            [23, 16]
        ],
        [
            [5460, 7805],
            [8, -7],
            [21, -26],
            [23, -11],
            [10, 9]
        ],
        [
            [3008, 6124],
            [-19, 10],
            [-13, -5],
            [-17, 5],
            [-13, -11],
            [-15, 18],
            [3, 19],
            [25, -8],
            [21, -5],
            [10, 13],
            [-12, 26],
            [0, 23],
            [-18, 9],
            [7, 16],
            [17, -3],
            [24, -9]
        ],
        [
            [5471, 7900],
            [14, -15],
            [10, -6],
            [24, 7],
            [2, 12],
            [11, 2],
            [14, 9],
            [3, -4],
            [13, 8],
            [6, 13],
            [9, 4],
            [30, -18],
            [6, 6]
        ],
        [
            [5613, 7918],
            [15, -16],
            [2, -16]
        ],
        [
            [5630, 7886],
            [-17, -12],
            [-13, -40],
            [-17, -40],
            [-22, -11]
        ],
        [
            [5561, 7783],
            [-17, 2],
            [-22, -15]
        ],
        [
            [5460, 7805],
            [-6, 20],
            [-4, 0]
        ],
        [
            [8352, 4453],
            [-11, -2],
            [-37, 42],
            [26, 11],
            [14, -18],
            [10, -17],
            [-2, -16]
        ],
        [
            [8471, 4532],
            [2, -11],
            [1, -18]
        ],
        [
            [8474, 4503],
            [-18, -45],
            [-24, -13],
            [-3, 8],
            [2, 20],
            [12, 36],
            [28, 23]
        ],
        [
            [8274, 4579],
            [10, -16],
            [17, 5],
            [7, -25],
            [-32, -12],
            [-19, -8],
            [-15, 1],
            [10, 34],
            [15, 0],
            [7, 21]
        ],
        [
            [8413, 4579],
            [-4, -32],
            [-42, -17],
            [-37, 7],
            [0, 22],
            [22, 12],
            [18, -18],
            [18, 5],
            [25, 21]
        ],
        [
            [8017, 4657],
            [53, -6],
            [6, 25],
            [51, -29],
            [10, -38],
            [42, -11],
            [34, -35],
            [-31, -23],
            [-31, 24],
            [-25, -1],
            [-29, 4],
            [-26, 11],
            [-32, 22],
            [-21, 6],
            [-11, -7],
            [-51, 24],
            [-5, 25],
            [-25, 5],
            [19, 56],
            [34, -3],
            [22, -23],
            [12, -5],
            [4, -21]
        ],
        [
            [8741, 4690],
            [-14, -40],
            [-3, 45],
            [5, 21],
            [6, 20],
            [7, -17],
            [-1, -29]
        ],
        [
            [8534, 4853],
            [-11, -19],
            [-19, 10],
            [-5, 26],
            [28, 3],
            [7, -20]
        ],
        [
            [8623, 4875],
            [10, -45],
            [-23, 24],
            [-23, 5],
            [-16, -4],
            [-19, 2],
            [6, 33],
            [35, 2],
            [30, -17]
        ],
        [
            [8916, 4904],
            [0, -193],
            [1, -192]
        ],
        [
            [8917, 4519],
            [-25, 48],
            [-28, 12],
            [-7, -17],
            [-35, -1],
            [12, 48],
            [17, 16],
            [-7, 64],
            [-14, 50],
            [-53, 50],
            [-23, 5],
            [-42, 54],
            [-8, -28],
            [-11, -5],
            [-6, 21],
            [0, 26],
            [-21, 29],
            [29, 21],
            [20, -1],
            [-2, 16],
            [-41, 0],
            [-11, 35],
            [-25, 11],
            [-11, 29],
            [37, 14],
            [14, 20],
            [45, -25],
            [4, -22],
            [8, -95],
            [29, -35],
            [23, 62],
            [32, 36],
            [25, 0],
            [23, -21],
            [21, -21],
            [30, -11]
        ],
        [
            [8478, 5141],
            [-22, -58],
            [-21, -12],
            [-27, 12],
            [-46, -3],
            [-24, -8],
            [-4, -45],
            [24, -53],
            [15, 27],
            [52, 20],
            [-2, -27],
            [-12, 9],
            [-12, -35],
            [-25, -23],
            [27, -76],
            [-5, -20],
            [25, -68],
            [-1, -39],
            [-14, -17],
            [-11, 20],
            [13, 49],
            [-27, -23],
            [-7, 16],
            [3, 23],
            [-20, 35],
            [3, 57],
            [-19, -18],
            [2, -69],
            [1, -84],
            [-17, -9],
            [-12, 18],
            [8, 54],
            [-4, 57],
            [-12, 1],
            [-9, 40],
            [12, 39],
            [4, 47],
            [14, 89],
            [5, 24],
            [24, 44],
            [22, -18],
            [35, -8],
            [32, 3],
            [27, 43],
            [5, -14]
        ],
        [
            [8574, 5124],
            [-2, -51],
            [-14, 6],
            [-4, -36],
            [11, -32],
            [-8, -7],
            [-11, 38],
            [-8, 75],
            [6, 47],
            [9, 22],
            [2, -32],
            [16, -5],
            [3, -25]
        ],
        [
            [8045, 5176],
            [5, -39],
            [19, -34],
            [18, 12],
            [18, -4],
            [16, 30],
            [13, 5],
            [26, -17],
            [23, 13],
            [14, 82],
            [11, 21],
            [10, 67],
            [32, 0],
            [24, -10]
        ],
        [
            [8274, 5302],
            [-16, -53],
            [20, -56],
            [-5, -28],
            [32, -54],
            [-33, -7],
            [-10, -40],
            [2, -54],
            [-27, -40],
            [-1, -59],
            [-10, -91],
            [-5, 21],
            [-31, -26],
            [-11, 36],
            [-20, 3],
            [-14, 19],
            [-33, -21],
            [-10, 29],
            [-18, -4],
            [-23, 7],
            [-4, 79],
            [-14, 17],
            [-13, 50],
            [-4, 52],
            [3, 55],
            [16, 39]
        ],
        [
            [7939, 4712],
            [-31, -1],
            [-24, 49],
            [-35, 48],
            [-12, 36],
            [-21, 48],
            [-14, 44],
            [-21, 83],
            [-24, 49],
            [-9, 51],
            [-10, 46],
            [-25, 37],
            [-14, 51],
            [-21, 33],
            [-29, 65],
            [-3, 30],
            [18, -2],
            [43, -12],
            [25, -57],
            [21, -40],
            [16, -25],
            [26, -63],
            [28, -1],
            [23, -41],
            [16, -49],
            [22, -27],
            [-12, -49],
            [16, -20],
            [10, -2],
            [5, -41],
            [10, -33],
            [20, -5],
            [14, -37],
            [-7, -74],
            [-1, -91]
        ],
        [
            [7252, 6841],
            [-17, -27],
            [-11, -55],
            [27, -23],
            [26, -29],
            [36, -33],
            [38, -8],
            [16, -30],
            [22, -5],
            [33, -14],
            [23, 1],
            [4, 23],
            [-4, 38],
            [2, 25]
        ],
        [
            [7703, 6727],
            [2, -22],
            [-10, -11],
            [2, -36],
            [-19, 10],
            [-36, -41],
            [0, -33],
            [-15, -50],
            [-1, -29],
            [-13, -48],
            [-21, 13],
            [-1, -61],
            [-7, -20],
            [3, -25],
            [-14, -14]
        ],
        [
            [7472, 6360],
            [-4, -21],
            [-19, 1],
            [-34, -13],
            [2, -44],
            [-15, -35],
            [-40, -40],
            [-31, -69],
            [-21, -38],
            [-28, -38],
            [0, -27],
            [-13, -15],
            [-26, -21],
            [-12, -3],
            [-9, -45],
            [6, -77],
            [1, -49],
            [-11, -56],
            [0, -101],
            [-15, -2],
            [-12, -46],
            [8, -19],
            [-25, -17],
            [-10, -40],
            [-11, -17],
            [-26, 55],
            [-13, 83],
            [-11, 60],
            [-9, 28],
            [-15, 56],
            [-7, 74],
            [-5, 37],
            [-25, 81],
            [-12, 115],
            [-8, 75],
            [0, 72],
            [-5, 55],
            [-41, -35],
            [-19, 7],
            [-36, 71],
            [13, 22],
            [-8, 23],
            [-33, 50]
        ],
        [
            [6893, 6457],
            [19, 40],
            [61, -1],
            [-6, 51],
            [-15, 30],
            [-4, 46],
            [-18, 26],
            [31, 62],
            [32, -4],
            [29, 61],
            [18, 60],
            [27, 60],
            [-1, 42],
            [24, 34],
            [-23, 29],
            [-9, 40],
            [-10, 52],
            [14, 25],
            [42, -14],
            [31, 9],
            [26, 49]
        ],
        [
            [4827, 8240],
            [5, -42],
            [-21, -53],
            [-49, -35],
            [-40, 9],
            [23, 62],
            [-15, 60],
            [38, 46],
            [21, 28]
        ],
        [
            [6497, 7255],
            [25, 12],
            [19, 33],
            [19, -1],
            [12, 11],
            [20, -6],
            [31, -30],
            [22, -6],
            [31, -53],
            [21, -2],
            [3, -49]
        ],
        [
            [6690, 6820],
            [14, -31],
            [11, -36],
            [27, -26],
            [1, -52],
            [13, -10],
            [2, -27],
            [-40, -30],
            [-10, -69]
        ],
        [
            [6708, 6539],
            [-53, 18],
            [-30, 13],
            [-31, 8],
            [-12, 73],
            [-13, 10],
            [-22, -11],
            [-28, -28],
            [-34, 20],
            [-28, 45],
            [-27, 17],
            [-18, 56],
            [-21, 79],
            [-15, -10],
            [-17, 20],
            [-11, -24]
        ],
        [
            [6348, 6825],
            [-15, 32],
            [0, 31],
            [-9, 0],
            [5, 43],
            [-15, 45],
            [-34, 32],
            [-19, 56],
            [6, 46],
            [14, 21],
            [-2, 34],
            [-18, 18],
            [-18, 70]
        ],
        [
            [6243, 7253],
            [-15, 48],
            [5, 18],
            [-8, 68],
            [19, 17]
        ],
        [
            [6357, 7321],
            [9, -43],
            [26, -13],
            [20, -29],
            [39, -10],
            [44, 15],
            [2, 14]
        ],
        [
            [6348, 6825],
            [-16, 3]
        ],
        [
            [6332, 6828],
            [-19, 5],
            [-20, -56]
        ],
        [
            [6293, 6777],
            [-52, 4],
            [-78, 119],
            [-41, 41],
            [-34, 16]
        ],
        [
            [6088, 6957],
            [-11, 72]
        ],
        [
            [6077, 7029],
            [61, 62],
            [11, 71],
            [-3, 43],
            [16, 15],
            [14, 37]
        ],
        [
            [6176, 7257],
            [12, 9],
            [32, -8],
            [10, -15],
            [13, 10]
        ],
        [
            [4597, 8984],
            [-7, -39],
            [31, -40],
            [-36, -45],
            [-80, -41],
            [-24, -10],
            [-36, 8],
            [-78, 19],
            [28, 26],
            [-61, 29],
            [49, 12],
            [-1, 17],
            [-58, 14],
            [19, 38],
            [42, 9],
            [43, -40],
            [42, 32],
            [35, -17],
            [45, 32],
            [47, -4]
        ],
        [
            [5992, 6990],
            [-5, -19]
        ],
        [
            [5987, 6971],
            [-10, 8],
            [-6, -39],
            [7, -7],
            [-7, -8],
            [-1, -15],
            [13, 8]
        ],
        [
            [5983, 6918],
            [0, -23],
            [-14, -95]
        ],
        [
            [5951, 6902],
            [8, 19],
            [-2, 4],
            [8, 27],
            [5, 45],
            [4, 15],
            [1, 0]
        ],
        [
            [5975, 7012],
            [9, 0],
            [3, 11],
            [7, 0]
        ],
        [
            [5994, 7023],
            [1, -24],
            [-4, -9],
            [1, 0]
        ],
        [
            [5431, 7316],
            [-10, -46],
            [4, -19],
            [-6, -30],
            [-21, 22],
            [-14, 7],
            [-39, 30],
            [4, 30],
            [32, -6],
            [28, 7],
            [22, 5]
        ],
        [
            [5255, 7492],
            [17, -42],
            [-4, -78],
            [-13, 4],
            [-11, -20],
            [-10, 16],
            [-2, 71],
            [-6, 34],
            [15, -3],
            [14, 18]
        ],
        [
            [5383, 7805],
            [-3, -29],
            [7, -25]
        ],
        [
            [5387, 7751],
            [-22, 8],
            [-23, -20],
            [1, -30],
            [-3, -17],
            [9, -30],
            [26, -29],
            [14, -49],
            [31, -48],
            [22, 0],
            [7, -13],
            [-8, -11],
            [25, -22],
            [20, -18],
            [24, -30],
            [3, -11],
            [-5, -22],
            [-16, 28],
            [-24, 10],
            [-12, -39],
            [20, -21],
            [-3, -31],
            [-11, -4],
            [-15, -50],
            [-12, -5],
            [0, 18],
            [6, 32],
            [6, 12],
            [-11, 35],
            [-8, 29],
            [-12, 8],
            [-8, 25],
            [-18, 11],
            [-12, 24],
            [-21, 4],
            [-21, 26],
            [-26, 39],
            [-19, 34],
            [-8, 58],
            [-14, 7],
            [-23, 20],
            [-12, -8],
            [-16, -28],
            [-12, -4]
        ],
        [
            [2845, 6150],
            [19, -5],
            [14, -15],
            [5, -16],
            [-19, -1],
            [-9, -10],
            [-15, 10],
            [-16, 21],
            [3, 14],
            [12, 4],
            [6, -2]
        ],
        [
            [5992, 6990],
            [31, -24],
            [54, 63]
        ],
        [
            [6088, 6957],
            [-5, -8],
            [-56, -30],
            [28, -59],
            [-9, -10],
            [-5, -20],
            [-21, -8],
            [-7, -21],
            [-12, -19],
            [-31, 10]
        ],
        [
            [5970, 6792],
            [-1, 8]
        ],
        [
            [5983, 6918],
            [4, 17],
            [0, 36]
        ],
        [
            [8739, 7075],
            [4, -20],
            [-16, -36],
            [-11, 19],
            [-15, -14],
            [-7, -34],
            [-18, 16],
            [0, 28],
            [15, 36],
            [16, -7],
            [12, 25],
            [20, -13]
        ],
        [
            [8915, 7252],
            [-10, -47],
            [4, -30],
            [-14, -42],
            [-35, -27],
            [-49, -4],
            [-40, -67],
            [-19, 22],
            [-1, 44],
            [-48, -13],
            [-33, -27],
            [-32, -2],
            [28, -43],
            [-19, -101],
            [-18, -24],
            [-13, 23],
            [7, 53],
            [-18, 17],
            [-11, 41],
            [26, 18],
            [15, 37],
            [28, 30],
            [20, 41],
            [55, 17],
            [30, -12],
            [29, 105],
            [19, -28],
            [40, 59],
            [16, 23],
            [18, 72],
            [-5, 67],
            [11, 37],
            [30, 11],
            [15, -82],
            [-1, -48],
            [-25, -59],
            [0, -61]
        ],
        [
            [8997, 7667],
            [19, -12],
            [20, 25],
            [6, -67],
            [-41, -16],
            [-25, -59],
            [-43, 41],
            [-15, -65],
            [-31, -1],
            [-4, 59],
            [14, 46],
            [29, 3],
            [8, 82],
            [9, 46],
            [32, -62],
            [22, -20]
        ],
        [
            [6970, 7554],
            [-15, -10],
            [-37, -42],
            [-12, -42],
            [-11, 0],
            [-7, 28],
            [-36, 2],
            [-5, 48],
            [-14, 0],
            [2, 60],
            [-33, 43],
            [-48, -5],
            [-32, -8],
            [-27, 53],
            [-22, 22],
            [-43, 43],
            [-6, 5],
            [-71, -35],
            [1, -218]
        ],
        [
            [6554, 7498],
            [-14, -3],
            [-20, 46],
            [-18, 17],
            [-32, -12],
            [-12, -20]
        ],
        [
            [6458, 7526],
            [-2, 14],
            [7, 25],
            [-5, 21],
            [-32, 20],
            [-13, 53],
            [-15, 15],
            [-1, 19],
            [27, -6],
            [1, 44],
            [23, 9],
            [25, -9],
            [5, 58],
            [-5, 36],
            [-28, -2],
            [-24, 14],
            [-32, -26],
            [-26, -12]
        ],
        [
            [6363, 7799],
            [-14, 9],
            [3, 31],
            [-18, 39],
            [-20, -2],
            [-24, 40],
            [16, 45],
            [-8, 12],
            [22, 65],
            [29, -34],
            [3, 43],
            [58, 64],
            [43, 2],
            [61, -41],
            [33, -24],
            [30, 25],
            [44, 1],
            [35, -30],
            [8, 17],
            [39, -2],
            [7, 28],
            [-45, 40],
            [27, 29],
            [-5, 16],
            [26, 15],
            [-20, 41],
            [13, 20],
            [104, 21],
            [13, 14],
            [70, 22],
            [25, 24],
            [50, -12],
            [9, -61],
            [29, 14],
            [35, -20],
            [-2, -32],
            [27, 3],
            [69, 56],
            [-10, -19],
            [35, -46],
            [62, -150],
            [15, 31],
            [39, -34],
            [39, 16],
            [16, -11],
            [13, -34],
            [20, -12],
            [11, -25],
            [36, 8],
            [15, -36]
        ],
        [
            [7229, 7559],
            [-17, 9],
            [-14, 21],
            [-42, 6],
            [-46, 2],
            [-10, -6],
            [-39, 24],
            [-16, -12],
            [-4, -35],
            [-46, 21],
            [-18, -9],
            [-7, -26]
        ],
        [
            [6155, 4958],
            [-20, -24],
            [-7, -24],
            [-10, -4],
            [-4, -42],
            [-9, -24],
            [-5, -39],
            [-12, -20]
        ],
        [
            [6088, 4781],
            [-40, 59],
            [-1, 35],
            [-101, 120],
            [-5, 6]
        ],
        [
            [5941, 5001],
            [0, 63],
            [8, 24],
            [14, 39],
            [10, 43],
            [-13, 68],
            [-3, 30],
            [-13, 41]
        ],
        [
            [5944, 5309],
            [17, 35],
            [19, 39]
        ],
        [
            [6162, 5289],
            [-24, -67],
            [0, -215],
            [17, -49]
        ],
        [
            [7046, 7387],
            [-53, -9],
            [-34, 19],
            [-30, -4],
            [3, 34],
            [30, -10],
            [10, 18]
        ],
        [
            [6972, 7435],
            [21, -6],
            [36, 43],
            [-33, 31],
            [-20, -15],
            [-21, 22],
            [24, 39],
            [-9, 5]
        ],
        [
            [7849, 5777],
            [-7, 72],
            [18, 49],
            [36, 11],
            [26, -8]
        ],
        [
            [7922, 5901],
            [23, -23],
            [12, 40],
            [25, -21]
        ],
        [
            [7982, 5897],
            [6, -40],
            [-3, -71],
            [-47, -45],
            [13, -36],
            [-30, -4],
            [-24, -24]
        ],
        [
            [7897, 5677],
            [-23, 9],
            [-11, 30],
            [-14, 61]
        ],
        [
            [8564, 7339],
            [24, -70],
            [7, -38],
            [0, -68],
            [-10, -33],
            [-25, -11],
            [-22, -25],
            [-25, -5],
            [-3, 32],
            [5, 45],
            [-13, 61],
            [21, 10],
            [-19, 51]
        ],
        [
            [8504, 7288],
            [2, 5],
            [12, -2],
            [11, 27],
            [20, 2],
            [11, 4],
            [4, 15]
        ],
        [
            [5557, 7574],
            [5, 13]
        ],
        [
            [5562, 7587],
            [7, 4],
            [4, 20],
            [5, 3],
            [4, -8],
            [5, -4],
            [3, -10],
            [5, -2],
            [5, -11],
            [4, 0],
            [-3, -14],
            [-3, -7],
            [1, -5]
        ],
        [
            [5599, 7553],
            [-6, -2],
            [-17, -9],
            [-1, -12],
            [-4, 0]
        ],
        [
            [6332, 6828],
            [6, -26],
            [-3, -13],
            [9, -45]
        ],
        [
            [6344, 6744],
            [-19, -1],
            [-7, 28],
            [-25, 6]
        ],
        [
            [7922, 5901],
            [9, 26],
            [1, 50],
            [-22, 52],
            [-2, 58],
            [-21, 48],
            [-21, 4],
            [-6, -20],
            [-16, -2],
            [-8, 10],
            [-30, -35],
            [0, 53],
            [7, 62],
            [-19, 3],
            [-2, 36],
            [-12, 18]
        ],
        [
            [7780, 6264],
            [6, 21],
            [24, 39]
        ],
        [
            [7837, 6385],
            [17, -47],
            [12, -54],
            [34, 0],
            [11, -52],
            [-18, -15],
            [-8, -21],
            [34, -36],
            [23, -70],
            [17, -52],
            [21, -41],
            [7, -41],
            [-5, -59]
        ],
        [
            [5975, 7012],
            [10, 49],
            [14, 41],
            [0, 2]
        ],
        [
            [5999, 7104],
            [13, -3],
            [4, -23],
            [-15, -22],
            [-7, -33]
        ],
        [
            [4785, 5315],
            [-7, 0],
            [-29, 28],
            [-25, 45],
            [-24, 32],
            [-18, 38]
        ],
        [
            [4682, 5458],
            [6, 19],
            [2, 17],
            [12, 33],
            [13, 27]
        ],
        [
            [5412, 6408],
            [-20, -22],
            [-15, 33],
            [-44, 25]
        ],
        [
            [5263, 6848],
            [13, 14],
            [3, 25],
            [-3, 24],
            [19, 23],
            [8, 19],
            [14, 17],
            [2, 45]
        ],
        [
            [5319, 7015],
            [32, -20],
            [12, 5],
            [23, -10],
            [37, -26],
            [13, -53],
            [25, -11],
            [39, -25],
            [30, -29],
            [13, 15],
            [13, 27],
            [-6, 45],
            [9, 29],
            [20, 28],
            [19, 8],
            [37, -12],
            [10, -27],
            [10, 0],
            [9, -10],
            [28, -7],
            [6, -19]
        ],
        [
            [5694, 6357],
            [0, -118],
            [-32, 0],
            [0, -25]
        ],
        [
            [5662, 6214],
            [-111, 113],
            [-111, 113],
            [-28, -32]
        ],
        [
            [7271, 5502],
            [-4, -62],
            [-12, -16],
            [-24, -14],
            [-13, 47],
            [-5, 85],
            [13, 96],
            [19, -33],
            [13, -42],
            [13, -61]
        ],
        [
            [5804, 3347],
            [10, -18],
            [-9, -29],
            [-4, -19],
            [-16, -9],
            [-5, -19],
            [-10, -6],
            [-21, 46],
            [15, 37],
            [15, 23],
            [13, 12],
            [12, -18]
        ],
        [
            [5631, 8267],
            [-2, 15],
            [3, 16],
            [-13, 10],
            [-29, 10]
        ],
        [
            [5590, 8318],
            [-6, 50]
        ],
        [
            [5584, 8368],
            [32, 18],
            [47, -4],
            [27, 6],
            [4, -12],
            [15, -4],
            [26, -29]
        ],
        [
            [5652, 8242],
            [-7, 19],
            [-14, 6]
        ],
        [
            [5584, 8368],
            [1, 44],
            [14, 37],
            [26, 20],
            [22, -44],
            [22, 1],
            [6, 46]
        ],
        [
            [5757, 8453],
            [14, -14],
            [2, -28],
            [9, -35]
        ],
        [
            [4759, 6691],
            [-4, 0],
            [0, -31],
            [-17, -2],
            [-9, -14],
            [-13, 0],
            [-10, 8],
            [-23, -6],
            [-9, -46],
            [-9, -5],
            [-13, -74],
            [-38, -64],
            [-9, -81],
            [-12, -27],
            [-3, -21],
            [-63, -5]
        ],
        [
            [4527, 6323],
            [1, 27],
            [11, 17],
            [9, 30],
            [-2, 20],
            [10, 42],
            [15, 38],
            [9, 9],
            [8, 35],
            [0, 31],
            [10, 37],
            [19, 21],
            [18, 60],
            [0, 1],
            [14, 23],
            [26, 6],
            [22, 41],
            [14, 16],
            [23, 49],
            [-7, 73],
            [10, 51],
            [4, 31],
            [18, 40],
            [28, 27],
            [21, 25],
            [18, 61],
            [9, 36],
            [20, 0],
            [17, -25],
            [26, 4],
            [29, -13],
            [12, -1]
        ],
        [
            [5739, 7906],
            [6, 9],
            [19, 6],
            [20, -19],
            [12, -2],
            [12, -16],
            [-2, -20],
            [11, -9],
            [4, -25],
            [9, -15],
            [-2, -9],
            [5, -6],
            [-7, -4],
            [-16, 1],
            [-3, 9],
            [-6, -5],
            [2, -11],
            [-7, -19],
            [-5, -20],
            [-7, -6]
        ],
        [
            [5784, 7745],
            [-5, 27],
            [3, 25],
            [-1, 26],
            [-16, 35],
            [-9, 25],
            [-9, 17],
            [-8, 6]
        ],
        [
            [6376, 4321],
            [7, -25],
            [7, -39],
            [4, -71],
            [7, -28],
            [-2, -28],
            [-5, -18],
            [-10, 35],
            [-5, -18],
            [5, -43],
            [-2, -25],
            [-8, -14],
            [-1, -50],
            [-11, -69],
            [-14, -81],
            [-17, -112],
            [-11, -82],
            [-12, -69],
            [-23, -14],
            [-24, -25],
            [-16, 15],
            [-22, 21],
            [-8, 31],
            [-2, 53],
            [-10, 47],
            [-2, 42],
            [5, 43],
            [13, 10],
            [0, 20],
            [13, 45],
            [2, 37],
            [-6, 28],
            [-5, 38],
            [-2, 54],
            [9, 33],
            [4, 38],
            [14, 2],
            [15, 12],
            [11, 10],
            [12, 1],
            [16, 34],
            [23, 36],
            [8, 30],
            [-4, 25],
            [12, -7],
            [15, 41],
            [1, 36],
            [9, 26],
            [10, -25]
        ],
        [
            [2301, 6586],
            [-10, -52],
            [-5, -43],
            [-2, -79],
            [-3, -29],
            [5, -32],
            [9, -29],
            [5, -45],
            [19, -44],
            [6, -34],
            [11, -29],
            [29, -16],
            [12, -25],
            [24, 17],
            [21, 6],
            [21, 11],
            [18, 10],
            [17, 24],
            [7, 34],
            [2, 50],
            [5, 17],
            [19, 16],
            [29, 13],
            [25, -2],
            [17, 5],
            [6, -12],
            [-1, -29],
            [-15, -35],
            [-6, -36],
            [5, -10],
            [-4, -26],
            [-7, -46],
            [-7, 15],
            [-6, -1]
        ],
        [
            [2438, 5916],
            [-32, 64],
            [-14, 19],
            [-23, 16],
            [-15, -5],
            [-22, -22],
            [-14, -6],
            [-20, 16],
            [-21, 11],
            [-26, 27],
            [-21, 8],
            [-31, 28],
            [-23, 28],
            [-7, 16],
            [-16, 3],
            [-28, 19],
            [-12, 27],
            [-30, 34],
            [-14, 37],
            [-6, 29],
            [9, 5],
            [-3, 17],
            [7, 16],
            [0, 20],
            [-10, 27],
            [-2, 23],
            [-9, 30],
            [-25, 59],
            [-28, 46],
            [-13, 37],
            [-24, 24],
            [-5, 14],
            [4, 37],
            [-14, 13],
            [-17, 29],
            [-7, 41],
            [-14, 5],
            [-17, 31],
            [-13, 29],
            [-1, 19],
            [-15, 44],
            [-10, 45],
            [1, 23],
            [-20, 23],
            [-10, -2],
            [-15, 16],
            [-5, -24],
            [5, -28],
            [2, -45],
            [10, -24],
            [21, -41],
            [4, -14],
            [4, -4],
            [4, -20],
            [5, 1],
            [6, -38],
            [8, -15],
            [6, -21],
            [17, -30],
            [10, -55],
            [8, -26],
            [8, -28],
            [1, -31],
            [13, -2],
            [12, -27],
            [10, -26],
            [-1, -11],
            [-12, -21],
            [-5, 0],
            [-7, 36],
            [-18, 33],
            [-20, 29],
            [-14, 15],
            [1, 43],
            [-5, 32],
            [-13, 19],
            [-19, 26],
            [-4, -8],
            [-7, 16],
            [-17, 14],
            [-16, 34],
            [2, 5],
            [11, -4],
            [11, 22],
            [1, 27],
            [-22, 42],
            [-16, 17],
            [-10, 36],
            [-11, 39],
            [-12, 47],
            [-12, 54]
        ],
        [
            [1746, 6980],
            [32, 4],
            [35, 7],
            [-2, -12],
            [41, -29],
            [64, -41],
            [55, 0],
            [22, 0],
            [0, 24],
            [48, 0],
            [10, -20],
            [15, -19],
            [16, -26],
            [9, -31],
            [7, -32],
            [15, -18],
            [23, -18],
            [17, 47],
            [23, 1],
            [19, -24],
            [14, -40],
            [10, -35],
            [16, -34],
            [6, -41],
            [8, -28],
            [22, -18],
            [20, -13],
            [10, 2]
        ],
        [
            [5599, 7553],
            [9, 4],
            [13, 1]
        ],
        [
            [4661, 5921],
            [10, 11],
            [4, 35],
            [9, 1],
            [20, -16],
            [15, 11],
            [11, -4],
            [4, 13],
            [112, 1],
            [6, 42],
            [-5, 7],
            [-13, 255],
            [-14, 255],
            [43, 1]
        ],
        [
            [5118, 6189],
            [0, -136],
            [-15, -39],
            [-2, -37],
            [-25, -9],
            [-38, -5],
            [-10, -21],
            [-18, -3]
        ],
        [
            [4680, 5793],
            [1, 18],
            [-2, 23],
            [-11, 16],
            [-5, 34],
            [-2, 37]
        ],
        [
            [7737, 5644],
            [-3, 44],
            [9, 45],
            [-10, 35],
            [3, 65],
            [-12, 30],
            [-9, 71],
            [-5, 75],
            [-12, 49],
            [-18, -30],
            [-32, -42],
            [-15, 5],
            [-17, 14],
            [9, 73],
            [-6, 56],
            [-21, 68],
            [3, 21],
            [-16, 7],
            [-20, 49]
        ],
        [
            [7780, 6264],
            [-16, -14],
            [-16, -26],
            [-20, -2],
            [-12, -64],
            [-12, -11],
            [14, -52],
            [17, -43],
            [12, -39],
            [-11, -51],
            [-9, -11],
            [6, -30],
            [19, -47],
            [3, -33],
            [0, -27],
            [11, -54],
            [-16, -55],
            [-13, -61]
        ],
        [
            [5538, 7532],
            [-6, 4],
            [-8, 19],
            [-12, 12]
        ],
        [
            [5533, 7629],
            [8, -10],
            [4, -9],
            [9, -6],
            [10, -12],
            [-2, -5]
        ],
        [
            [7437, 7970],
            [29, 10],
            [53, 51],
            [42, 28],
            [24, -18],
            [29, -1],
            [19, -28],
            [28, -2],
            [40, -15],
            [27, 41],
            [-11, 35],
            [28, 61],
            [31, -24],
            [26, -7],
            [32, -15],
            [6, -44],
            [39, -25],
            [26, 11],
            [36, 7],
            [27, -7],
            [28, -29],
            [16, -30],
            [26, 1],
            [35, -10],
            [26, 15],
            [36, 9],
            [41, 42],
            [17, -6],
            [14, -20],
            [33, 5]
        ],
        [
            [5959, 4377],
            [21, 5],
            [34, -17],
            [7, 8],
            [19, 1],
            [10, 18],
            [17, -1],
            [30, 23],
            [22, 34]
        ],
        [
            [6119, 4448],
            [5, -26],
            [-1, -59],
            [3, -52],
            [1, -92],
            [5, -29],
            [-8, -43],
            [-11, -41],
            [-18, -36],
            [-25, -23],
            [-31, -28],
            [-32, -64],
            [-10, -11],
            [-20, -42],
            [-11, -13],
            [-3, -42],
            [14, -45],
            [5, -35],
            [0, -17],
            [5, 3],
            [-1, -58],
            [-4, -28],
            [6, -10],
            [-4, -25],
            [-11, -21],
            [-23, -20],
            [-34, -32],
            [-12, -21],
            [3, -25],
            [7, -4],
            [-3, -31]
        ],
        [
            [5911, 3478],
            [-21, 0]
        ],
        [
            [5890, 3478],
            [-2, 26],
            [-4, 27]
        ],
        [
            [5884, 3531],
            [-3, 21],
            [5, 66],
            [-7, 42],
            [-13, 83]
        ],
        [
            [5866, 3743],
            [29, 67],
            [7, 43],
            [5, 5],
            [3, 35],
            [-5, 17],
            [1, 44],
            [6, 41],
            [0, 75],
            [-15, 19],
            [-13, 4],
            [-6, 15],
            [-13, 12],
            [-23, -1],
            [-2, 22]
        ],
        [
            [5840, 4141],
            [-2, 42],
            [84, 49]
        ],
        [
            [5922, 4232],
            [16, -28],
            [8, 5],
            [11, -15],
            [1, -23],
            [-6, -28],
            [2, -42],
            [19, -36],
            [8, 41],
            [12, 12],
            [-2, 76],
            [-12, 43],
            [-10, 19],
            [-10, -1],
            [-7, 77],
            [7, 45]
        ],
        [
            [4661, 5921],
            [-18, 41],
            [-17, 43],
            [-18, 16],
            [-13, 17],
            [-16, -1],
            [-13, -12],
            [-14, 5],
            [-10, -19]
        ],
        [
            [4542, 6011],
            [-2, 32],
            [8, 29],
            [3, 55],
            [-3, 59],
            [-3, 29],
            [2, 30],
            [-7, 28],
            [-14, 25]
        ],
        [
            [4526, 6298],
            [6, 20],
            [108, -1],
            [-5, 86],
            [7, 30],
            [26, 5],
            [-1, 152],
            [91, -4],
            [0, 90]
        ],
        [
            [5922, 4232],
            [-15, 15],
            [9, 55],
            [9, 21],
            [-6, 49],
            [6, 48],
            [5, 16],
            [-7, 50],
            [-14, 26]
        ],
        [
            [5909, 4512],
            [28, -11],
            [5, -16],
            [10, -28],
            [7, -80]
        ],
        [
            [7836, 5425],
            [7, -5],
            [16, -36],
            [12, -40],
            [2, -39],
            [-3, -27],
            [2, -21],
            [2, -35],
            [10, -16],
            [11, -52],
            [-1, -20],
            [-19, -4],
            [-27, 44],
            [-32, 47],
            [-4, 30],
            [-16, 39],
            [-4, 49],
            [-10, 32],
            [4, 43],
            [-7, 25]
        ],
        [
            [7779, 5439],
            [5, 11],
            [23, -26],
            [2, -30],
            [18, 7],
            [9, 24]
        ],
        [
            [8045, 5176],
            [21, -20],
            [21, 11],
            [6, 50],
            [12, 11],
            [33, 13],
            [20, 47],
            [14, 37]
        ],
        [
            [8206, 5379],
            [22, 41],
            [14, 47],
            [11, 0],
            [14, -30],
            [1, -26],
            [19, -16],
            [23, -18],
            [-2, -23],
            [-19, -3],
            [5, -29],
            [-20, -20]
        ],
        [
            [5453, 3369],
            [-20, 45],
            [-11, 43],
            [-6, 58],
            [-7, 42],
            [-9, 91],
            [-1, 71],
            [-3, 32],
            [-11, 25],
            [-15, 48],
            [-14, 71],
            [-6, 37],
            [-23, 58],
            [-2, 45]
        ],
        [
            [5644, 4022],
            [23, 14],
            [18, -4],
            [11, -13],
            [0, -5]
        ],
        [
            [5552, 3594],
            [0, -218],
            [-25, -30],
            [-15, -4],
            [-17, 11],
            [-13, 4],
            [-4, 25],
            [-11, 17],
            [-14, -30]
        ],
        [
            [9604, 3812],
            [23, -36],
            [14, -28],
            [-10, -14],
            [-16, 16],
            [-19, 27],
            [-18, 31],
            [-19, 42],
            [-4, 20],
            [12, -1],
            [16, -20],
            [12, -20],
            [9, -17]
        ],
        [
            [5412, 6408],
            [7, -92],
            [10, -15],
            [1, -19],
            [11, -20],
            [-6, -25],
            [-11, -120],
            [-1, -77],
            [-35, -56],
            [-12, -78],
            [11, -22],
            [0, -38],
            [18, -1],
            [-3, -28]
        ],
        [
            [5393, 5795],
            [-5, -1],
            [-19, 64],
            [-6, 3],
            [-22, -33],
            [-21, 17],
            [-15, 3],
            [-8, -8],
            [-17, 2],
            [-16, -25],
            [-14, -2],
            [-34, 31],
            [-13, -15],
            [-14, 1],
            [-10, 23],
            [-28, 22],
            [-30, -7],
            [-7, -13],
            [-4, -34],
            [-8, -24],
            [-2, -53]
        ],
        [
            [5236, 5339],
            [-29, -21],
            [-11, 3],
            [-10, -13],
            [-23, 1],
            [-15, 37],
            [-9, 43],
            [-19, 39],
            [-21, -1],
            [-25, 0]
        ],
        [
            [2619, 5713],
            [-10, 18],
            [-13, 24],
            [-6, 20],
            [-12, 19],
            [-13, 26],
            [3, 9],
            [4, -9],
            [2, 5]
        ],
        [
            [2690, 5943],
            [-2, -5],
            [-2, -13],
            [3, -22],
            [-6, -20],
            [-3, -24],
            [-1, -26],
            [1, -15],
            [1, -27],
            [-4, -6],
            [-3, -25],
            [2, -15],
            [-6, -16],
            [2, -16],
            [4, -9]
        ],
        [
            [5092, 8091],
            [14, 16],
            [24, 87],
            [38, 25],
            [23, -2]
        ],
        [
            [5863, 9167],
            [-47, -24],
            [-22, -5]
        ],
        [
            [5573, 9140],
            [-17, -2],
            [-4, -39],
            [-53, 9],
            [-7, -33],
            [-27, 1],
            [-18, -42],
            [-28, -66],
            [-43, -83],
            [10, -20],
            [-10, -24],
            [-27, 1],
            [-18, -55],
            [2, -79],
            [17, -29],
            [-9, -70],
            [-23, -40],
            [-12, -34]
        ],
        [
            [5306, 8535],
            [-19, 36],
            [-55, -69],
            [-37, -13],
            [-38, 30],
            [-10, 63],
            [-9, 137],
            [26, 38],
            [73, 49],
            [55, 61],
            [51, 82],
            [66, 115],
            [47, 44],
            [76, 74],
            [61, 26],
            [46, -3],
            [42, 49],
            [51, -3],
            [50, 12],
            [87, -43],
            [-36, -16],
            [30, -37]
        ],
        [
            [5686, 9657],
            [-62, -24],
            [-49, 13],
            [19, 16],
            [-16, 19],
            [57, 11],
            [11, -22],
            [40, -13]
        ],
        [
            [5506, 9766],
            [92, -44],
            [-70, -23],
            [-15, -44],
            [-25, -11],
            [-13, -49],
            [-34, -2],
            [-59, 36],
            [25, 21],
            [-42, 17],
            [-54, 50],
            [-21, 46],
            [75, 21],
            [16, -20],
            [39, 0],
            [11, 21],
            [40, 2],
            [35, -21]
        ],
        [
            [5706, 9808],
            [55, -21],
            [-41, -32],
            [-81, -7],
            [-82, 10],
            [-5, 16],
            [-40, 1],
            [-30, 27],
            [86, 17],
            [40, -14],
            [28, 17],
            [70, -14]
        ],
        [
            [9805, 2640],
            [6, -24],
            [20, 24],
            [8, -25],
            [0, -25],
            [-10, -27],
            [-18, -44],
            [-14, -24],
            [10, -28],
            [-22, -1],
            [-23, -22],
            [-8, -39],
            [-16, -60],
            [-21, -26],
            [-14, -17],
            [-26, 1],
            [-18, 20],
            [-30, 4],
            [-5, 22],
            [15, 43],
            [35, 59],
            [18, 11],
            [20, 22],
            [24, 31],
            [16, 31],
            [13, 44],
            [10, 15],
            [5, 33],
            [19, 27],
            [6, -25]
        ],
        [
            [9849, 2922],
            [20, -63],
            [1, 41],
            [13, -16],
            [4, -45],
            [22, -19],
            [19, -5],
            [16, 22],
            [14, -6],
            [-7, -53],
            [-8, -34],
            [-22, 1],
            [-7, -18],
            [3, -25],
            [-4, -11],
            [-11, -32],
            [-14, -41],
            [-21, -23],
            [-5, 15],
            [-12, 9],
            [16, 48],
            [-9, 33],
            [-30, 23],
            [1, 22],
            [20, 20],
            [5, 46],
            [-1, 38],
            [-12, 40],
            [1, 10],
            [-13, 25],
            [-22, 52],
            [-12, 42],
            [11, 4],
            [15, -33],
            [21, -15],
            [8, -52]
        ],
        [
            [6475, 6041],
            [-9, 41],
            [-22, 98]
        ],
        [
            [6444, 6180],
            [83, 59],
            [19, 118],
            [-13, 42]
        ],
        [
            [6566, 6530],
            [12, -40],
            [16, -22],
            [20, -8],
            [17, -10],
            [12, -34],
            [8, -20],
            [10, -7],
            [0, -13],
            [-10, -36],
            [-5, -16],
            [-12, -19],
            [-10, -41],
            [-13, 3],
            [-5, -14],
            [-5, -30],
            [4, -39],
            [-3, -7],
            [-13, 0],
            [-17, -22],
            [-3, -29],
            [-6, -12],
            [-18, 0],
            [-10, -15],
            [0, -24],
            [-14, -16],
            [-15, 5],
            [-19, -19],
            [-12, -4]
        ],
        [
            [6557, 6597],
            [8, 20],
            [3, -5],
            [-2, -25],
            [-4, -10]
        ],
        [
            [6893, 6457],
            [-20, 15],
            [-9, 43],
            [-21, 45],
            [-51, -12],
            [-45, -1],
            [-39, -8]
        ],
        [
            [2836, 5484],
            [-9, 17],
            [-6, 32],
            [7, 16],
            [-7, 4],
            [-5, 20],
            [-14, 16],
            [-12, -4],
            [-6, -20],
            [-11, -15],
            [-6, -2],
            [-3, -13],
            [13, -32],
            [-7, -7],
            [-4, -9],
            [-13, -3],
            [-5, 35],
            [-4, -10],
            [-9, 4],
            [-5, 24],
            [-12, 3],
            [-7, 7],
            [-12, 0],
            [-1, -13],
            [-3, 9]
        ],
        [
            [2707, 5623],
            [10, -22],
            [-1, -12],
            [11, -3],
            [3, 5],
            [8, -14],
            [13, 4],
            [12, 15],
            [17, 12],
            [9, 17],
            [16, -3],
            [-1, -6],
            [15, -2],
            [12, -10],
            [10, -18],
            [10, -16]
        ],
        [
            [3045, 3974],
            [-28, 33],
            [-2, 25],
            [-55, 59],
            [-50, 65],
            [-22, 36],
            [-11, 49],
            [4, 17],
            [-23, 77],
            [-28, 109],
            [-26, 118],
            [-11, 27],
            [-9, 43],
            [-21, 39],
            [-20, 24],
            [9, 26],
            [-14, 57],
            [9, 41],
            [22, 37]
        ],
        [
            [8510, 5555],
            [2, -40],
            [2, -33],
            [-9, -54],
            [-11, 60],
            [-13, -30],
            [9, -43],
            [-8, -28],
            [-32, 35],
            [-8, 42],
            [8, 28],
            [-17, 28],
            [-9, -24],
            [-13, 2],
            [-21, -33],
            [-4, 17],
            [11, 50],
            [17, 17],
            [15, 22],
            [10, -27],
            [21, 17],
            [5, 26],
            [19, 1],
            [-1, 46],
            [22, -28],
            [3, -30],
            [2, -21]
        ],
        [
            [8443, 5665],
            [-10, -20],
            [-9, -37],
            [-8, -17],
            [-17, 40],
            [5, 16],
            [7, 17],
            [3, 36],
            [16, 4],
            [-5, -40],
            [21, 57],
            [-3, -56]
        ],
        [
            [8291, 5608],
            [-37, -56],
            [14, 41],
            [20, 37],
            [16, 41],
            [15, 58],
            [5, -48],
            [-18, -33],
            [-15, -40]
        ],
        [
            [8385, 5760],
            [16, -18],
            [18, 0],
            [0, -25],
            [-13, -25],
            [-18, -18],
            [-1, 28],
            [2, 30],
            [-4, 28]
        ],
        [
            [8485, 5776],
            [8, -66],
            [-21, 16],
            [0, -20],
            [7, -37],
            [-13, -13],
            [-1, 42],
            [-9, 3],
            [-4, 36],
            [16, -5],
            [0, 22],
            [-17, 45],
            [27, -1],
            [7, -22]
        ],
        [
            [8375, 5830],
            [-7, -51],
            [-12, 29],
            [-15, 45],
            [24, -2],
            [10, -21]
        ],
        [
            [8369, 6151],
            [17, -17],
            [9, 15],
            [2, -15],
            [-4, -24],
            [9, -43],
            [-7, -49],
            [-16, -19],
            [-5, -48],
            [7, -47],
            [14, -7],
            [13, 7],
            [34, -32],
            [-2, -32],
            [9, -15],
            [-3, -27],
            [-22, 29],
            [-10, 31],
            [-7, -22],
            [-18, 36],
            [-25, -9],
            [-14, 13],
            [1, 25],
            [9, 15],
            [-8, 13],
            [-4, -21],
            [-14, 34],
            [-4, 26],
            [-1, 56],
            [11, -19],
            [3, 92],
            [9, 54],
            [17, 0]
        ],
        [
            [9329, 4655],
            [-8, -6],
            [-12, 22],
            [-12, 38],
            [-6, 45],
            [4, 6],
            [3, -18],
            [8, -13],
            [14, -38],
            [13, -20],
            [-4, -16]
        ],
        [
            [9221, 4734],
            [-15, -5],
            [-4, -17],
            [-15, -14],
            [-15, -14],
            [-14, 0],
            [-23, 18],
            [-16, 16],
            [2, 18],
            [25, -8],
            [15, 4],
            [5, 29],
            [4, 1],
            [2, -31],
            [16, 4],
            [8, 20],
            [16, 21],
            [-4, 35],
            [17, 1],
            [6, -9],
            [-1, -33],
            [-9, -36]
        ],
        [
            [8916, 4904],
            [48, -41],
            [51, -34],
            [19, -30],
            [16, -30],
            [4, -34],
            [46, -37],
            [7, -31],
            [-25, -7],
            [6, -39],
            [25, -39],
            [18, -62],
            [15, 2],
            [-1, -27],
            [22, -10],
            [-9, -11],
            [30, -25],
            [-3, -17],
            [-18, -4],
            [-7, 16],
            [-24, 6],
            [-28, 9],
            [-22, 38],
            [-16, 32],
            [-14, 52],
            [-36, 26],
            [-24, -17],
            [-17, -20],
            [4, -43],
            [-22, -20],
            [-16, 9],
            [-28, 3]
        ],
        [
            [9253, 4792],
            [-9, -16],
            [-5, 35],
            [-6, 23],
            [-13, 19],
            [-16, 25],
            [-20, 18],
            [8, 14],
            [15, -17],
            [9, -13],
            [12, -14],
            [11, -25],
            [11, -19],
            [3, -30]
        ],
        [
            [5392, 8233],
            [19, 18],
            [43, 27],
            [35, 20],
            [28, -10],
            [2, -14],
            [27, -1]
        ],
        [
            [5546, 8273],
            [34, -7],
            [51, 1]
        ],
        [
            [5653, 8105],
            [14, -52],
            [-3, -17],
            [-14, -6],
            [-25, -50],
            [7, -26],
            [-6, 3]
        ],
        [
            [5626, 7957],
            [-26, 23],
            [-20, -8],
            [-13, 6],
            [-17, -13],
            [-14, 21],
            [-11, -8],
            [-2, 4]
        ],
        [
            [3159, 6151],
            [14, -5],
            [5, -12],
            [-7, -15],
            [-21, 1],
            [-17, -2],
            [-1, 25],
            [4, 9],
            [23, -1]
        ],
        [
            [8628, 7562],
            [4, -10]
        ],
        [
            [8632, 7552],
            [-11, 3],
            [-12, -20],
            [-8, -20],
            [1, -42],
            [-14, -13],
            [-5, -11],
            [-11, -17],
            [-18, -10],
            [-12, -16],
            [-1, -25],
            [-3, -7],
            [11, -9],
            [15, -26]
        ],
        [
            [8504, 7288],
            [-13, 11],
            [-4, -11],
            [-8, -5],
            [-1, 11],
            [-7, 5],
            [-8, 10],
            [8, 26],
            [7, 7],
            [-3, 11],
            [7, 31],
            [-2, 10],
            [-16, 7],
            [-13, 15]
        ],
        [
            [4792, 7249],
            [-11, -15],
            [-14, 8],
            [-15, -6],
            [5, 46],
            [-3, 36],
            [-12, 6],
            [-7, 22],
            [2, 39],
            [11, 21],
            [2, 24],
            [6, 36],
            [-1, 25],
            [-5, 21],
            [-1, 20]
        ],
        [
            [6411, 6520],
            [-2, 43],
            [7, 31],
            [8, 6],
            [8, -18],
            [1, -35],
            [-6, -35]
        ],
        [
            [6427, 6512],
            [-8, -4],
            [-8, 12]
        ],
        [
            [5630, 7886],
            [12, 13],
            [17, -7],
            [18, 0],
            [13, -14],
            [10, 9],
            [20, 5],
            [7, 14],
            [12, 0]
        ],
        [
            [5784, 7745],
            [12, -11],
            [13, 9],
            [13, -10]
        ],
        [
            [5822, 7733],
            [0, -15],
            [-13, -13],
            [-9, 6],
            [-7, -71]
        ],
        [
            [5629, 7671],
            [-5, 10],
            [6, 10],
            [-7, 7],
            [-8, -13],
            [-17, 17],
            [-2, 25],
            [-17, 14],
            [-3, 18],
            [-15, 24]
        ],
        [
            [8989, 8056],
            [28, -105],
            [-41, 19],
            [-17, -85],
            [27, -61],
            [-1, -41],
            [-21, 36],
            [-18, -46],
            [-5, 50],
            [3, 57],
            [-3, 64],
            [6, 45],
            [2, 79],
            [-17, 58],
            [3, 80],
            [25, 28],
            [-11, 27],
            [13, 8],
            [7, -39],
            [10, -57],
            [-1, -58],
            [11, -59]
        ],
        [
            [5546, 8273],
            [6, 26],
            [38, 19]
        ],
        [
            [0, 9132],
            [68, -45],
            [73, -59],
            [-3, -37],
            [19, -15],
            [-6, 43],
            [75, -8],
            [55, -56],
            [-28, -26],
            [-46, -6],
            [0, -57],
            [-11, -13],
            [-26, 2],
            [-22, 21],
            [-36, 17],
            [-7, 26],
            [-28, 9],
            [-31, -7],
            [-16, 20],
            [6, 22],
            [-33, -14],
            [13, -28],
            [-16, -25]
        ],
        [
            [0, 8896],
            [0, 236]
        ],
        [
            [0, 9282],
            [9999, -40],
            [-30, -3],
            [-5, 19],
            [-9964, 24]
        ],
        [
            [0, 9282],
            [4, 3],
            [23, 0],
            [40, -17],
            [-2, -8],
            [-29, -14],
            [-36, -4],
            [0, 40]
        ],
        [
            [8988, 9383],
            [-42, -1],
            [-57, 7],
            [-5, 3],
            [27, 23],
            [34, 6],
            [40, -23],
            [3, -15]
        ],
        [
            [9186, 9493],
            [-32, -23],
            [-44, 5],
            [-52, 23],
            [7, 20],
            [51, -9],
            [70, -16]
        ],
        [
            [9029, 9522],
            [-22, -44],
            [-102, 1],
            [-46, -14],
            [-55, 39],
            [15, 40],
            [37, 11],
            [73, -2],
            [100, -31]
        ],
        [
            [6598, 9235],
            [-17, -5],
            [-91, 8],
            [-7, 26],
            [-50, 16],
            [-4, 32],
            [28, 13],
            [-1, 32],
            [55, 50],
            [-25, 7],
            [66, 52],
            [-7, 27],
            [62, 31],
            [91, 38],
            [93, 11],
            [48, 22],
            [54, 8],
            [19, -23],
            [-19, -19],
            [-98, -29],
            [-85, -28],
            [-86, -57],
            [-42, -57],
            [-43, -57],
            [5, -49],
            [54, -49]
        ],
        [
            [0, 8896],
            [9963, -26],
            [-36, 4],
            [25, -31],
            [17, -49],
            [13, -16],
            [3, -24],
            [-7, -16],
            [-52, 13],
            [-78, -44],
            [-25, -7],
            [-42, -42],
            [-40, -36],
            [-11, -27],
            [-39, 41],
            [-73, -46],
            [-12, 22],
            [-27, -26],
            [-37, 8],
            [-9, -38],
            [-33, -58],
            [1, -24],
            [31, -13],
            [-4, -86],
            [-25, -2],
            [-12, -49],
            [11, -26],
            [-48, -30],
            [-10, -67],
            [-41, -15],
            [-9, -60],
            [-40, -55],
            [-10, 41],
            [-12, 86],
            [-15, 131],
            [13, 82],
            [23, 35],
            [2, 28],
            [43, 13],
            [50, 75],
            [47, 60],
            [50, 48],
            [23, 83],
            [-34, -5],
            [-17, -49],
            [-70, -65],
            [-23, 73],
            [-72, -20],
            [-69, -99],
            [23, -36],
            [-62, -16],
            [-43, -6],
            [2, 43],
            [-43, 9],
            [-35, -29],
            [-85, 10],
            [-91, -18],
            [-90, -115],
            [-106, -139],
            [43, -8],
            [14, -37],
            [27, -13],
            [18, 30],
            [30, -4],
            [40, -65],
            [1, -50],
            [-21, -59],
            [-3, -71],
            [-12, -94],
            [-42, -86],
            [-9, -41],
            [-38, -69],
            [-38, -68],
            [-18, -35],
            [-37, -34],
            [-17, -1],
            [-17, 29],
            [-38, -44],
            [-4, -19]
        ],
        [
            [6363, 7799],
            [-12, -35],
            [-27, -10],
            [-28, -61],
            [25, -56],
            [-2, -40],
            [30, -70]
        ],
        [
            [6109, 7624],
            [-35, 49],
            [-32, 23],
            [-24, 34],
            [20, 10],
            [23, 49],
            [-15, 24],
            [41, 24],
            [-1, 13],
            [-25, -10]
        ],
        [
            [6061, 7840],
            [1, 26],
            [14, 17],
            [27, 4],
            [5, 20],
            [-7, 33],
            [12, 30],
            [-1, 18],
            [-41, 19],
            [-16, -1],
            [-17, 28],
            [-21, -9],
            [-35, 20],
            [0, 12],
            [-10, 26],
            [-22, 3],
            [-2, 18],
            [7, 12],
            [-18, 33],
            [-29, -5],
            [-8, 3],
            [-7, -14],
            [-11, 3]
        ],
        [
            [5777, 8571],
            [31, 33],
            [-29, 28]
        ],
        [
            [5863, 9167],
            [29, 20],
            [46, -35],
            [76, -14],
            [105, -67],
            [21, -28],
            [2, -40],
            [-31, -31],
            [-45, -15],
            [-124, 44],
            [-21, -7],
            [45, -43],
            [2, -28],
            [2, -60],
            [36, -18],
            [22, -15],
            [3, 28],
            [-17, 26],
            [18, 22],
            [67, -37],
            [24, 15],
            [-19, 43],
            [65, 58],
            [25, -4],
            [26, -20],
            [16, 40],
            [-23, 35],
            [14, 36],
            [-21, 36],
            [78, -18],
            [16, -34],
            [-35, -7],
            [0, -33],
            [22, -20],
            [43, 13],
            [7, 38],
            [58, 28],
            [97, 50],
            [20, -3],
            [-27, -35],
            [35, -7],
            [19, 21],
            [52, 1],
            [42, 25],
            [31, -36],
            [32, 39],
            [-29, 35],
            [14, 19],
            [82, -18],
            [39, -18],
            [100, -68],
            [19, 31],
            [-28, 31],
            [-1, 13],
            [-34, 6],
            [10, 28],
            [-15, 46],
            [-1, 19],
            [51, 53],
            [18, 54],
            [21, 11],
            [74, -15],
            [5, -33],
            [-26, -48],
            [17, -19],
            [9, -41],
            [-6, -81],
            [31, -36],
            [-12, -40],
            [-55, -84],
            [32, -8],
            [11, 21],
            [31, 15],
            [7, 29],
            [24, 29],
            [-16, 33],
            [13, 39],
            [-31, 5],
            [-6, 33],
            [22, 59],
            [-36, 48],
            [50, 40],
            [-7, 42],
            [14, 2],
            [15, -33],
            [-11, -57],
            [29, -11],
            [-12, 43],
            [46, 23],
            [58, 3],
            [51, -34],
            [-25, 49],
            [-2, 63],
            [48, 12],
            [67, -2],
            [60, 7],
            [-23, 31],
            [33, 39],
            [31, 2],
            [54, 29],
            [74, 8],
            [9, 16],
            [73, 6],
            [23, -14],
            [62, 32],
            [51, -1],
            [8, 25],
            [26, 25],
            [66, 25],
            [48, -19],
            [-38, -15],
            [63, -9],
            [7, -29],
            [25, 14],
            [82, -1],
            [62, -29],
            [23, -22],
            [-7, -30],
            [-31, -18],
            [-73, -33],
            [-21, -17],
            [35, -8],
            [41, -15],
            [25, 11],
            [14, -38],
            [12, 15],
            [44, 10],
            [90, -10],
            [6, -28],
            [116, -9],
            [2, 46],
            [59, -11],
            [44, 1],
            [45, -32],
            [13, -37],
            [-17, -25],
            [35, -47],
            [44, -24],
            [27, 62],
            [44, -26],
            [48, 16],
            [53, -18],
            [21, 16],
            [45, -8],
            [-20, 55],
            [37, 25],
            [251, -38],
            [24, -35],
            [72, -45],
            [112, 11],
            [56, -10],
            [23, -24],
            [-4, -44],
            [35, -16],
            [37, 12],
            [49, 1],
            [52, -11],
            [53, 6],
            [49, -52],
            [34, 19],
            [-23, 37],
            [13, 27],
            [88, -17],
            [58, 4],
            [80, -29],
            [-9960, -25]
        ],
        [
            [7918, 9684],
            [-157, -23],
            [51, 77],
            [23, 7],
            [21, -4],
            [70, -33],
            [-8, -24]
        ],
        [
            [6420, 9816],
            [-37, -8],
            [-25, -4],
            [-4, -10],
            [-33, -10],
            [-30, 14],
            [16, 19],
            [-62, 2],
            [54, 10],
            [43, 1],
            [5, -16],
            [16, 14],
            [26, 10],
            [42, -13],
            [-11, -9]
        ],
        [
            [7775, 9718],
            [-60, -8],
            [-78, 17],
            [-46, 23],
            [-21, 42],
            [-38, 12],
            [72, 40],
            [60, 14],
            [54, -30],
            [64, -57],
            [-7, -53]
        ],
        [
            [5844, 4990],
            [11, -33],
            [-1, -35],
            [-8, -7]
        ],
        [
            [5821, 4978],
            [7, -6],
            [16, 18]
        ],
        [
            [4526, 6298],
            [1, 25]
        ],
        [
            [6188, 6023],
            [-4, 26],
            [-8, 17],
            [-2, 24],
            [-15, 21],
            [-15, 50],
            [-7, 48],
            [-20, 40],
            [-12, 10],
            [-18, 56],
            [-4, 41],
            [2, 35],
            [-16, 66],
            [-13, 23],
            [-15, 12],
            [-10, 34],
            [2, 13],
            [-8, 31],
            [-8, 13],
            [-11, 44],
            [-17, 48],
            [-14, 40],
            [-14, 0],
            [5, 33],
            [1, 20],
            [3, 24]
        ],
        [
            [6344, 6744],
            [11, -51],
            [14, -13],
            [5, -21],
            [18, -25],
            [2, -24],
            [-3, -20],
            [4, -20],
            [8, -16],
            [4, -20],
            [4, -14]
        ],
        [
            [6427, 6512],
            [5, -22]
        ],
        [
            [6444, 6180],
            [-80, -23],
            [-26, -26],
            [-20, -62],
            [-13, -10],
            [-7, 20],
            [-11, -3],
            [-27, 6],
            [-5, 5],
            [-32, -1],
            [-7, -5],
            [-12, 15],
            [-7, -29],
            [3, -25],
            [-12, -19]
        ],
        [
            [5943, 5617],
            [-4, 1],
            [0, 29],
            [-3, 20],
            [-14, 24],
            [-4, 42],
            [4, 44],
            [-13, 4],
            [-2, -13],
            [-17, -3],
            [7, -17],
            [2, -36],
            [-15, -32],
            [-14, -43],
            [-14, -6],
            [-23, 34],
            [-11, -12],
            [-3, -17],
            [-14, -11],
            [-1, -12],
            [-28, 0],
            [-3, 12],
            [-20, 2],
            [-10, -10],
            [-8, 5],
            [-14, 34],
            [-5, 17],
            [-20, -9],
            [-8, -27],
            [-7, -53],
            [-10, -11],
            [-8, -6]
        ],
        [
            [5663, 5567],
            [-2, 2]
        ],
        [
            [5635, 5716],
            [0, 14],
            [-10, 17],
            [-1, 35],
            [-5, 23],
            [-10, -4],
            [3, 22],
            [7, 25],
            [-3, 24],
            [9, 18],
            [-6, 14],
            [7, 36],
            [13, 44],
            [24, -4],
            [-1, 234]
        ],
        [
            [6023, 6357],
            [9, -58],
            [-6, -10],
            [4, -61],
            [11, -71],
            [10, -14],
            [15, -22]
        ],
        [
            [5943, 5624],
            [0, -7]
        ],
        [
            [5943, 5617],
            [0, -46]
        ],
        [
            [5944, 5309],
            [-17, -28],
            [-20, 1],
            [-22, -14],
            [-18, 13],
            [-11, -16]
        ],
        [
            [5682, 5544],
            [-19, 23]
        ],
        [
            [4535, 5861],
            [-11, 46],
            [-14, 21],
            [12, 11],
            [14, 41],
            [6, 31]
        ],
        [
            [4536, 5789],
            [-4, 45]
        ],
        [
            [9502, 4438],
            [8, -20],
            [-19, 0],
            [-11, 37],
            [17, -15],
            [5, -2]
        ],
        [
            [9467, 4474],
            [-11, -1],
            [-17, 6],
            [-5, 9],
            [1, 23],
            [19, -9],
            [9, -12],
            [4, -16]
        ],
        [
            [9490, 4490],
            [-4, -11],
            [-21, 52],
            [-5, 35],
            [9, 0],
            [10, -47],
            [11, -29]
        ],
        [
            [9440, 4565],
            [1, -12],
            [-22, 25],
            [-15, 21],
            [-10, 20],
            [4, 6],
            [13, -14],
            [23, -27],
            [6, -19]
        ],
        [
            [9375, 4623],
            [-5, -3],
            [-13, 14],
            [-11, 24],
            [1, 10],
            [17, -25],
            [11, -20]
        ],
        [
            [4682, 5458],
            [-8, 5],
            [-20, 24],
            [-14, 31],
            [-5, 22],
            [-3, 43]
        ],
        [
            [2561, 5848],
            [-3, -14],
            [-16, 1],
            [-10, 6],
            [-12, 12],
            [-15, 3],
            [-8, 13]
        ],
        [
            [6198, 5735],
            [9, -11],
            [5, -25],
            [13, -24],
            [14, -1],
            [26, 16],
            [30, 7],
            [25, 18],
            [13, 4],
            [10, 11],
            [16, 2]
        ],
        [
            [6359, 5732],
            [0, -1],
            [0, -25],
            [0, -59],
            [0, -31],
            [-13, -36],
            [-19, -50]
        ],
        [
            [6359, 5732],
            [9, 1],
            [13, 9],
            [14, 6],
            [14, 20],
            [10, 0],
            [1, -16],
            [-3, -35],
            [0, -31],
            [-6, -21],
            [-7, -64],
            [-14, -66],
            [-17, -75],
            [-24, -87],
            [-23, -66],
            [-33, -81],
            [-28, -48],
            [-42, -58],
            [-25, -45],
            [-31, -72],
            [-6, -31],
            [-6, -14]
        ],
        [
            [3412, 5410],
            [34, -11],
            [2, 10],
            [23, 4],
            [30, -15]
        ],
        [
            [3489, 5306],
            [10, -35],
            [-4, -25]
        ],
        [
            [5626, 7957],
            [-8, -15],
            [-5, -24]
        ],
        [
            [5380, 7746],
            [7, 5]
        ],
        [
            [5663, 8957],
            [-47, -17],
            [-27, -41],
            [4, -36],
            [-44, -48],
            [-54, -50],
            [-20, -84],
            [20, -41],
            [26, -33],
            [-25, -67],
            [-29, -14],
            [-11, -99],
            [-15, -55],
            [-34, 6],
            [-16, -47],
            [-32, -3],
            [-9, 56],
            [-23, 67],
            [-21, 84]
        ],
        [
            [5890, 3478],
            [-5, -26],
            [-17, -6],
            [-16, 32],
            [0, 20],
            [7, 22],
            [3, 17],
            [8, 5],
            [14, -11]
        ],
        [
            [5999, 7104],
            [-2, 45],
            [7, 25]
        ],
        [
            [6004, 7174],
            [7, 13],
            [7, 13],
            [2, 33],
            [9, -12],
            [31, 17],
            [14, -12],
            [23, 1],
            [32, 22],
            [15, -1],
            [32, 9]
        ],
        [
            [5051, 5420],
            [-22, -12]
        ],
        [
            [7849, 5777],
            [-25, 28],
            [-24, -2],
            [4, 47],
            [-24, 0],
            [-2, -65],
            [-15, -87],
            [-10, -52],
            [2, -43],
            [18, -2],
            [12, -53],
            [5, -52],
            [15, -33],
            [17, -7],
            [14, -31]
        ],
        [
            [7779, 5439],
            [-11, 23],
            [-4, 29],
            [-15, 34],
            [-14, 28],
            [-4, -35],
            [-5, 33],
            [3, 37],
            [8, 56]
        ],
        [
            [6883, 7252],
            [16, 60],
            [-6, 44],
            [-20, 14],
            [7, 26],
            [23, -3],
            [13, 33],
            [9, 38],
            [37, 13],
            [-6, -27],
            [4, -17],
            [12, 2]
        ],
        [
            [6497, 7255],
            [-5, 42],
            [4, 62],
            [-22, 20],
            [8, 40],
            [-19, 4],
            [6, 49],
            [26, -14],
            [25, 19],
            [-20, 35],
            [-8, 34],
            [-23, -15],
            [-3, -43],
            [-8, 38]
        ],
        [
            [6554, 7498],
            [31, 1],
            [-4, 29],
            [24, 21],
            [23, 34],
            [37, -31],
            [3, -47],
            [11, -12],
            [30, 2],
            [9, -10],
            [14, -61],
            [32, -41],
            [18, -28],
            [29, -29],
            [37, -25],
            [-1, -36]
        ],
        [
            [8471, 4532],
            [3, 14],
            [24, 13],
            [19, 2],
            [9, 8],
            [10, -8],
            [-10, -16],
            [-29, -25],
            [-23, -17]
        ],
        [
            [3286, 5693],
            [16, 8],
            [6, -2],
            [-1, -44],
            [-23, -7],
            [-5, 6],
            [8, 16],
            [-1, 23]
        ],
        [
            [5233, 7240],
            [31, 24],
            [19, -7],
            [-1, -30],
            [24, 22],
            [2, -12],
            [-14, -29],
            [0, -27],
            [9, -15],
            [-3, -51],
            [-19, -29],
            [6, -33],
            [14, -1],
            [7, -28],
            [11, -9]
        ],
        [
            [6004, 7174],
            [-11, 27],
            [11, 22],
            [-17, -5],
            [-23, 13],
            [-19, -34],
            [-43, -6],
            [-22, 31],
            [-30, 2],
            [-6, -24],
            [-20, -7],
            [-26, 31],
            [-31, -1],
            [-16, 59],
            [-21, 33],
            [14, 46],
            [-18, 28],
            [31, 56],
            [43, 3],
            [12, 45],
            [53, -8],
            [33, 38],
            [32, 17],
            [46, 1],
            [49, -42],
            [40, -22],
            [32, 9],
            [24, -6],
            [33, 31]
        ],
        [
            [5777, 7539],
            [3, -23],
            [25, -19],
            [-5, -14],
            [-33, -3],
            [-12, -19],
            [-23, -31],
            [-9, 27],
            [0, 12]
        ],
        [
            [8382, 6499],
            [-17, -95],
            [-12, -49],
            [-14, 50],
            [-4, 44],
            [17, 58],
            [22, 45],
            [13, -18],
            [-5, -35]
        ],
        [
            [6088, 4781],
            [-12, -73],
            [1, -33],
            [18, -22],
            [1, -15],
            [-8, -36],
            [2, -18],
            [-2, -28],
            [10, -37],
            [11, -58],
            [10, -13]
        ],
        [
            [5909, 4512],
            [-15, 18],
            [-18, 10],
            [-11, 10],
            [-12, 15]
        ],
        [
            [5844, 4990],
            [10, 8],
            [31, -1],
            [56, 4]
        ],
        [
            [6061, 7840],
            [-22, -5],
            [-18, -19],
            [-26, -3],
            [-24, -22],
            [1, -37],
            [14, -14],
            [28, 4],
            [-5, -21],
            [-31, -11],
            [-37, -34],
            [-16, 12],
            [6, 28],
            [-30, 17],
            [5, 12],
            [26, 19],
            [-8, 14],
            [-43, 15],
            [-2, 22],
            [-25, -8],
            [-11, -32],
            [-21, -44]
        ],
        [
            [3517, 3063],
            [-12, -38],
            [-31, -32],
            [-21, 11],
            [-15, -6],
            [-26, 25],
            [-18, -1],
            [-17, 32]
        ],
        [
            [679, 6185],
            [-4, -10],
            [-7, 8],
            [1, 17],
            [-4, 21],
            [1, 7],
            [5, 10],
            [-2, 11],
            [1, 6],
            [3, -1],
            [10, -10],
            [5, -5],
            [5, -8],
            [7, -21],
            [-1, -3],
            [-11, -13],
            [-9, -9]
        ],
        [
            [664, 6277],
            [-9, -4],
            [-5, 12],
            [-3, 5],
            [0, 4],
            [3, 5],
            [9, -6],
            [8, -9],
            [-3, -7]
        ],
        [
            [646, 6309],
            [-1, -7],
            [-15, 2],
            [2, 7],
            [14, -2]
        ],
        [
            [621, 6317],
            [-2, -3],
            [-2, 1],
            [-9, 2],
            [-4, 13],
            [-1, 2],
            [7, 8],
            [3, -3],
            [8, -20]
        ],
        [
            [574, 6356],
            [-4, -6],
            [-9, 11],
            [1, 4],
            [5, 6],
            [6, -1],
            [1, -14]
        ],
        [
            [3135, 7724],
            [5, -19],
            [-30, -29],
            [-29, -20],
            [-29, -18],
            [-15, -35],
            [-4, -13],
            [-1, -31],
            [10, -32],
            [11, -1],
            [-3, 21],
            [8, -13],
            [-2, -17],
            [-19, -9],
            [-13, 1],
            [-20, -10],
            [-12, -3],
            [-17, -3],
            [-23, -17],
            [41, 11],
            [8, -11],
            [-39, -18],
            [-17, 0],
            [0, 7],
            [-8, -16],
            [8, -3],
            [-6, -43],
            [-20, -45],
            [-2, 15],
            [-6, 3],
            [-9, 15],
            [5, -32],
            [7, -10],
            [1, -23],
            [-9, -23],
            [-16, -47],
            [-2, 3],
            [8, 40],
            [-14, 22],
            [-3, 49],
            [-5, -25],
            [5, -38],
            [-18, 10],
            [19, -19],
            [1, -57],
            [8, -4],
            [3, -20],
            [4, -59],
            [-17, -44],
            [-29, -18],
            [-18, -34],
            [-14, -4],
            [-14, -22],
            [-4, -20],
            [-31, -38],
            [-16, -28],
            [-13, -35],
            [-4, -42],
            [5, -41],
            [9, -51],
            [13, -41],
            [0, -26],
            [13, -69],
            [-1, -39],
            [-1, -23],
            [-7, -36],
            [-8, -8],
            [-14, 7],
            [-4, 26],
            [-11, 14],
            [-15, 51],
            [-13, 45],
            [-4, 23],
            [6, 39],
            [-8, 33],
            [-22, 49],
            [-10, 9],
            [-28, -27],
            [-5, 3],
            [-14, 28],
            [-17, 14],
            [-32, -7],
            [-24, 7],
            [-21, -5],
            [-12, -9],
            [5, -15],
            [0, -24],
            [5, -12],
            [-5, -8],
            [-10, 9],
            [-11, -11],
            [-20, 2],
            [-20, 31],
            [-25, -8],
            [-20, 14],
            [-17, -4],
            [-24, -14],
            [-25, -44],
            [-27, -25],
            [-16, -28],
            [-6, -27],
            [0, -41],
            [1, -28],
            [5, -20]
        ],
        [
            [1746, 6980],
            [-4, 30],
            [-18, 34],
            [-13, 7],
            [-3, 17],
            [-16, 3],
            [-10, 16],
            [-26, 6],
            [-7, 9],
            [-3, 32],
            [-27, 60],
            [-23, 82],
            [1, 14],
            [-13, 19],
            [-21, 50],
            [-4, 48],
            [-15, 32],
            [6, 49],
            [-1, 51],
            [-8, 45],
            [10, 56],
            [4, 53],
            [3, 54],
            [-5, 79],
            [-9, 51],
            [-8, 27],
            [4, 12],
            [40, -20],
            [15, -56],
            [7, 15],
            [-5, 49],
            [-9, 48]
        ],
        [
            [750, 8432],
            [-28, -23],
            [-14, 15],
            [-4, 28],
            [25, 21],
            [15, 9],
            [18, -4],
            [12, -18],
            [-24, -28]
        ],
        [
            [401, 8597],
            [-18, -9],
            [-18, 11],
            [-17, 16],
            [28, 10],
            [22, -6],
            [3, -22]
        ],
        [
            [230, 8826],
            [17, -12],
            [17, 6],
            [23, -15],
            [27, -8],
            [-2, -7],
            [-21, -12],
            [-21, 13],
            [-11, 11],
            [-24, -4],
            [-7, 5],
            [2, 23]
        ],
        [
            [1374, 8295],
            [-15, 22],
            [-25, 19],
            [-8, 52],
            [-36, 47],
            [-15, 56],
            [-26, 4],
            [-44, 2],
            [-33, 17],
            [-57, 61],
            [-27, 11],
            [-49, 21],
            [-38, -5],
            [-55, 27],
            [-33, 25],
            [-30, -12],
            [5, -41],
            [-15, -4],
            [-32, -12],
            [-25, -20],
            [-30, -13],
            [-4, 35],
            [12, 58],
            [30, 18],
            [-8, 15],
            [-35, -33],
            [-19, -39],
            [-40, -42],
            [20, -29],
            [-26, -42],
            [-30, -25],
            [-28, -18],
            [-7, -26],
            [-43, -31],
            [-9, -28],
            [-32, -25],
            [-20, 5],
            [-25, -17],
            [-29, -20],
            [-23, -20],
            [-47, -16],
            [-5, 9],
            [31, 28],
            [27, 18],
            [29, 33],
            [35, 6],
            [14, 25],
            [38, 35],
            [6, 12],
            [21, 21],
            [5, 44],
            [14, 35],
            [-32, -18],
            [-9, 11],
            [-15, -22],
            [-18, 30],
            [-8, -21],
            [-10, 29],
            [-28, -23],
            [-17, 0],
            [-3, 35],
            [5, 21],
            [-17, 22],
            [-37, -12],
            [-23, 28],
            [-19, 14],
            [0, 34],
            [-22, 25],
            [11, 34],
            [23, 33],
            [10, 30],
            [22, 4],
            [19, -9],
            [23, 28],
            [20, -5],
            [21, 19],
            [-5, 27],
            [-16, 10],
            [21, 23],
            [-17, -1],
            [-30, -13],
            [-8, -13],
            [-22, 13],
            [-39, -6],
            [-41, 14],
            [-12, 24],
            [-35, 34],
            [39, 25],
            [62, 29],
            [23, 0],
            [-4, -30],
            [59, 2],
            [-23, 37],
            [-34, 23],
            [-20, 29],
            [-26, 25],
            [-38, 19],
            [15, 31],
            [49, 2],
            [35, 27],
            [7, 29],
            [28, 28],
            [28, 6],
            [52, 27],
            [26, -4],
            [42, 31],
            [42, -12],
            [21, -27],
            [12, 11],
            [47, -3],
            [-2, -14],
            [43, -10],
            [28, 6],
            [59, -18],
            [53, -6],
            [21, -8],
            [37, 10],
            [42, -18],
            [31, -8]
        ],
        [
            [3018, 5753],
            [-1, -14],
            [-16, -7],
            [9, -26],
            [0, -31],
            [-12, -35],
            [10, -47],
            [12, 4],
            [6, 43],
            [-8, 21],
            [-2, 45],
            [35, 24],
            [-4, 27],
            [10, 19],
            [10, -41],
            [19, -1],
            [18, -33],
            [1, -20],
            [25, 0],
            [30, 6],
            [16, -27],
            [21, -7],
            [16, 18],
            [0, 15],
            [34, 4],
            [34, 1],
            [-24, -18],
            [10, -28],
            [22, -4],
            [21, -29],
            [4, -48],
            [15, 2],
            [11, -14]
        ],
        [
            [8001, 6331],
            [-37, -51],
            [-24, -56],
            [-6, -41],
            [22, -62],
            [25, -77],
            [26, -37],
            [17, -47],
            [12, -109],
            [-3, -104],
            [-24, -39],
            [-31, -38],
            [-23, -49],
            [-35, -55],
            [-10, 37],
            [8, 40],
            [-21, 34]
        ],
        [
            [9661, 4085],
            [-9, -8],
            [-9, 26],
            [1, 16],
            [17, -34]
        ],
        [
            [9641, 4175],
            [4, -47],
            [-7, 7],
            [-6, -3],
            [-4, 16],
            [0, 45],
            [13, -18]
        ],
        [
            [6475, 6041],
            [-21, -16],
            [-5, -26],
            [-1, -20],
            [-27, -25],
            [-45, -28],
            [-24, -41],
            [-13, -3],
            [-8, 3],
            [-16, -25],
            [-18, -11],
            [-23, -3],
            [-7, -3],
            [-6, -16],
            [-8, -4],
            [-4, -15],
            [-14, 1],
            [-9, -8],
            [-19, 3],
            [-7, 35],
            [1, 32],
            [-5, 17],
            [-5, 44],
            [-8, 24],
            [5, 3],
            [-2, 27],
            [3, 12],
            [-1, 25]
        ],
        [
            [5817, 3752],
            [11, 0],
            [14, -10],
            [9, 7],
            [15, -6]
        ],
        [
            [5911, 3478],
            [-7, -43],
            [-3, -49],
            [-7, -27],
            [-19, -30],
            [-5, -8],
            [-12, -30],
            [-8, -31],
            [-16, -42],
            [-31, -61],
            [-20, -36],
            [-21, -26],
            [-29, -23],
            [-14, -3],
            [-3, -17],
            [-17, 9],
            [-14, -11],
            [-30, 11],
            [-17, -7],
            [-12, 3],
            [-28, -23],
            [-24, -10],
            [-17, -22],
            [-13, -1],
            [-11, 21],
            [-10, 1],
            [-12, 26],
            [-1, -8],
            [-4, 16],
            [0, 34],
            [-9, 40],
            [9, 11],
            [0, 45],
            [-19, 55],
            [-14, 50],
            [0, 1],
            [-20, 76]
        ],
        [
            [5840, 4141],
            [-21, -8],
            [-15, -23],
            [-4, -21],
            [-10, -4],
            [-24, -49],
            [-15, -38],
            [-10, -2],
            [-9, 7],
            [-31, 7]
        ]
    ],
    "transform": {
        "scale": [0.036003600360036005, 0.016927109510951093],
        "translate": [-180, -85.609038]
    }
}
;
  Datamap.prototype.abwTopo = '__ABW__';
  Datamap.prototype.afgTopo = '__AFG__';
  Datamap.prototype.agoTopo = '__AGO__';
  Datamap.prototype.aiaTopo = '__AIA__';
  Datamap.prototype.albTopo = '__ALB__';
  Datamap.prototype.aldTopo = '__ALD__';
  Datamap.prototype.andTopo = '__AND__';
  Datamap.prototype.areTopo = '__ARE__';
  Datamap.prototype.argTopo = '__ARG__';
  Datamap.prototype.armTopo = '__ARM__';
  Datamap.prototype.asmTopo = '__ASM__';
  Datamap.prototype.ataTopo = '__ATA__';
  Datamap.prototype.atcTopo = '__ATC__';
  Datamap.prototype.atfTopo = '__ATF__';
  Datamap.prototype.atgTopo = '__ATG__';
  Datamap.prototype.ausTopo = '__AUS__';
  Datamap.prototype.autTopo = '__AUT__';
  Datamap.prototype.azeTopo = '__AZE__';
  Datamap.prototype.bdiTopo = '__BDI__';
  Datamap.prototype.belTopo = '__BEL__';
  Datamap.prototype.benTopo = '__BEN__';
  Datamap.prototype.bfaTopo = '__BFA__';
  Datamap.prototype.bgdTopo = '__BGD__';
  Datamap.prototype.bgrTopo = '__BGR__';
  Datamap.prototype.bhrTopo = '__BHR__';
  Datamap.prototype.bhsTopo = '__BHS__';
  Datamap.prototype.bihTopo = '__BIH__';
  Datamap.prototype.bjnTopo = '__BJN__';
  Datamap.prototype.blmTopo = '__BLM__';
  Datamap.prototype.blrTopo = '__BLR__';
  Datamap.prototype.blzTopo = '__BLZ__';
  Datamap.prototype.bmuTopo = '__BMU__';
  Datamap.prototype.bolTopo = '__BOL__';
  Datamap.prototype.braTopo = '__BRA__';
  Datamap.prototype.brbTopo = '__BRB__';
  Datamap.prototype.brnTopo = '__BRN__';
  Datamap.prototype.btnTopo = '__BTN__';
  Datamap.prototype.norTopo = '__NOR__';
  Datamap.prototype.bwaTopo = '__BWA__';
  Datamap.prototype.cafTopo = '__CAF__';
  Datamap.prototype.canTopo = '__CAN__';
  Datamap.prototype.cheTopo = '__CHE__';
  Datamap.prototype.chlTopo = '__CHL__';
  Datamap.prototype.chnTopo = '__CHN__';
  Datamap.prototype.civTopo = '__CIV__';
  Datamap.prototype.clpTopo = '__CLP__';
  Datamap.prototype.cmrTopo = '__CMR__';
  Datamap.prototype.codTopo = '__COD__';
  Datamap.prototype.cogTopo = '__COG__';
  Datamap.prototype.cokTopo = '__COK__';
  Datamap.prototype.colTopo = '__COL__';
  Datamap.prototype.comTopo = '__COM__';
  Datamap.prototype.cpvTopo = '__CPV__';
  Datamap.prototype.criTopo = '__CRI__';
  Datamap.prototype.csiTopo = '__CSI__';
  Datamap.prototype.cubTopo = '__CUB__';
  Datamap.prototype.cuwTopo = '__CUW__';
  Datamap.prototype.cymTopo = '__CYM__';
  Datamap.prototype.cynTopo = '__CYN__';
  Datamap.prototype.cypTopo = '__CYP__';
  Datamap.prototype.czeTopo = '__CZE__';
  Datamap.prototype.deuTopo = '__DEU__';
  Datamap.prototype.djiTopo = '__DJI__';
  Datamap.prototype.dmaTopo = '__DMA__';
  Datamap.prototype.dnkTopo = '__DNK__';
  Datamap.prototype.domTopo = '__DOM__';
  Datamap.prototype.dzaTopo = '__DZA__';
  Datamap.prototype.ecuTopo = '__ECU__';
  Datamap.prototype.egyTopo = '__EGY__';
  Datamap.prototype.eriTopo = '__ERI__';
  Datamap.prototype.esbTopo = '__ESB__';
  Datamap.prototype.espTopo = '__ESP__';
  Datamap.prototype.estTopo = '__EST__';
  Datamap.prototype.ethTopo = '__ETH__';
  Datamap.prototype.finTopo = '__FIN__';
  Datamap.prototype.fjiTopo = '__FJI__';
  Datamap.prototype.flkTopo = '__FLK__';
  Datamap.prototype.fraTopo = '__FRA__';
  Datamap.prototype.froTopo = '__FRO__';
  Datamap.prototype.fsmTopo = '__FSM__';
  Datamap.prototype.gabTopo = '__GAB__';
  Datamap.prototype.psxTopo = '__PSX__';
  Datamap.prototype.gbrTopo = '__GBR__';
  Datamap.prototype.geoTopo = '__GEO__';
  Datamap.prototype.ggyTopo = '__GGY__';
  Datamap.prototype.ghaTopo = '__GHA__';
  Datamap.prototype.gibTopo = '__GIB__';
  Datamap.prototype.ginTopo = '__GIN__';
  Datamap.prototype.gmbTopo = '__GMB__';
  Datamap.prototype.gnbTopo = '__GNB__';
  Datamap.prototype.gnqTopo = '__GNQ__';
  Datamap.prototype.grcTopo = '__GRC__';
  Datamap.prototype.grdTopo = '__GRD__';
  Datamap.prototype.grlTopo = '__GRL__';
  Datamap.prototype.gtmTopo = '__GTM__';
  Datamap.prototype.gumTopo = '__GUM__';
  Datamap.prototype.guyTopo = '__GUY__';
  Datamap.prototype.hkgTopo = '__HKG__';
  Datamap.prototype.hmdTopo = '__HMD__';
  Datamap.prototype.hndTopo = '__HND__';
  Datamap.prototype.hrvTopo = '__HRV__';
  Datamap.prototype.htiTopo = '__HTI__';
  Datamap.prototype.hunTopo = '__HUN__';
  Datamap.prototype.idnTopo = '__IDN__';
  Datamap.prototype.imnTopo = '__IMN__';
  Datamap.prototype.indTopo = '__IND__';
  Datamap.prototype.ioaTopo = '__IOA__';
  Datamap.prototype.iotTopo = '__IOT__';
  Datamap.prototype.irlTopo = '__IRL__';
  Datamap.prototype.irnTopo = '__IRN__';
  Datamap.prototype.irqTopo = '__IRQ__';
  Datamap.prototype.islTopo = '__ISL__';
  Datamap.prototype.isrTopo = '__ISR__';
  Datamap.prototype.itaTopo = '__ITA__';
  Datamap.prototype.jamTopo = '__JAM__';
  Datamap.prototype.jeyTopo = '__JEY__';
  Datamap.prototype.jorTopo = '__JOR__';
  Datamap.prototype.jpnTopo = '__JPN__';
  Datamap.prototype.kabTopo = '__KAB__';
  Datamap.prototype.kasTopo = '__KAS__';
  Datamap.prototype.kazTopo = '__KAZ__';
  Datamap.prototype.kenTopo = '__KEN__';
  Datamap.prototype.kgzTopo = '__KGZ__';
  Datamap.prototype.khmTopo = '__KHM__';
  Datamap.prototype.kirTopo = '__KIR__';
  Datamap.prototype.knaTopo = '__KNA__';
  Datamap.prototype.korTopo = '__KOR__';
  Datamap.prototype.kosTopo = '__KOS__';
  Datamap.prototype.kwtTopo = '__KWT__';
  Datamap.prototype.laoTopo = '__LAO__';
  Datamap.prototype.lbnTopo = '__LBN__';
  Datamap.prototype.lbrTopo = '__LBR__';
  Datamap.prototype.lbyTopo = '__LBY__';
  Datamap.prototype.lcaTopo = '__LCA__';
  Datamap.prototype.lieTopo = '__LIE__';
  Datamap.prototype.lkaTopo = '__LKA__';
  Datamap.prototype.lsoTopo = '__LSO__';
  Datamap.prototype.ltuTopo = '__LTU__';
  Datamap.prototype.luxTopo = '__LUX__';
  Datamap.prototype.lvaTopo = '__LVA__';
  Datamap.prototype.macTopo = '__MAC__';
  Datamap.prototype.mafTopo = '__MAF__';
  Datamap.prototype.marTopo = '__MAR__';
  Datamap.prototype.mcoTopo = '__MCO__';
  Datamap.prototype.mdaTopo = '__MDA__';
  Datamap.prototype.mdgTopo = '__MDG__';
  Datamap.prototype.mdvTopo = '__MDV__';
  Datamap.prototype.mexTopo = '__MEX__';
  Datamap.prototype.mhlTopo = '__MHL__';
  Datamap.prototype.mkdTopo = '__MKD__';
  Datamap.prototype.mliTopo = '__MLI__';
  Datamap.prototype.mltTopo = '__MLT__';
  Datamap.prototype.mmrTopo = '__MMR__';
  Datamap.prototype.mneTopo = '__MNE__';
  Datamap.prototype.mngTopo = '__MNG__';
  Datamap.prototype.mnpTopo = '__MNP__';
  Datamap.prototype.mozTopo = '__MOZ__';
  Datamap.prototype.mrtTopo = '__MRT__';
  Datamap.prototype.msrTopo = '__MSR__';
  Datamap.prototype.musTopo = '__MUS__';
  Datamap.prototype.mwiTopo = '__MWI__';
  Datamap.prototype.mysTopo = '__MYS__';
  Datamap.prototype.namTopo = '__NAM__';
  Datamap.prototype.nclTopo = '__NCL__';
  Datamap.prototype.nerTopo = '__NER__';
  Datamap.prototype.nfkTopo = '__NFK__';
  Datamap.prototype.ngaTopo = '__NGA__';
  Datamap.prototype.nicTopo = '__NIC__';
  Datamap.prototype.niuTopo = '__NIU__';
  Datamap.prototype.nldTopo = '__NLD__';
  Datamap.prototype.nplTopo = '__NPL__';
  Datamap.prototype.nruTopo = '__NRU__';
  Datamap.prototype.nulTopo = '__NUL__';
  Datamap.prototype.nzlTopo = '__NZL__';
  Datamap.prototype.omnTopo = '__OMN__';
  Datamap.prototype.pakTopo = '__PAK__';
  Datamap.prototype.panTopo = '__PAN__';
  Datamap.prototype.pcnTopo = '__PCN__';
  Datamap.prototype.perTopo = '__PER__';
  Datamap.prototype.pgaTopo = '__PGA__';
  Datamap.prototype.phlTopo = '__PHL__';
  Datamap.prototype.plwTopo = '__PLW__';
  Datamap.prototype.pngTopo = '__PNG__';
  Datamap.prototype.polTopo = '__POL__';
  Datamap.prototype.priTopo = '__PRI__';
  Datamap.prototype.prkTopo = '__PRK__';
  Datamap.prototype.prtTopo = '__PRT__';
  Datamap.prototype.pryTopo = '__PRY__';
  Datamap.prototype.pyfTopo = '__PYF__';
  Datamap.prototype.qatTopo = '__QAT__';
  Datamap.prototype.rouTopo = '__ROU__';
  Datamap.prototype.rusTopo = '__RUS__';
  Datamap.prototype.rwaTopo = '__RWA__';
  Datamap.prototype.sahTopo = '__SAH__';
  Datamap.prototype.sauTopo = '__SAU__';
  Datamap.prototype.scrTopo = '__SCR__';
  Datamap.prototype.sdnTopo = '__SDN__';
  Datamap.prototype.sdsTopo = '__SDS__';
  Datamap.prototype.senTopo = '__SEN__';
  Datamap.prototype.serTopo = '__SER__';
  Datamap.prototype.sgpTopo = '__SGP__';
  Datamap.prototype.sgsTopo = '__SGS__';
  Datamap.prototype.shnTopo = '__SHN__';
  Datamap.prototype.slbTopo = '__SLB__';
  Datamap.prototype.sleTopo = '__SLE__';
  Datamap.prototype.slvTopo = '__SLV__';
  Datamap.prototype.smrTopo = '__SMR__';
  Datamap.prototype.solTopo = '__SOL__';
  Datamap.prototype.somTopo = '__SOM__';
  Datamap.prototype.spmTopo = '__SPM__';
  Datamap.prototype.srbTopo = '__SRB__';
  Datamap.prototype.stpTopo = '__STP__';
  Datamap.prototype.surTopo = '__SUR__';
  Datamap.prototype.svkTopo = '__SVK__';
  Datamap.prototype.svnTopo = '__SVN__';
  Datamap.prototype.sweTopo = '__SWE__';
  Datamap.prototype.swzTopo = '__SWZ__';
  Datamap.prototype.sxmTopo = '__SXM__';
  Datamap.prototype.sycTopo = '__SYC__';
  Datamap.prototype.syrTopo = '__SYR__';
  Datamap.prototype.tcaTopo = '__TCA__';
  Datamap.prototype.tcdTopo = '__TCD__';
  Datamap.prototype.tgoTopo = '__TGO__';
  Datamap.prototype.thaTopo = '__THA__';
  Datamap.prototype.tjkTopo = '__TJK__';
  Datamap.prototype.tkmTopo = '__TKM__';
  Datamap.prototype.tlsTopo = '__TLS__';
  Datamap.prototype.tonTopo = '__TON__';
  Datamap.prototype.ttoTopo = '__TTO__';
  Datamap.prototype.tunTopo = '__TUN__';
  Datamap.prototype.turTopo = '__TUR__';
  Datamap.prototype.tuvTopo = '__TUV__';
  Datamap.prototype.twnTopo = '__TWN__';
  Datamap.prototype.tzaTopo = '__TZA__';
  Datamap.prototype.ugaTopo = '__UGA__';
  Datamap.prototype.ukrTopo = '__UKR__';
  Datamap.prototype.umiTopo = '__UMI__';
  Datamap.prototype.uryTopo = '__URY__';
  Datamap.prototype.usaTopo = {"type":"Topology","transform":{"scale":[0.03514630243024302,0.005240860686068607],"translate":[-178.123152,18.948267]},"objects":{"usa":{"type":"GeometryCollection","geometries":[{"type":"Polygon","id":"AL","arcs":[[0,1,2,3,4]],"properties":{"name":"Alabama"}},{"type":"MultiPolygon","id":"AK","arcs":[[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16]],[[17]],[[18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]]],"properties":{"name":"Alaska"}},{"type":"Polygon","id":"AZ","arcs":[[44,45,46,47,48]],"properties":{"name":"Arizona"}},{"type":"Polygon","id":"AR","arcs":[[49,50,51,52,53,54]],"properties":{"name":"Arkansas"}},{"type":"Polygon","id":"CA","arcs":[[55,-47,56,57]],"properties":{"name":"California"}},{"type":"Polygon","id":"CO","arcs":[[58,59,60,61,62,63]],"properties":{"name":"Colorado"}},{"type":"Polygon","id":"CT","arcs":[[64,65,66,67]],"properties":{"name":"Connecticut"}},{"type":"Polygon","id":"DE","arcs":[[68,69,70,71]],"properties":{"name":"Delaware"}},{"type":"Polygon","id":"DC","arcs":[[72,73]],"properties":{"name":"District of Columbia"}},{"type":"Polygon","id":"FL","arcs":[[74,75,-2]],"properties":{"name":"Florida"}},{"type":"Polygon","id":"GA","arcs":[[76,77,-75,-1,78,79]],"properties":{"name":"Georgia"}},{"type":"MultiPolygon","id":"HI","arcs":[[[80]],[[81]],[[82]],[[83]],[[84]]],"properties":{"name":"Hawaii"}},{"type":"Polygon","id":"ID","arcs":[[85,86,87,88,89,90,91]],"properties":{"name":"Idaho"}},{"type":"Polygon","id":"IL","arcs":[[92,93,94,95,96,97]],"properties":{"name":"Illinois"}},{"type":"Polygon","id":"IN","arcs":[[98,99,-95,100,101]],"properties":{"name":"Indiana"}},{"type":"Polygon","id":"IA","arcs":[[102,-98,103,104,105,106]],"properties":{"name":"Iowa"}},{"type":"Polygon","id":"KS","arcs":[[107,108,-60,109]],"properties":{"name":"Kansas"}},{"type":"Polygon","id":"KY","arcs":[[110,111,112,113,-96,-100,114]],"properties":{"name":"Kentucky"}},{"type":"Polygon","id":"LA","arcs":[[115,116,117,-52]],"properties":{"name":"Louisiana"}},{"type":"Polygon","id":"ME","arcs":[[118,119]],"properties":{"name":"Maine"}},{"type":"MultiPolygon","id":"MD","arcs":[[[120]],[[-71,121,122,123,124,-74,125,126,127]]],"properties":{"name":"Maryland"}},{"type":"Polygon","id":"MA","arcs":[[128,129,130,131,-68,132,133,134]],"properties":{"name":"Massachusetts"}},{"type":"MultiPolygon","id":"MI","arcs":[[[-102,135,136]],[[137]],[[138,139]],[[140]]],"properties":{"name":"Michigan"}},{"type":"Polygon","id":"MN","arcs":[[-107,141,142,143,144]],"properties":{"name":"Minnesota"}},{"type":"Polygon","id":"MS","arcs":[[-4,145,-116,-51,146]],"properties":{"name":"Mississippi"}},{"type":"Polygon","id":"MO","arcs":[[-97,-114,147,-55,148,-108,149,-104]],"properties":{"name":"Missouri"}},{"type":"Polygon","id":"MT","arcs":[[150,151,-92,152,153]],"properties":{"name":"Montana"}},{"type":"Polygon","id":"NE","arcs":[[-105,-150,-110,-59,154,155]],"properties":{"name":"Nebraska"}},{"type":"Polygon","id":"NV","arcs":[[156,-48,-56,157,-88]],"properties":{"name":"Nevada"}},{"type":"Polygon","id":"NH","arcs":[[-135,158,159,-120,160]],"properties":{"name":"New Hampshire"}},{"type":"Polygon","id":"NJ","arcs":[[161,-69,162,163]],"properties":{"name":"New Jersey"}},{"type":"Polygon","id":"NM","arcs":[[164,165,166,-45,-62]],"properties":{"name":"New Mexico"}},{"type":"Polygon","id":"NY","arcs":[[-133,-67,167,-164,168,169,170]],"properties":{"name":"New York"}},{"type":"Polygon","id":"NC","arcs":[[171,172,-80,173,174]],"properties":{"name":"North Carolina"}},{"type":"Polygon","id":"ND","arcs":[[175,-154,176,-143]],"properties":{"name":"North Dakota"}},{"type":"Polygon","id":"OH","arcs":[[177,-115,-99,-137,178,179]],"properties":{"name":"Ohio"}},{"type":"Polygon","id":"OK","arcs":[[-149,-54,180,-165,-61,-109]],"properties":{"name":"Oklahoma"}},{"type":"Polygon","id":"OR","arcs":[[-89,-158,-58,181,182]],"properties":{"name":"Oregon"}},{"type":"Polygon","id":"PA","arcs":[[-163,-72,-128,183,-180,184,-169]],"properties":{"name":"Pennsylvania"}},{"type":"MultiPolygon","id":"RI","arcs":[[[185,-130]],[[186,-65,-132]]],"properties":{"name":"Rhode Island"}},{"type":"Polygon","id":"SC","arcs":[[187,-77,-173]],"properties":{"name":"South Carolina"}},{"type":"Polygon","id":"SD","arcs":[[-142,-106,-156,188,-151,-176]],"properties":{"name":"South Dakota"}},{"type":"Polygon","id":"TN","arcs":[[189,-174,-79,-5,-147,-50,-148,-113]],"properties":{"name":"Tennessee"}},{"type":"Polygon","id":"TX","arcs":[[-53,-118,190,-166,-181]],"properties":{"name":"Texas"}},{"type":"Polygon","id":"UT","arcs":[[191,-63,-49,-157,-87]],"properties":{"name":"Utah"}},{"type":"Polygon","id":"VT","arcs":[[-134,-171,192,-159]],"properties":{"name":"Vermont"}},{"type":"MultiPolygon","id":"VA","arcs":[[[193,-123]],[[120]],[[-126,-73,-125,194,-175,-190,-112,195]]],"properties":{"name":"Virginia"}},{"type":"MultiPolygon","id":"WA","arcs":[[[-183,196,-90]],[[197]],[[198]]],"properties":{"name":"Washington"}},{"type":"Polygon","id":"WV","arcs":[[-184,-127,-196,-111,-178]],"properties":{"name":"West Virginia"}},{"type":"Polygon","id":"WI","arcs":[[199,-93,-103,-145,200,-140]],"properties":{"name":"Wisconsin"}},{"type":"Polygon","id":"WY","arcs":[[-189,-155,-64,-192,-86,-152]],"properties":{"name":"Wyoming"}}]}},"arcs":[[[2632,3060],[5,-164],[7,-242],[4,-53],[3,-30],[-2,-19],[4,-11],[-5,-25],[0,-24],[-2,-32],[2,-57],[-2,-51],[3,-52]],[[2649,2300],[-14,-1],[-59,0],[-1,-25],[6,-37],[-1,-31],[2,-16],[-4,-28]],[[2578,2162],[-4,-6],[-7,31],[-1,47],[-2,6],[-3,-36],[-1,-34],[-7,9]],[[2553,2179],[-2,291],[6,363],[4,209],[-3,20]],[[2558,3062],[24,1],[50,-3]],[[1324,6901],[1,32],[6,-19],[-1,-32],[-8,4],[2,15]],[[1317,6960],[5,-23],[-3,-33],[-2,11],[0,45]],[[1285,7153],[6,5],[3,-8],[-1,-28],[-6,-6],[-5,17],[3,20]],[[1267,7137],[12,-7],[3,-36],[13,-41],[4,-25],[0,-21],[3,-4],[1,-27],[5,-27],[0,-25],[3,8],[2,-19],[1,-74],[-3,-17],[-7,3],[-3,38],[-2,-3],[-6,28],[-2,-10],[-5,10],[1,-28],[5,7],[3,-10],[-2,-39],[-5,4],[-9,49],[-2,25],[1,26],[-7,-2],[0,20],[5,2],[5,18],[-2,31],[-6,7],[-1,50],[-2,25],[-4,-18],[-2,28],[4,14],[-3,32],[2,8]],[[1263,6985],[5,-12],[4,15],[4,-7],[-4,-28],[-6,8],[-3,24]],[[1258,7247],[-4,19],[5,13],[15,-18],[7,1],[5,-36],[9,-29],[-1,-22],[-5,-11],[-6,5],[-5,-14],[-6,9],[-7,-9],[-1,45],[0,30],[-5,1],[-1,16]],[[1252,7162],[-4,14],[-4,32],[0,24],[3,11],[4,-11],[0,20],[12,-35],[1,-33],[-4,-5],[-3,-37],[3,-11],[-3,-43],[-5,9],[0,-27],[-3,13],[-2,54],[5,25]],[[1207,7331],[8,38],[3,-16],[7,-13],[6,-2],[0,-30],[6,-99],[0,-85],[-1,-22],[-4,13],[-10,84],[-7,25],[3,20],[-3,48],[-8,39]],[[1235,7494],[10,-15],[5,2],[0,-14],[8,-52],[-5,8],[-2,-18],[6,-27],[2,-48],[-6,-13],[-2,-16],[-10,-35],[-3,1],[-1,37],[2,22],[-1,32],[-3,40],[0,21],[-2,51],[-4,22],[-1,38],[7,-36]],[[1203,7324],[4,0],[4,-35],[-2,-24],[-6,-5],[0,38],[0,26]],[[1207,7331],[-5,7],[-3,26],[-6,18],[-5,37],[-6,17],[1,30],[4,10],[1,26],[3,-11],[8,-1],[6,17],[8,-23],[-5,-26],[2,-9],[4,28],[10,-9],[5,-21],[-3,-38],[3,-3],[3,-50],[-7,-7],[-14,41],[0,-42],[-4,-17]],[[883,7871],[-12,-48],[-1,-19],[-9,-12],[2,29],[10,30],[7,34],[3,-14]],[[870,7943],[-2,-39],[-4,-41],[-6,14],[5,47],[7,19]],[[863,9788],[3,-8],[15,-9],[8,5],[10,0],[12,-7],[7,4],[7,-15],[12,-18],[16,-4],[5,10],[11,6],[4,14],[12,2],[0,-9],[7,5],[15,-15],[9,-24],[10,-11],[2,-11],[8,-2],[8,-18],[1,-11],[5,9],[6,-7],[0,-1783],[13,-16],[2,17],[14,-24],[8,30],[18,4],[-3,-52],[4,-17],[10,-17],[2,-27],[29,-101],[4,-63],[6,17],[12,31],[7,1],[3,23],[0,34],[5,0],[1,31],[9,7],[13,26],[13,-45],[-1,-27],[3,-27],[7,-7],[10,-40],[-1,-12],[4,-22],[12,-25],[19,-110],[3,-29],[6,-29],[8,-65],[9,-55],[-3,-23],[9,-9],[-2,-33],[7,-14],[1,-38],[7,2],[14,-40],[9,-7],[5,-19],[4,-5],[1,-19],[9,-5],[3,-23],[-4,-43],[1,-36],[4,-58],[-4,-15],[-6,-53],[-10,-39],[-3,20],[-4,-6],[-3,39],[1,17],[-3,20],[7,21],[-2,7],[-7,-26],[-3,17],[-4,-10],[-12,42],[4,46],[-8,-15],[0,-23],[-6,17],[-1,22],[4,24],[-1,24],[-6,-19],[-6,42],[-3,-8],[-2,36],[5,23],[6,0],[-2,28],[3,36],[-5,-1],[-9,32],[-6,37],[-15,27],[0,77],[-4,9],[1,31],[-5,9],[-8,42],[-2,22],[-12,7],[-14,56],[-6,132],[-3,-30],[1,-27],[6,-53],[-1,-8],[3,-43],[0,-28],[-6,6],[-4,31],[-6,6],[-8,-9],[0,45],[-5,38],[-5,-12],[-17,40],[-2,-11],[10,-13],[7,-31],[3,-1],[1,-25],[4,-30],[-10,-16],[-5,10],[0,-26],[-8,20],[-2,14],[-5,0],[-13,38],[-10,33],[-1,20],[-5,30],[-14,21],[-9,21],[-14,26],[-9,24],[1,26],[2,-9],[3,17],[-3,38],[4,21],[-2,9],[-7,-40],[-14,-26],[-18,10],[-14,24],[-1,18],[-7,-4],[-7,14],[-17,12],[-9,1],[-21,-10],[-8,-7],[-10,27],[-12,12],[-3,17],[-2,28],[-8,-2],[-3,-25],[-15,34],[-2,14],[-15,-27],[-7,-32],[-3,30],[3,17],[4,-5],[14,22],[-2,17],[-6,-8],[-3,22],[-6,3],[-6,55],[-3,-13],[-8,-8],[-3,8],[-3,-18],[-11,6],[-1,-20],[-7,-5],[-3,7],[2,36],[-3,-1],[-5,-38],[7,-12],[1,-27],[4,-30],[-3,-31],[-5,10],[-2,-15],[6,-7],[3,-41],[-8,-9],[-4,9],[-7,-12],[-3,10],[-9,-2],[0,16],[-4,-10],[-3,-20],[-3,18],[-5,-25],[2,-12],[-6,-15],[-6,-2],[-3,-20],[-6,-17],[-4,6],[-5,-21],[-4,1],[-8,-43],[-9,-3],[-3,14],[-5,-23],[-11,17],[2,33],[8,11],[4,-2],[2,13],[8,25],[0,21],[-11,-28],[-9,16],[-1,12],[5,48],[8,34],[1,29],[2,5],[1,30],[-4,34],[10,12],[19,48],[4,-19],[6,-5],[9,20],[-10,26],[-4,20],[-7,-2],[-5,9],[-2,-8],[-9,-14],[-4,-26],[-9,-6],[-9,-30],[-1,-20],[-7,-11],[-2,-22],[-5,-13],[-2,-39],[-10,-25],[5,-20],[-4,-29],[-9,-5],[-1,-38],[-8,-13],[-3,15],[-4,-29],[-5,-1],[1,-21],[-11,-13],[-2,-57],[12,-3],[10,-16],[3,-19],[-4,-30],[-7,-19],[-6,-1],[0,-17],[-4,-6],[1,-21],[-4,-31],[-9,-29],[-5,0],[-5,-11],[-5,2],[-4,-11],[2,-16],[-7,-8],[-2,-23],[-5,14],[-5,-45],[-9,4],[1,-24],[-6,6],[-3,-11],[0,-32],[-6,-50],[-10,-6],[-7,-23],[-2,-13],[-5,18],[-8,-48],[-2,13],[-5,-4],[-1,-27],[-5,-10],[-6,4],[-4,-27],[8,-9],[-9,-60],[-25,-20],[-6,-54],[-2,12],[1,33],[-5,6],[-6,-13],[-1,-14],[-10,-22],[-4,-25],[-1,18],[-2,-21],[-6,14],[-10,-33],[-8,2],[1,25],[-4,24],[-3,-20],[1,-21],[-11,-64],[-3,16],[-1,-24],[-8,4],[-1,38],[-4,8],[-2,-14],[4,-16],[-2,-27],[-5,-13],[-5,29],[-5,2],[-1,-11],[5,-17],[-9,-27],[6,-7],[0,-13],[-5,9],[-7,-25],[-15,1],[-7,-16],[0,-13],[-8,-15],[-6,6],[-2,35],[6,12],[4,43],[6,1],[13,28],[10,1],[4,-27],[3,20],[-1,23],[6,10],[7,0],[8,50],[10,45],[12,40],[15,18],[6,-9],[6,12],[1,-17],[-3,-19],[4,-14],[1,23],[7,2],[2,-15],[5,-5],[0,18],[-8,15],[0,11],[5,49],[6,28],[9,27],[15,24],[10,35],[5,-13],[4,5],[-1,22],[1,21],[8,44],[11,28],[8,38],[0,21],[7,148],[11,40],[-1,31],[-27,-45],[-8,6],[-2,18],[-5,9],[-1,21],[-4,-10],[-3,-32],[5,-41],[-6,-18],[-5,7],[-9,64],[-6,33],[-4,0],[-2,-24],[-3,-4],[-4,19],[-5,4],[-2,32],[-16,-37],[-13,-26],[-1,-14],[-11,-22],[-6,20],[5,23],[-1,54],[-4,57],[7,24],[-6,49],[-5,27],[-4,39],[-6,17],[-2,-34],[-7,-8],[-12,-22],[-14,-9],[-7,2],[-7,12],[-1,30],[-5,9],[-9,42],[-8,8],[-8,46],[6,21],[1,39],[-5,-8],[0,24],[2,19],[-6,18],[0,-19],[-7,8],[-1,32],[-6,4],[-3,22],[0,27],[-5,-12],[-1,26],[7,6],[-6,30],[10,2],[0,35],[2,24],[18,77],[4,23],[3,-5],[-2,33],[7,55],[6,22],[11,9],[8,-9],[12,-33],[8,4],[11,32],[11,49],[6,6],[1,-13],[13,0],[12,10],[11,52],[0,12],[-5,48],[-1,28],[-8,31],[-3,26],[8,-7],[8,22],[0,20],[-10,39],[-8,-30],[-7,5],[-6,-17],[-8,-4],[-2,-11],[-9,-17],[-2,-28],[-5,-12],[-2,34],[-5,7],[-4,-26],[-2,12],[-10,19],[-20,-1],[-14,-21],[-6,-3],[-11,13],[-22,14],[-6,12],[-3,19],[2,26],[-8,22],[2,24],[5,12],[-2,31],[-8,0],[-6,8],[-13,6],[-7,16],[-10,16],[-1,19],[16,27],[20,43],[15,27],[8,-15],[8,-3],[2,21],[-5,3],[-1,18],[20,29],[22,22],[12,2],[7,-7],[-4,-32],[2,-22],[-3,-15],[4,-26],[8,5],[10,-5],[11,6],[4,-10],[7,-2],[7,10],[8,-11],[9,42],[5,2],[5,-8],[2,24],[-12,11],[-11,-9],[1,31],[-8,34],[-10,10],[-2,30],[7,8],[9,-31],[-1,-24],[4,-18],[10,-22],[2,23],[-11,30],[5,54],[-4,10],[-11,-12],[-11,3],[-2,10],[-6,-10],[-24,23],[0,24],[-7,54],[-6,19],[-9,17],[-19,46],[-9,18],[-8,4],[-13,31],[-12,18],[-1,6],[9,10],[4,29],[1,59],[25,-4],[31,13],[8,11],[12,29],[12,45],[3,45],[5,38],[10,33],[5,24],[13,38],[2,-10],[11,-3],[16,20],[10,21],[24,64],[9,4],[1,-10],[9,7],[9,-2],[18,9],[17,28],[17,58],[7,13],[2,-10],[26,-24],[2,-17],[-9,-22],[-4,-1],[0,-29],[14,9],[0,16],[6,14],[2,-8],[5,33],[13,-30],[-2,-23],[8,-6],[5,-14],[7,22],[13,1],[7,7],[18,-7],[10,-8],[-5,-45],[17,-12],[2,-11],[16,-20],[1,9],[12,13],[11,-1],[0,-11],[7,-1],[7,15],[11,2],[9,-6],[11,-16],[5,3],[7,-22],[4,9],[7,-7],[5,-13]],[[717,7456],[-1,-8],[-9,13],[7,49],[6,4],[4,45],[5,-40],[4,14],[8,-22],[0,-31],[-11,-4],[-5,-13],[-8,-7]],[[688,7363],[8,25],[-8,6],[0,22],[6,14],[5,-10],[0,-22],[3,15],[0,32],[5,-15],[1,21],[5,-12],[5,0],[5,11],[7,-20],[0,-55],[9,4],[-6,-37],[-11,15],[4,-24],[-3,-20],[-6,10],[0,-38],[-8,-10],[-3,-16],[-5,15],[-6,-40],[-4,-4],[-5,-18],[-2,43],[-6,-23],[-1,13],[-6,14],[0,39],[-6,15],[4,45],[11,28],[7,-2],[1,-21]],[[671,7185],[-6,-39],[-2,6],[8,33]],[[640,7055],[4,-2],[-1,-40],[-8,6],[-1,13],[6,23]],[[519,6933],[-2,-41],[-9,-33],[5,51],[2,-5],[4,28]],[[501,6947],[5,0],[0,-20],[-5,-23],[-5,15],[-3,-14],[-2,35],[2,12],[8,-5]],[[451,6875],[1,-16],[-3,-11],[-3,18],[5,9]],[[447,8527],[-4,-19],[-2,16],[6,3]],[[436,6781],[6,-7],[-1,-16],[-5,1],[0,22]],[[358,6745],[2,-22],[-5,-10],[-1,23],[4,9]],[[352,6718],[-8,-21],[-2,14],[3,19],[7,-12]],[[335,7902],[6,7],[2,-14],[5,3],[6,-12],[1,-54],[-3,-18],[-7,-11],[-2,-18],[-11,20],[-5,-1],[-10,28],[-4,0],[-6,15],[-3,25],[4,7],[10,-7],[5,20],[5,2],[3,14],[4,-6]],[[334,6690],[5,-14],[-10,-36],[1,-6],[12,26],[0,-15],[-5,-17],[-8,-12],[-1,-18],[-8,-18],[-7,-1],[-5,-18],[-9,-16],[-5,17],[9,20],[3,-3],[8,16],[-2,19],[4,20],[6,-9],[1,12],[-7,4],[-4,14],[4,23],[11,13],[2,-26],[5,25]],[[266,6527],[10,37],[1,16],[4,17],[7,9],[3,-10],[1,-25],[-12,-27],[-6,-40],[-6,-13],[-2,36]],[[238,6477],[2,-19],[-8,-1],[-1,13],[7,7]],[[227,7303],[-4,-18],[-1,18],[5,0]],[[212,6440],[2,-18],[-5,-13],[-1,19],[4,12]],[[182,8542],[22,-28],[13,24],[6,-2],[5,-14],[2,-23],[11,-12],[4,-12],[15,-5],[8,-8],[-4,-28],[-7,6],[-8,-5],[-4,-13],[-4,-28],[-5,26],[-6,18],[-6,2],[-3,20],[-15,25],[-6,1],[-11,-22],[-7,11],[-4,23],[4,44]],[[162,6381],[0,-22],[-5,-4],[1,19],[4,7]],[[128,6335],[4,-8],[10,1],[1,-7],[-13,-9],[-2,23]],[[108,6360],[0,19],[4,7],[6,-19],[-2,-17],[-4,1],[1,-20],[-5,-2],[-12,-21],[-6,6],[2,15],[7,-2],[9,33]],[[47,6279],[5,3],[0,-24],[-6,3],[-8,-28],[-4,37],[4,1],[0,29],[5,1],[0,-21],[4,-1]],[[28,6296],[3,-9],[-2,-32],[-5,-10],[0,20],[4,31]],[[0,6291],[5,-1],[4,-23],[-4,-27],[-5,51]],[[9993,6496],[6,-13],[0,-19],[-11,-12],[-8,31],[0,15],[13,-2]],[[1966,3444],[-1,-1081]],[[1965,2363],[-57,0],[-34,71],[-73,150],[3,43]],[[1804,2627],[6,8],[1,16],[-1,36],[-4,1],[-2,71],[6,27],[0,28],[-1,45],[4,34],[4,12],[4,25],[-6,27],[-4,51],[-5,31],[0,24]],[[1806,3063],[2,26],[0,36],[-3,36],[-2,112],[11,7],[3,-23],[3,1],[3,33],[0,153]],[[1823,3444],[101,2],[42,-2]],[[2515,3253],[-1,-35],[-4,-11],[-1,-29],[-5,-31],[0,-46],[-3,-34],[-3,-5]],[[2498,3062],[2,-17],[-4,-14],[-2,-33],[-3,-8],[0,-38],[-5,-10],[0,-13],[-6,-31],[2,-21],[-5,-30],[-5,-59],[5,-25],[-2,-16],[1,-39],[-2,-26]],[[2474,2682],[-69,3],[-13,0]],[[2392,2685],[0,101],[-4,8],[-5,-9],[-3,18]],[[2380,2803],[1,335],[-5,211]],[[2376,3349],[4,0],[123,-1],[2,-36],[-4,-23],[-4,-36],[18,0]],[[1654,4398],[0,-331],[0,-241],[36,-171],[35,-169],[27,-137],[20,-101],[34,-185]],[[1804,2627],[-38,-18],[-30,-16],[-4,25],[0,40],[-2,47],[-4,33],[-9,46],[-12,43],[-2,-12],[-4,8],[1,18],[-5,39],[-7,-8],[-12,28],[-2,23],[-8,28],[-9,-1],[-7,13],[-10,-6],[-5,26],[1,53],[-1,8],[1,38],[-8,28],[0,39],[-3,2],[-4,33],[-4,8],[-1,20],[-11,79],[-5,23],[-1,61],[2,-5],[2,37],[-4,33],[-5,-4],[-7,30],[-2,24],[0,23],[-3,31],[0,50],[5,0],[-2,70],[-2,-7],[-1,-35],[-5,-7],[-7,26],[-1,45],[-4,35],[-6,22],[-3,25],[-9,50],[2,14],[-4,64],[2,35],[-3,54],[-7,52],[-7,29],[-2,35],[7,83],[2,29],[-2,22],[3,57],[-2,52],[-3,13],[1,42]],[[1534,4399],[28,1],[24,1],[38,-3],[30,0]],[[2107,4208],[57,0],[0,-191]],[[2164,4017],[1,-574]],[[2165,3443],[-28,1]],[[2137,3444],[-38,-1],[-72,0],[-15,1],[-46,0]],[[1966,3444],[0,223],[-1,21],[0,162],[0,357]],[[1965,4207],[32,1],[63,-1],[47,1]],[[3025,4400],[0,-113],[-2,-18]],[[3023,4269],[-2,3],[-12,-14],[-15,4],[-7,-26],[-7,-9],[-8,-22]],[[2972,4205],[-2,22],[7,21],[-2,16],[2,144]],[[2977,4408],[12,-2],[36,-3],[0,-3]],[[2922,3980],[-2,-23]],[[2920,3957],[-3,-13],[0,-30],[5,-29],[1,-47],[6,-49],[3,-2],[1,-66]],[[2933,3721],[-19,2],[-2,241]],[[2912,3964],[5,21],[5,-5]],[[2876,3786],[-2,27]],[[2874,3813],[2,12],[4,-19],[-4,-20]],[[2649,2300],[4,-55],[39,-13],[37,-14],[1,-41],[4,1],[1,39],[-1,35],[2,15],[7,-16],[8,-7]],[[2751,2244],[1,-83],[4,-93],[8,-122],[13,-131],[-2,-9],[1,-61],[5,-68],[8,-137],[2,-42],[0,-44],[-3,-158],[-3,-3],[-3,-49],[1,-16],[-5,-36],[-2,9],[-6,-15],[-9,-8],[-2,20],[1,29],[-7,85],[-5,15],[-4,-11],[-3,47],[-1,38],[-6,43],[-2,28],[1,41],[-3,8],[1,-24],[-3,-7],[-9,104],[-4,26],[9,76],[-6,-4],[-4,-24],[-3,38],[5,104],[1,87],[-4,21],[-1,28],[-5,6],[-7,46],[-5,19],[0,28],[-4,11],[-3,31],[-11,42],[-9,-10],[0,-29],[-3,5],[-12,-35],[-12,-9],[0,21],[-3,25],[-15,57],[-10,24],[-10,6],[-8,-4],[-17,-18]],[[2703,3063],[-6,-41],[0,-20],[9,-40],[3,3],[5,-42],[1,-22],[4,-40],[7,-24],[3,-35],[8,-33],[0,-22],[5,-35],[7,-29],[2,-32],[1,-40],[3,-14],[5,-51],[0,-33],[7,-16]],[[2767,2497],[-7,-65],[-2,-34],[-3,-29],[0,-30],[-3,-14],[-1,-81]],[[2632,3060],[37,1]],[[2669,3061],[20,-1],[14,3]],[[640,0],[-7,17],[-1,16],[1,43],[-5,73],[4,24],[2,34],[-2,22],[1,23],[8,-27],[9,-20],[5,-29],[0,-26],[8,-40],[-5,-34],[-8,-15],[-7,-25],[-3,-36]],[[613,397],[3,-26],[4,11],[9,-30],[-1,-27],[-9,-14],[-2,6],[-1,33],[-5,7],[-1,19],[3,21]],[[602,432],[-3,-20],[-7,0],[2,22],[8,-2]],[[574,525],[3,-45],[-2,-26],[-6,-5],[-4,54],[4,1],[5,21]],[[531,626],[3,-2],[2,-20],[-1,-28],[-4,-18],[-9,22],[1,31],[8,15]],[[1908,4871],[0,-472]],[[1908,4399],[-31,-1],[-54,0]],[[1823,4398],[-85,1]],[[1738,4399],[0,349],[4,62],[-2,16],[-6,3],[-2,26],[6,68],[3,6],[3,29],[-1,17],[4,23],[1,34],[6,56],[-2,26],[-7,14],[-4,32]],[[1741,5160],[0,34],[-3,33],[0,16],[0,255],[0,236]],[[1738,5734],[28,0]],[[1766,5734],[0,-195],[9,-54],[1,-52],[5,-23],[6,-8],[0,-14],[11,-51],[1,-21],[8,-20],[0,-12],[8,1],[-4,-71],[-1,-45],[3,-29],[-5,-21],[2,-20],[-1,-21],[6,-20],[7,26],[3,21],[5,-19],[-1,-15],[3,-37],[5,-39],[3,-13],[0,-37],[3,-16],[6,-2],[4,-61],[3,-11],[3,18],[9,-1],[7,17],[3,-10],[7,9],[2,-11],[5,8],[7,39],[4,-33],[5,-20]],[[2489,4496],[53,-3],[28,0]],[[2570,4493],[-1,-37],[4,-43],[5,-70]],[[2578,4343],[0,-450],[-3,-35],[3,-40],[1,-34],[-4,-27],[-1,-25],[-5,-41],[-3,-3],[0,-24],[-2,-9],[-1,-45],[0,-13]],[[2563,3597],[-3,-27],[2,-34],[-11,-17],[-1,-20],[2,-25],[-3,-16],[-11,29],[-3,-2],[-4,-33],[1,-11]],[[2532,3441],[-5,2],[-6,55],[2,12],[-2,37],[0,29],[-9,41],[-3,-4],[-3,25],[-9,38],[0,31],[5,49],[-1,18],[3,23],[-4,13],[-6,9],[-3,-18],[-3,11],[-1,63],[-10,41],[-9,49],[-3,58],[-1,39],[3,27]],[[2467,4089],[0,35],[8,21],[1,29],[4,19],[0,33],[-4,27],[2,34],[11,9],[9,24],[0,29],[4,13],[1,37],[0,24],[-7,18],[-1,20],[-6,35]],[[2655,4340],[0,-228],[0,-266]],[[2655,3846],[-2,-9],[2,-52],[-5,-1],[-5,-18],[-8,9],[1,-38],[-5,-16],[-2,-24],[-5,-9],[-3,-48],[-3,-13],[-6,18],[-1,22],[-7,-24],[1,-21],[-7,-7],[-1,19],[-8,-19],[-2,-20],[-7,28],[-4,-6],[-2,13],[-3,-13],[-7,-2],[-3,-18]],[[2578,4343],[3,-12],[8,0],[9,22]],[[2598,4353],[23,0],[34,0],[0,-13]],[[2473,4685],[0,-28],[4,-19],[-3,-23],[1,-43],[2,-30],[10,-22],[2,-24]],[[2467,4089],[-3,7],[-6,38],[-3,-1],[-40,-5],[-39,-2],[-33,3]],[[2343,4129],[-3,25],[2,49],[-3,43],[0,48],[-5,17],[-1,26],[2,23],[-2,33],[-4,13],[-5,86]],[[2324,4492],[-5,41],[2,29],[1,37],[2,14],[-3,19],[1,33],[-2,16],[4,4]],[[2324,4685],[144,0],[5,0]],[[2356,4017],[3,-18],[9,-14],[-6,-56],[4,-18],[4,-45],[6,-10],[0,-412]],[[2376,3444],[-156,0],[-55,-1]],[[2164,4017],[5,0],[187,0]],[[2718,3716],[-1,-57],[4,-37],[4,-28],[2,-22],[5,-22],[4,-3]],[[2736,3547],[-11,-51],[-11,-29],[0,-14],[-4,-13],[0,-16],[-6,-8],[-1,-21],[-16,-27]],[[2687,3368],[0,-3],[-24,2],[-22,6],[-5,-2],[-32,8],[-36,-5],[-6,9],[1,-35],[-36,2],[-3,-2]],[[2524,3348],[1,24],[5,-8],[2,77]],[[2655,3846],[11,0],[5,-40],[1,-17],[9,-7],[6,-26],[5,13],[10,-14],[4,19],[4,6],[1,-32],[3,-6],[4,-26]],[[2474,2682],[3,-22],[-2,-9],[-1,-38],[5,-24],[0,-57],[-3,-44],[-7,-27],[-2,-43],[-2,4],[-1,-70],[-3,-2],[2,-37],[-2,-14],[54,0],[-3,-63],[4,-41],[1,-32],[4,-20]],[[2521,2143],[-9,-26],[0,-19],[7,-12],[3,30],[6,-30],[-1,-24],[-3,-11],[-7,10],[1,-18],[-2,-27],[5,-24],[9,-7],[3,-29],[3,-4],[-5,-32],[-5,6],[-4,33],[-10,18],[0,33],[-6,-11],[1,-27],[-3,-25],[-3,-4],[-3,28],[-7,1],[-2,-29],[-4,-9],[-5,18],[-4,2],[-3,47],[-7,21],[-2,-3],[-3,40],[-7,-5],[0,24],[-8,-23],[1,-18],[-5,-17],[-9,8],[-10,27],[-7,11],[-16,-9],[-2,-8]],[[2398,2049],[-2,19],[6,68],[-2,37],[2,20],[-1,26],[3,19],[3,50],[0,40],[-8,78],[0,41],[-7,42],[0,196]],[[3046,5029],[12,26],[-2,13],[5,30],[4,13],[-1,12],[5,18],[-1,33],[2,50],[5,17],[1,53],[22,147],[6,-7],[0,-35],[4,-13],[9,21],[6,0],[4,14],[8,-31],[4,-25],[1,-214],[-1,-51],[10,-14],[-2,-22],[3,-21],[-2,-18],[4,-30],[5,7],[5,-68],[-6,-31],[-3,12],[-3,-21],[-4,5],[0,-18],[-6,2],[-8,-40],[-2,28],[-3,2],[1,-30],[-6,-15],[-2,24],[-3,-12],[-7,0],[0,28],[-5,-6],[1,-20],[-4,-42],[1,-12],[-6,-23],[-5,9],[-3,-24],[-4,-3],[-4,-20],[-4,4],[-1,21],[-7,-34],[2,-21],[-5,-7],[0,-18],[-5,-22],[-5,-50]],[[3056,4600],[-3,14],[0,19],[-4,22],[-2,250],[-1,124]],[[2904,3626],[2,0],[-1,0],[-1,0]],[[2933,3721],[-6,-80]],[[2927,3641],[-4,-3],[-8,-12]],[[2915,3626],[-6,-8],[0,31],[-2,13],[3,13],[-4,32],[-2,-14],[-6,3],[-2,35],[2,0],[0,45],[2,18],[-2,60],[3,36],[5,6],[0,37],[-3,-5],[0,-18],[-8,-25],[-2,-21],[0,-56],[-3,-26],[1,-44],[4,-30],[-1,-23],[3,-23],[-2,-16],[-6,30],[-10,15],[-2,29],[-6,-16],[-2,23],[5,29]],[[2874,3756],[2,30]],[[2874,3813],[-4,18],[-6,10],[0,28],[-3,15],[-4,4]],[[2857,3888],[-4,53],[-4,0],[-5,18],[-3,-15],[-5,1],[-1,-21],[-8,14],[-6,-28],[-3,6],[-6,-33],[-6,-17],[1,98]],[[2807,3964],[105,0]],[[3053,4565],[1,-34],[-1,-27],[-5,-25],[0,-29],[6,-4],[4,-31],[0,-24],[3,-6],[0,-22],[8,-19],[9,18],[-2,-26],[-13,-23],[-5,-1],[-3,18],[-5,-6],[0,-13],[-5,-9]],[[3045,4302],[-3,35]],[[3042,4337],[0,6]],[[3042,4343],[-3,14],[-2,45],[-4,0],[-8,-2]],[[2977,4408],[0,7],[6,126]],[[2983,4541],[23,-3]],[[3006,4538],[34,-7],[3,18],[7,19],[3,-3]],[[2598,4353],[5,25],[4,43],[4,26],[3,36],[1,52],[0,57],[-9,111],[3,42],[-2,50],[6,51],[2,43],[-1,23],[5,9],[0,31],[8,9],[5,34],[0,-69],[3,-3],[3,35],[1,58],[2,15],[8,9],[-3,41],[5,35],[7,2],[7,-22],[7,-3],[3,-28],[6,-2],[9,-25],[3,1],[4,-41],[-3,-21],[3,-29],[2,-32],[-2,-71],[-6,-18],[-1,-37],[-7,-12],[-4,-44],[2,-17],[6,-15],[6,24],[6,49],[10,19],[5,-15],[3,-27],[3,-80],[0,-39],[3,-48],[-3,-69],[-4,-11],[-1,25],[-3,-7],[-3,-58],[-6,-21],[-2,-44],[-7,-37],[0,-16]],[[2694,4347],[-39,-7]],[[2635,5110],[1,-23],[-4,-4],[1,33],[2,-6]],[[2496,5270],[11,20],[5,23],[12,9],[8,29],[4,1],[3,20],[9,28],[4,24],[7,15],[6,-13],[-11,-59],[-2,-19],[0,-36],[5,27],[10,-4],[8,-19],[7,-52],[3,-10],[7,9],[2,-12],[7,-6],[16,44],[8,4],[10,-2],[7,15],[6,1],[1,-54],[5,-7],[6,8],[2,-12],[4,16],[8,5],[1,-67],[3,-28],[6,-8],[1,19],[5,0],[3,-20],[-3,-14],[-15,12],[-8,-8],[-8,23],[-2,-21],[1,-18],[-4,4],[-5,27],[-9,15],[-5,1],[-4,-25],[-8,-6],[-8,5],[-3,-10],[-1,-21],[-9,-18],[1,25],[-4,5],[-2,-26],[-6,-1],[-3,-11],[-5,-45],[-8,-58],[1,-5]],[[2576,4989],[-4,20],[2,27],[-7,4],[3,26],[0,34],[-5,23],[-4,24],[-12,19],[-4,-7],[-12,29],[-29,38],[-3,33],[-5,11]],[[2541,5539],[-7,-24],[-4,-3],[1,19],[18,45],[-4,-31],[-4,-6]],[[2324,4685],[0,343],[-7,22],[-5,36],[8,41],[1,22]],[[2321,5149],[-1,76],[-4,20],[-2,42],[0,51],[-1,8],[-1,123],[-5,65],[-3,36],[0,77],[1,27],[-3,60]],[[2302,5734],[59,0],[0,73],[5,-2],[4,-14],[4,-100],[3,-11],[9,-3],[1,-10],[11,-4],[1,-21],[10,5],[0,9],[7,10],[6,-4],[8,-16],[2,-19],[4,2],[4,-43],[2,18],[7,8],[1,-18],[9,-12],[0,-17],[4,-14],[8,8],[5,18],[8,12],[2,-28],[5,6],[6,-6],[6,4],[8,-24],[7,4],[0,-10],[-10,-24],[-13,-19],[-9,-20],[-12,-49],[-5,-31],[-8,-34],[-13,-46],[2,-16]],[[2450,5296],[-2,9],[-6,-16],[0,-113],[-2,-11],[-8,-16],[-6,-41],[-1,-27],[3,-2],[4,-24],[-3,-29],[0,-33],[-2,-70],[8,-34],[6,-3],[3,-21],[8,-21],[2,-25],[8,-33],[5,-7],[5,-42],[-1,-30],[2,-22]],[[2553,2179],[-3,-8],[-7,4],[-3,12],[-7,-8],[-9,-22],[-3,-14]],[[2498,3062],[53,0],[7,0]],[[2524,3348],[-2,0],[-2,0],[1,-47],[-6,-48]],[[2376,3349],[0,95]],[[2356,4017],[-7,50],[-6,62]],[[2108,5151],[0,-181],[-1,0]],[[2107,4970],[-53,1],[-90,0],[-56,0],[0,-100]],[[1766,5734],[130,-1],[58,1],[154,0]],[[2108,5734],[0,-217],[0,-366]],[[2107,4208],[0,382]],[[2107,4590],[21,0],[49,-1],[88,0],[1,-10],[15,-34],[4,19],[4,-4],[13,0],[15,-36],[2,-27],[5,-5]],[[1823,4398],[0,-954]],[[1654,4398],[37,-1],[47,2]],[[3006,4538],[-2,14],[0,28],[3,11],[-1,27],[3,81],[5,37],[2,43],[3,16],[-1,47],[10,17],[5,33],[-3,31],[4,32],[0,18]],[[3034,4973],[4,49],[6,-5],[2,12]],[[3056,4600],[-3,-35]],[[2962,4152],[-5,-13],[-2,-29],[8,-14],[0,-22],[-3,-103],[-9,-76],[-6,-22],[-5,-48],[-3,31],[-8,16],[-10,42],[-1,28],[0,4],[2,11]],[[2922,3980],[8,15],[0,15],[9,31],[2,17],[-9,39],[0,24],[-3,6],[-1,22],[5,33],[-3,20],[7,40],[2,21],[4,13]],[[2943,4276],[13,-41],[9,-28],[-3,-55]],[[2137,3444],[0,-95]],[[2137,3349],[-1,0],[0,-474],[0,-193],[0,-192],[-101,0],[-1,-18],[3,-22]],[[2037,2450],[-48,0],[0,-87],[-24,0]],[[2972,4205],[13,-15],[2,11],[10,0],[6,6],[8,31],[1,-22],[5,-10],[-11,-28],[-22,-42],[-9,-8],[-6,2],[-5,-9],[-2,31]],[[2943,4276],[-2,14],[-4,1],[-5,32],[1,29],[-4,22],[-2,-2],[-3,27],[-125,0],[0,48],[0,3]],[[2799,4450],[17,54],[3,26],[5,18],[-2,32],[-2,7],[-2,52],[17,22],[15,-1],[6,-5],[6,-21],[4,8],[12,-1],[8,14],[8,34],[5,1],[0,52],[3,31],[-7,21],[2,24],[11,32],[4,28],[14,64],[13,32],[19,-5],[23,4]],[[2981,4973],[1,-39],[-2,-36],[3,-34],[-1,-37],[-3,-39],[2,-52],[-1,-16],[4,-31],[-1,-132],[0,-16]],[[2909,3359],[4,-77],[-8,8],[-1,-10],[-10,-11],[-1,-11],[-7,-3],[0,-13],[8,9],[1,-8],[9,9],[3,-18],[5,8],[2,-46],[-2,-22],[-3,-2],[-8,-47],[-9,-2],[-2,-33],[4,-32],[4,-6],[-6,-54],[-6,7],[-9,-6],[-6,-11],[-10,-37],[-7,-48],[-4,-60],[-6,13],[-11,-12]],[[2833,2844],[-32,181],[-32,4],[1,21],[-5,33],[-3,-12],[0,20],[-35,10],[-8,-8],[-6,-17],[-10,-13]],[[2669,3061],[1,45],[5,4],[3,31],[7,29],[7,1],[7,29],[8,10],[6,43],[4,13],[1,-19],[11,37],[5,-8],[4,36],[5,9],[1,45]],[[2744,3366],[20,-5],[19,-3],[23,-1],[103,2]],[[2321,5149],[-213,2]],[[2108,5734],[194,0]],[[2777,4138],[-4,-10],[2,-21],[0,-29],[-4,-46],[-3,-70],[-11,-62],[-3,-8],[-4,12],[-3,-27],[-3,1],[-4,-36],[1,-22],[-3,-18],[-4,29],[-5,-46],[1,-29],[-3,-11],[-1,-25],[-8,-4]],[[2694,4347],[11,-26],[3,-15],[3,14],[6,-30],[4,-9],[14,25],[7,-6],[9,36],[12,34],[14,24]],[[2777,4394],[0,-256]],[[2380,2803],[-11,21],[-3,22],[-7,18],[-2,-16],[-8,1],[-1,10],[-7,-19],[-3,11],[-6,-10],[-5,-29],[-2,17],[-6,14],[-7,0],[-2,21],[-7,-42],[-2,24],[-3,-8],[-3,16],[-7,15],[-5,-25],[-2,26],[-4,3],[-2,21],[-6,8],[-3,-18],[-3,16],[-5,-2],[-6,17],[-6,-2],[-2,36],[-9,2],[-4,-6],[-6,37],[-2,-3],[0,370],[-52,0],[-34,0]],[[1534,4399],[-4,22],[-2,61],[0,43],[-4,33],[3,32],[2,51],[4,54],[2,48],[3,162],[0,22],[3,71],[1,99],[-2,54],[1,32],[12,29]],[[1553,5212],[5,-22],[4,5],[3,2],[6,-20],[3,-23],[1,-57],[15,-21],[12,30],[8,3],[9,-10],[1,-13],[16,27],[3,-9],[9,5],[7,19],[12,17],[12,4],[4,12],[58,-1]],[[2807,3964],[-30,0],[0,174]],[[2777,4394],[5,11],[17,45]],[[3045,4302],[-6,-4],[3,39]],[[3042,4343],[-4,3],[-3,-28],[-1,-40],[-11,-9]],[[2833,2844],[-5,-10],[-6,-31],[-6,-49],[-1,-40],[-5,-31],[-6,0],[-2,-23],[-6,-25],[-4,-28],[-6,-11],[-6,-29],[-1,-14],[-6,-16],[-6,-40]],[[2107,4590],[0,380]],[[2687,3368],[57,-2]],[[2398,2049],[-5,-1],[-14,-26],[-6,15],[-1,31],[-3,-22],[-3,5],[-1,-27],[3,-11],[0,-36],[-5,-37],[-9,-47],[-17,-51],[-2,9],[-5,-13],[0,12],[-7,-9],[-3,24],[-2,-5],[7,-49],[-5,-16],[-5,10],[-1,-35],[-7,-35],[-6,-66],[-4,-69],[-3,5],[-1,-25],[3,6],[-2,-50],[-2,-2],[0,-28],[3,-16],[1,-57],[3,-20],[0,-37],[3,-32],[-9,-20],[-3,25],[-7,10],[-9,-3],[-8,32],[-5,3],[-5,25],[-6,8],[-4,24],[-2,58],[-5,34],[0,30],[-2,31],[1,27],[-4,30],[-3,4],[-5,27],[-1,34],[-5,32],[-6,26],[-3,57],[-2,16],[-4,46],[-1,38],[-4,27],[-6,24],[-1,16],[-6,15],[-4,42],[-13,9],[-7,-2],[-7,15],[-1,-20],[-7,-6],[-5,-40],[-3,-64],[-2,-1],[-4,-37],[-5,-1],[-7,29],[-17,47],[-4,25],[-6,24],[-5,54],[-1,49],[-4,40],[-2,35],[-3,22],[-11,32],[-6,44],[-4,15],[-6,38],[-7,20],[-5,50],[-4,11]],[[1908,4399],[0,-192],[57,0]],[[2981,4973],[30,-2],[23,2]],[[2927,3641],[-4,-32],[-3,-12],[-3,-44],[-6,-71],[-5,-15],[-1,27],[2,58],[8,74]],[[2874,3756],[-4,-8],[-2,-28],[1,-19],[8,6],[1,-31],[10,-12],[3,-24],[8,-26],[-4,-54],[4,-41],[-4,-20],[-1,-24],[4,-15],[-4,-23],[-6,30],[-1,-10],[5,-22],[14,-5],[3,-71]],[[2736,3547],[-1,-16],[4,-32],[5,-16],[4,1],[5,25],[4,-20],[7,11],[13,36],[1,-11],[5,17],[0,34],[4,30],[5,29],[2,34],[6,36],[2,44],[5,-27],[4,-8],[3,16],[6,68],[4,-17],[13,77],[2,57],[15,-64],[3,37]],[[1553,5212],[-5,7],[-4,-12],[-6,17],[1,26],[4,14],[-6,40],[-4,103],[-2,14],[-3,73],[-6,28],[-2,56],[3,38],[6,-18],[11,-24],[8,1],[8,-9],[8,9],[3,-16],[7,1],[5,-42],[3,3],[1,-56],[2,-52],[3,6],[-3,43],[1,43],[4,44],[-3,18],[-1,31],[-3,35],[2,25],[-2,29],[-5,4],[-4,22],[1,21],[163,0]],[[1576,5602],[4,9],[0,-39],[-5,15],[1,15]],[[1568,5655],[3,25],[4,-30],[-1,-27],[-7,8],[1,24]],[[2576,4989],[-1,-23],[-6,-4],[-4,-44],[-2,-30],[3,-6],[5,20],[4,38],[6,15],[5,48],[6,10],[-1,-25],[-4,-23],[-8,-79],[-2,-44],[0,-32],[-3,-10],[-2,-43],[1,-37],[-3,-24],[-3,-59],[0,-47],[4,-42],[-1,-55]],[[2450,5296],[6,-2],[20,33],[8,17],[2,-13],[-4,-25],[9,-33],[5,-3]]]};
  Datamap.prototype.usgTopo = '__USG__';
  Datamap.prototype.uzbTopo = '__UZB__';
  Datamap.prototype.vatTopo = '__VAT__';
  Datamap.prototype.vctTopo = '__VCT__';
  Datamap.prototype.venTopo = '__VEN__';
  Datamap.prototype.vgbTopo = '__VGB__';
  Datamap.prototype.virTopo = '__VIR__';
  Datamap.prototype.vnmTopo = '__VNM__';
  Datamap.prototype.vutTopo = '__VUT__';
  Datamap.prototype.wlfTopo = '__WLF__';
  Datamap.prototype.wsbTopo = '__WSB__';
  Datamap.prototype.wsmTopo = '__WSM__';
  Datamap.prototype.yemTopo = '__YEM__';
  Datamap.prototype.zafTopo = '__ZAF__';
  Datamap.prototype.zmbTopo = '__ZMB__';
  Datamap.prototype.zweTopo = '__ZWE__';

  /**************************************
                Utilities
  ***************************************/

  // Convert lat/lng coords to X / Y coords
  Datamap.prototype.latLngToXY = function(lat, lng) {
     return this.projection([lng, lat]);
  };

  // Add <g> layer to root SVG
  Datamap.prototype.addLayer = function( className, id, first ) {
    var layer;
    if ( first ) {
      layer = this.svg.insert('g', ':first-child')
    }
    else {
      layer = this.svg.append('g')
    }
    return layer.attr('id', id || '')
      .attr('class', className || '');
  };

  Datamap.prototype.updateChoropleth = function(data, options) {
    var svg = this.svg;
    var that = this;

    // When options.reset = true, reset all the fill colors to the defaultFill and kill all data-info
    if ( options && options.reset === true ) {
      svg.selectAll('.datamaps-subunit')
        .attr('data-info', function() {
           return "{}"
        })
        .transition().style('fill', this.options.fills.defaultFill)
    }

    for ( var subunit in data ) {
      if ( data.hasOwnProperty(subunit) ) {
        var color;
        var subunitData = data[subunit]
        if ( ! subunit ) {
          continue;
        }
        else if ( typeof subunitData === "string" ) {
          color = subunitData;
        }
        else if ( typeof subunitData.color === "string" ) {
          color = subunitData.color;
        }
        else if ( typeof subunitData.fillColor === "string" ) {
          color = subunitData.fillColor;
        }
        else {
          color = this.options.fills[ subunitData.fillKey ];
        }
        // If it's an object, overriding the previous data
        if ( subunitData === Object(subunitData) ) {
          this.options.data[subunit] = defaults(subunitData, this.options.data[subunit] || {});
          var geo = this.svg.select('.' + subunit).attr('data-info', JSON.stringify(this.options.data[subunit]));
        }
        svg
          .selectAll('.' + subunit)
          .transition()
            .style('fill', color);
      }
    }
  };

  Datamap.prototype.updatePopup = function (element, d, options) {
    var self = this;
    element.on('mousemove', null);
    element.on('mousemove', function() {
      var position = d3.mouse(self.options.element);
      d3.select(self.svg[0][0].parentNode).select('.datamaps-hoverover')
        .style('top', ( (position[1] + 30)) + "px")
        .html(function() {
          var data = JSON.parse(element.attr('data-info'));
          try {
            return options.popupTemplate(d, data);
          } catch (e) {
            return "";
          }
        })
        .style('left', ( position[0]) + "px");
    });

    d3.select(self.svg[0][0].parentNode).select('.datamaps-hoverover').style('display', 'block');
  };

  Datamap.prototype.addPlugin = function( name, pluginFn ) {
    var self = this;
    if ( typeof Datamap.prototype[name] === "undefined" ) {
      Datamap.prototype[name] = function(data, options, callback, createNewLayer) {
        var layer;
        if ( typeof createNewLayer === "undefined" ) {
          createNewLayer = false;
        }

        if ( typeof options === 'function' ) {
          callback = options;
          options = undefined;
        }

        options = defaults(options || {}, self.options[name + 'Config']);

        // Add a single layer, reuse the old layer
        if ( !createNewLayer && this.options[name + 'Layer'] ) {
          layer = this.options[name + 'Layer'];
          options = options || this.options[name + 'Options'];
        }
        else {
          layer = this.addLayer(name);
          this.options[name + 'Layer'] = layer;
          this.options[name + 'Options'] = options;
        }
        pluginFn.apply(this, [layer, data, options]);
        if ( callback ) {
          callback(layer);
        }
      };
    }
  };

  // Expose library
  if (true) {
    d3 = __webpack_require__(3);
    topojson = __webpack_require__(4);
    module.exports = Datamap;
  }
  else if ( typeof define === "function" && define.amd ) {
    define( "datamaps", ["require", "d3", "topojson"], function(require) {
      d3 = require('d3');
      topojson = require('topojson');

      return Datamap;
    });
  }
  else {
    window.Datamap = window.Datamaps = Datamap;
  }

  if ( window.jQuery ) {
    window.jQuery.fn.datamaps = function(options, callback) {
      options = options || {};
      options.element = this[0];
      var datamap = new Datamap(options);
      if ( typeof callback === "function" ) {
        callback(datamap, options);
      }
      return this;
    };
  }
})();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.17"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group;
    if (typeof node === "string") {
      group = [ d3_select(node, d3_document) ];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [ node ];
      group.parentNode = d3_documentElement(node);
    }
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group;
    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }
    return d3_selection([ group ]);
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  if (d3_document) {
    d3_selection_onFilters.forEach(function(k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect, d3_event_dragId = 0;
  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }
    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);
        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;
      i = function(t) {
        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;
      i = function(t) {
        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }
    function mousedowned() {
      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function() {
    d3_timer.apply(this, arguments);
  };
  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
    return timer;
  }
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }
  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }
  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }
  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }
  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }
  function d3_interpolateTransform(a, b) {
    var s = [], q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, l = candidates.length, x;
        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function(d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc, rc0 = rc;
        if (da < π) {
          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }
  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, activeId, active;
      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id], time, timer, duration, ease, tweens;
    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }
    function start(elapsed) {
      var activeId = lock.active, active = lock[activeId];
      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }
      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }
      timer.c = tick;
      d3_timer(function() {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }
        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function(key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }
    function tick(elapsed) {
      var t = elapsed / duration, e = ease(t), n = tweens.length;
      while (n > 0) {
        tweens[--n].call(node, e);
      }
      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id]; else delete node[ns];
        return 1;
      }
    }
    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.topojson = global.topojson || {})));
}(this, (function (exports) { 'use strict';

function noop() {}

function transformAbsolute(transform) {
  if (!transform) return noop;
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(point, i) {
    if (!i) x0 = y0 = 0;
    point[0] = (x0 += point[0]) * kx + dx;
    point[1] = (y0 += point[1]) * ky + dy;
  };
}

function transformRelative(transform) {
  if (!transform) return noop;
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(point, i) {
    if (!i) x0 = y0 = 0;
    var x1 = Math.round((point[0] - dx) / kx),
        y1 = Math.round((point[1] - dy) / ky);
    point[0] = x1 - x0;
    point[1] = y1 - y0;
    x0 = x1;
    y0 = y1;
  };
}

function reverse(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
}

function bisect(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

function feature(topology, o) {
  return o.type === "GeometryCollection" ? {
    type: "FeatureCollection",
    features: o.geometries.map(function(o) { return feature$1(topology, o); })
  } : feature$1(topology, o);
}

function feature$1(topology, o) {
  var f = {
    type: "Feature",
    id: o.id,
    properties: o.properties || {},
    geometry: object(topology, o)
  };
  if (o.id == null) delete f.id;
  return f;
}

function object(topology, o) {
  var absolute = transformAbsolute(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length, p; k < n; ++k) {
      points.push(p = a[k].slice());
      absolute(p, k);
    }
    if (i < 0) reverse(points, n);
  }

  function point(p) {
    p = p.slice();
    absolute(p, 0);
    return p;
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0].slice());
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0].slice());
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var t = o.type;
    return t === "GeometryCollection" ? {type: t, geometries: o.geometries.map(geometry)}
        : t in geometryType ? {type: t, coordinates: geometryType[t](o)}
        : null;
  }

  var geometryType = {
    Point: function(o) { return point(o.coordinates); },
    MultiPoint: function(o) { return o.coordinates.map(point); },
    LineString: function(o) { return line(o.arcs); },
    MultiLineString: function(o) { return o.arcs.map(line); },
    Polygon: function(o) { return polygon(o.arcs); },
    MultiPolygon: function(o) { return o.arcs.map(polygon); }
  };

  return geometry(o);
}

function stitchArcs(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
}

function mesh(topology) {
  return object(topology, meshArcs.apply(this, arguments));
}

function meshArcs(topology, o, filter) {
  var arcs = [];

  function arc(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function line(arcs) {
    arcs.forEach(arc);
  }

  function polygon(arcs) {
    arcs.forEach(line);
  }

  function geometry(o) {
    if (o.type === "GeometryCollection") o.geometries.forEach(geometry);
    else if (o.type in geometryType) geom = o, geometryType[o.type](o.arcs);
  }

  if (arguments.length > 1) {
    var geomsByArc = [],
        geom;

    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function(arcs) { arcs.forEach(polygon); }
    };

    geometry(o);

    geomsByArc.forEach(arguments.length < 3
        ? function(geoms) { arcs.push(geoms[0].i); }
        : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });
  } else {
    for (var i = 0, n = topology.arcs.length; i < n; ++i) arcs.push(i);
  }

  return {type: "MultiLineString", arcs: stitchArcs(topology, arcs)};
}

function cartesianTriangleArea(triangle) {
  var a = triangle[0], b = triangle[1], c = triangle[2];
  return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]));
}

function ring(ring) {
  var i = -1,
      n = ring.length,
      a,
      b = ring[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = ring[i];
    area += a[0] * b[1] - a[1] * b[0];
  }

  return area / 2;
}

function merge(topology) {
  return object(topology, mergeArcs.apply(this, arguments));
}

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      components = [];

  objects.forEach(function(o) {
    if (o.type === "Polygon") register(o.arcs);
    else if (o.type === "MultiPolygon") o.arcs.forEach(register);
  });

  function register(polygon) {
    polygon.forEach(function(ring$$) {
      ring$$.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring$$) {
    return Math.abs(ring(object(topology, {type: "Polygon", arcs: [ring$$]}).coordinates[0]));
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var component = [],
          neighbors = [polygon];
      polygon._ = 1;
      components.push(component);
      while (polygon = neighbors.pop()) {
        component.push(polygon);
        polygon.forEach(function(ring$$) {
          ring$$.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: components.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring$$) {
          ring$$.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = stitchArcs(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}

function neighbors(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
}

function compareArea(a, b) {
  return a[1][2] - b[1][2];
}

function minAreaHeap() {
  var heap = {},
      array = [],
      size = 0;

  heap.push = function(object) {
    up(array[object._ = size] = object, size++);
    return size;
  };

  heap.pop = function() {
    if (size <= 0) return;
    var removed = array[0], object;
    if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
    return removed;
  };

  heap.remove = function(removed) {
    var i = removed._, object;
    if (array[i] !== removed) return; // invalid request
    if (i !== --size) object = array[size], (compareArea(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
    return i;
  };

  function up(object, i) {
    while (i > 0) {
      var j = ((i + 1) >> 1) - 1,
          parent = array[j];
      if (compareArea(object, parent) >= 0) break;
      array[parent._ = i] = parent;
      array[object._ = i = j] = object;
    }
  }

  function down(object, i) {
    while (true) {
      var r = (i + 1) << 1,
          l = r - 1,
          j = i,
          child = array[j];
      if (l < size && compareArea(array[l], child) < 0) child = array[j = l];
      if (r < size && compareArea(array[r], child) < 0) child = array[j = r];
      if (j === i) break;
      array[child._ = i] = child;
      array[object._ = i = j] = object;
    }
  }

  return heap;
}

function presimplify(topology, triangleArea) {
  var absolute = transformAbsolute(topology.transform),
      relative = transformRelative(topology.transform),
      heap = minAreaHeap();

  if (!triangleArea) triangleArea = cartesianTriangleArea;

  topology.arcs.forEach(function(arc) {
    var triangles = [],
        maxArea = 0,
        triangle,
        i,
        n,
        p;

    // To store each point’s effective area, we create a new array rather than
    // extending the passed-in point to workaround a Chrome/V8 bug (getting
    // stuck in smi mode). For midpoints, the initial effective area of
    // Infinity will be computed in the next step.
    for (i = 0, n = arc.length; i < n; ++i) {
      p = arc[i];
      absolute(arc[i] = [p[0], p[1], Infinity], i);
    }

    for (i = 1, n = arc.length - 1; i < n; ++i) {
      triangle = arc.slice(i - 1, i + 2);
      triangle[1][2] = triangleArea(triangle);
      triangles.push(triangle);
      heap.push(triangle);
    }

    for (i = 0, n = triangles.length; i < n; ++i) {
      triangle = triangles[i];
      triangle.previous = triangles[i - 1];
      triangle.next = triangles[i + 1];
    }

    while (triangle = heap.pop()) {
      var previous = triangle.previous,
          next = triangle.next;

      // If the area of the current point is less than that of the previous point
      // to be eliminated, use the latter's area instead. This ensures that the
      // current point cannot be eliminated without eliminating previously-
      // eliminated points.
      if (triangle[1][2] < maxArea) triangle[1][2] = maxArea;
      else maxArea = triangle[1][2];

      if (previous) {
        previous.next = next;
        previous[2] = triangle[2];
        update(previous);
      }

      if (next) {
        next.previous = previous;
        next[0] = triangle[0];
        update(next);
      }
    }

    arc.forEach(relative);
  });

  function update(triangle) {
    heap.remove(triangle);
    triangle[1][2] = triangleArea(triangle);
    heap.push(triangle);
  }

  return topology;
}

var version = "1.6.27";

exports.version = version;
exports.mesh = mesh;
exports.meshArcs = meshArcs;
exports.merge = merge;
exports.mergeArcs = mergeArcs;
exports.feature = feature;
exports.neighbors = neighbors;
exports.presimplify = presimplify;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map