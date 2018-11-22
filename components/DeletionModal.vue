<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h5>Видалення елементу</h5>
          </div>

          <div class="modal-body">
            <slot name="body">
              Ви впевнені, що хочете видалити цей елемент?
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn-flat waves-effect waves-light abortButton" 
              @click="$emit('close')">
                Ні
              </button>
              <button class="btn-flat waves-effect waves-light confirmButton" 
              @click="$emit('close'); deleteObject(id)">
                Так
              </button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'id'
  ],
  methods: {
    deleteObject(id) {
      this.$store.dispatch('deleteFromDb', this.id)
      location.reload(true)
    }
  }
}
</script>

<style scoped>
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
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
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

.card .card-action button.confirmButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
  color: #2196f3;
  margin-left: 1rem;
}
.card .card-action button.confirmButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
  background-color: #2196f3;
  color: #ffffff;
}
.card .card-action button.abortButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
  color: #ff0000;
}
.card .card-action button.abortButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
  background-color: #ff0000;
  color: #ffffff;
}

</style>
