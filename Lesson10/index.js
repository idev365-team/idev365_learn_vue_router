const Home = {
    template:`
        <div>
            <h1>Home</h1>
            <router-link to="/products">Products</router-link>
        </div>
    `
}
const Products = {
    beforeRouteEnter(to,from,next){
        console.log("beforeRouteEnter",to,from)
        next()
    },

    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate",to,from)
        next()
    },

    beforeRouteLeave(to,from,next){
        console.log("beforeRouteLeave2222",to,from)
        if(to.path==="/"){
            next()
        }else{
            next("/")
        }
    },
    methods:{
        goHome(){
            this.$router.push("/");
        }
    },
    template:`
        <div>
            <h1>Products</h1>
            <router-link to="/aboutme">AboutMe</router-link>
            <button @click="goHome">Home</button>
        </div>
    `
}
const AboutMe = {
    template:`
        <div>
            <h1>AboutMe</h1>
        </div>
    `
}

const Login = {
    template:`
        <div>
            <h1>Login</h1>
            <router-link to="/">Home</router-link>
        </div>
    `
}



const router = new VueRouter({
    routes:[
        { path:'/',component:Home},
        { path:'/products',component:Products},
        { path:'/aboutme',component:AboutMe },
        { path:'/login',component:Login}
    ]
});



new Vue({
    el:'#app',
    router,
})