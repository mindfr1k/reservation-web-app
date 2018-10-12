<template>
  <div>
    <div class="row">
      <div class="col s12 m10 l10">
        <InfoCard class="col s12 m6 l4" v-for="animal in filteredAnimals" :key="animal.title"
        :img="animal.image"
        :title="animal.title"
        :description="animal.description" />
      </div>
      <div class="col m2 l2 hide-on-small-only">
        <SideCategories />
      </div>
    </div>

    <Pagination />

  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard';
import Pagination from '@/components/Pagination';
import SideCategories from '@/components/SideCategories';

export default {
  components: {
    InfoCard,
    Pagination,
    SideCategories
  },
  computed: {
    filteredAnimals() {
      return this.$store.state.filteredAnimals;
    }
  },
  mounted() {
    this.$store.dispatch('filterAnimalsByPage', this.$route.params.pageIndex)
  }
}
</script>