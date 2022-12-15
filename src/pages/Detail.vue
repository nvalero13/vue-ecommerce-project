<template>
  <p>Detail {{$route.params.id}}</p>
  <h2>{{ product.title }}</h2>
  <p>User {{ id }}</p>

</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["id"])
console.log(props)


const product = ref("");
async function getProduct() {
  const res = await fetch("https://dummyjson.com/products/"+props.id);
  const resJSON = await res.json();

  product.value = resJSON;

}

getProduct();
</script>

<style></style>
