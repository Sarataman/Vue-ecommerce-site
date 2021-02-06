<template>
  <div id="app" class="container mt-5">
      <router-view
      :cart="cart" 
      :cartQty="cartQty" 
      :cartTotal="cartTotal"
      @delete="deleteItem"
      @add="addItem"
      @toggle="toggleSliderStatus" 
      :sliderStatus="sliderStatus" 
      :maximum.sync="maximum"
      :products="products"> 
      </router-view>
  </div>
</template>

<script>
import Checkout from "./containers/Checkout"
import Products from "./containers/Products";


export default {
  name: "App",
  components: {
      Checkout,
      Products
  },
  data: function () {
    return {
      maximum: 99,
      sliderStatus: true,
      cart: [],
      products: null,
    };
  },
  computed: {
    cartTotal: function () {
        let sum = 0;
        for ( let key in this.cart) {
            sum = sum + (this.cart[key].product.price * this.cart[key].qty)
        }
        return sum;
    },
    cartQty: function () {
        let qty = 0;
        for (let key in this.cart) {
            qty = qty + (this.cart[key].qty)
        }
        return qty;
    }
   },
  methods: {
      toggleSliderStatus: function () {
          this.sliderStatus = !this.sliderStatus;
      },
    addItem: function(product) {
        var whichProduct;
        var added = this.cart.filter(function(item, index) {
            if(item.product.id === Number(product.id)) {
                whichProduct = index;
                return true;
            }else {
                return false
            }
        });

        if(added.length) {
            this.cart[whichProduct].qty++
        }else {
            this.cart.push({product: product, qty: 1})
        }
    },
    deleteItem: function(id) {
        if(this.cart[id].qty>1) {
            this.cart[id].qty--;
        }else {
            this.cart.splice(id, 1);
        }
    }
  },
  mounted: function() {
    fetch('https://hplussport.com/api/products/order/price')
    .then(response => response.json())
    .then(data => {
        this.products = data;
    })
  },
};
</script>

<style>

</style>
