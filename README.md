# Vuejs the complete guide - udemy training

This repo is based on following  [Vue.js training on Udemy](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview)


## Requirements

For the basic examples you need webserver to view examples. If you do not have web server you can install very lightone from npm

```
  # install simple web server globally 
  # note! use sudo on linux machines if needed
  npm i -g serve 

  # serve files from specific folder 
  serve << folderName >>

  #note! if you want to serve file from folder you are in use just 
  serve

```

## Sections

- helloWorld1: basic Vue.js
- helloWorld2: helloWorl from function using component data
- bindLink: v-bind directive example
- bindOnce: bind variable only once (initial value)
- innerHtml: innerHTML directive for loading html
- assignments (1 - 8): simple assigments 
- listenEvent: listen to button click events
- 2wayBind: 2way binding using v-model
- computedProps: use computed ad watch for properties based on other variables
- cssClass: attach classes interactivelly, use {}, compute or pass as variable
- conditionals: v-if en v-show
- loops: v-for
- monsterGame: first challenge assignment for using what we learned so far
- instance: multiple vue instances and the way to initialize
- lifecycle: lifecycle hooks
- vue-cli: first project created with vue cli
- slots: passing html content from parent into a child component. Note: styling (if scoped) can be handled both (in child or parent). Data interpolation and other vue operations are handled in the parent only, because code is in the parent and ONLY injected into child. You can split injected content in multiple slots using names (see example).
- dynamic components: using <component :is="componentName"> markup to indicate dynamical injection of an component. By default dynamic components are destroyed. To keep them alive wrap component in <keep-alive>. To know if component is active use additional lifecycle hooks: activated & deactivated.
- wonderfulQuotes: second vue project about quotes

## Vue cli

Project template types in cli

- simple: index.html & vuejs CDN import
- webpack-simple: basic webpack workflow without testing
- webpack: complete webpack workflow incl. testing
- browserify: two types using browserify
