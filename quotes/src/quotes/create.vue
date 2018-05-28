<template>
  <div class="create-quote">      
    <h1>Create</h1>

    <input name="new-quote" id="new-quote" cols="50" rows="3"
      v-on:keydown.enter="addQuote"
      v-model="quote"/>

    <button class="btn btn-default"
      :class="{disabled: quote.length===0}"
      @click="addQuote">Create Quote
    </button>
  </div>

</template>

<script>
import { quotesSvc } from './service';
export default {
  data(){
    return {
      quote: ""
    }
  },
  methods:{
    addQuote(){      
      //ignore if no quote text
      if (this.quote.length===0) return
      //add quote
      quotesSvc.addQuote(this.quote)
      .then((b)=>{
        //debugger
        if (b){
          //quote added so remove from input 
          this.quote = "";
        }
      }).catch((e)=>{
        alert("Failed: " + e);
      });
    }
  }
}
</script>

<style>

</style>
