import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap'
import './plugins/vue-notification'
import './plugins/font-awesome'
import './plugins/vue-select'
import './plugins/vue-slider'
import './plugins/vue-toggle-button'
import './plugins/ant-design-vue'
import './plugins/vue-drag-it-dude'
import './plugins/vue-datetime'
import './plugins/vue-sweetalert2'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')