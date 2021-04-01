<template>
  <hooper :itemsToShow="2" id="carousel_box">
    <slide class="slide">
      <img src="img/slider001.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider002.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider003.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider004.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider005.jpg" alt="">
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  }
};
</script>
<style>
#carousel_box {
margin:auto;
height:316px;
}
.slide {
  display:flex;
  justify-content:center;
  align-items:center;
}
.slide > img {
  width:90%;
  border:7px solid #c2e1ca;
  margin:auto;
}
</style>