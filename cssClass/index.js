
new Vue({
  el:'#app',
  data:{
    isRed:false,
    isGreen:false,
    className:'green',
    color:'grey',
    width: 100
  },
  computed:{
    computeColor(){
      return {
        red: this.isRed,
        green: !this.isRed      
      }
    },
    applyStyle(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px' 
      }
    }
  }
});