import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as joint from 'jointjs'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.prototype.$joint=joint;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
