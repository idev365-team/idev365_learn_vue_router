/**
 * 从服务器获取Post文章的API
 * @param {*} id 
 * @param {*} callback 
 */
function getPost(id,callback){
    const err = null;

    const postDB = {
        '12':{
            title:"Vue Router中的过渡动效",
            body:"山地人为你免费讲解Vue Router全系列",
        },
        '13':{
            title:"Vue Router中数据获取",
            body:"山地人为你免费讲解Vue Router全系列",
        }
    }

    const post = {
        id:id,
        ...postDB[""+id],
    }
    setTimeout(()=>{
        callback(err,post);
    },1000)
}


const Post ={
    data(){
        return {
            loading:false,
            error: null,
            post: null,
        }
    },
    created(){
        console.log("Post--->created.")
        this.fetchData()
    },
    computed:{
        title(){
            if(this.post){
                return `课${this.post.id}.${this.post.title}`
            }else{
                return ""
            }
        }
    },
    methods:{
        fetchData(){
            this.error = this.post = null;
            this.loading = true;
            getPost(this.$route.params.id,(err,post)=>{
                this.loading = false;
                if(err){
                    this.error = err.toString()
                }else{
                    this.post = post
                }
            })
        }
    },
    template:`
        <div class="post">
            <router-link to="/">Home</router-link>
            <div class="loading" v-if="loading">
            Loading...
            </div>

            <div v-if="error" class="error">
            {{ error }}
            </div>

            <div v-if="post" class="content">
            <h2>{{ title }}</h2>
            <p>{{ post.body }}</p>
            </div>
        </div>
    `
}

const Home = {
    template:`
        <div>
            <router-link to="/post/12">课12.Vue Router中的过渡动效</router-link>
            <router-link to="/post/13">课13.Vue Router中数据获取</router-link>
        </div>
    `
}

const router = new VueRouter({
    routes:[
        { path:"/",component:Home },
        { path:"/post/:id",component:Post },
    ]
})

new Vue({
    el:'#app',
    router,
})