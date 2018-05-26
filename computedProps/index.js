
new Vue({
  el:'#app',
  data:{
    count:0,
    count2:0
  },
  /**
   * functions to be executed only when some of variable of 
   * computation is changed. It is synchronous! for async use watch 
   */
  computed:{
    output(){
      console.log("computed function");
      return this.count > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  },
  /**
   * watch for variable change
   * computed is lighter but watch can handle async tasks
   */
  watch:{
    count(value){
      console.log("watch count...", value);
    }
  },
  /**
   * Methods are executed/recalculated on each DOM change
   */
  methods:{
    result(){
      console.log("method function");
      return this.count > 5 ? 'Greater 5' : 'Smaller than 5'
    },
    increment(step=1){
      //console.log("Clicked")
      return this.count+=step;
      console.log("event..", e);
    },
    decrement(step=1){
      this.count-=step;
    }
  }
})