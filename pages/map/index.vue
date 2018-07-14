<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <RegionsMap 
      :mapId="mapId"
      :markerCoords="markerCoords" />
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
    markerCoords() {
      return this.$store.state.markerCoords;
    }
  }
}
</script>