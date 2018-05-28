<template>

  <div class="col-xs-12 col-sm-6">
    <p>
      Server id: {{id}} <br/>
      Server status: {{status}}
    </p>
  </div>

</template>

<script>
//import shared data service
import { dataSvc } from '../../main';

export default {
  /*props: {
    id: Number,
    status: String
  },*/
  data(){
    return {
      //get reference from dataService
      id: dataSvc.selectedServer.id,
      status: dataSvc.selectedServer.status,
    }
  },
  //on component created
  created(){
    dataSvc.$on('showServer',this.listenForServerChange)
  },
  methods:{
    listenForServerChange(data){
      debugger 
      console.log("Show server...", data);
      
      //change local data
      this.id = data.id;
      this.status = data.status;

      //change central data
      //this does not change local data?!? why?
      //dataSvc.selectedServer.id = data.id;
      //dataSvc.selectedServer.status = data.status;

      console.log("Central data...", dataSvc.selectedServer);
    }
  }
};
</script>
    
<style>
</style>
