<template>
    <div id="app" class="wgdesign">
        <div class="wgdesign-aside">
            <h1></h1>
            <ul>
                <router-link to="/game">小游戏</router-link>/
                <router-link to="/gameVfor">小游戏v-for</router-link>/
               <router-link to="/gameRebuild">主题结构</router-link>/
                <router-link to="/gameChees">主题开发</router-link>
            </ul>

        </div>
        <div class="wgdesign-main">

                <router-view></router-view>
            </div>

    </div>
</template>
<script>

    export default {
        name: 'app',
        components: {
        }
    }
</script>

<style>
.wgdesign{display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;}
.wgdesign-aside{background: #000; color: #fff;width: 100%;}
.wgdesign-aside a{color: #999;padding-right:10px;}
.wgdesign-aside a:hover{color: #fff;}
.wgdesign-main{flex:1; width: 100%;}


</style>
