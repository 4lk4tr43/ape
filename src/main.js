import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

//noinspection JSUnresolvedVariable
import App from './App'

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
