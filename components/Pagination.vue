<template>
  <li class="active"><nuxt-link :to="`animals/${pageIndex}`">{{ pageIndex }}</nuxt-link></li>
</template>

<script>
export default {
  props: [
    'pageIndex'
  ]
}
</script>


<style scoped>
  li.active a {
    background-color: #ffd17c;
  }
</style>