<template>
  <div class="container">

    <quotes-counter></quotes-counter>

    <quotes-new></quotes-new>

    <quotes-overview></quotes-overview>

    <quotes-footer></quotes-footer>

  </div>
</template>

<script>
import quotesCounter from './quotes/counter.vue';
import quotesCreate from './quotes/create.vue';
import quotesFooter from './quotes/footer.vue';
import quotesOverview  from './quotes/overview.vue';

export default {
  components:{
    'quotes-counter':quotesCounter,
    'quotes-new': quotesCreate,
    'quotes-footer': quotesFooter,
    'quotes-overview': quotesOverview
  }
}
</script>
<style>
</style>
