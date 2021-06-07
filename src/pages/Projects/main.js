import Vue from 'vue'
import ProjectPage from './ProjectPage.vue'
import vuetify from '@/plugins/vuetify'
import '@/assets/styling.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(ProjectPage)
}).$mount('#app')
