<template>
    <div class="wrapper-center">
        <NavBar />
    </div>
    <BreadCrumb />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
export default {
  name: 'App',
  components:{
      NavBar,
      BreadCrumb
  }
}
</script>

<style lang="scss">
@use './assets/scss/setting' as *;
</style>
