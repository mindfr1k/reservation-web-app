<template>
  <v-layout row wrap>
    <DetailedInfo 
    title="Первый" 
    bannerPath="/first-region.jpg"/>
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