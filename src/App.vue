<template>
    <div class="wrapper-center">
        <NavBar />
    </div>
    <BreadCrumb />
    <HeroBanner />
</template>

<script>
import alignToOuterGrid from '@/js/alignToOuterGrid.js';
import alignToInnerGrid from '@/js/alignToInnerGrid.js'; 

import NavBar from '@/components/NavBar.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';

import HeroBanner from '@/components/HeroBanner.vue';

export default {
  name: 'App',
  components:{
      NavBar,
      BreadCrumb,
      HeroBanner
  },
  mounted(){
      window.addEventListener('resize',alignToInnerGrid);
      window.addEventListener('resize',alignToOuterGrid);
  }
}
</script>

<style lang="scss">
@use './assets/scss/setting' as *;
</style>
