<template>
  <section   
      v-if="!loading"
      class="bg-blue-50 h-[90vh] flex items-start justify-center relative"
    >
  <div class="bg-white shadow-md w-10/12 md:h-3/4 m-10 flex flex-col md:flex-row relative">
    <img class="w-full md:w-6/12 lg:w-4-12 object-cover" :src="product.images[0]" alt="Image">
  <div class="pl-10 py-8">
  <p class=" text-blue-500 text-2xl">{{ product.brand }}</p>
  <h2 class="text-3xl lg:text-5xl font-bold">{{ product.title }}</h2>
  <p class="mt-4 mr-20"> {{product.description }}</p>

  <p class="text-blue-500 font-thin text-5xl mt-10">{{ product.price }}€</p>
  <button @click="shopStore.addProduct(product)" class="bg-blue-500 text-white p-3 w-full absolute -bottom-10 left-2/4 -translate-x-2/4 hover:bg-blue-600"> Add to cart <i class="fa-solid fa-cart-shopping pl-2"></i></button>
  </div>

</div>
</section>
<section v-else>
  LOADING...
</section>
</template>

<script setup>
import { ref } from "vue";
import { useShopStore } from "../store/shop.js";
    const shopStore = useShopStore();

const props = defineProps(["id"])

const product = ref("");
const loading = ref(true)


async function getProduct() {
  const res = await fetch("https://dummyjson.com/products/"+props.id);
  const resJSON = await res.json();

  product.value = resJSON;
  loading.value = false
}

getProduct();
</script>

<style></style>
