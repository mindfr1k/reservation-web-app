<template>
  <div>
    <form>
      <p v-for="category in reservationCategories" :key="category.title">
          <input type="checkbox" :id="category.title" />
          <label :for="category.title">{{ category.title }}</label>
      </p>
    </form>
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
