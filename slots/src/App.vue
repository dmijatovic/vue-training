<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <br>
      <button class="btn btn-primary" 
        @click="loadComponent('appBlue')">
        Load Blue Template
      </button>
      <button class="btn btn-success" @click="loadComponent('appGreen')">
        Load Green Template
      </button>
      <button class="btn btn-danger" @click="loadComponent('appRed')">
        Load Red Template
      </button>
      <hr>
     
      <app-blue v-if="activeComponent=='appBlue'">
        <h2>{{ slotTitle }}</h2>
        <p> {{ slotContent }}</p>
      </app-blue>
      <app-green v-if="activeComponent=='appGreen'">
        <h2 slot="title">{{ slotTitle }}</h2>
        <p slot="content"> {{ slotContent }}</p>
      </app-green>
      <app-red v-if="activeComponent=='appRed'">
        <h2>{{ slotTitle }}</h2>
        <p> {{ slotContent }}</p>
      </app-red>
    </div>
  </div>
</div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data() {
    return {
      activeComponent: "appBlue",
      slotTitle: "This is the title",
      slotContent: "This is the body of the content, bla ..."
    };
  },
  methods: {
    loadComponent(name) {
      this.activeComponent = name;
    }
  }
};
</script>

<style>
</style>
