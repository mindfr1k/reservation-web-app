<template>
  <v-layout row wrap>
    <DetailedInfo 
    :title="previewTitle" 
    :bannerPath="`${pageLink}.jpg`"/>
  </v-layout>
</template>

<script>
import DetailedInfo from '@/components/DetailedInfo';

export default {
  components: {
    DetailedInfo
  },
  computed: {
    previewTitle() {
      const { previewTitle } = this.$store.state.titleFilteredPolygon[0];
      return previewTitle;
    },
    pageLink() {
      const { pageLink } = this.$store.state.titleFilteredPolygon[0];
      return pageLink;
    }
  },
  created() {
    const { region } = this.$route.params;
    this.$store.dispatch('filterPolygonByTitle', region);
  }
}
</script>