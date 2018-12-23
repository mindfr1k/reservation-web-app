<template>
  <div class="row">
    <div class="col s12 center-align">
      <h1>Вхід у систему адміністрування</h1>
    </div>
    <div class="col s12">
      <form @submit.prevent>
        <div class="input-field col s12">
          <input id="username" type="text" class="validate" data-length="50" 
          v-model="username"
          required />
          <label for="title" class="inputLabel">Логін</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" data-length="50" 
          v-model="password"
          required />
          <label for="title" class="inputLabel">Пароль</label>
        </div>
        <div class="col s12 error-container" v-if="errors.length">
          <div class="center-align">
            <b>Будь ласка, виправте наступні помилки:</b>
          </div>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <div class="col s12 center-align">
          <button class="btn-flat waves-effect waves-light confirmButton" 
          @click="checkForm">
            Підтвердити
        </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      username: null,
      password: null
    }
  },
  methods: {
    async checkForm() {
      this.errors = []
      if (this.username.length > 50) {
        this.errors.push('Логін повинен містити не більше 50 символів.')
      }
      if (this.password.length > 50) {
        this.errors.push('Пароль повинен містити не більше 50 символів.')
      }
      if (!this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,50}$/)) {
        this.errors.push(`Пароль повинен містити щонайменше 8 символів, які обов'язково містять 
          хоча б одну цифру і хоча б одну велику літеру.`)
      }
      if (!this.errors.length) {
        await this.$store.dispatch('signIn', {
          username: this.username,
          password: this.password,
        })
        this.$store.commit('setIsSignedIn', true)
        this.$nuxt.$router.push({
          path: `/animals/1`
        })
      }
    }
  },
  mounted() {
    $(document).ready(function() {
      $('input#username, input#password').characterCounter();
    })
  }
}
</script>

<style scoped>
  .row {
    min-height: 100vh;
  }
  .input-field input[type=text]:focus + label,
  .input-field input[type=password]:focus + label {
    color: #2196f3;
  }

  .input-field input[type=text]:focus,
  .input-field input[type=password]:focus {
    border-bottom: 1px solid #2196f3;
    box-shadow: 0 1px 0 0 #2196f3;
  }

  .inputLabel {
    font-size: 1.5rem;
  }

  ::placeholder {
    font-size: 1.2rem;
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

  .error-container {
    background-color: #ff0000;
    color: #ffffff;
    margin: 2rem 0;
    font-size: 1.5rem;
  }
</style>