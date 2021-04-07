<template>
  <hooper :settings="hooperSettings" >
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
        itemsToShow: 3,
        centerMode: false,
        wheelControl: false,
        autoPlay:true,
        playSpeed:2000,
      }
    };
  }
};
</script>
<style>
#carousel_box {
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
.hooper-next, .hooper-prev{
  /* display:flex;
  justify-content:center;
  align-items:center; */
  background:#2C5E53;
  height:24px;
  width:24px;
}
.hooper-next > svg, .hooper-prev > svg {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50% , -50%);

}
</style>
