<template>
  <div>
    <div class="row">
      <div class="col s12 m10 l10">
        <RegionsMap 
          :mapId="mapId"
          :centerCoords="centerCoords"
          :polygons="polygons" />
      </div>
      <div class="col m2 l2 hide-on-small-only">
        <SideMap />
      </div>
    </div>
  </div>
</template>

<script>
import RegionsMap from '@/components/RegionsMap';
import SideMap from '@/components/SideMap';

export default {
  components: {
    RegionsMap,
    SideMap
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