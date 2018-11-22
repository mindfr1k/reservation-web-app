<template>
  <div>
    <nuxt-link to="" class="btn-flat waves-effect waves-light editButton">
      Редагувати
    </nuxt-link>
    <button class="btn-flat waves-effect waves-light deleteButton" 
    @click="showDeletionModal = true">
      Видалити
    </button>

    <DeletionModal v-if="showDeletionModal"
    :id="id"
    @close="showDeletionModal = false" />
  </div>
</template>

<script>
import DeletionModal from '@/components/DeletionModal'

export default {
  props: [
    'id'
  ],
  components: {
    DeletionModal
  },
  data() {
    return {
      showDeletionModal: false
    }
  }
}
</script>

<style scoped>
  a {
    padding-right: 2rem;
    margin-left: 1.6rem;
  }
  .card .card-action a.editButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
    color: #2196f3;
  }
  .card .card-action a.editButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
    background-color: #2196f3;
    color: #ffffff;
  }
  .card .card-action button.deleteButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
    color: #ff0000;
  }
  .card .card-action button.deleteButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
    background-color: #ff0000;
    color: #ffffff;
  }
</style>
