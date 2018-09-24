<template>
  <div class="row">
    <div class="col s12 center-align">
      <br><br>
    </div>

    <div class="col s12 center-align">
      <h1>Данный сервис предоставляет доступ к информации о различных регионах заповедника и животных,
          находящихся на его территории.
      </h1>
    </div>

    <div class="col s12 center-align">
      <h2>Обратиться к карте вы можете, нажав на пункт в меню или же 
        <nuxt-link to="/map">
          <i>тут.</i>
        </nuxt-link></h2>
    </div>

    <div class="col s12 center-align">
      <h2>Обратиться к каталогу вы можете, нажав на пункт в меню или же 
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
