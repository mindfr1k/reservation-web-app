<template>
  <div>
    <div class="row">
      <div class="col s12 m6 l4" v-for="i in 9" :key="i">
        <AnimalCard />
      </div>
    </div>
    <div class="center-align">
      <Pagination />
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
  }
}
</script>