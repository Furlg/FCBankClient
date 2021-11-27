import Vue from 'vue'
import App from './App.vue'
import router from './router'

import less from 'less'

import  store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入通用的请求发发送,并挂载
import sendRequest from "@/assets/comm/sendRequest";
Vue.prototype.ServiceName =sendRequest;

Vue.use(ElementUI)
Vue.use(less)

Vue.config.productionTip = false


new Vue({
  store,
  router,
  component:{App},
  template:'<App/>',
  render: h => h(App)
}).$mount('#app')















































