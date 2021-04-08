<template>
  <hooper :settings="hooperSettings" id="carousel_box">
    <slide class="slide">
      <img src="img/recensione004_f1.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/recensione004_f2.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/recensione004_f3.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/recensione004_f4.jpg" alt="">
    </slide>

    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>

import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: false,
        wheelControl: false,
        breakpoints: {
         760: {
           centerMode: false,
           itemsToShow: 2
         },
         1200: {
           itemsToShow: 3,
           pagination: 'fraction'
         }
       }

      }
    };
  }
};
</script>
<style>
#carousel_box {
width:100%;
margin:auto;
height:240px;
background-color: #d4fec9;
margin: 0 20px;
}
.slide {
  display:flex;
  justify-content:center;
  align-items:center;
}
.slide > img {
  width: 90% ;
  border:7px solid #c2e1ca;
  margin:auto;
}
</style>
