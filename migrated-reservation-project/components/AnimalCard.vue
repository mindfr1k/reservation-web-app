<template>
  <v-card>
    <img :src="imagePath">

    <v-card-title primary-title>
      <v-layout column>
        <h3 class="headline">{{ title }}</h3>
      <div class="text-xs-left mt-2 pl-1">{{ description }}</div>
      </v-layout>
    </v-card-title>

    <v-card-actions>
      <v-flex class="text-xs-center">
        <v-btn flat color="blue">
          Подробнее (еще не работает)
          </v-btn>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'imagePath'
  ]
}
</script>

<style scoped>
  img {
    height: 40vh;
    width: 100%;
  }
</style>