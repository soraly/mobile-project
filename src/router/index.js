import Vue from 'vue';
import VueRouter from 'vue-router'
import userCenter from '../components/usercenter.vue'
import home from '../components/home.vue'
Vue.use(VueRouter)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = {template:'<div>foo</div>'}
const Bar = {template:'<div>bar</div>'}

// 2. 定义路由
const routes = [
    {path:'', component: home},
    {path: '/home', component: home},
    {path: '/foo', component: Foo},
    {path: '/bar', component: userCenter}
]

//3.创建router实例
const router = new VueRouter({
    routes,
    components:{
        userCenter
    }
})

//导出router
export default router
