new Vue({
  el: '#exercise',
  data: {
    value: 0,
    reseting: false,
  },
  computed:{
    result(){
      if (this.value<37){
        return 'not yet there';
      }else{
        return 'DONE!';
      }
    }
  },
  watch:{
    value(){
      if (this.reseting==false){
        setTimeout(()=>{
          console.log("reset value...");
          this.value = 0;
          this.reseting = false;
        }, 5000);
        this.reseting = true;
      }      
    }
  }
});