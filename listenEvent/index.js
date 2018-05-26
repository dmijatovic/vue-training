
new Vue({
  el:'#app',
  data:{
    count:0,
    x:0,
    y:0
  },
  methods:{
    increment(step, $event){
      //console.log("Clicked")
      return this.count+=step;
      console.log("event..", e);
    },
    updateCoordinates(e){
      this.x = e.clientX;
      this.y = e.clientY; 
    },
    alertMe(){
      alert("You used enter or tab key");
    }
  }
})