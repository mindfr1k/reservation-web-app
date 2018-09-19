<template>
  <div>
  <h1>Zdarova, zdarova.</h1>

  <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    appTitle() {
      return this.$store.state.appTitle;
    },
    menuItems() {
      return this.$store.state.menuItems;
    }
  }
}
</script>