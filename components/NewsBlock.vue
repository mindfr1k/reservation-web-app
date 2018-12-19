<template>
  <div class="row">
    <h5 class="left-align col s12">{{ title }}</h5>
    <p v-bind:class="truncatedClass">{{ description }}</p>
    <button v-if="isTruncated" class="left-align col s12 btn-flat waves-effect waves-light"
    @click="showTruncated">
      Читати далі
    </button>
    <img v-if="!isTruncated" class="responsive-img regularImg" :src="img">
    <button v-if="!isTruncated" class="left-align col s12 btn-flat waves-effect waves-light"
    @click="showTruncated">
      Згорнути новину
    </button>
    <EditDeleteButtons class="col s12 center-align" 
    :id="id"
    :title="title"
    :image="img"
    :preview="null"
    :description="description"
    :isInhabitant="false"
    :isNews="true" />
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
    'description'
  ],
  data() {
    return {
      isTruncated: true,
      truncatedClass: 'left-align truncated'
    }
  },
  methods: {
    showTruncated() {
      this.isTruncated = !this.isTruncated
      this.truncatedClass =  this.isTruncated 
      ? 'left-align truncated'
      : 'left-align notTruncated'
    }
  }
}
</script>

<style scoped>
  .regularImg {
    height: 40vh;
    width: 52vh;
  }
  h5 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .truncated {
    overflow: hidden;
    position: relative;
    max-height: 6rem;
    text-align: justify;
    padding-right: 1rem;
  }
  .truncated:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .truncated:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    background: #ffffff;
  }
  .notTruncated {
    width: auto;
  }
  .btn-flat {
    margin-bottom: 1rem;
  }
  .btn-flat:focus {
    background-color: #ffffff;
  }
</style>