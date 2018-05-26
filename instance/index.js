
let vm1 = new Vue({
  data:{
    title: "Vue instance",
    showParagraph: false
  },
  computed:{
    lowercaseTitle(){
      return this.title.toLowerCase();
    }
  },
  watch:{
    title(value){
      console.log("title changed...", value);
    }
  },
  methods:{
    show(){
      this.showParagraph = true;
      this.updateTitle("Vue instance title updated!");
      //I can access html element using ref
      this.$refs.firstBtn.innerText = "Changed by reference";
    },
    updateTitle(title){
      this.title = title;
    }
  }
});


//you can mount vue instance later
vm1.$mount('#app1');

//you can create additional props after initialization 
//BUT these will not be included in normal vue lifecycle
vm1.newProp = "New prop"

let vm2 = new Vue({
  el:"#app2",
  data:{
    title:"Second vue instance"
  },
  methods:{
    changeVue1(){
      vm1.title = "Title changed"
    }
  }
})

let vm3 = new Vue({
  template:"<h2>Hello from vue template</h2>"
})

//create instance
vm3.$mount();
//append child later on
document.getElementById('app3').appendChild(vm3.$el);