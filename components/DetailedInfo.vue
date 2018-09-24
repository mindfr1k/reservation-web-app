<template>
  <div class="row">
    <div class="col s12 center-align">
      <h1>{{ title }}</h1>
    </div>
    <div class="col s12 center-align">
      <img :src="bannerPath" class="responsive-img">
    </div>
    <div class="col s12 center-align">
      <h2>Посмотреть карту вы можете, нажав на пункт в меню или же 
        <nuxt-link to="/map">
          <i>тут.</i>
        </nuxt-link>
      </h2>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'title',
    'bannerPath'
  ]
}
</script>

<style scoped>
  img {
    height: 50vh;
  }
  a {
    color: black;
    text-decoration: underline;
  }
</style>
