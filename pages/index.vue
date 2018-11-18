<template>
  <div class="row">
    <div class="col s12 center-align">
      <br><br>
    </div>

    <div class="col s12 center-align">
      <h1>Даний сервіс надає доступ до інформації про різноманітні регіони заповідника і тварин,
          що знаходяться на його території.
      </h1>
    </div>

    <div class="col s12 center-align">
      <h2>Звернутися до мапи ви можете, натиснувши на пункт в меню або
        <nuxt-link to="/map">
          <i>тут.</i>
        </nuxt-link></h2>
    </div>

    <div class="col s12 center-align">
      <h2>Звернутися до каталогу ви можете, натиснувши на пункт в меню або 
        <nuxt-link to="/animals/1">
          <i>тут.</i>
        </nuxt-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  a {
    color: black;
    text-decoration: underline;
  }
</style>
