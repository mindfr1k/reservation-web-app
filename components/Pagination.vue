<template>
  <div>
    <div class="center-align" v-if="pages <= 6">
      <ul class="pagination">
        <li v-bind:class="getLeftChevronClass">
          <nuxt-link :to="`/${currentCategory}/${previousPage}`"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)">
          <nuxt-link :to="`/${currentCategory}/${page}`">{{ page }}</nuxt-link>
        </li>
        <li v-bind:class="getRightChevronClass">
          <nuxt-link :to="`/${currentCategory}/${nextPage}`"><i class="material-icons">chevron_right</i></nuxt-link>
        </li>
      </ul>
    </div>

    <div class="center-align" v-if="pages > 6">
      <ul class="pagination" v-if="currentPage <= 2 || currentPage > pages - 2">
        <li v-bind:class="getLeftChevronClass">
          <nuxt-link :to="`/${currentCategory}/${previousPage}`"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)" v-if="page <= 3">
          <nuxt-link :to="`/${currentCategory}/${page}`">{{ page }}</nuxt-link>
        </li>
        <span>...</span>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)" v-if="page >= pages - 2">
          <nuxt-link :to="`/${currentCategory}/${page}`">{{ page }}</nuxt-link>
        </li>
        <li v-bind:class="getRightChevronClass">
          <nuxt-link :to="`/${currentCategory}/${nextPage}`"><i class="material-icons">chevron_right</i></nuxt-link>
        </li>
      </ul>

      <ul class="pagination" v-else-if="currentPage === 3">
        <li v-bind:class="getLeftChevronClass">
          <nuxt-link :to="`/${currentCategory}/${previousPage}`"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)" v-if="page <= 5">
          <nuxt-link :to="`/${currentCategory}/${page}`">{{ page }}</nuxt-link>
        </li>
        <span>...</span>
        <li v-bind:class="getPageClass(page)">
          <nuxt-link :to="`/${currentCategory}/${pages}`">{{ pages }}</nuxt-link>
        </li>
        <li v-bind:class="getRightChevronClass">
          <nuxt-link :to="`/${currentCategory}/${nextPage}`"><i class="material-icons">chevron_right</i></nuxt-link>
        </li>
      </ul>

      <ul class="pagination" v-else-if="currentPage === pages - 2">
        <li v-bind:class="getLeftChevronClass">
          <nuxt-link :to="`/${currentCategory}/${previousPage}`"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <li v-bind:class="getPageClass(page)">
          <nuxt-link :to="`/${currentCategory}/1`">1</nuxt-link>
        </li>
        <span>...</span>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)" v-if="page >= pages - 4">
          <nuxt-link :to="`/${currentCategory}/${page}`">{{ page }}</nuxt-link>
        </li>
        <li v-bind:class="getRightChevronClass">
          <nuxt-link :to="`/${currentCategory}/${nextPage}`"><i class="material-icons">chevron_right</i></nuxt-link>
        </li>
      </ul>

      <ul class="pagination" v-else>
        <li v-bind:class="getLeftChevronClass">
          <nuxt-link :to="`/${currentCategory}/${previousPage}`"><i class="material-icons">chevron_left</i></nuxt-link>
        </li>
        <li v-bind:class="getPageClass(page)">
          <nuxt-link :to="`/${currentCategory}/1`">1</nuxt-link>
        </li>
        <span>...</span>
        <li v-for="page in pages" :key="page" v-bind:class="getPageClass(page)" 
        v-if="page === currentPage || page === currentPage - 1 || page === currentPage + 1">
          <nuxt-link :to="`/${currentCategory}/${page}`">{{ page }}</nuxt-link>
        </li>
        <span>...</span>
        <li v-bind:class="getPageClass(page)">
          <nuxt-link :to="`/${currentCategory}/${pages}`">{{ pages }}</nuxt-link>
        </li>
        <li v-bind:class="getRightChevronClass">
          <nuxt-link :to="`/${currentCategory}/${nextPage}`"><i class="material-icons">chevron_right</i></nuxt-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.state.categoryPages;
    },
    currentCategory() {
      return this.$store.state.currentCategory;
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
  }
}
</script>

<style scoped>
  li.active a {
    background-color: #ffd17c;
  }
  li a, span {
    margin-left: 0.1rem;
  }
  .pagination li.active {
    background-color: #fff;
  }
  span {
    font-size: 1.2rem;
  }
</style>