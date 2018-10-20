<template>
  <div>
    <div class="map-container" :id="mapId"></div>
    <ul>
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
      infoWindow: {},
      bounds: {},
      map: {}
    }
  },
  computed: {
    mapId() {
      return this.$store.state.mapId;
    },
    borderPolyline() {
      return this.$store.state.borderPolyline;
    },
    polygons() {
      return this.$store.state.checkedPolygons;
    }
  },
  mounted() {
    this.infoWindow = new google.maps.InfoWindow;
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(document.getElementById(this.mapId));

    const { strokeColor, coords } = this.borderPolyline;
    const mapBorder = new google.maps.Polyline({
      path: coords,
      strokeColor,
      strokeOpacity: 1,
      strokeWeight: 3
    });
    mapBorder.setMap(this.map)

    for (let coord of coords) {
      const { lat, lng } = coord;
      const position = new google.maps.LatLng(lat - 0.005, lng);
      this.map.fitBounds(this.bounds.extend(position));
    }
  },
  beforeUpdate() {
    console.log('test')

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

        this.infoWindow.setContent(contentString);
        this.infoWindow.setPosition(event.latLng);

        this.infoWindow.open(this.map);
      });
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