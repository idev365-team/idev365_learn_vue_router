const Foo = { template:`
    <div>
        <div>Foo</div>
        <router-view></router-view>
    </div>
` }
const Bar = { template:'<div>Bar</div>' }
const Login = { template:'<div>Login</div>' }

const router = new VueRouter({
    routes:[
        { 
            path:'/foo',
            component:Foo,
            children:[
                {
                    path:'bar',
                    component:Bar,
                    meta:{ requiresAuth:true }
                }
            ]
        },
        {
            path:"/login",
            component:Login
        }
    ]
})


const auth = {
    loggedIn(){
        return false;
    }
}

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requiresAuth)){
        if(!auth.loggedIn()){
            next({
                path:'/login',
                query:{
                    redirect:to.fullPath
                }
            })
        }else{
            next()
        }
    }else{
        next()
    }
})


new Vue({
    el:'#app',
    router,
})