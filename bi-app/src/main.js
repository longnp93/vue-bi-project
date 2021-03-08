import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as joint from 'jointjs'
import titleMixin from './mixins/titleMixin'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.prototype.$joint=joint;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
Vue.mixin(titleMixin);
