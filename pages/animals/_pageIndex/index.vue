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

        <v-flex xs12 class="text-xs-center">
          <v-pagination
          v-model="page"
          :length="2"
          @input="navigate" />
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
  data() {
    const { pageIndex } = this.$route.params;
    return {
      page: parseInt(pageIndex)
    }
  },
  computed: {
    animals() {
      return this.$store.state.pageFilteredAnimals;
    }
  },
  methods: {
    navigate() {
      this.$router.push(`${this.page}`);
    }
  },
  created() {
    const { pageIndex } = this.$route.params;
    this.$store.dispatch('filterAnimalsByPage', pageIndex);
  }
}
</script>