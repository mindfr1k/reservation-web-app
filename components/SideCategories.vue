<template>
  <div>
    <form action="#">
      <p v-for="category in reservationCategories" :key="category.title">
        <label>
          <input type="checkbox" />
          <span>{{ category.title }}</span>
        </label>
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
