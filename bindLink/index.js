
new Vue({
  el:'#app',
  data:{
    title: "Hello world from function",
    linkToSite: "https://google.com"
  },
  methods:{
    sayHello(){
      return this.title;
    },
    setTitle(e){
      this.title = e.target.value;  
    }
  }
})