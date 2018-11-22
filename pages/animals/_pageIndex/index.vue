<template>
  <div>
    <div class="row">
      <div class="col s12 m12 hide-on-large-only">
        <p class="col s4 m4" v-for="category in reservationCategories" :key="category.title">
          <button class="btn-flat adaptive" @click="setCurrentCategory(category.id)"> 
            <nuxt-link :to="category.path">
              <i class="material-icons">{{ category.icon }}</i>
              {{ category.title }}
            </nuxt-link>
          </button>
        </p>
      </div>

      <div class="col s12 m12 l10">
        <InfoCard class="col s12 m6 l4" v-for="animal in filteredAnimals" :key="animal.title"
        :id="animal._id"
        :img="animal.image"
        :title="animal.title"
        :preview="animal.preview"
        :description="animal.description" />

        <AddButton v-if="isAdmin" class="col s12 m6 l4"/>
      </div>

      <div class="col l2 hide-on-med-and-down">
        <div class="column">
          <p v-for="category in reservationCategories" :key="category.title">
          <button class="btn-flat" @click="setCurrentCategory(category.id)"> 
            <nuxt-link :to="category.path">
              <i class="material-icons left">{{ category.icon }}</i>
              {{ category.title }}
            </nuxt-link>
          </button>
        </p>
        </div>
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
      return this.$store.state.filteredObjects
    },
    reservationCategories() {
      return this.$store.state.reservationCategories
    },
    isAdmin() {
      return this.$store.state.isAdmin
    }
  },
  methods: {
    setCurrentCategory(id) {
      this.$store.dispatch('setCurrentCategory', id)
      this.$store.dispatch('filterObjectsByPage', {
        category: this.$store.state.currentCategory,
        page: this.$route.params.pageIndex
      })
    }
  },
  mounted() {
    this.$store.dispatch('filterObjectsByPage', {
      category: this.$store.state.currentCategory,
      page: this.$route.params.pageIndex
    })
  }
}
</script>

<style scoped>
  div a {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
  .col.s4.m4 a {
    font-size: 1.3rem;
  }
  .adaptive {
    margin-bottom: 2rem;
  }
</style>