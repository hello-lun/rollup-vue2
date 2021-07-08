// import Vue from 'vue';
// import { Button, Select } from 'element-ui';
import button from './button/button.vue';
import select from './select/select.vue';

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

export default function install(Vue) {
  Vue.component(button.name, button)
  Vue.component(select.name, select)
}