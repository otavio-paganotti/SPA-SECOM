<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
