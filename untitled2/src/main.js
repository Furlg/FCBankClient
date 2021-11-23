import Vue from 'vue'
import App from './App.vue'

import  store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入通用的请求发发送,并挂载
import sendRequest from "@/assets/comm/sendRequest";
Vue.prototype.ServiceName =sendRequest;

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
