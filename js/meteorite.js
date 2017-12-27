import { DATA } from './dat.js';
import Datamap from 'datamaps';
console.log(DATA);
console.log("name", DATA[0].name);
console.log("geolocation", DATA[0].geolocation);
console.log("mass", DATA[0].mass);

var map = new Datamap({
  element: document.getElementById('container'),
  fills:{
    defaultFill: 'blue'
  }
});


map.bubbles(DATA, {
    popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo">' +  data.name,
            '<br/>Payload: ' +  data.yield + ' kilotons',
            '<br/>Country: ' +  data.country + '',
            '<br/>Date: ' +  data.date + '',
            '</div>'].join('');
    }
});
