# Meteorite

## Background
Meteorite is a data visualization tool to map the recorded meteorite landings provided by [NASA's Open Data Portal](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh) and recorded by [The Meteoritical Society](http://www.meteoriticalsociety.org/).  The map illustrates the geographic coordinates of the landings, and provides recorded data such as name, mass, and year for each meteorite.  



## Functionality
In Meteorite, users are able to:
* View all meteorites
* Filter the meteorites on the map by mass or by year
* Click on the data bubbles for more information on individual meteorites

## Architecture and Technologies
This project will be implemented with the following technologies:


* Vanilla JavaScript and jquery for overall structure and game logic,
* Canvas for DOM manipulation and rendering,
* Matter.js for basic physics engine structure and manipulation,
* Webpack to bundle and serve up the various scripts.


In addition to the webpack entry file, there will be five scripts involved in this project:

* `tprime.js`: this script will handle the logic for creating and updating the necessary DOM elements.

* `world1.js`: this script will handle the physics logic and object creation for the first world, which has standard gravitational force.

* `world2.js`: this script will handle the physics logic and object creation for the second world, which will have low/null gravity.

* `world3.js`: this script will handle the physics logic and object creation for the third world, which will have high gravity.


## Future Direction
