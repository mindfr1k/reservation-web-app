<template>
  <div class="card">
    <div class="card-image">
      <img class="responsive-img" :src="img">
    </div>

    <span class="card-title">
      <h5 class="center-align">{{ title }}</h5>
    </span>

    <div class="card-content">
      <p class="left-align">{{ preview }}</p>
    </div>

    <div class="card-action center-align">
      <nuxt-link to="" class="btn-flat waves-effect waves-light activator">
        <span class="activator">Детальніше</span>
      </nuxt-link>
      <EditDeleteButtons v-if="$store.state.isSignedIn" 
      :id="id"
      :title="title"
      :preview="preview"
      :description="description"
      :isInhabitant="false"/>
    </div>


    <div class="card-reveal">
      <span class="card-title center-align">
        <i class="material-icons right">close</i>
        {{ title }}
        </span>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import EditDeleteButtons from '@/components/EditDeleteButtons'

export default {
  components: {
    EditDeleteButtons
  },
  props: [
    'id',
    'img',
    'title',
    'preview',
    'description'
  ]
}
</script>


<style scoped>
  img {
    height: 30vh;
    width: 42vh;
  }
  h5 {
    margin-bottom: 0;
  }
  a {
    padding-right: 2rem;
    margin-left: 1.6rem;
  }
  .card .card-action a.activator:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
    background-color: #ffab40;
    color: #ffffff;
  }
  .card-content {
    border-radius: 0 0 0 2px;
  }
  .card-action{
    border-top: 0;
    padding-top: 0;
  }
</style>