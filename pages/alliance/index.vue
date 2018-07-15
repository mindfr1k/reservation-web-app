<template>
  <v-layout row wrap>
    <DetailedInfo 
    title="Альянс" 
    bannerPath="/alliance-banner.jpg"/>
  </v-layout>
</template>

<script>
import DetailedInfo from '@/components/DetailedInfo';

export default {
  components: {
    DetailedInfo
  }
}
</script>