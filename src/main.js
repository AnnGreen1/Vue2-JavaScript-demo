import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/index.scss'

require('./Mock')

store.subscribe((mutations, state) => {
  console.log('mutation改变后保存一次');
  sessionStorage.setItem('vuex', JSON.stringify(state))
})

// 为了防止刷新时vuex的数据丢失
if (sessionStorage.getItem("vuex")) {
  console.log('获取本地存储数据放到vuex里');
  store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem("vuex"))))
  sessionStorage.removeItem("vuex")
}
//在页面刷新时将vuex里的信息保存到sessionStorage里
// pagehide为了兼容ios
window.addEventListener("beforeunload", () => {
  console.log('刷新时保存数据');
  sessionStorage.setItem("vuex", JSON.stringify(store.getters))
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
