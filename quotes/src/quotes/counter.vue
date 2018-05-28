<template>
  <h1>Counter  {{ count }} / {{ max }} </h1>
</template>

<script>
import { quotesSvc } from './service';
export default {
  data(){
    return {
      max: quotesSvc.max
    }    
  },
  computed:{
    count(){      
      return quotesSvc.quoteCount();
    }
  }
}
</script>

<style>
</style>
