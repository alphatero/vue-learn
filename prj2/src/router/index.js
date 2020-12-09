import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Login from '@/components/pages/login';
import Dashboard from '@/components/Dashboard';
import Product from '@/components/pages/Products';


Vue.use(VueRouter);

export default new VueRouter ({
    //mode: 'history', //這是讓連結使用html的方式但因為跟後端有關係所以不建議使用
    linkActiveClass: 'active', //這個就是讓nav的class可以運用active class
    routes: [
        {
            path: '*',
            redirect: 'login',
        },
        {
            name: 'Login',  //元件呈現的名稱
            path: '/login',  //對應的虛擬路徑
            component: Login,//對應的元件
        },
        {
            name: 'Dashboard',
            path: '/admin',
            component: Dashboard,
            children: [
                {
                    path: 'products',
                    name: 'Product',
                    component: Product,
                    meta: { requiresAuth: true },
                }
            ]
        }
    ]
});