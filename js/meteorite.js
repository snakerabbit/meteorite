
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
function setup() {
	createCanvas(1024, 512);
	translate(width/2, height/2);
	imageMode(CENTER);
	image(mapImage, 0, 0);
	var cx = mercatorX(centerLong);
	var cy = mercatorY(centerLat);
	var x = mercatorX(long)- cx;
	var y = mercatorY(lat) - cy;

	fill(255, 0, 255, 200);
	ellipse(x, y, 20, 20);

}
