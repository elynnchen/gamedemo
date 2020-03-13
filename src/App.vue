<template>
    <div id="app" class="wgdesign">
        <div class="wgdesign-aside">
            <h1></h1>
            <nav>
            <ul>
                <router-link to="/begain"  tag="li">首页</router-link>
                <router-link to="/game" tag="li">小游戏</router-link>
            </ul>
             <button type="button" @click="handleRouter">个人中心</button>
            </nav>
        </div>
        <div class="wgdesign-main">
            <transition :name="transitionName" >
                <router-view></router-view>
            </transition>
       </div>
    </div>
</template>
<script>

    export default {
        name: 'app',
        components: { },
        data(){
            return{
                transitionName:"slide-left"
            }
        },
        methods:{
            handleRouter(){
                this.$router.push({
                    name: 'user',
                    params: {
                        id:'elynnchen',
                    }
                })
            }
        },
        watch: {
            "$route"(to, from) {
                var path = to.path;
                if(path.indexOf("/game")>=0){
                    this.transitionName = "slide-left"
                }else if(path.indexOf("/begain")>=0) {
                    this.transitionName = "slide-right"
                }
            }
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
.wgdesign-main{flex:1; width: 100%; position: relative;}

nav ul {display: flex;padding-right:20%}
nav ul li{flex: auto;line-height: 38px; border-right: 1px solid #333; text-align: center;}
nav button{position: absolute;right:10px; top:10px; background: white; color: #000;text-align: center;border-radius: 20px;padding:0 5px;font-size: 12px;}
nav .router-link-active{background: white;color: #333}

/*路由切换动画*/
.slide-left-enter, .slide-left-enter-to, .slide-left-leave-to,
.slide-right-enter, .slide-right-enter-to, .slide-right-leave-to {
    width: 100% !important;
    height: 100% !important;
    position: absolute !important;
}
.slide-left-enter,
.slide-right-leave-to{
    transform: translateX(100%);
}
.slide-right-enter,
.slide-left-leave-to {
    transform: translateX(-100%);
}
.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active{
    transition: all .5s ease;
}

</style>
