<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-3>
      <h1>Здарова, здарова. Вот собственно и {{ title }}.</h1>
    </v-flex>
    <v-flex xs12 class="text-xs-center" mt-3>
      <img :src="bannerPath">
    </v-flex>
    <v-flex xs12 class="text-xs-center" mt-3>
      <h2>А карта 
        <nuxt-link to="/map">
          <i>тут.</i>
        </nuxt-link>
      </h2>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title',
    'bannerPath'
  ]
}
</script>

<style scoped>
  img {
    max-width: 100%;
    max-height: 50vh;
  }
</style>

