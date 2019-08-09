<template>
  <div id="app">
    <h1>Shopping Cart</h1>
    <hr>
    <h2>Products</h2>
    <ProductiLisat />
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
import ProductiLisat from './components/ProductiLisat.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    ProductiLisat,
    ShoppingCart
  }
}
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
