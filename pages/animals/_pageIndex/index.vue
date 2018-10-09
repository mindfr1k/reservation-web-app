<template>
  <div>
    <div class="row">
      <div class="col s12 m6 l4" v-for="animal in animals" :key="animal">
        <AnimalCard 
        :img="animal.image"
        :title="animal.title"
        :description="animal.description" />
      </div>
    </div>
    <div class="center-align">
      <ul class="pagination">
        <li class="disabled">
          <nuxt-link to="/animals/1"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <Pagination
        :pageIndex="1" />
        <li class="waves-effect">
        <nuxt-link to="/"><i class="material-icons">chevron_right</i></nuxt-link>
      </li>
      </ul>
    </div>

  </div>
</template>

<script>
import AnimalCard from '@/components/AnimalCard'
import Pagination from '@/components/Pagination'

export default {
  components: {
    AnimalCard,
    Pagination
  },
  computed: {
    animals() {
      return this.$store.state.animals;
    }
  }
}
</script>