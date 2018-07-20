<template>
  <v-layout row wrap>
    <DetailedInfo 
    title="Второй" 
    bannerPath="/second-region.jpg"/>
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