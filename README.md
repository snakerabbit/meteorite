# Meteorite

## Background
Meteorite is a data visualization tool to map the recorded meteorite landings provided by [NASA's Open Data Portal](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh) and recorded by [The Meteoritical Society](http://www.meteoriticalsociety.org/).  The map illustrates the geographic coordinates of the landings, and provides recorded data such as name, mass, and year for each meteorite.  

![Meteorite](https://i.imgur.com/eqffb3k.png)

## Functionality
In Meteorite, users are able to:
* View all meteorites color-coded and sized by mass (radii are based on a logarithmic scale of grams)
* Filter the meteorites on the map by mass or by year
* Click on the data bubbles for more information on individual meteorites

## Architecture and Technologies
This project will be implemented with the following technologies:


* Vanilla JavaScript and jquery for overall structure and game logic,
* Canvas for DOM manipulation and rendering,
* MapBox API for rendering global map and geographic information
* P5 and D3 for data representation

## Future Direction
* Add a 3D rendering of the globe using WebGL
* Add zoom and scrolling functionality to the MapBox API
