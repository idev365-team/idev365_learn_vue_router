const Home = {
    methods:{
        jumpToA(){
            this.$router.push("/a")
        },
        jumpToB(){
            this.$router.push("/b")
        },
    },
    template:`
        <div>
            <h1>Home</h1>
            <button @click="jumpToA">JumpToA</button>
            <button @click="jumpToB">JumpToB</button>
        </div>
    `
}

const CompB = {
    template:`
        <div>
            <h1>CompB</h1>

        </div>
    `
}

const router = new VueRouter({
    routes:[
        { path:'/',component:Home },
        { path:'/b',component:CompB,alias:'/123' },
        { path:'/a',redirect:'/b' },
        { path:'/c',redirect:function(){return '/b'} },
    ]
})

new Vue({
    el:'#app',
    router,
})