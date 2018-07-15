<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <RegionsMap 
      :mapId="mapId"
      :centerCoords="centerCoords"
      :polygons="polygons" />
    </v-flex>
  </v-layout>
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