<template>
  <div id="app">
    <b-container>
      <app-header></app-header>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>

import AppHeader from './components/Header.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
