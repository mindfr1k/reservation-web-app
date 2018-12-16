<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="row">
            <div class="col s12 modal-header">
              <h5>Видалення елементу</h5>
            </div>
            <div class="col s12 modal-body">
              <slot name="body">
                Ви впевнені, що хочете видалити цей елемент?
              </slot>
            </div>
            <div class="col s12 modal-footer">
              <slot name="footer">
                <button class="btn-flat waves-effect waves-light abortButton" 
                @click="$emit('close')">
                  Ні
                </button>
                <button class="btn-flat waves-effect waves-light confirmButton" 
                @click="checkForm">
                  Так
                </button>
              </slot>
            </div>
          </div> 

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'image',
    'isInhabitant'
  ],
  methods: {
    async checkForm() {
      if (this.isInhabitant) {
        await this.$store.dispatch('deleteInhabitant', {
          id: this.id,
          body: {
            title: this.title,
            path: this.image
          }
        })
        location.reload(true)
      }
      else {
        await this.$store.dispatch('deleteObject', {
          id: this.id,
          body: {
            categoryName: this.$store.state.currentCategory
          }
        })
        location.reload(true)
      }
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
.confirmButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
  color: #2196f3;
  margin-left: 1rem;
}
.confirmButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
  background-color: #2196f3;
  color: #ffffff;
}
.abortButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
  color: #ff0000;
}
.abortButton:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
  background-color: #ff0000;
  color: #ffffff;
}

</style>
