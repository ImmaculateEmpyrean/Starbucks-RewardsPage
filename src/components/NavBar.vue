<template>
<header id="NavBar">
    <nav class="top">

        <!-- start left portion of the navigation -->
        <ul class="left">
            <li>
                <a href="#">
                    <img :src="require('../assets/img/logo.svg')" alt="starbucks-logo" width="51" height="51"
                    id="starbucks-logo-main"
                    >
                </a>
            </li>
            <li>
                <a href="#" :v-if="!isPhone" class="menu-button">
                    <span class="menu-button-text to-uppercase">menu</span>
                </a>
            </li>
            <li>
                <a href="#" :v-if="!isPhone" class="menu-button">
                    <span class="menu-button-text to-uppercase">rewards</span>
                </a>
            </li>
            <li>
                <a href="#" :v-if="!isPhone" class="menu-button">
                    <span class="menu-button-text to-uppercase">gift cards</span>
                </a>
            </li>
        </ul>
        <!-- ended left portion of the navigation -->
        
        <!-- start right portion of the navigation -->
        <div class="right">
            <a href="">
                <i class="fas fa-map-marker-alt"></i>
                <span>Find a store</span>
            </a>
            <a href="#" class="cylinder-button white">Sign in</a>
            <a href="#" class="cylinder-button black">Join now</a>
        </div>
        <!-- ended right portion of the navigation -->

    </nav>

    <div class="bottom">
        <h3>STARBUCKS® REWARDS</h3>
    </div>

</header>
</template>

<script>
import breakpoints from '@/js/scssBreakpoints.js';

export default {
    name:"NavBar",
    computed:{
        isPhone(){
            return window.innerWidth < parseInt(breakpoints.forTabletPortraitUp.breakpoint);
        }
    }
}
</script>

<style lang="scss">
@use '../assets/scss/setting' as *;

.top{
    display: flex;
    justify-content: space-between;
}

.left{
    display: flex;
    position: relative;

    align-items: center;
    gap: var(--spacing-normal);
}


.menu-button{
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: var(--spacing-large);
    padding-bottom: var(--spacing-large);
}


#starbucks-logo-main{
    margin-right: var(--spacing-normal);
}
</style>