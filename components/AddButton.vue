<template>
<div>
  <button v-if="isInhabitant" class="btn-flat waves-effect waves-light"
  @click="showInhabitantCreationModal = true">
    <div class="center-align">
      <i class="material-icons">add</i>
    </div>
  </button>

  <button v-else class="btn-flat waves-effect waves-light"
  @click="showCreationModal = true">
    <div class="center-align">
      <i class="material-icons">add</i>
    </div>
  </button>
  
  <CreationModal v-if="showCreationModal"
  @close="showCreationModal = false"/>
</div>
</template>

<script>
import CreationModal from '@/components/CreationModal'

export default {
  components: {
    CreationModal
  },
  props: [
    'isInhabitant'
  ],
  data() {
    return {
      showCreationModal: false,
      showInhabitantCreationModal: false
    }
  }
}
</script>

<style scoped>
  div {
    margin: .5rem 0 1rem 0;
    border-radius: 2px;
  }
  button {
    width: 100%;
    height: 100%;
  }
  button:hover {
    background-color: #2196f3;
    color: #ffffff;
  }
  i {
    font-size: 5rem;
    line-height: 150%;
  }
</style>