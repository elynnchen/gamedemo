<template>
    <div id="gameindex" class="gameindex">
        <div class="gameindex-cont"></div>
        <router-view></router-view>
        <div class="bottom-nav">
            <router-link to="/game/gameChees">井字棋</router-link>
         <!--   <router-link :to="{path:'/game/user', query:{id:'小明'}}">个人中心</router-link>-->
            <router-link :to="{name:'childrenUser', params:{id:'小明'}}">个人中心</router-link>

        </div>

    </div>
</template>
<script>
    export default{
        name: 'game',
        components: {  },

    }
</script>
<style>
.gameindex{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;


}
.gameindex-cont{flex: 1}
.bottom-nav{ height: 44px; line-height: 44px; background: #fff;color: #fff; display: flex; border-top:1px solid #ccc;}
.bottom-nav a{ flex:1; text-align: center;color: #333333; border-right:1px solid #999;}



.bottom-nav .router-link-active{border-top:2px solid #ff853d;color: #ff853d
}

</style>