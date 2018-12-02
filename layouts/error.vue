<template>
  <div class="center-align">
    <div v-if="error.statusCode === 404">
      <h1>Помилка 404</h1>
      <h2>На жаль, такої сторінки не існує. Скористайтеся нашим меню :)</h2>
      </div>
    <h1 v-else>На сайті виникла помилка, просимо вибачення за незручності!</h1>
    <nuxt-link to="/">До головної сторінки</nuxt-link>
  </div>
</template>

<script>
export default {
  props: [
    'error'
  ]
}
</script>