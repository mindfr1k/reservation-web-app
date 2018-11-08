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
      previousPolygons: []
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
    polygons() {
      return this.$store.state.checkedPolygons;
    }
  },
  mounted() {
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(document.getElementById(this.mapId), this.mapOptions);
    
    const { strokeColor, coords } = this.borderPolyline;
    const mapBorder = new google.maps.Polyline({
      path: coords,
      strokeColor,
      strokeOpacity: 1,
      strokeWeight: 3,
      //editable: true,
      suppressUndo: true
    });
    mapBorder.setMap(this.map)

    mapBorder.addListener('click', event => {
      const coords = mapBorder.getPath().getArray().toString().match(/\(.+?\)/g)
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
      console.log(coordString)
    })

    for (let coord of coords) {
      const { lat, lng } = coord;
      const position = new google.maps.LatLng(lat - 0.0005, lng);
      this.map.fitBounds(this.bounds.extend(position));
    }
  },
  beforeUpdate() {
    this.previousPolygons.forEach(polygon => {
      polygon.setMap(null);
    });
    this.previousPolygons = [];

    const infoWindow = new google.maps.InfoWindow;

    this.polygons.forEach(polygon => {
      const { fillColor, previewTitle, pageLink, coords } = polygon;

      const mapPolygon = new google.maps.Polygon({
        paths: coords,
        strokeColor: fillColor,
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor,
        fillOpacity: 0.3
      });

      mapPolygon.setMap(this.map);

      mapPolygon.addListener('click', function(event) {
        const contentString = `
          <div style="text-align: left;">
            <h1 style="font-size: 2rem;
            line-height: 2rem;">${previewTitle}</h1>
            <br/>
            </div>
            <div style="text-align: center;"
              <i><a style="text-decoration: underline;" 
              href="/regions${pageLink}">подробнее...</a></i>
            </div>`;


        infoWindow.setContent(contentString);
        infoWindow.setPosition(event.latLng);

        infoWindow.open(this.map);
      });

      this.previousPolygons.push(mapPolygon);
    });
  }
}
</script>

<style scoped>
  .map-container {
    height: 100vh;
    background: grey;
  }
</style>