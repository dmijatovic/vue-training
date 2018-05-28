import Vue from 'vue'
import App from './App.vue'

export const dataSvc = new Vue({
  data:{
    servers:[
      { id: 1, status:'Normal' },
      { id: 2, status:'Changed' },
      { id: 3, status:'Abnormal' },
      { id: 4, status:'Unknown' },
      { id: 5, status:'Interessting' }
    ],
    selectedServer:{id: 1, status:'Normal'}
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
