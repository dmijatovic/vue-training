<template>
  <li class="list-group-item"
    @click="showInfo()">
    <span>Server id #{{ id }}</span>
    <!-- <span>Status: {{status}}</span> -->
  </li>
</template>

<script>

import { dataSvc } from '../../main';

export default {
  props:{
    id:Number,
    pos: Number,
    status: String 
  },
  methods:{
    showInfo(){
      debugger 
      //emit to parent
      this.$emit('showInfo', this.pos);
      //emit via service
      dataSvc.$emit('showServer', {
        id: this.id,
        status: this.status 
      });
    }
  }
}
</script>

<style>

</style>
