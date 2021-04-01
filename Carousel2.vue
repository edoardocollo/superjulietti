<template>
  <hooper :itemsToShow="3" id="carousel_box2">
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
    <slide class="slide">
      <img src="img/slider006.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider007.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider008.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider009.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider010.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider011.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider012.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider013.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider014.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider015.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider016.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider017.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider018.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider019.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider020.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider021.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider022.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/slider023.jpg" alt="">
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
#carousel_box2 {
width:70%;
margin:auto;
height:240px;
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
