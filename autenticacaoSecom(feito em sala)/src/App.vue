<template>
  <div id="app">
    <topbar></topbar>
    <router-view/>
  </div>
</template>

<script>
import topbar from './components/topbar'
export default {
  name: 'App',
  components: {
    topbar
  }
}
</script>

<style>
</style>
