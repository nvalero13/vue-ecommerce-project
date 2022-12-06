<template>
    <article class="bg-white rounded shadow-lg h-72 m-3 p-3">
        <img class=" w-full h-32 object-contain" :src="beer.image_url" alt="Img">
        <h2 class="text-lg text-ellipsis whitespace-nowrap overflow-hidden my-3">{{ beer.name }}</h2>
        <p class="text-md my-3 text-ellipsis whitespace-nowrap overflow-hidden">{{ beer.tagline }}</p>
        <button class="rounded bg-stone-500 text-white p-3 w-full">Buy</button>
    </article>
</template>

<script setup>
    const props = defineProps(["beer"]);


</script>

<style>

</style>