<template>
  <div class="container-fluid">
    <RegionsMap 
      :mapId="mapId"
      :centerCoords="centerCoords"
      :polygons="polygons" />
  </div>
</template>

<script>
import RegionsMap from '@/components/RegionsMap';

export default {
  components: {
    RegionsMap
  },
  computed: {
    mapId() {
      return this.$store.state.mapId;
    },
    centerCoords() {
      return this.$store.state.centerCoords;
    },
    polygons() {
      return this.$store.state.polygons;
    }
  }
}
</script>