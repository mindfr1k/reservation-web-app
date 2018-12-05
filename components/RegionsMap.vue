<template>
  <div>
    <div class="map-container" :id="mapId"></div>
    <ul class="hide">
      <li v-for="polygon in polygons" :key="polygon.previewTitle">
        {{ polygon.previewTitle }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bounds: {},
      map: {},
      previousPolygons: [],
      previousZonePolylines: []
    }
  },
  computed: {
    mapId() {
      return this.$store.state.mapId;
    },
    mapOptions() {
      return this.$store.state.mapOptions;
    },
    borderPolyline() {
      return this.$store.state.borderPolyline;
    },
    zonePolylines() {
      return this.$store.state.zonePolylines;
    },
    polygons() {
      return this.$store.state.checkedPolygons;
    }
  },
  methods: {
    getGoogleShapeCoords(path) {
      const coords = path.toString().match(/\(.+?\)/g)
      const normalizedCoords = coords.map(coord => {
        return {
          lat: parseFloat(coord.split('(')[1].split(',')[0]),
          lng: parseFloat(coord.split(', ')[1].split(')')[0])
        }
      })

      let coordString = ''
      normalizedCoords.forEach(coord => {
        coordString += `{ lat: ${coord.lat}, lng: ${coord.lng} },\n`
      })
      return coordString
    }
  },
  mounted() {
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(document.getElementById(this.mapId), this.mapOptions);

    /*const drawingManager = new google.maps.drawing.DrawingManager({
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [ 'polygon']
      },
      polylineOptions: {
        strokeColor: '#ffff00',
        strokeOpacity: 1,
        strokeWeight: 3
      },
      polygonOptions: {
        strokeColor: '#00ff00',
        strokeOpacity: 2,
        strokeWeight: 4
      }
    })
    drawingManager.setMap(this.map)

    drawingManager.addListener('polygoncomplete', event => {
      console.log(this.getGoogleShapeCoords(event.getPath().getArray()))
    })*/

    const { strokeColor, path } = this.borderPolyline;
    const mapBorder = new google.maps.Polyline({
      path,
      strokeColor,
      strokeOpacity: 0.99,
      strokeWeight: 3,
      //editable: true,
      suppressUndo: true
    });
    mapBorder.setMap(this.map)
    /*mapBorder.addListener('click', event => {
      console.log(this.getGoogleShapeCoords(mapBorder.getPath().getArray()))
    })*/

    for (let coord of path) {
      const { lat, lng } = coord;
      const position = new google.maps.LatLng(lat - 0.01, lng);
      this.map.fitBounds(this.bounds.extend(position));
    }
  },
  beforeUpdate() {
    this.previousZonePolylines.forEach(zone => {
      zone.setMap(null)
    })
    this.previousZonePolylines = []

    this.zonePolylines.forEach(zone => {
      const { strokeColor, path } = zone
      const zonePolyline = new google.maps.Polyline({
        path,
        strokeColor,
        strokeOpacity: 0.99,
        strokeWeight: 3,
        //editable: true,
        suppressUndo: true
      })
      zonePolyline.setMap(this.map)
      /*zonePolyline.addListener('click', event => {
        console.log(this.getGoogleShapeCoords(zonePolyline.getPath().getArray()))
      })*/
      this.previousZonePolylines.push(zonePolyline)
    })

    this.previousPolygons.forEach(polygon => {
      polygon.setMap(null)
    })
    this.previousPolygons = []

    const infoWindow = new google.maps.InfoWindow;

    this.polygons.forEach(polygon => {
      const { fillColor, previewTitle, pageLink, coords } = polygon;
      let mapPolygon;

      if (polygon.fillColor === '#0000FF') {
        mapPolygon = new google.maps.Polygon({
          paths: coords,
          strokeColor: fillColor,
          strokeOpacity: 1,
          strokeWeight: 5,
          fillColor,
          //editable: true,
          fillOpacity: 0.3
        })
      }
      else {
        mapPolygon = new google.maps.Polygon({
          paths: coords,
          strokeColor: fillColor,
          strokeOpacity: 1,
          strokeWeight: 5,
          fillColor,
          fillOpacity: 0.3
        })
      }

      mapPolygon.setMap(this.map)

      mapPolygon.addListener('click', function(event) {
        const contentString = `
          <div style="text-align: center;"
            <i><a style="text-decoration: underline;" 
            href="/animals/1">подробнее...</a></i>
          </div>`


        infoWindow.setContent(contentString)
        infoWindow.setPosition(event.latLng)

        infoWindow.open(this.map)
      })

      mapPolygon.addListener('click', event => {
        console.log(this.getGoogleShapeCoords(mapPolygon.getPath().getArray()))
      })

      this.previousPolygons.push(mapPolygon)
    })
  }
}
</script>

<style scoped>
  .map-container {
    height: 100vh;
    background: grey;
  }
</style>