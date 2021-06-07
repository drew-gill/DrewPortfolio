import Vue from 'vue'
import ResumePage from './ResumePage.vue'
import vuetify from '@/plugins/vuetify'
import '@/assets/styling.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(ResumePage)
}).$mount('#app')
