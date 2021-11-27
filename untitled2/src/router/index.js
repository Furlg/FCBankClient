
import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

//引入路由对应的组件
import ManagerHome from "@/pages/Manager/ManagerHome";
import ManagerRegister from "@/pages/Manager/ManagerRegister";
import LogIn from "@/pages/LogIn";

let router=  new Router({

    routes: [
        //登录页面
        {
            path: '/',
            name: LogIn,
            component: LogIn
        },
        {
            path: '/LogIn',
            name: LogIn,
            component: LogIn
        },
        {
            path: '/ManagerHome',
            name: ManagerHome,
            component:ManagerHome
        },


        {
            path: '/ManagerRegister',
            name: ManagerRegister,
            component:ManagerRegister
        },


],

mode: "history"

});
export default router