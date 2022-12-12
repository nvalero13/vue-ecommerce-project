<template>
    <article class="bg-white rounded shadow-lg h-[400px] m-3 p-3 relative">
        <img class=" w-full h-32 object-cover" :src="product.images[0]" alt="Img">
        <h2 class="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden mt-4">{{ product.title }}</h2>
        <div class="overflow-hidden">
        <p class="text-md my-3 text-overflow-ellipsis">{{ product.description }}</p>
        </div>
        <button class="rounded bg-stone-500 text-white p-3 w-10/12 absolute bottom-4 left-2/4 -translate-x-2/4 hover:bg-stone-600">Buy</button>
    </article>
</template>

<script setup>
    const props = defineProps(["product"]);


</script>

<style>

</style>