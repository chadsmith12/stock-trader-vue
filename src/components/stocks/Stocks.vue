<template>
<b-card-group>
    <app-stock v-for="stock in stocks" v-bind:key="stock.id"></app-stock>
</b-card-group>
</template>

<script>
import Stock from './Stock.vue';

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: 'Apple', price: 250 },
        { id: 2, name: 'Google', price: 110 },
        { id: 3, name: 'Lexus', price: 50 },
        { id: 4, name: 'Twitter', price: 8 },
      ],
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>
