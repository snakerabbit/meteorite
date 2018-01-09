console.log(DATA);

var mapImage;
var centerLat = 0;
var centerLong = 0;

var lat = 44.9778;
var long = -93.2650;
var zoom = 1;

function preload() {
	mapImage = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1280x640?access_token=pk.eyJ1IjoiYWxpc29uY2hlbmciLCJhIjoiY2piem0yb2FqMDA5bzMzcWh4Y3o5NjRjaSJ9.0WsEgFTZ8XPAK3qp_lgZZg');
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


const refinedData = Object.values(DATA).map(el => {
	if(el.geolocation){
		return {name: el.name,
						mass: el.mass,
						latitude: el.geolocation.coordinates[1],
						longitude: el.geolocation.coordinates[0]
					};
	}
});

let cx, cy, x, y;
function setup() {
	createCanvas(1280, 640);
	translate(width/2, height/2);
	imageMode(CENTER);
	image(mapImage, 0, 0);
	refinedData.forEach( function (meteorite) {
		if(meteorite){
			cx = mercatorX(centerLong);
			cy = mercatorY(centerLat);
			x = mercatorX(meteorite.longitude)- cx;
			y = mercatorY(meteorite.latitude) - cy;
			fill(255, 0, 255, 200);
			ellipse(x, y, Math.log(meteorite.mass), Math.log(meteorite.mass));
		}
	});
}
