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
                <form @submit.prevent>
                  <div class="input-field col s12">
                    <input id="title" type="text" class="validate" data-length="100" 
                    v-model="title"
                    required />
                    <label for="title" class="inputLabel">Назва*</label>
                  </div>
                  <div v-if="!isNews" class="file-field input-field col s12">
                    <div class="btn fileButton">
                      <span>Файл</span>
                      <input id="image" type="file" ref="file" required />
                    </div>
                    <div class="file-path-wrapper">
                      <input type="text" class="file-path validate" placeholder="Зображення"/>
                    </div>
                  </div>
                  <div v-if="isNews" class="file-field input-field col s12">
                    <div class="btn fileButton">
                      <span>Файл</span>
                      <input id="image" type="file" ref="file" required multiple/>
                    </div>
                    <div class="file-path-wrapper">
                      <input type="text" class="file-path validate" placeholder="Зображення"/>
                    </div>
                  </div>
                  <div v-if="!isInhabitant && !isNews" class="input-field col s12">
                    <textarea id="preview" type="text" class="validate materialize-textarea" 
                    data-length="500"
                    v-model="preview"
                    required />
                    <label for="preview" class="inputLabel">Стислий опис*</label>
                  </div>
                  <div v-if="!isInhabitant" class="input-field col s12">
                    <textarea id="description" type="text" class="validate materialize-textarea" 
                    data-length="3000"
                    v-model="description"
                    required />
                    <label for="description" class="inputLabel">Детальна інформація*</label>
                  </div>
                  <div class="col s12 error-container" v-if="errors.length">
                    <b>Будь ласка, виправте наступні помилки:</b>
                    <ul>
                      <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                  </div>
                  <div class="col s12 enter-align">
                    <button class="btn-flat waves-effect waves-light abortButton" 
                    @click="$emit('close')">
                      Скасувати
                    </button>
                    <button class="btn-flat waves-effect waves-light confirmButton" 
                    @click="checkForm">
                      Підтвердити
                    </button>
                  </div>
                </form>
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
    'isInhabitant',
    'isNews'
  ],
  data() {
    return {
      errors: [],
      title: null,
      preview: null,
      description: null
    }
  },
  methods: {
    async checkForm() {
      this.errors = []
      if (!this.title.match(/^[^0-9]+$/) && !this.isNews) {
        this.errors.push('Назва не має містити цифр.')
      }
      if (this.title.length > 100) {
        this.errors.push('Назва повинна містити не більше 100 символів.')
      }
      if (this.preview && this.preview.length > 500) {
        this.errors.push('Стислий опис повинен містити не більше 500 символів.')
      }
      if (this.description && this.description.length > 3000) {
        this.errors.push('Детальний опис повинен містити не більше 3000 символів.')
      }
      if (!this.errors.length) {
        if (this.isInhabitant) {
          const { name } = this.$refs.file.files[0]
          await this.$store.dispatch('postInhabitant', {
            id: this.id,
            body: {
              title: this.title,
              path: `reservation-web-api\\static\\images\\${name}`
            }
          })
          this.$store.dispatch('getInhabitants', {
            id: this.id
          })
          this.$emit('close')
          this.$nuxt.$router.push({
            path: `/map`
          })
        }
        else if (this.isNews) {
          const body = new FormData()
          for (let prop in this._data) {
            if (this._data[prop]) {
              body.append(prop, this._data[prop])
            }
          }
          for (let prop of this.$refs.file.files) {
            body.append('images', prop)
          }
          delete body.errors
          await this.$store.dispatch('postNews', {
            body
            })
          location.reload(true)
        } 
        else {
          await this.$store.dispatch('postObject', {
            categoryName: this.$store.state.currentCategory,
            title: this.title,
            preview: this.preview,
            description: this.description,
            image: this.$refs.file.files[0]
            })
          location.reload(true)
        }
      }
    }
  },
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
    max-height: 30rem;
    overflow-y: auto;
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

   .input-field input[type=text]:focus + label,
   .input-field textarea[type=text]:focus + label {
     color: #2196f3;
   }

  .input-field input[type=text]:focus,
  .input-field textarea[type=text]:focus {
    border-bottom: 1px solid #2196f3;
    box-shadow: 0 1px 0 0 #2196f3;
  }

  .inputLabel {
    font-size: 1.5rem;
  }

  ::placeholder {
    font-size: 1.2rem;
  }

  .fileButton {
    background-color: #2196f3;
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

  .error-container {
    background-color: #ff0000;
    color: #ffffff;
    margin: 2rem 0;
    font-size: 1.5rem;
  }

</style>