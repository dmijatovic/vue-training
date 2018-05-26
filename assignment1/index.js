
new Vue({
  el:'#app',
  data:{
    name: "Dusan",
    age: 47,
    imgSrc: "https://wtop.com/wp-content/uploads/2017/07/ThinkstockPhotos-608516088.jpg"
  },
  methods:{
    ageTimes(x){
      return this.age * x;
    },
    randomNum(){
      return Math.random();
    }
  }
})