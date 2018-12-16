<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="row">
            <div class="col s12 modal-body">
              <slot name="body">
                <div v-for="contentItem in polygon.inhabitants" :key="contentItem.title" class="col s12 m6 contentHolder">
                  <img class="responsive-img" :src="contentItem.path">
                  <p>{{ contentItem.title }}</p>
                  <EditDeleteButtons v-if="$store.state.isSignedIn" 
                  :id="polygon._id"
                  :title="contentItem.title"
                  :preview="contentItem.path"
                  :description="null"
                  :isInhabitant="true"/>
                </div>
                <div class="col s12 m6 addButtonHolder">
                  <AddButton v-if="$store.state.isSignedIn"
                  :isInhabitant="true" />
                </div>
                <div class="col s12 center-align">
                  <button class="btn-flat waves-effect waves-light abortButton" 
                  @click="$emit('close')">
                    Закрити
                  </button>
                  <button class="btn-flat waves-effect waves-light confirmButton" 
                  @click="toCatalog">
                    Каталог
                  </button>
                </div>
              </slot>
            </div>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AddButton from '@/components/AddButton'
import EditDeleteButtons from '@/components/EditDeleteButtons'

export default {
  components: {
    AddButton,
    EditDeleteButtons
  },
  props: [
    'polygon',
    'type'
  ],
  methods: {
    toCatalog() {
      this.$emit('close')
      this.$nuxt.$router.push({
        path: `/${this.type}/1`
      })
    }
  }
}
</script>


<style scoped>
  img {
    height: 30vh;
    width: 42vh;
  }
  .contentHolder {
    margin-bottom: 1rem;
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    max-height: 80vh;
    width: 80%;
    overflow-y: auto;
    margin: 2rem auto 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-body {
    margin: 20px 0;
    text-align: center;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  button {
    padding: 0 2rem;
    min-width: 40%;
  }

  button.confirmButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
    color: #2196f3;
  }

  button.confirmButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
    background-color: #2196f3;
    color: #ffffff;
  }

  button.abortButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
    color: #ff0000;
  }

  button.abortButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
    background-color: #ff0000;
    color: #ffffff;
  }
</style>