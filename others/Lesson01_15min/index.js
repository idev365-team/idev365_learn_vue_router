const Foo = { template: '<div>foo</div>' }
const Bar = { 
    computed:{
        username(){
            console.log(this.$route)
            return this.$route.query.username
        }
    },
    methods: {
        goBack () {
          window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        }
    },
    template: `
        <div>
            <p>username:{{username}}</p>
            <button @click="goBack">Go Back</button>
        </div>
    `
 }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]


class Home {
    
}
  
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    el:"#app",
    // template:"<h1>Easy Vue Js</h1>"
    router:router,
});
