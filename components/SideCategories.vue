<template>
  <div>
    <p v-for="category in reservationCategories" :key="category.title">
      <nuxt-link :to="category.path">
      <i class="material-icons left">{{ category.icon }}</i>
      {{ category.title }}
    </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    reservationCategories() {
      return this.$store.state.reservationCategories;
    }
  }
}
</script>
<style scoped>
  p a {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
</style>
