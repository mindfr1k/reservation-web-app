<template>
  <v-layout row wrap>
    <DetailedInfo 
    title="Орда" 
    bannerPath="/horde-banner.jpg"/>
  </v-layout>
</template>

<script>
import DetailedInfo from '@/components/DetailedInfo';

export default {
  transition: 'slide',
  components: {
    DetailedInfo
  }
}
</script>