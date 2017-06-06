import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = {template:'<div>foo</div>'}
const Bar = {template:'<div>bar</div>'}

// 2. 定义路由
const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
]

//3.创建router实例
const router = new VueRouter({
    routes
})

//导出router
export default router
