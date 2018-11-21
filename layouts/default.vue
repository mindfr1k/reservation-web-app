<template>
  <div>
    <ul id="slide-out" class="side-nav">
      <li v-for="item in menuItems"
      :key="item.title">
        <nuxt-link :to="item.path">
          <i class="material-icons left">{{ item.icon }}</i>{{ item.title }}
        </nuxt-link>
      </li>
    </ul>

    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper grey lighten-4 z-depth-1">
          <nuxt-link to="" data-activates="slide-out" class="button-collapse 
          waves-effect waves-light valign-wrapper hide-on-med-and-up">
              <i class="material-icons center">menu</i>
          </nuxt-link>
          <nuxt-link to="/" class="brand-logo text-black left hide-on-med-and-up ">{{ appTitle }}</nuxt-link>
          <nuxt-link to="/" class="brand-logo text-black left hide-on-small-only">{{ appTitle }}</nuxt-link>

          <ul class="right hide-on-small-only">
            <li v-for="item in menuItems"
            :key="item.title">
              <nuxt-link :to="item.path" class="waves-effect waves-light">
                <i class="material-icons left">{{ item.icon }}</i>{{ item.title }}
              </nuxt-link>
            </li>
          </ul>

        </div>
      </nav>
    </div>

    <div class="container-fluid">
      <nuxt />
    </div>

    <footer class="footer-copyright grey lighten-4">
      <div class="container center-align">
        <span class="footer-text">&copy; 2018 Василюк Роман</span>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'button-collapse.js', body: true },
      { src: 'modal-engine.js', body: true }
    ]
  },
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
  .container-fluid {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    margin: 1.5rem;
  }
  .nav-wrapper {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  .button-collapse {
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;
    margin: 0.5rem 0 2rem 1rem;
  }
  .button-collapse:hover {
    background-color: #d3d3d3;
  }
  .material-icons.center {
    margin: -0.6rem 0 0 0;
  }
  .brand-logo, a {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
  }
  .brand-logo.left {
    font-size: 1.3rem;
    margin: 0 1.5rem 0 2rem;
  }
  .brand-logo.hide-on-med-and-up {
    margin: 0 1.5rem 0 5rem;
  }
  ul.right {
   margin: 0 1.5rem;
  }
  ul.right li a {
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .footer-text {
    font-size: 0.9rem;
    line-height: 2.5rem;
    color: rgba(0, 0, 0, 0.87);
  }
</style>