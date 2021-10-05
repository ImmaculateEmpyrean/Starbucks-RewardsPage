<template>
     <div id="BreadCrumb"><h3 class="menu-button-text align-to-inner-grid">STARBUCKS® REWARDS</h3></div>
</template>

<script>
import alignToInnerGrid from '@/js/alignToInnerGrid.js';

export default {
    name:"BreadCrumb",
    mounted(){
        alignToInnerGrid();
        window.addEventListener("resize",alignToInnerGrid);
    }
}
</script>

<style lang="scss">
@use '../assets/scss/setting' as *;

#BreadCrumb{
    background-color: map-get($theme,"dark");
    color: map-get($whites,"light");
    height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
        position: relative;
    }
}
</style>