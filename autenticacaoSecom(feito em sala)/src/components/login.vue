<template>
  <div id="login">
    <div class="row">
      <div class="col s12 m4 l4 push-m4 push-l4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Login</span>
            <div class="row">
              <div class="input-field">
                <input type="email" class="validate" v-model="registro.email" id="email">
                <label for="email">E-mail</label>
              </div>
              <div class="input-field">
                <input type="password" class="validate" v-model="registro.senha" id="senha">
                <label for="senha">Senha</label>
              </div>
              <div class="col s12">
                <button @click="salvar" class="btn btn-small waves-effect waves-light right blue white-text">Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      registro: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    salvar () {
      this.$store.dispatch('login', this.registro)
    }
  }
}
</script>

<style scoped>
</style>
