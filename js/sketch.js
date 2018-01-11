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
 var a = 256/Math.PI * Math.pow(2, zoom);
 var b = longinRadians + Math.PI;
 return a * b;
}

function mercatorY(latitude) {
	var latinRadians = latitude * Math.PI / 180;
	var a = 256/Math.PI * Math.pow(2, zoom);
	var b = Math.tan((Math.PI/4) + (latinRadians/2));
	var c = Math.PI - Math.log(b);
	return a*c;
}


let refinedData = Object.values(DATA).map(el => {
	if(el.geolocation){
		return {name: el.name,
						mass: Math.abs(Math.log(el.mass)),
						latitude: el.geolocation.coordinates[1],
						longitude: el.geolocation.coordinates[0],
						year: el.year
					};
	}
});


let cx, cy, x, y;


function setup() {
}

function reset(){
	refinedData = Object.values(DATA).map(el => {
		if(el.geolocation && el.year){
			return {name: el.name,
							mass: Math.abs(Math.log(el.mass)),
							latitude: el.geolocation.coordinates[1],
							longitude: el.geolocation.coordinates[0],
							year: parseInt(el.year.slice(0,4))
						};
		}
	});
}

const small = document.getElementById('small');
small.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el =>{
		if (el && el.mass< 7){
			return el;
		}
	});
});
const medium = document.getElementById('medium');
medium.addEventListener('click', ()=>{
	reset();
	refinedData = refinedData.map(el =>{
		if (el && el.mass>7 && el.mass<9){
			return el;
		}
	});
});

const large = document.getElementById('large');
large.addEventListener('click', ()=>{
	reset();
	refinedData = refinedData.map(el =>{
		if (el && el.mass > 10){
			return el;
		}
	});
});

const all = document.getElementById('all');
all.addEventListener('click', ()=>{
	reset();
});

const pre = document.getElementById('pre');
pre.addEventListener('click', () => {
	reset();

	refinedData = refinedData.map(el =>{
		if (el && el.year && el.year < 1800){
			return el;
		}
	});
});

const eighteen = document.getElementById('1800');
eighteen.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el =>{
		if (el && el.year && el.year < 1900 && el.year > 1799){
			return el;
		}
	});
});

const nineteen = document.getElementById('1900');
nineteen.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el =>{
		if (el && el.year && el.year < 2000 && el.year > 1899){
			return el;
		}
	});
});

const twoThousands = document.getElementById('2000');
twoThousands.addEventListener('click', () => {
	reset();
	refinedData = refinedData.map(el =>{
		if (el && el.year && el.year > 2000){
			return el;
		}
	});
});

const allyears = document.getElementById('allyears');
allyears.addEventListener('click', () => {
	reset();
});

function draw() {
	createCanvas(1024, 512);
	translate(width/2, height/2);
	imageMode(CENTER);
	image(mapImage, 0, 0);
	const canv = document.getElementById('defaultCanvas0');
	refinedData.forEach( function (meteorite) {
		if(meteorite){
			cx = mercatorX(centerLong);
			cy = mercatorY(centerLat);
			x = mercatorX(meteorite.longitude)- cx;
			y = mercatorY(meteorite.latitude) - cy;
			if (meteorite.mass < 7) {
				fill('red');
			}
			else if(meteorite.mass < 9 && meteorite.mass > 7){
				fill('blue');
			}
			else {
				fill(255, 0, 255, 200);
			}

			ellipse(x, y, meteorite.mass, meteorite.mass);

		}
	});
}
