<template>
  <div>
    <div class="row">
      <div class="col s12 m12 hide-on-large-only">
          <button class="col s4 m4 btn-flat" v-for="category in reservationCategories" 
          @click="setCurrentCategory(category.id)"
          :key="category.title">
            <i class="material-icons">{{ category.icon }}</i>
            <span>{{ category.title }}</span>
          </button>
      </div>

      <div class="col s12 m12 l10">
        <div class="row">
          <div class="col s12 m6 l4" v-for="animal in filteredAnimals" :key="animal._id">
            <InfoCard
            :id="animal._id"
            :img="animal.path"
            :title="animal.title"
            :preview="animal.preview"
            :description="animal.description" />
          </div>

          <AddButton v-if="isAdmin" class="col s12 m6 l4" />
        </div>
      </div>

      <div class="col l2 hide-on-med-and-down">
        <button class="col l12 btn-flat" v-for="category in reservationCategories" 
        @click="setCurrentCategory(category.id)"
        :key="category.title">
          <i class="material-icons left">{{ category.icon }}</i>
          {{ category.title }}
        </button>   
      </div>

      <Pagination class="col s12"/>
  
    </div>

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
    setCurrentCategory(index) {
      this.$nuxt.$router.push({ 
        path: `/${index}/${this.$route.params.pageIndex}`
      })
    }
  },
  mounted() {
    this.$store.dispatch('setCurrentCategory', 'plants')
    this.$store.dispatch('filterObjectsByPage', {
      categoryName: this.$store.state.currentCategory,
      page: this.$route.params.pageIndex
    })
  }
}
</script>

<style scoped>
  button {
    font-weight: 500;
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.87);
    text-transform: none;
    min-width: 33%;
  }
  button.col.s4 {
    padding: 0;
    font-size: 1rem;
  }
  button.col.m4 i {
    margin-right: 0 0.5rem;
  }
  button.col.l12 {
    margin-bottom: 1rem;
  }
</style>