<template>
    <div class="map-container" :id="mapId"></div>
</template>

<script>
export default {
  props: [
    'mapId',
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
    },
    borderPolyline() {
      return this.$store.state.borderPolyline;
    }
  },
  mounted() {
    const infoWindow = new google.maps.InfoWindow;
    const bounds = new google.maps.LatLngBounds();
    const map = new google.maps.Map(document.getElementById(this.mapId));

    const { strokeColor, coords } = this.borderPolyline;
    const mapBorder = new google.maps.Polyline({
      path: coords,
      strokeColor,
      strokeOpacity: 1,
      strokeWeight: 3
    });
    mapBorder.setMap(map)

    for (let coord of coords) {
      const { lat, lng } = coord;
      const position = new google.maps.LatLng(lat, lng);
      map.fitBounds(bounds.extend(position));
    }

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

      mapPolygon.setMap(map);
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

        infoWindow.open(map);
      });
    
      for (let coord of coords) {
        const { lat, lng } = coord;
        const position = new google.maps.LatLng(lat, lng);
        map.fitBounds(bounds.extend(position));
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