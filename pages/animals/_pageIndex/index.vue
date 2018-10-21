<template>
  <div>
    <div class="row">
      <div class="col s12 m12 hide-on-large-only">
        <p class="col s3 m4" v-for="category in reservationCategories" :key="category.title">
          <nuxt-link :to="category.path">
            <i class="material-icons left">{{ category.icon }}</i>
            {{ category.title }}
          </nuxt-link>
        </p>
      </div>

      <div class="col s12 m12 l10">
        <InfoCard class="col s12 m6 l4" v-for="animal in filteredAnimals" :key="animal.title"
        :img="animal.image"
        :title="animal.title"
        :description="animal.description" />
      </div>

      <div class="col l2 hide-on-med-and-down">
        <p v-for="category in reservationCategories" :key="category.title">
          <nuxt-link :to="category.path">
            <i class="material-icons left">{{ category.icon }}</i>
            {{ category.title }}
          </nuxt-link>
        </p>
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
    },
    reservationCategories() {
      return this.$store.state.reservationCategories;
    }
  },
  mounted() {
    this.$store.dispatch('filterAnimalsByPage', this.$route.params.pageIndex)
  }
}
</script>

<style scoped>
  p a {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
</style>