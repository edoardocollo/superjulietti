<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div class="carousel_card">1</div>
      <div class="carousel_card">2</div>
      <div class="carousel_card">3</div>
      <div class="carousel_card">4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script>
<style>
.carousel_card {
  height:200px;
  background-color:red;
}
</style>
