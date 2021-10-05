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
                <a href="#" class="menu-button">
                    <span class="menu-button-text to-uppercase inner-grid-start">menu</span>
                </a>
            </li>
            <li>
                <a href="#" class="menu-button">
                    <span class="menu-button-text to-uppercase">rewards</span>
                </a>
            </li>
            <li>
                <a href="#" class="menu-button">
                    <span class="menu-button-text to-uppercase">gift cards</span>
                </a>
            </li>
        </ul>
        <!-- ended left portion of the navigation -->
        
        <!-- start right portion of the navigation -->
        <ul class="right">
            <li>
                <a href="">
                    <i class="fas fa-map-marker-alt menu-button-text" style="margin-right:var(--spacing-small)"></i>
                    <span class="menu-button-text alternate">Find a store</span>
                </a>
            </li>
            
            <a href="#" class="cylinder-button white">
                <span class="menu-button-text alternate">Sign in</span>
            </a>
            <a href="#" class="cylinder-button black">
                <span class="menu-button-text alternate">Join Now</span>
            </a>
        </ul>
        <!-- ended right portion of the navigation -->

    </nav>

    

</header>
</template>

<script>
export default {
    name:"NavBar"
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

    align-items: center;
    gap: var(--spacing-normal);
}
.right{
    display: flex;
    position: relative;

    align-items: center;
    gap: var(--spacing-normal);
}


.menu-button{
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: var(--spacing-normal);
    padding-bottom: var(--spacing-normal);
}


#starbucks-logo-main{
    margin-right: var(--spacing-normal);
}

.cylinder-button{
    border: 1px solid black;
    border-radius: 15px;
    padding: var(--spacing-small) var(--spacing-normal);
}
</style>