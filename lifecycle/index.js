
new Vue({
  el:'#app',
  data:{
    title: "Lifecycle hooks"
  },
  methods:{
    destroy(){
      //destroy vue instance!
      this.$destroy();
    }
  },
  /**
   * Vue component lifecycle hooks!
   */
  beforeCreate(){
    console.log("beforeCreated()");
  },
  created(){
    console.log("created()");
  },
  beforeUpdate(){
    console.log("beforeUpdate()");
  },
  updated(){
    console.log("updated()");
  },
  beforeDestroy(){
    console.log("beforeDestroy()");
  },
  destroyed(){
    console.log("destroyed()");
  }
})