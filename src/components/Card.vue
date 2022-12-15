<template>
    <button @click="hi" class="hover:scale-105 transition-transform">
    <article class="bg-white shadow-lg h-[450px] m-3 pt-5 relative">
        <img class=" w-full h-44 object-contain" :src="product.images[0]" alt="Img">
        <div class="flex-column items-center justify-center text-center">
        <h2 class="text-xl text-ellipsis whitespace-nowrap overflow-hidden mt-4 pt-3 px-3 uppercase">{{ product.title }}</h2>
        <div class="text-sm my-3 overflow-hidden text-ellipsis px-7 h-[60px]">
             <p>{{ product.description }}</p>
        </div>
        <p class="text-blue-500 font-thin text-3xl">{{ product.price }}€</p>
        </div>
        <button @click.stop="$emit('addProduct', product)" class="bg-blue-500 text-white p-3 w-full absolute bottom-0 left-2/4 -translate-x-2/4 hover:bg-blue-600"> Add to cart <i class="fa-solid fa-cart-shopping pl-2"></i></button>
    </article>
</button>
</template>

<script setup>
    const props = defineProps(["product"]);

    function hi(event) {
        event.stopImmediatePropagation();
    console.log("Detail")
    }
</script>

<style>

</style>