<template>
  <div>
    <div class="row">
      <div class="col s12 m12 hide-on-large-only">
        <p class="col s4 m4" v-for="category in reservationCategories" :key="category.title">
          <nuxt-link :to="category.path">
            <i class="material-icons left">{{ category.icon }}</i>
            {{ category.title }}
          </nuxt-link>
        </p>
      </div>

      <div class="col s12 m12 l10">
        <div class="row flex">
          <InfoCard class="col s12 m6 l4" v-for="animal in filteredAnimals" :key="animal.title"
          :img="animal.image"
          :title="animal.title"
          :preview="animal.preview"
          :description="animal.description"
          :isAdmin="isAdmin" />

          <AddButton v-if="isAdmin" class="col s12 m6 l4"/>
        </div>
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
import InfoCard from '@/components/InfoCard'
import Pagination from '@/components/Pagination'
import AddButton from '@/components/AddButton'

export default {
  components: {
    InfoCard,
    Pagination,
    AddButton
  },
  computed: {
    filteredAnimals() {
      return this.$store.state.filteredAnimals
    },
    reservationCategories() {
      return this.$store.state.reservationCategories
    },
    isAdmin() {
      return this.$store.dispatch('isAdmin')
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
  .col.s4.m4 a {
    font-size: 1.3rem;
  }
</style>