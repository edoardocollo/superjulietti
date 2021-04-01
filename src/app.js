import Vue from 'vue';
Vue.component('carousel', require('../Carousel.vue').default);
Vue.component('carousel2', require('../Carousel2.vue').default);


let app = new Vue({
  el: '#app',
  data:{

  },
});
