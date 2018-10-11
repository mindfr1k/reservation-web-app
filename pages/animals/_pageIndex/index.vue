<template>
  <div>
    <div class="row">
      <div class="col s12 m6 l4" v-for="animal in filteredAnimals" :key="animal.title">
        <AnimalCard 
        :img="animal.image"
        :title="animal.title"
        :description="animal.description" />
      </div>
    </div>

    <Pagination />

  </div>
</template>

<script>
import AnimalCard from '@/components/AnimalCard';
import Pagination from '@/components/Pagination';

export default {
  components: {
    AnimalCard,
    Pagination
  },
  computed: {
    filteredAnimals() {
      return this.$store.state.filteredAnimals;
    }
  },
  methods: {
    getPageClass(page) {
      return page === this.currentPage
        ? 'active'
        : 'waves-effect'
    }
  },
  mounted() {
    this.$store.dispatch('filterAnimalsByPage', this.$route.params.pageIndex)
  }
}
</script>