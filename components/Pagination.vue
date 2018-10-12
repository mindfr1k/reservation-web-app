<template>
  <div class="center-align">
      <ul class="pagination" v-if="pages <= 6">
        <li v-bind:class="getLeftChevronClass">
          <nuxt-link :to="`/animals/${previousPage}`"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)">
          <nuxt-link :to="`/animals/${page}`">{{ page }}</nuxt-link>
        </li>
        <li v-bind:class="getRightChevronClass">
          <nuxt-link :to="`/animals/${nextPage}`"><i class="material-icons">chevron_right</i></nuxt-link>
        </li>
      </ul>

      <ul class="pagination" v-if="pages > 6">
        <li v-bind:class="getLeftChevronClass">
          <nuxt-link :to="`/animals/${previousPage}`"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)" v-if="page <= 3">
          <nuxt-link :to="`/animals/${page}`">{{ page }}</nuxt-link>
        </li>
        <span>...</span>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)" v-if="page >= pages - 2">
          <nuxt-link :to="`/animals/${page}`">{{ page }}</nuxt-link>
        </li>
        <li v-bind:class="getRightChevronClass">
          <nuxt-link :to="`/animals/${nextPage}`"><i class="material-icons">chevron_right</i></nuxt-link>
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.state.animalPages;
    },
    currentPage() {
      return parseInt(this.$route.params.pageIndex);
    },
    previousPage() {
      return this.currentPage === 1
        ? 1
        : this.currentPage - 1;
    },
    nextPage() {
      return this.currentPage === this.pages
        ? this.pages
        : this.currentPage + 1;
    },
    getLeftChevronClass() {
      return this.currentPage === 1
        ? 'disabled'
        : 'waves-effect';
    },
    getRightChevronClass() {
      return this.currentPage === this.pages
        ? 'disabled'
        : 'waves-effect';
    }
  },
  methods: {
    getPageClass(page) {
      return page === this.currentPage
        ? 'active'
        : 'waves-effect'
    }
  },
  mounted() {
    this.$store.dispatch('setAnimalPages');
  }
}
</script>

<style scoped>
  li.active a {
    background-color: #ffd17c;
  }
  li a, span {
    margin-right: 0.5rem;
  }
  .pagination li.active {
    background-color: #fff;
  }
  span {
    font-size: 1.2rem;
  }
</style>