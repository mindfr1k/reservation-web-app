<template>
  <v-container fluid>
      <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Данный сервис предоставляет доступ к информации о различных регионах заповедника.</h1>
      </v-flex>

      <v-flex xs12 class="subheading text-xs-center" mt-3>
        <h2>Посмотреть карту вы можете, нажав на пункт в меню или же 
          <nuxt-link to="/map">
            <i>тут.</i>
          </nuxt-link>
        </h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  
}
</script>