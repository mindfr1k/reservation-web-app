<template>
  <div>
    <div class="card">
      <div class="card-image">
        <img class="responsive-img" :src="img">
      </div>

      <span class="card-title">
        <h5 class="center-align">{{ title }}</h5>
      </span>

      <div class="card-content">
        <p class="left-align">{{ description }}</p>
      </div>

      <div class="card-action center-align">
        <nuxt-link to="/" class="btn-flat waves-effect waves-light">
          <span class="btn-text">Подробнее</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'img',
    'title',
    'description'
  ]
}
</script>


<style scoped>
  img {
    height: 40vh;
  }
  h5 {
    margin-bottom: 0;
  }
  a {
    padding-right: 2rem;
    margin-left: 1.6rem;
  }
  a:hover {
    background-color: #ffd17c;
  }
  .btn-text {
    color: #ffab40;
  }
  .card-content {
    border-radius: 0 0 0 2px;
  }
  .card-action{
    border-top: 0;
    padding-top: 0;
  }
</style>