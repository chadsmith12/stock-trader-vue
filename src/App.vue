<template>
  <div id="app">
    <b-container>
      <app-header></app-header>
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
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
body {
  padding: 30px;
}
</style>
