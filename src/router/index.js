/*
 * @Descripttion: 
 * @version: 
 * @Author: QinJiaJun
 * @Date: 2020-11-21 00:01:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-21 00:08:28
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            name:'index',
            meta:{
                title:'index',
            },
            component:resolve => {require(['../components/index.vue'],resolve)},
        },
    ]
})

export default router