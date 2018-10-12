<template>
  <div>
    <form>
      <p v-for="category in reservationCategories" :key="category.title">
          <input type="checkbox" :id="category.title" />
          <label :for="category.title">
            <i class="material-icons left">{{ category.icon }}</i>
            <span>{{ category.title }}</span>
          </label>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategories: []
    }
  },
  computed: {
    reservationCategories() {
      return this.$store.state.reservationCategories;
    }
  }
}
</script>
<style scoped>
  [type="checkbox"]:checked+label:before {
    border-right: 2px solid #ffab40;
    border-bottom: 2px solid #ffab40; 
  }
  label {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
</style>
