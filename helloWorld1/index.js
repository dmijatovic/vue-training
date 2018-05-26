
new Vue({
  el:'#app',
  data:{
    inputLabel:"Type something below",
    outputLabel:"Here is what you typed :-)", 
    title: ""
  },
  methods:{
    setTitle(e){
      this.title = e.target.value;  
    }
  }
})