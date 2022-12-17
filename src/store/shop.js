// stores/counter.js
import { defineStore } from 'pinia'
 
export const useShopStore = defineStore("shop", {

  state: () => ({
     cartProducts: [],
  }),

  actions: {
    addProduct(newProduct) {
      this.cartProducts.push(newProduct);
    },

    removeProduct(cartProduct) {
      const index = this.cartProducts.indexOf(cartProduct)
      this.cartProducts.splice(index, 1)
    },

    subtotal() {
      if (this.cartProducts.length > 0) {
        let acc = 0
        this.cartProducts.forEach((product) => acc += product.price)
        return acc
      } else {
        return 10
      }
    }
  },

});
