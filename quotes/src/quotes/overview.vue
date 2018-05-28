<template>
  <section class="quotes-overview">
    <h1>Overview</h1>
    <div class="col-md-12 flex-row">

      <div v-for="(quote, i) in quotes"
        class="single-quote" :key="i"
        @click="remove(i)">
        {{ quote }}
      </div>

    </div>
  </section>  
</template>

<script>
import { quotesSvc } from './service';
export default {
  /*data(){
    return {
      quotes: quotesSvc.quotes 
    }
  },*/
  computed:{
    //the quotes object need to be computed
    //because we remove/add items dynamically
    //when in data adding will work but removing
    //did not. Would this have relation with object reference? 
    quotes(){
      return quotesSvc.quotes;
    }
  },
  methods:{
    remove(pos){
      debugger 
      quotesSvc.deleteQuote(pos);
    }
  }
}
</script>

<style scoped>

.single-quote{
  border: 1px solid greenyellow;
  padding: 24px;  
}

.single-quote:hover{
  background-color: brown;
  color: #fff;
  cursor: not-allowed; 
}

</style>
