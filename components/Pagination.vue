<template>
  <div>
    <ul class="pagination">
      <li class="disabled">
        <nuxt-link to="1"><i class="material-icons">chevron_left</i></nuxt-link>
      </li>
      <li class="active"><nuxt-link to="animals/1">1</nuxt-link></li>
      <li class="waves-effect"><nuxt-link to="animals/2">2</nuxt-link></li>
      <li class="waves-effect">
        <nuxt-link to="/1"><i class="material-icons">chevron_right</i></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  li.active a {
    background-color: #ffd17c;
  }
</style>
