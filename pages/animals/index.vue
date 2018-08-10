<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="text-xs-center row wrap" 
      v-for="animal in animals" 
      :key="animal.name">
        <AnimalCard 
        :title="animal.name"
        :description="animal.description"
        :imagePath="animal.imagePath" />
      </v-flex>
    </v-layout>
  </v-container>
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