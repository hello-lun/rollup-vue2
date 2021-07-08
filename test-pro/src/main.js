import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../../dist/assets/app.css';

import modlus from '../../dist/assets/app';
Vue.use(modlus)
// console.log(Button, 'modlus: ', modlus);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
