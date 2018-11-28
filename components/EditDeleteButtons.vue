<template>
  <div>
    <button class="btn-flat waves-effect waves-light editButton"
    @click="showUpdatingModal = true">
      Редагувати
    </button>
    <button class="btn-flat waves-effect waves-light deleteButton" 
    @click="showDeletionModal = true">
      Видалити
    </button>

    <UpdatingModal v-if="showUpdatingModal"
    :id="id"
    :objectTitle="title"
    :objectPreview="preview"
    :objectDescription="description"
    @close="showUpdatingModal = false" />

    <DeletionModal v-if="showDeletionModal"
    :id="id"
    @close="showDeletionModal = false" />
  </div>
</template>

<script>
import UpdatingModal from '@/components/UpdatingModal'
import DeletionModal from '@/components/DeletionModal'

export default {
  props: [
    'id',
    'title',
    'preview',
    'description'
  ],
  components: {
    UpdatingModal,
    DeletionModal
  },
  data() {
    return {
      showUpdatingModal: false,
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
  .card .card-action button.editButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
    color: #2196f3;
  }
  .card .card-action button.editButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
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
