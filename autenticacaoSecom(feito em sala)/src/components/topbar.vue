<template>
  <div id="topbar">
  <nav>
    <div class="nav-wrapper">
    <router-link class="brand-logo" to="/">SPA - SECOM</router-link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li v-if="auth"><router-link to="/dashboard">Dashboard</router-link></li>
      <li v-if="!auth"><router-link to="/login">Login</router-link></li>
      <li v-if="!auth"><router-link to="/register">Register</router-link></li>
      <li v-if="auth" @click="logout"><a>Logout</a></li>
    </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
.nav-wrapper {
  background-color: #42a5f5;
}
</style>
