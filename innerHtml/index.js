
new Vue({
  el:'#app',
  data:{
    title: "Hello world from function",
    linkToSite: "https://google.com",
    myHtml:`
      <div>This is html code displayed using <b>v-html</b> directive on html element</div>
    `
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