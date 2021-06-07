import Vue from 'vue'
import HomePage from './HomePage.vue'
import vuetify from '@/plugins/vuetify'
import '@/assets/styling.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(HomePage)
}).$mount('#app')
