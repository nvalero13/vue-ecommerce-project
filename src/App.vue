<template>
  <Header
    :cartNum="cartNum"
    :subtotal="subtotal"
    :cartProducts="cartProducts"
    @removeProduct="removeProduct"
  />
  <section
    class="bg-blue-50 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-10 px-12 lg:px-20 xl:px-52"
  >
    <Card
      @addProduct="addProduct"
      v-for="product in products"
      :product="product"
      :key="product"
    />
  </section>
</template>

<script setup>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

import { ref } from "vue";
import { computed } from "@vue/reactivity";

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

function removeProduct(cartProduct) {
  
  const index = cartProducts.value.indexOf(cartProduct)
  cartProducts.value.splice(index, 1)

}


const subtotal = computed(() => {
  if (cartProducts.value.length > 0) {
    const acc = ref(0)
    cartProducts.value.forEach((product) => acc.value += product.price)
    return acc
  } else {
    return 10
  }
});

const cartNum = computed(() => cartProducts.value.length);
</script>

<style></style>
