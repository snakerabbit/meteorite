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
/***/ (function(module, exports) {


var mapImage;
var centerLat = 0;
var centerLong = 0;

var lat = 44.9778;
var long = -93.2650;
var zoom = 1;

function preload() {
	mapImage = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiYWxpc29uY2hlbmciLCJhIjoiY2piem0yb2FqMDA5bzMzcWh4Y3o5NjRjaSJ9.0WsEgFTZ8XPAK3qp_lgZZg');
}

function mercatorX(longitude) {
	var longinRadians = longitude * Math.PI / 180;
	var a = 256 / Math.PI * Math.pow(2, zoom);
	var b = longinRadians + Math.PI;
	return a * b;
}

function mercatorY(latitude) {
	var latinRadians = latitude * Math.PI / 180;
	var a = 256 / Math.PI * Math.pow(2, zoom);
	var b = Math.tan(Math.PI / 4 + latinRadians / 2);
	var c = Math.PI - Math.log(b);

	return a * c;
}
function setup() {
	createCanvas(1024, 512);
	translate(width / 2, height / 2);
	imageMode(CENTER);
	image(mapImage, 0, 0);
	var cx = mercatorX(centerLong);
	var cy = mercatorY(centerLat);
	var x = mercatorX(long) - cx;
	var y = mercatorY(lat) - cy;

	fill(255, 0, 255, 200);
	ellipse(x, y, 20, 20);
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map