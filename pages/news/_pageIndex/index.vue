<template>
  <div>
    <div class="row">
      <NewsPagination class="col s12" />

      <div class="col s12" v-for="news in filteredNews" :key="news._id">
        <NewsBlock 
        :id="news._id"
        :title="news.title"
        :img="news.path"
        :description="news.description"/>
      </div>

      <NewsPagination class="col s12" />
    </div>
  </div>
</template>

<script>
import NewsPagination from '@/components/NewsPagination'
import NewsBlock from '@/components/NewsBlock'

export default {
  components: {
    NewsPagination,
    NewsBlock
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

</style>
