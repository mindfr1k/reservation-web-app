<template>
  <div class="map-container" :id="mapId"></div>
</template>

<script>
export default {
  props: [
    'mapId',
    'markerCoords'
  ],
  computed: {
    map() {
      return this.$store.state.map;
    },
    bounds() {
      return this.$store.state.bounds;
    },
    markers() {
      return this.$store.state.markers;
    }
  },
  mounted() {
    this.$store.dispatch('setBounds', new google.maps.LatLngBounds());

    const map = new google.maps.Map(document.getElementById(this.mapId), {
      center: new google.maps.LatLng(this.markerCoords[0].lat,
        this.markerCoords[0].lng)
    });
    this.$store.dispatch('setMap', map);

    this.markerCoords.forEach(coord => {
      const {lat, lng } = coord;

      const position = new google.maps.LatLng(lat, lng);
      const marker = new google.maps.Marker({
        position,
        map
      });
      this.$store.dispatch('addMarker', marker);
      this.map.fitBounds(this.bounds.extend(position));
    });
  }
}
</script>

<style scoped>
  .map-container {
    height: 80vh;
    background: grey;
  }
</style>