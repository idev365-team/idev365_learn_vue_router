const User = {
    template:`
        <div>
            <h1>User</h1>
            <div>
            <router-link to="/user/1001">1001</router-link>
            <router-link to="/user/1002">1002</router-link>
            </div>
            <router-view></router-view>
        </div>
    `
}

const UserDetail = {
    template:`
        <div>
            <h2>User Detail {{ $route.params.id }}</h2>
            <router-link to="profile">Profile</router-link>
            <router-link to="post">Post</router-link>
            <router-view></router-view>
        </div>
    `
}

const UserProfile = {
    template:`
        <div>
            <h3>This is UserProfile</h3>
            <router-view></router-view>
        </div>
    `
}


const UserPosts = {
    template:`
        <div>
            <h3>This is UserPosts</h3>
            <router-view></router-view>
        </div>
    `
}


const router = new VueRouter({
    routes:[
        {
            path:'/user',
            component:User,
            children:[
                { 
                    path:':id', 
                    component:UserDetail,
                    children:[
                        {
                            path:'profile',
                            component:UserProfile,
                        },
                        {
                            path:'post',
                            component:UserPosts
                        }
                    ]
                 }
            ]
        }
        
    ]
})

new Vue({
    el:'#app',
    router,
})