<template>
    <div id="app" class="wgdesign">
        <div class="wgdesign-aside">
            <h1></h1>
            <div>
            <router-link to="/game">小游戏</router-link>
            </div>

        </div>
        <div class="wgdesign-main">
            <div class="wgdesign-component">
                <router-view></router-view>
            </div>
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

.wgdesign-aside{position:absolute;width:180px; top:0;left:0;height:100%; background: #000; color: #fff;}
.wgdesign-aside a{color: #999;}
.wgdesign-aside a:hover{color: #fff;}
.wgdesign-aside>div{padding:50px 0 0 30px;}
.wgdesign-main{ margin-left:180px; }
</style>
