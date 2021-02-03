import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import am4geodataWorldLow from "@amcharts/amcharts4-geodata/worldLow"
import { Component } from "react";

class MapChart extends Component {
    componentDidMount() {
      let map = am4core.create("chartdiv", am4maps.MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller(); 
var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

      let lineSeries = map.series.push(new am4maps.MapSplineSeries());
      let imageSeries = map.series.push(new am4maps.MapImageSeries());

      let imageSeriesTemplate = imageSeries.mapImages.template;
// let circle = imageSeriesTemplate.createChild(am4core.Circle);
// circle.radius = 4;
// circle.fill = am4core.color("#B27799");
// circle.stroke = am4core.color("#FFFFFF");
// circle.strokeWidth = 2;
// circle.nonScaling = true;
// circle.tooltipText = "{title}";

// imageSeriesTemplate.propertyFields.latitude = "latitude";
// imageSeriesTemplate.propertyFields.longitude = "longitude";

// imageSeries.data = [{
//   "latitude": 48.856614,
//   "longitude": 2.352222,
//   "title": "Paris"
// }, {
//   "latitude": 40.712775,
//   "longitude": -74.005973,
//   "title": "New York"
// }, {
//   "latitude": 49.282729,
//   "longitude": -123.120738,
//   "title": "Vancouver"
// }];

lineSeries.data = [{
  "multiGeoLine": [
    [
      { "latitude": 23.843418559673324,"longitude":  80.44481901475498 },
      { "latitude": 23.7630041814114, "longitude": 47.134270411914024 },
      { "latitude": 49.282729, "longitude": -123.120738 }
    ]
  ]
}];

lineSeries.mapLines.template.line.stroke = am4core.color("#5C5CFF");
lineSeries.mapLines.template.line.strokeOpacity = 0.5;
lineSeries.mapLines.template.line.strokeWidth = 4;
// lineSeries.mapLines.template.line.strokeDasharray = "3,3";
      
    
polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
  map.zoomToMapObject(ev.target);
});
// map.zoomControl.slider.height = 100;
var label = map.chartContainer.createChild(am4core.Label);
label.text = "New Map Data";

    }
  
    componentWillUnmount() {
      if (this.map) {
        this.map.dispose();
      }
    }
  
    render() {
      return (
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      );
    }
  }
  
  export default MapChart;