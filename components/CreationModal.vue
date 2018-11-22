<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="row">
            <div class="col s12 modal-header">
              <h5>Створення елементу</h5>
            </div>
            <div class="col s12 modal-body">
              <slot name="body">
                <div class="input-field col s12">
                  <input id="title" type="text" class="validate" data-length="100"/>
                  <label for="title" class="inputLabel">Назва</label>
                </div>
                <div class="input-field col s12">
                  <input id="title" type="text" class="validate" data-length="100"/>
                  <label for="title" class="inputLabel">Зображення</label>
                </div>
                <div class="input-field col s12">
                  <textarea id="preview" type="text" class="validate materialize-textarea" data-length="200"/>
                  <label for="preview" class="inputLabel">Стислий опис</label>
                </div>
                <div class="input-field col s12">
                  <textarea id="description" type="text" class="validate materialize-textarea" data-length="500"/>
                  <label for="description" class="inputLabel">Детальна інформація</label>
                </div>
              </slot>
            </div>
          </div>

          <div class="center-align">
              <button class="btn-flat waves-effect waves-light abortButton" 
              @click="$emit('close')">
                Скасувати
              </button>
              <button class="btn-flat waves-effect waves-light confirmButton" 
              @click="$emit('close')">
                Підтвердити
              </button>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      $('input#title, textarea#preview, textarea#description').characterCounter();
    })
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
    min-height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: block;
  }

  .modal-container {
    width: 80%;
    margin: 2rem auto 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header {
    text-align: center;
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

   .input-field input[type=text]:focus + label {
     color: #2196f3;
   }

  .input-field input[type=text]:focus {
    border-bottom: 1px solid #2196f3;
    box-shadow: 0 1px 0 0 #2196f3;
  }

  .inputLabel {
    font-size: 1.5rem;
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