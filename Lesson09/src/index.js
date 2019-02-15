import Vue from 'vue'
import VueRouter from 'vue-router'
import "./index.less"
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import MainMenu from './components/main-menu'

const router = new VueRouter({
    mode:'history',
    routes:[
        { path:"/",components:{
            default:Home,
            mainMenu:MainMenu,
        } },
        { path:"/products",components:{
            default:Products,
            mainMenu:MainMenu,
        } },
        { path:"/about",components:{
            default:About,
            mainMenu:MainMenu,
        } },
    ]
})

Vue.use(VueRouter)

new Vue({
    el:"#app",
    router,
    template:`<div>
        <router-view name="mainMenu"></router-view>
        <router-view></router-view>
    </div>`,
})