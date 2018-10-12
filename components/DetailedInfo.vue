<template>
  <div class="row">
    <div class="col s12 center-align">
      <h1>{{ title }}</h1>
    </div>

    <div class="col s12 center-align">
      <img :src="bannerPath" class="responsive-img">
    </div>

    <div class="col s12 left-align">
      <h5 class="flow-text">Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
          Детальная информация о данном объекте.
      </h5>
    </div>

    <div class="col s12 center-align">
      <br><br>
    </div>

    <div class="col s12 center-align">
      <h2>Вернуться к карте вы можете, нажав на пункт в меню или же 
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
    width: 70%;
  }
  a {
    color: black;
    text-decoration: underline;
  }
  .col.s12 h5 {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
