<template>
  <div class="flex justify-around items-center bg-blue-500 py-6 relative">
    <router-link to="/">
    <h2 class="text-3xl text-white font-bold">SHOP</h2>
    </router-link>
    <nav>
        <ul v-if="!smallScreen" class="flex justify-between gap-10 xl:gap-20 text-white flex-1">
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><router-link to="/detail">Detail</router-link></li>
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Smartphones</a></li>
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Laptops</a></li>
        </ul>
        <div v-else>
        <button @click="toggleNav" class="text-white"><i class="fa-solid  fa-bars"></i></button>
        
      </div>
    </nav>

    <div class="relative">
    <button @click="toggleCart" class="text-white border-2 px-5 py-2 border-white hover:text-blue-500 hover:bg-white transition-all relative">
      Cart
      <i class="fa-solid fa-cart-shopping pl-2"></i>
      <div v-if="shopStore.cartProducts.length > 0" class="bg-red-500 rounded-full h-[25px] w-[25px] border-white border-2 text-white flex justify-center items-center text-xs font-bold absolute -top-3 -right-3">{{ shopStore.cartProducts.length }}</div>
    </button>

    
      <div v-if="showCart" class="absolute top-[60px]">
        <div class="absolute bg-white h-[50px] w-[50px] left-8 rotate-45 z-20"></div>
        <div class="absolute bg-white w-[330px] sm:w-[400px] -left-56 sm:-left-72 z-20 pt-3  shadow-2xl">       
          <div  v-if="shopStore.cartProducts.length > 0">
          <div v-for="cartProduct in shopStore.cartProducts" class="mx-2 p-2 flex justify-between items-center border-b-2 border-blue-500">
            <div class="flex items-center gap-3">
              <img class="h-12 w-12 object-contain" :src="cartProduct.images[0]" alt="Image"/>
              <div>
                <h3 class="text-md w-56 text-ellipsis whitespace-nowrap overflow-hidden uppercase"> {{cartProduct.title}} </h3>
                <p class="text-sm text-blue-500"> {{cartProduct.price}}€</p>
              </div>
            </div>
              <!-- <button class="bg-red-500 px-4 hover:bg-red-600"><i class="fa fa-trash text-white"></i></button> -->
              <button @click="shopStore.removeProduct(cartProduct)" class="px-2"><i class="fa fa-trash text-xl text-red-500 hover:text-red-600"></i></button>
        
          </div>

          <div class="w-full">
            <h3 class="p-2 text-xl mb-3">Subtotal: <span class="text-blue-500 text-2xl">{{shopStore.subtotal()}}€</span></h3>
            <button class="p-3 bg-blue-500 text-white hover:bg-blue-600 w-full font-thin text-xl"> Checkout </button>
          </div>
        </div>
          <div v-else class="w-full p-2">
            <h3 class="text-lg"> No products in the cart yet :(</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <transition name="slidedown">
  <ul v-show="navToggled" class="flex justify-start gap-5 flex-col w-full bg-white p-3 z-20 border-b-2 border-blue-500">
        <li class="cursor-pointer border-b-2 py-2 hover:border-blue-500 transition-all"><a href="">Perfume</a></li>
        <li class="cursor-pointer  border-b-2 py-2 hover:border-blue-500 transition-all"><a href="">Smartphones</a></li>
        <li class="cursor-pointer  border-b-2 py-2 hover:border-blue-500 transition-all"><a href="">Laptops</a></li>
  </ul>
</transition>
  <!-- <div v-if="showCart" class="absolute top-0 left-0 w-full h-max bg-black opacity-20 z-10"></div> -->

</template>

<script setup>
import { ref } from 'vue';
import { useShopStore } from "../store/shop.js";
const shopStore = useShopStore();

const showCart = ref(false)

function toggleCart() {
  showCart.value = !showCart.value
}

const navToggled = ref(false)
function toggleNav() {
  navToggled.value = !navToggled.value
}


const smallScreen = ref(false)
window.addEventListener('load', () => window.innerWidth < 700 ? smallScreen.value = true : smallScreen.value = false);
window.addEventListener('resize', () => window.innerWidth < 700 ? smallScreen.value = true : smallScreen.value = false);
</script>

<style>
.slidedown-enter-active,
.slidedown-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 1000px;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>