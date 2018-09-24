<template>
  <div class="row">
    <div class="col s12">
      <DetailedInfo
      :title="previewTitle"
      :bannerPath="`${pageLink}.jpg`"/>
    </div>
  </div>
</template>

<script>
import DetailedInfo from '@/components/DetailedInfo';

export default {
  components: {
    DetailedInfo
  },
  computed: {
    previewTitle() {
      if (this.$store.state.filteredPolygon !== null &&
      this.$store.state.filteredPolygon !== undefined) {
        const { previewTitle } = this.$store.state.filteredPolygon;
        return previewTitle;
      }
    },
    pageLink() {
      if (this.$store.state.filteredPolygon !== null && 
      this.$store.state.filteredPolygon !== undefined) {
        const { pageLink } = this.$store.state.filteredPolygon;
        return pageLink;
      }
    }
  },
  created() {
    const { region } = this.$route.params;
    this.$store.dispatch('filterPolygonByRegion', region);
  }
}
</script>