<template>
  <div>
    <div class="row">
      <div class="col s12 m6 l4" v-for="animal in filteredAnimals" :key="animal.title">
        <InfoCard 
        :img="animal.image"
        :title="animal.title"
        :description="animal.description" />
      </div>
    </div>

    <Pagination />

  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard';
import Pagination from '@/components/Pagination';

export default {
  components: {
    InfoCard,
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