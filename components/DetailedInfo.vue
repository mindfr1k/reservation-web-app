<template>
  <v-layout row wrap align-center>
    <v-flex xs12 class="text-xs-center" mt-3>
      <h1>Данный раздел предоставляет информацию о регионе {{ title }}.</h1>
    </v-flex>
    <v-flex xs12 class="text-xs-center" mt-3>
      <img :src="bannerPath">
    </v-flex>
    <v-flex xs12 class="text-xs-center" mt-3>
      <h2>Посмотреть карту вы можете, нажав на пункт в меню или же
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
    height: 50vh;
    max-width: 100%;

  }
</style>