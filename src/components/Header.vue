<template>
  <div class="flex justify-around items-center bg-blue-500 py-6 relative">
    <h2 class="text-3xl text-white font-bold">WEIRD SHOP</h2>
    <nav>
        <ul class="flex justify-between text-white flex-1 gap-20">
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Perfume</a></li>
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Smartphones</a></li>
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Laptops</a></li>
        </ul>
    </nav>
    <button @click="toggleCart" class="text-white border-2 rounded px-5 py-2 border-white hover:text-blue-500 hover:bg-white transition-all relative">
      Cart
      <i class="fa-solid fa-cart-shopping pl-2"></i>
      <div class="bg-red-500 rounded-full h-[25px] w-[25px] border-white border-2 text-white flex justify-center items-center text-xs font-bold absolute -top-3 -right-3">3</div>
    </button>

    <transition name="fade">
      <div v-if="showCart" class="absolute top-[100px] right-36 lg:right-48 xl:right-72">
        <div class="rounded-sm absolute bg-white h-[50px] w-[50px] rotate-45 z-20"></div>
        <div class="rounded-md absolute bg-white h-[200px] w-[300px] -left-44 z-20 p-3">  
          <button @click="toggleCart" class="bg-red-500 rounded-full h-[30px] w-[30px] flex justify-center items-center text-white font-bold absolute -top-4 -right-4">X</button>
          
          <div class="w-full p-2 rounded-sm border border-blue-200">
            <h3 class="text-lg">Iphone 4</h3>
          </div>
          
        </div>
      </div>
    </transition>
   
  </div>
  <transition name="fade">
  <div v-if="showCart" class="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
</transition>
</template>

<script setup>
import { ref } from 'vue';

const showCart = ref(false)

function toggleCart() {
  showCart.value = !showCart.value
}



</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>