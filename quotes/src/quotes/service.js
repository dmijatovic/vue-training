/**
 * Shared quotes service
 */
import Vue from 'vue';
export const quotesSvc = new Vue({
  data:{
    quotes:[],
    max: 10
  },  
  methods:{
    addQuote(quote){
      return new Promise((res,rej)=>{
        //debugger
        try{      
          if (this.quotes.length < this.max){
            this.quotes.push(quote);
            res(true);
          } else {
            rej("Maximum number of quotes reached! Delete first");
          }  
        }catch(e){
          rej(e);
        }              
      });      
    },
    deleteQuote(pos){
      debugger 
      let newQ = [
        ...this.quotes.slice(0, pos),
        ...this.quotes.slice(pos + 1)
      ];
      //update quote
      this.quotes = newQ;
      //return new data
      return newQ;
    },
    quoteCount(){
      return this.quotes.length;
    }
  }
});