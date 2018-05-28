<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server-list-item v-for="(server, pos) in servers"
        :id="server.id"
        :pos="pos"
        :status="server.status"
        :key="server.id"
        @showInfo="showInfo($event)">
      </app-server-list-item>
    </ul>
  </div>
</template>

<script>
//import services
import { dataSvc } from '../../main';
//import componentes
import Server from './Server.vue';
//export default 
export default{
  components:{
    'app-server-list-item': Server 
  }, 
  data(){
    return {
      //get servers from shared data service
      servers: dataSvc.servers
    }
  },
  methods:{
    /**
     * Listen to emit event from child component
     * this was one of the options - but we used others too
     */
    showInfo(pos){
      //debugger 
      //console.log("Show info for server... ", pos);
    }
  }
}
</script>

<style>
</style>
