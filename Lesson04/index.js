const Layout =  {
    methods:{
        go(count){
            this.$router.go(count)
        }
    },
    template:`
        <div>
            <router-link to="/home">Home</router-link>
            <router-link to="/category">Category</router-link>
            <router-link to="/shopcart">Shopcat</router-link>
            <router-link to="/setting/123">Setting</router-link>
            <router-view></router-view>

            <button @click="go(-1)">go(-1)</button>
            <button @click="go(1)">go(1)</button>
        </div>
    `
}

const Home = {
    methods:{
        goToShopcart(){
            this.$router.push("shopcart")
        },
        goToSetting(){
            this.$router.push({
                name:"setting",
                params:{
                    userId:999,
                }
            })

            // this.$router.push("setting/888")
            // this.$router.push({
            //     path:"setting/888",
            // })
        },
        goToCategory(){
            this.$router.push({
                name:"category",
            })
        },
        goToCategoryReplace(){
            this.$router.replace({
                name:"category",
            })
        }
    },
    template:`
        <div>
            <h1>Home</h1>
            <button @click="goToShopcart">购物车</button>
            <button @click="goToSetting">设置页</button>
            <button @click="goToCategoryReplace">Category(replace)</button>
            <button @click="goToCategory">Category(push)</button>
        </div>
    `
}

const Category = {
    template:`
        <div>
            <h1>Category</h1>
        </div>
    `
}

const Shopcart = {
    template:`
        <div>
            <h1>Shopcart</h1>
        </div>
    `
}

const Setting = {
    computed:{
        userId(){
            console.log("this.$router->",this.$router)
            // return this.$router.params.userId;
            return this.$router.history.current.params.userId;
        }
    },
    template:`
        <div>
            <h1>Setting</h1>
            <h4>{{userId}}</h4>
        </div>
    `
}


const router = new VueRouter({
    routes:[
        { path:'/',component:Layout,
          children:[
            { path:'/home',component:Home, },
            { name:"category", path:'/category',component:Category, },
            { name:"shopcart", path:'/shopcart',component:Shopcart, },
            { name:"setting", path:'setting/:userId',component:Setting, },
          ]
        },
        
    ]
})

new Vue({
    el:'#app',
    router,
})