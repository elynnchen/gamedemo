
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
//引入相关组件
import game from './demo/game-0.vue'

//配置路由实例 路由表
const routes=[
    {name:"game", path:"/game", component:game},
];
export  default  new VueRouter({
    routes
})



