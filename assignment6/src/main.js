import Vue from 'vue'
import App from './App.vue'

import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
//import ServerList from './ServerList.vue';

Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);

new Vue({
  el: '#app',  
  render: h => h(App)
})
