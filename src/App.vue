<template>
    <Header :cartNum="cartNum" :cartProducts="cartProducts" />
    <section class="bg-blue-50 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-20 px-12 lg:px-20 xl:px-52">
      <Card @addProduct="addProduct" v-for="product in products" :product="product" :key="product"/>
    </section>
</template>

<script setup>
  import Header from './components/Header.vue';
  import Card from './components/Card.vue';

  import { ref } from 'vue';
  import { computed } from '@vue/reactivity';

  const products = ref([]);

  async function getProduct() {
    const res = await fetch("https://dummyjson.com/products");
    const resJSON = await res.json();

    products.value = resJSON.products;
    console.log(products.value);
  }

  getProduct();

  const cartProducts = ref([]);
  function addProduct(newProduct) {
    cartProducts.value.push(newProduct);
  }

  const cartNum = computed(() => cartProducts.value.length);


</script>

<style>

</style>