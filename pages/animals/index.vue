<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 class="text-xs-center" v-for="animal in animals" :key="animal.name">
      <AnimalCard 
      :title="animal.name"
      :description="animal.description"
      :imagePath="animal.imagePath" />
  </v-flex>
  </v-layout>
</template>

<script>
import AnimalCard from '@/components/AnimalCard';

export default {
  components: {
    AnimalCard
  },
  computed: {
    animals() {
      return this.$store.state.animals;
    }
  }
}
</script>