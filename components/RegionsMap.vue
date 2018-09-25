<template>
  <div class="map-container" :id="mapId"></div>
</template>

<script>
export default {
  props: [
    'mapId',
    'centerCoords',
    'polygons'
  ],
  computed: {
    map() {
      return this.$store.state.map;
    },
    bounds() {
      return this.$store.state.bounds;
    },
    infoWindow() {
      return this.$store.state.infoWindow;
    }
  },
  mounted() {
    const infoWindow = new google.maps.InfoWindow;
    this.$store.dispatch('setInfoWindow', infoWindow);

    this.$store.dispatch('setBounds', new google.maps.LatLngBounds());
    const { lat, lng } = this.centerCoords;

    const map = new google.maps.Map(document.getElementById(this.mapId), {
      center: new google.maps.LatLng(lat, lng)
    });
    this.$store.dispatch('setMap', map);

    this.polygons.forEach(polygon => {
      const { color, previewTitle, pageLink, coords } = polygon;

      const mapPolygon = new google.maps.Polygon({
        paths: coords,
        strokeColor: color,
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: color,
        fillOpacity: 0.3
      });

      mapPolygon.setMap(map);
      mapPolygon.addListener('click', function(event) {
        const contentString = `
          <div style="text-align: left;">
            <h1 style="font-size: 2rem;
            line-height: 1rem;">${previewTitle}</h1>
            <h2 style="font-size: 2rem;
            line-height: 1rem;">регион.</h2>
            <br/>
            </div>
            <div style="text-align: center;"
              <i><a style="text-decoration: underline;" 
              href="/regions${pageLink}">подробнее...</a></i>
            </div>`;

        infoWindow.setContent(contentString);
        infoWindow.setPosition(event.latLng);

        infoWindow.open(map);
      });

      for (let coord of coords) {
        const { lat, lng } = coord;
        const position = new google.maps.LatLng(lat, lng);
        this.map.fitBounds(this.bounds.extend(position));
      }
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