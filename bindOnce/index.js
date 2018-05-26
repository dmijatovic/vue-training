
new Vue({
  el:'#app',
  data:{
    inputLabel:"Type something below",
    outputLabel:"Here is what you typed :-)", 
    title: "intital variable value"
  },
  methods:{
    setTitle(e){
      this.title = e.target.value;  
    }
  }
})