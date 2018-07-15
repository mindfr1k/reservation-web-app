<template>
  <div class="map-container" :id="mapId"></div>
</template>

<script>
export default {
  props: [
    'mapId',
    'centerCoords',
    'polygonsCoords'
  ],
  computed: {
    map() {
      return this.$store.state.map;
    },
    bounds() {
      return this.$store.state.bounds;
    },
    polygons() {
      return this.$store.state.polygons;
    },
    infoWindow() {
      return this.$store.state.infoWindow;
    }
  },
  mounted() {
    this.$store.dispatch('setBounds', new google.maps.LatLngBounds());
    const { lat, lng } = this.centerCoords;

    const map = new google.maps.Map(document.getElementById(this.mapId), {
      center: new google.maps.LatLng(lat, lng)
    });
    this.$store.dispatch('setMap', map);

    for (let i = 0; i < this.polygonsCoords.length; i++) {
      const { color, eventHandler } = this.chooseInstance(i);

      const polygon = new google.maps.Polygon({
        paths: this.polygonsCoords[i],
        strokeColor: color,
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: color,
        fillOpacity: 0.3
      });

      polygon.setMap(this.map);
      this.$store.dispatch('addPolygon', polygon);
      polygon.addListener('click', eventHandler);

      for (let coord of this.polygonsCoords[i]) {
        const { lat, lng } = coord;
        const position = new google.maps.LatLng(lat, lng);
        this.map.fitBounds(this.bounds.extend(position));
      }
    }

    const infoWindow = new google.maps.InfoWindow;
    this.$store.dispatch('setInfoWindow', infoWindow);
  },
  methods: {
    showClickedCoords(event) {
      this.infoWindow.setContent(`lat: ${event.latLng.lat()}, lng: ${event.latLng.lng()}`);
      this.infoWindow.setPosition(event.latLng);

      this.infoWindow.open(this.map);
    },
    chooseInstance(index) {
      switch (index) {
        case 0:
          return {
            color: '#0000FF',
            eventHandler: this.showClickedCoords
          };
        case 1:
          return {
            color: '#FF0000',
            eventHandler: this.showClickedCoords
          };
        default: 
          return {
            color: '#000000',
            eventHandler: this.showClickedCoords
          };  
      }
    }
  }
}
</script>

<style scoped>
  .map-container {
    height: 80vh;
    background: grey;
  }
</style>