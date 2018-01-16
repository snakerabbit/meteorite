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

var lat;
var long;
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

let refinedData = Object.values(DATA).map(el => {
	if (el.geolocation && el.year) {
		return { name: el.name,
			mass: Math.abs(Math.log(el.mass)),
			latitude: el.geolocation.coordinates[1],
			longitude: el.geolocation.coordinates[0],
			year: parseInt(el.year.slice(0, 4))
		};
	}
});

let cx, cy, x, y;
let clickedName = '';
let clickedMass = '';
let clickedYear = '';

function setup() {
	createCanvas(1024, 512);
}

function reset() {
	refinedData = Object.values(DATA).map(el => {
		if (el.geolocation && el.year) {
			return { name: el.name,
				mass: Math.abs(Math.log(el.mass)),
				latitude: el.geolocation.coordinates[1],
				longitude: el.geolocation.coordinates[0],
				year: parseInt(el.year.slice(0, 4))
			};
		}
	});
	clickedName = '';
	clickedMass = '';
	clickedYear = '';
}

const small = document.getElementById('small');
small.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el => {
		if (el && el.mass < 7) {
			return el;
		}
	});
});
const medium = document.getElementById('medium');
medium.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el => {
		if (el && el.mass > 7 && el.mass < 9) {
			return el;
		}
	});
});

const large = document.getElementById('large');
large.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el => {
		if (el && el.mass > 10) {
			return el;
		}
	});
});

const all = document.getElementById('all');
all.addEventListener('click', () => {
	reset();
});

const pre = document.getElementById('pre');
pre.addEventListener('click', () => {
	reset();

	refinedData = refinedData.map(el => {
		if (el && el.year && el.year < 1800) {
			return el;
		}
	});
});

const eighteen = document.getElementById('1800');
eighteen.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el => {
		if (el && el.year && el.year < 1900 && el.year > 1799) {
			return el;
		}
	});
});

const nineteen = document.getElementById('1900');
nineteen.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el => {
		if (el && el.year && el.year < 2000 && el.year > 1899) {
			return el;
		}
	});
});

const twoThousands = document.getElementById('2000');
twoThousands.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el => {
		if (el && el.year && el.year > 2000) {
			return el;
		}
	});
});

const allyears = document.getElementById('allyears');
allyears.addEventListener('click', () => {
	reset();
});

function draw() {
	translate(width / 2, height / 2);
	imageMode(CENTER);
	image(mapImage, 0, 0);
	refinedData.forEach(function (meteorite) {
		if (meteorite) {
			cx = mercatorX(centerLong);
			cy = mercatorY(centerLat);
			x = mercatorX(meteorite.longitude) - cx;
			y = mercatorY(meteorite.latitude) - cy;
			if (meteorite.mass < 7) {
				fill('red');
			} else if (meteorite.mass < 9 && meteorite.mass > 7) {
				fill('blue');
			} else {
				fill(255, 0, 255, 200);
			}
			ellipse(x, y, meteorite.mass, meteorite.mass);
		}
	});
	fill('grey');
	textSize(25);
	text(clickedName, 300, 175);
	textSize(15);
	text(clickedMass, 300, 200);
	textSize(15);
	text(clickedYear, 300, 215);
}

window.addEventListener('click', event => {
	let clickX = event.offsetX - 512;
	let clickY = event.offsetY - 256;
	refinedData.forEach(function (meteorite) {
		if (meteorite) {
			cx = mercatorX(centerLong);
			cy = mercatorY(centerLat);
			x = mercatorX(meteorite.longitude) - cx;
			y = mercatorY(meteorite.latitude) - cy;
			if (clickX + 5 > x && clickX - 5 < x) {
				if (clickY + 5 > y && clickY - 5 < y) {
					clickedName = meteorite.name;
					clickedMass = 'Mass: ' + Math.floor(Math.pow(Math.E, meteorite.mass)) + ' kg';
					clickedYear = 'Year: ' + meteorite.year;
				}
			}
		}
	});
});

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
};
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

window.addEventListener('resize', () => {});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map