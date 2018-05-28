<template>
<div class="container">
  <app-header></app-header>
  
  <hr>

  <server-list></server-list>  

  <hr>  
  
  <app-footer></app-footer>

</div>
</template>

<script>
//import local components
import ServerList from './ServerList.vue';
//export default class
export default {
  components:{
    'server-list': ServerList 
  }
}
</script>

<style>
</style>
