<template>
  <div>
    <div class="map-container" :id="mapId"></div>
    <ul class="hide">
      <li v-for="polygon in polygons" :key="polygon.fillColor">
        {{ polygon.fillColor }}
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
      previousPolygons: []
    }
  },
  computed: {
    mapId() {
      return this.$store.state.mapId
    },
    mapOptions() {
      return this.$store.state.mapOptions
    },
    borderPolyline() {
      return this.$store.state.borderPolyline
    },
    polygons() {
      return this.$store.state.checkedPolygons
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
        coordString += `{ "lat": "${coord.lat}", "lng": "${coord.lng}" },\n`
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
    this.previousPolygons.forEach(polygon => {
      polygon.setMap(null)
    })
    this.previousPolygons = []

    this.polygons.forEach(polygon => {
      const { fillColor, coords } = polygon

      const numberedCoords = coords.map(coord => {
        const { lat, lng } = coord
        return {
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }
      })

      const mapPolygon = new google.maps.Polygon({
        paths: numberedCoords,
        strokeColor: fillColor,
        strokeOpacity: 1,
        strokeWeight: 5,
        fillColor,
        editable: fillColor === '#' ? true : false,
        fillOpacity: 0.3
      })
      
      mapPolygon.addListener('click', event => {
        this.$emit('invoke', polygon)
      })
      mapPolygon.setMap(this.map)
      /*mapPolygon.addListener('click', event => {
        console.log(this.getGoogleShapeCoords(mapPolygon.getPath().getArray()))
      })*/
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