<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col s12 m12 hide-on-large-only">
          <button class="col s4 m4 btn-flat" v-for="category in reservationCategories" 
          @click="setCurrentCategory(category.id)"
          :key="category.title">
            <i class="material-icons left">{{ category.icon }}</i>
            <span>{{ category.title }}</span>
          </button>
      </div>

      <Pagination class="col s12"/>

      <div class="col s12 m12 l10">
        <div class="catalogRow">
          <div class="catalogCol" v-for="animal in filteredAnimals" :key="animal._id">
            <InfoCard
            :id="animal._id"
            :img="animal.path"
            :title="animal.title"
            :preview="animal.preview"
            :description="animal.description"
            :isSoil="false" />
          </div>

          <div class="catalogCol">
            <AddButton v-if="$store.state.isSignedIn"
            :isInhabitant="false" />
          </div>
        </div>
      </div>

      <div class="col l2 hide-on-med-and-down">
        <div class="navbar-fixed">
          <nav>
            <ul>
              <li>
              <button class="col l12 btn-flat" v-for="category in reservationCategories" 
              @click="setCurrentCategory(category.id)"
              :key="category.title">
              <i class="material-icons left menuIcon">{{ category.icon }}</i>
              <div class="menuTitle">{{ category.title }}</div>
            </button>  
              </li>
            </ul>
          </nav>
        </div>
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
    }
  },
  methods: {
    setCurrentCategory(category) {
      this.$nuxt.$router.push({ 
        path: `/${category}/1`
      })
    }
  },
  mounted() {
    this.$store.dispatch('setCurrentCategory', 'animals')
    this.$store.dispatch('getPagesAmount', {
      categoryName: this.$store.state.currentCategory
    })
    this.$store.dispatch('filterObjectsByPage', {
      categoryName: this.$store.state.currentCategory,
      page: this.$route.params.pageIndex
    })
  }
}
</script>

<style scoped>
  .container-fluid {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    margin: 1.5rem;
  }
  nav {
    color: #000000;
    background-color: #ffffff;
    box-shadow: none;
    height: 0px;
  }
  .navbar-fixed .btn-flat:focus {
    background-color: #ffffff;
  }
  .menuTitle {
    margin-left: -5rem;
  }
  .menuIcon {
    margin-top: -0.5rem;
  }
  .catalogRow {
    display: flex;
    flex-wrap: wrap;
  }
  .catalogCol {
    display: flex;
    flex-direction: column;
    flex: 0 1 25%;
    padding: 0rem 0.8rem;
  }
  @media screen and (max-width: 1413px) {
    .catalogCol {
      flex: 0 1 33%;
    }
  }
  @media screen and (max-width: 1158px) {
    .catalogCol {
      flex: 0 1 50%;
    }
  }
  @media screen and (max-width: 600px) {
    .catalogCol {
      flex: 0 1 100%;
    }
  }
  .card {
    flex: 1;
  }
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