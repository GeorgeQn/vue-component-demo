/*
 * @Descripttion: 
 * @version: 
 * @Author: QinJiaJun
 * @Date: 2020-11-20 23:47:09
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-21 00:17:42
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

// 第三方插件开始
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 第三方插件结束


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
