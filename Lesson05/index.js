const User = {
    computed:{
        userId(){
            console.log(this)
            console.log(this.$route)
            return this.$route.params.userId;
        }
    },
    template:`
        <div>
            User: {{ userId }}
        </div>
    
    `
}

const Home = {
    methods:{
        gotoUser(){
            this.$router.push({
                name:'user',params:{ userId:'666' }
            })
        },
        gotoUserReplace(){
            this.$router.replace({
                name:'user',params:{ userId:'666' }
            })
        },
    },
    template:`
        <div>
            <h1>Home</h1>
            <button @click="gotoUser">User</button>
            <router-link :to="{  name:'user',params:{ userId:'888' } }">User</router-link>

            <button @click="gotoUserReplace">User (replace)</button>
            <router-link :to="{  name:'user',params:{ userId:'888' } }" replace>User(replace)</router-link>
        </div>
    `
}

const router = new VueRouter({
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            name:'user',
            path:'/user/:userId',
            component:User
        }
    ]
})
new Vue({
    el:'#app',
    router,
})