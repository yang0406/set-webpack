import Vue from 'Vue'
import App from './cell.vue'
import router from '../../router/cell'

/* eslint-disable no-new */
new Vue({
  // el: '#app', // 这里参考cell.html和cell.vue的根节点id，保持三者一致
  router,
  render: h => h(App)
}).$mount('#cell')
