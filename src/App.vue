<template>
    <Header/>
    <section class="bg-stone-50 grid grid-cols-4 py-20 px-52 ">
      <Card v-for="product in products" :product="product" :key="product"/>
    </section>
</template>

<script setup>
  import Header from './components/Header.vue';
  import Card from './components/Card.vue';

  import { ref } from 'vue';
  const products = ref([]);

  async function getProduct() {
    const res = await fetch("https://dummyjson.com/products");
    const resJSON = await res.json();

    products.value = resJSON.products;
    console.log(products.value);
  }

  getProduct();

</script>

<style>

</style>