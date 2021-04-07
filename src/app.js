import Vue from 'vue';

Vue.component('carousel', require('../Carousel.vue').default);
Vue.component('carousel2', require('../Carousel2.vue').default);
Vue.component('carousel3', require('../Carousel3.vue').default);
Vue.component('carousel4', require('../Carousel4.vue').default);
Vue.component('carousel5', require('../Carousel5.vue').default);
Vue.component('carousel6', require('../Carousel6.vue').default);
Vue.component('carousel7', require('../Carousel7.vue').default);
Vue.component('carousel8', require('../Carousel8.vue').default);

let app = new Vue({
  el: '#app',
  data:{
    toggle:true,
    toggleFeedback:false,
    toggleContact:false,
    toggleMail:false,
    views:9990425.10,
  },
  methods:{
    toggleFunction: function(){
      this.toggle = !this.toggle;
      this.toggleFeedback = !this.toggleFeedback;
      window.scrollTo(0, 0);
    },
    toggleContactFunction: function(){
      this.toggle = !this.toggle;
      this.toggleContact = !this.toggleContact
      window.scrollTo(0, 0);
    },
    toggleMailFunction: function(){
      this.toggle = !this.toggle;
      this.toggleMail = !this.toggleMail
      window.scrollTo(0, 0);
    }
  },
  mounted(){
    let self = this;
    setInterval(function(){
      console.log('ciao');
      self.views = self.views + Math.random();
    }, 400);
  }
});
// Math.floor(Math.random() * (2000 - 900) ) + 900)
