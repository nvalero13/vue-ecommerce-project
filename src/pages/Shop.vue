<template>

    <section
      v-if="!loading"
      class="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-10 px-12 lg:px-20 xl:px-52"
    >
      <Card
   
        v-for="product in products"
        :product="product"
        :key="product"
      />
    </section>

    <section
    v-else
    class="flex justify-center items-center pt-20">
        <h1 class="text-3xl font-bold text-blue-500">Loading...</h1>
    </section>
  </template>
  
  <script setup>
  import Card from "../components/Card.vue";
  
  import { ref } from "vue";

  const loading = ref(true)
  const products = ref([]);
  
  async function getProducts() {
    loading.value = true;
    const res = await fetch("https://dummyjson.com/products");
    const resJSON = await res.json();
  
    products.value = resJSON.products;
    loading.value = false;
    console.log(products.value);
  }
  
  getProducts();
  
  
  </script>
  
  <style></style>
  