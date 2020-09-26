import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import BootstrapVue from 'bootstrap-vue'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')
