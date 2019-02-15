const User = {
    computed:{
        username(){
            console.log(this.$route)
            return this.$route.params.username
        },
        
    },
    watch:{
        '$route'(to,from){
            console.log("-->to",to)
            console.log("-->from",from)
        }
    },
    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate-->",to,from,next)
        next()
    },
    template:`<div>
            <div>User Id:{{$route.params.uid}}</div>
            <div>User Name:{{ username }} </div>
        </div>`
}

const router =new VueRouter({
    routes:[
        { path:'/user/:username/:uid',component:User }
    ]
})

new Vue({
    el:'#app',
    router,
})