<template>
    <Header/>
    <section class="bg-stone-50 grid grid-cols-4 py-20 px-52 ">
      <Card v-for="beer in beers" :beer="beer"/>
    </section>
</template>

<script setup>
  import Header from './components/Header.vue';
  import Card from './components/Card.vue';

  import { ref } from 'vue';
  const beers = ref([]);

  async function getBeer() {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const resJSON = await res.json();

    beers.value = resJSON;
    console.log(beers.value);
  }

  getBeer();

</script>

<style>

</style>