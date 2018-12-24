<template>
  <div class="row mainRow">
    <div class="row mainPageHeader">
      <div class="col s12 center-align">
        <img src="/logo.png" class="responsive-img mainLogo">
      </div>
      <div class="col s12 center-align">
        <span class="mainTitle">{{ $store.state.reservationTitle }}</span>  
      </div>
      <div class="col s12 center-align mainInfo">{{ $store.state.reservationOwner }}</div>
    </div>
    <div class="col l2 center-align hide-on-med-and-down">
      
    </div>
    <div class="col s12 m12 l8 left-align mainText">
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
    <div class="col l2 center-align hide-on-med-and-down">

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
  .mainRow {
    background-color: #cccccc;
    background-image: url('/mainPageNav.jpg');
    margin-bottom: 0;
  }
  .mainLogo {
    max-height: 25vh;
    margin-top: 1rem;
  }
  .mainTitle {
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 1px 1px 0 #999999,
    -1px 1px 0 #999999,
    1px -1px 0 #999999,
    -1px -1px 0 #999999,
    0px 1px 0 #999999,
    0px -1px 0 #999999,
    -1px 0px 0 #999999,
    1px 0px 0 #999999,
    2px 2px 0 #999999,
    -2px 2px 0 #999999,
    2px -2px 0 #999999,
    -2px -2px 0 #999999,
    0px 2px 0 #999999,
    0px -2px 0 #999999,
    -2px 0px 0 #999999,
    2px 0px 0 #999999,
    1px 2px 0 #999999,
    -1px 2px 0 #999999,
    1px -2px 0 #999999,
    -1px -2px 0 #999999,
    2px 1px 0 #999999,
    -2px 1px 0 #999999,
    2px -1px 0 #999999,
    -2px -1px 0 #999999;
  }
  .mainInfo {
    color: #999999;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 0 #ffffff,
    -1px 1px 0 #ffffff,
    1px -1px 0 #ffffff,
    -1px -1px 0 #ffffff,
    0px 1px 0 #ffffff,
    0px -1px 0 #ffffff,
    -1px 0px 0 #ffffff,
    1px 0px 0 #ffffff,
    2px 2px 0 #ffffff,
    -2px 2px 0 #ffffff,
    2px -2px 0 #ffffff,
    -2px -2px 0 #ffffff,
    0px 2px 0 #ffffff,
    0px -2px 0 #ffffff,
    -2px 0px 0 #ffffff,
    2px 0px 0 #ffffff,
    1px 2px 0 #ffffff,
    -1px 2px 0 #ffffff,
    1px -2px 0 #ffffff,
    -1px -2px 0 #ffffff,
    2px 1px 0 #ffffff,
    -2px 1px 0 #ffffff,
    2px -1px 0 #ffffff,
    -2px -1px 0 #ffffff;
  }
  .mainText {
    background-color: #ffffff;
  }
  a {
    color: black;
    text-decoration: underline;
  }
  .infoList li {
    list-style-type: disc;
  }
  .infoList:not(.browser-default) {
    padding-left: 1.5rem;
  }
  .infoList li {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  .mainPageNav {
    min-height: 40vh;
    width: 100%;
  }
  .navbar-fixed {
    padding: 0;
  }
  .nav-wrapper {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  a {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
</style>