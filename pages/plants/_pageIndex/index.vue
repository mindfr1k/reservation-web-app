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
        ТЕСТ РАСТЕНИЙ
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