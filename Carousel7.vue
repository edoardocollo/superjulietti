<template>
  <hooper :itemsToShow="3" id="carousel_box">
    <slide class="slide">
      <img src="img/recensione005_f1.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/recensione005_f2.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/recensione005_f3.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/recensione005_f4.jpg" alt="">
    </slide>
    <slide class="slide">
      <img src="img/recensione005_f5.jpg" alt="">
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
