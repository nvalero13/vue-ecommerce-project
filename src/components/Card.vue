<template>
    <article class="bg-white rounded shadow-lg h-[400px] m-3 p-3 relative">
        <img class=" w-full h-44 object-contain" :src="product.images[0]" alt="Img">
        <h2 class="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden mt-4">{{ product.title }}</h2>
        <div class="text-md my-3 overflow-hidden text-ellipsis h-[70px]">
             <p>{{ product.description }}</p>
        </div>
        <button class="rounded bg-blue-500 text-white p-3 w-10/12 absolute bottom-4 left-2/4 -translate-x-2/4 hover:bg-blue-600"> Add to cart <i class="fa-solid fa-cart-shopping pl-2"></i></button>
    </article>
</template>

<script setup>
    const props = defineProps(["product"]);
</script>

<style>

</style>