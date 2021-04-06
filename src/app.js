import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.component('carousel', require('../Carousel.vue').default);
Vue.component('carousel2', require('../Carousel2.vue').default);
Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
import Carousel from '../Carousel.vue';
const routes = [
  { path: '/foo', component: Carousel },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
let app = new Vue({
  router,
  el: '#app',
  data:{

  },
});
