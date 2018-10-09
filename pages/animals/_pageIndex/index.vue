<template>
  <div>
    <div class="row">
      <div class="col s12 m6 l4" v-for="n in 9" :key="n">
        <AnimalCard />
      </div>
    </div>
  </div>
</template>

<script>
import AnimalCard from '@/components/AnimalCard';

export default {
  components: {
    AnimalCard
  }
}
</script>