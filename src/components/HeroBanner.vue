<template>
    <div id="HeroBanner">
        <div class="inner-container align-to-outer-grid">
            <h1 class="h1 to-uppercase">free coffee</h1>
            <h1 class="h1 to-uppercase">is a tap away</h1>
            
            <p class="bodyText alternate catchLine-1">Join now to start earning Rewards</p>

            <a href="#" class="cylinder-button green" id="join-now-hero">
                <span class="menu-button-text alternate">Join now</span>
            </a>

            <p class="bodyText alternate catchLine-2">or <a href="#" class="underline">join in the app</a> for the best experience </p>
        </div>
    </div>
</template>

<script>
import alignToOuterGrid from '@/js/alignToOuterGrid.js';

export default {
    name: "HeroBanner",
    methods:{
        setHeight(){
            let navBar = document.getElementById('NavBar');
            let breadCrumb = document.getElementById('BreadCrumb');

            let navBarStyle = window.getComputedStyle(navBar);
            let breadCrumbStyle = window.getComputedStyle(breadCrumb);

            let navBarHeight = parseInt(navBarStyle.getPropertyValue('height'));
            let breadCrumbHeight = parseInt(breadCrumbStyle.getPropertyValue('height'));

            let heroBannerHeight = `${window.innerHeight - (navBarHeight + breadCrumbHeight + 25)}px`;
            let heroBanner = document.getElementById('HeroBanner');
            heroBanner.style.height = heroBannerHeight;
        }
    },
    mounted(){
        this.setHeight();
        window.addEventListener('resize',this.setHeight);

        alignToOuterGrid();
    }
}
</script>

<style lang="scss">
@use '../assets/scss/setting' as *;

#HeroBanner{
    background-image: url('../assets/img/starHeroImage.png');
    background-color: map-get($whites,"dark");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.inner-container{
    position: relative;
}
</style>

<style lang="scss" scoped>

.catchLine-1{
    margin-top: var(--spacing-normal);
    margin-bottom: var(--spacing-normal);
}

.catchLine-2{
    margin-top: var(--spacing-small);
}

.underline{
    text-decoration: underline;
}

#join-now-hero{
    font-size: 1.6em;
}
</style>  