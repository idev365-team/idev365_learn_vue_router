const MainMenu = {
    template:`
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/about">About</router-link>
        </div>
    `
}

const Home = {
    template:`
        <div>
            <h1>Home</h1>
        </div>
    `
}

const Products = {
    template:`
        <div>
            <h1>Products</h1>
        </div>
    `
}

const About = {
    template:`
        <div>
            <h1>About</h1>
        </div>
    `
}

const NotFoundComponent = {
    template:`
    <div>
        <h1>Sorry,Not Found!</h1>
    </div>
`
}


const router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '*', component: NotFoundComponent },
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

new Vue({
    el:'#app',
    router,
})