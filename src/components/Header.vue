<template>
  <div class="flex justify-around items-center bg-blue-500 py-6 relative">
    <h2 class="text-3xl text-white font-bold">SHOP</h2>
    <nav>
        <ul class="flex justify-between text-white flex-1 gap-20">
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Perfume</a></li>
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Smartphones</a></li>
            <li class="cursor-pointer border-blue-500 border-b-2 py-2 hover:border-white transition-all"><a href="">Laptops</a></li>
        </ul>
    </nav>

    <div class="relative">
    <button @click="toggleCart" class="text-white border-2 px-5 py-2 border-white hover:text-blue-500 hover:bg-white transition-all relative">
      Cart
      <i class="fa-solid fa-cart-shopping pl-2"></i>
      <div v-if="cartProducts.length > 0" class="bg-red-500 rounded-full h-[25px] w-[25px] border-white border-2 text-white flex justify-center items-center text-xs font-bold absolute -top-3 -right-3">{{ cartNum }}</div>
    </button>

    
      <div v-if="showCart" class="absolute top-[60px]">
        <div class="absolute bg-white h-[50px] w-[50px] left-8 rotate-45 z-20"></div>
        <div class="absolute bg-white w-[400px] -left-72 z-20 pt-3  shadow-2xl">       
          <div  v-if="cartProducts.length > 0">
          <div v-for="cartProduct in cartProducts" class="mx-2 p-2 flex justify-between border-b-2 border-blue-500">
            <div class="flex flex-start gap-3 pb-3 ">
              <img class="h-12 w-12 object-contain" :src="cartProduct.images[0]" alt="Image"/>
              <div class="flex flex-col">
                <h3 class="text-md w-64 text-ellipsis whitespace-nowrap overflow-hidden uppercase"> {{cartProduct.title}} </h3>
                <p class="text-sm text-blue-500"> {{cartProduct.price}}€</p>
              </div>
            </div>
              <!-- <button class="bg-red-500 px-4 hover:bg-red-600"><i class="fa fa-trash text-white"></i></button> -->
              <button @click="$emit('removeProduct', cartProduct)" class="p-2"><i class="fa fa-trash text-xl text-red-500 hover:text-red-600"></i></button>
        
          </div>

          <div class="w-full">
            <h3 class="p-2 text-xl mb-3">Subtotal: <span class="text-blue-500 text-2xl">{{subtotal}}€</span></h3>
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

  <!-- <div v-if="showCart" class="absolute top-0 left-0 w-full h-max bg-black opacity-20 z-10"></div> -->

</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["cartNum", "cartProducts", "subtotal"])

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