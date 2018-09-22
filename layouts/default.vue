<template>
  <div>
    <nav>
      <div class="nav-wrapper grey lighten-4 z-depth-1">
        <nuxt-link to="/" class="brand-logo text-black">{{ appTitle }}</nuxt-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down text-black">
          <li v-for="item in menuItems"
          :key="item.title">
            <nuxt-link :to="item.path">
              <i class="material-icons left">{{ item.icon }}</i>{{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

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

<style scoped>
  .nav-wrapper {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  ul {
   padding: 0 1.5rem;
 }
.brand-logo, a {
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
}
.brand-logo {
  font-size: 1.3rem;
  padding: 0 1.5rem 0 3rem;
}
li a {
  font-size: 0.9rem;
  text-transform: uppercase;
}
</style>
