<template>
    <div id="app" class="container mt-5">
        <h1>My Shop</h1>
        <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" 
            ></navbar>
        <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
        <product-list :maximum="maximum" :products="products" ></product-list>
  </div>

</template>

<script>
import Navbar from "../components/Navbar";
import PriceSlider from "../components/PriceSlider";
import ProductList from "../components/ProductList";

export default {
  name: "products",
  props: [
      "products",
      "maximum",
      "cart",
      "cartQty",
      "cartTotal",
      "sliderStatus",
      "sliderState"
  ],
  components: {
    Navbar,
    PriceSlider,
    ProductList,
  },
}
</script>
