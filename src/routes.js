
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
//引入相关组件

import game from './demo/game-index.vue'
import gameChees from './demo/game-chees.vue'
import user from './demo/user.vue'
import begain from './demo/game-begain.vue'
import test from './demo/test.vue'
import button from './demo/demo-button.vue'
import popoverEasy from './demo/demo-popover-easy.vue'
import popover from './demo/demo-popover.vue'

//引入步骤路由
import gamestep1 from './demo/gameStep/game-01'
import gamestep2 from './demo/gameStep/game-02'

//配置路由实例 路由表
const routes=[
    {name:"begain",path:"/begain", component:begain},
    {   name:"game",
        path:"/game",
        component:game,
        redirect:'/game/gameChees',// 重定向,默认显示
        children: [
            {name:"gameChees",path:"/game/gameChees", component:gameChees}  ,
            {name:"childrenUser",path:"/game/user/", component:user}  ,
                ]
    },
    {name:"user", path:"/user/:id", component:user}  ,
    {name:"test",path:"/test", component:test},
    {name:"button",path:"/button", component:button},
    {name:"popover",path:"/Popover", component:popover},
    {name:"popoverEasy",path:"/popoverEasy", component:popoverEasy},
    // 重定向,让默认打开的页面为gamechees页面
    {path: '/', redirect: '/begain', component:begain},

    //步骤路由
    {name:"game01",path:"/game01", component:gamestep1},
    {name:"game02",path:"/game02", component:gamestep2},

];


export  default  new VueRouter({
    routes
})



