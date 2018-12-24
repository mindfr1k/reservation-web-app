<template>
  <div class="container-fluid">
    <div class="row">
      <NewsPagination class="col s12" />

      <AddButton class="col s12" v-if="$store.state.isSignedIn"
      :isInhabitant="false"
      :isNews="true" />

      <div class="col s12" v-for="news in filteredNews" :key="news._id">
        <NewsBlock 
        :id="news._id"
        :title="news.title"
        :img="news.images"
        :description="news.description" />
      </div>

      <NewsPagination class="col s12" />
    </div>
  </div>
</template>

<script>
import NewsPagination from '@/components/NewsPagination'
import NewsBlock from '@/components/NewsBlock'
import AddButton from '@/components/AddButton'

export default {
  components: {
    NewsPagination,
    NewsBlock,
    AddButton
  },
  computed: {
    filteredNews() {
      return this.$store.state.filteredNews
    }
  },
  mounted() {
    this.$store.dispatch('getNewsPagesAmount')
    this.$store.dispatch('filterNewsByPage', {
      page: this.$route.params.pageIndex
    })
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
</style>
