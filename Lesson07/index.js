const User2 = {
    template:`
        <div>User {{ $route.params.id }}</div>
    `
}

const User = {
    props:['id'],
    template:`
        <div>User {{ id }}</div>
    `
}


const SideBar = {
    props:['title'],
    template:`
        <div>User {{ title }}</div>
    `
}


const router = new VueRouter({
    routes:[
        { path:'/user/:id',component:User,props:true },
        { path:'/user2',component:User,props:{id:111} },
        { path:'/user3/:id',component:User,props:function(route){
            return {"id":route.params.id};
            }   
        },
        {
            path:"/specil/:id",components:{
                default:User,
                sidebar:SideBar
            },
            props:{
                default:{id:111},
                sidebar:{ title:"Hello" },
            }
        }
    ]
})


new Vue({
    el:'#app',
    router:router,
})